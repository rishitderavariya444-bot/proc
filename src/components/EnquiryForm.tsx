import { useRef, useState } from 'react';
import { actions, isInputError } from 'astro:actions';
import { Form } from '@base-ui/react/form';
import { Field } from '@base-ui/react/field';
import { Select } from '@base-ui/react/select';
import type { FormDefinition, FormField } from '../data/forms';
import { site, whatsappHref } from '../data/site';

interface Props {
  form: FormDefinition;
  /** Show the form's title as a heading. */
  showTitle?: boolean;
}

const inputCls =
  'w-full rounded-tag border border-line-strong bg-paper px-3.5 py-3 text-[17px] text-ink placeholder:text-ink-muted focus:outline-2 focus:outline-offset-0 focus:outline-ink data-invalid:border-[#B42318] data-invalid:border-2';
const labelCls = 't-small font-semibold text-ink';
const errorCls = 't-small text-[#B42318] [[data-theme=dark]_&]:text-[#FDA29B]';

type Status = 'idle' | 'sending' | 'sent' | 'failed';

export default function EnquiryForm({ form, showTitle = false }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  async function submit() {
    const formElement = formRef.current;
    if (!formElement) return;
    setStatus('sending');
    setErrors({});
    try {
      const { data, error } = await actions.enquiry(new FormData(formElement));
      if (error) {
        if (isInputError(error)) setErrors(Object.fromEntries(Object.entries(error.fields).map(([k, v]) => [k, v?.[0] ?? ''])));
        setStatus('failed');
        return;
      }
      if (data && !data.ok) {
        setErrors(data.errors);
        setStatus('idle');
        return;
      }
      setStatus('sent');
    } catch (err) {
      console.error('Enquiry failed', err);
      setStatus('failed');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-tag border border-line p-6 lg:p-8">
        <p className="t-h3">{form.confirmation}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="t-button mt-6 inline-flex min-h-12 items-center rounded-tag border border-ink px-6 text-ink hover:bg-ink hover:text-paper"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <Form
      className="flex flex-col gap-8"
      aria-label={form.title.replace(/\.$/, '')}
      errors={errors}
      ref={formRef}
      onFormSubmit={() => {
        submit();
      }}
    >
      {showTitle && (
        <h2 className="t-h2">
          {form.title.replace(/\.$/, '')}
          <span className="text-accent">.</span>
        </h2>
      )}
      <input type="hidden" name="form_id" value={form.id} />
      {form.vertical && <input type="hidden" name="vertical" value={form.vertical} />}
      {/* Spam trap: hidden from people and screen readers, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        {form.fields.map((field) => (
          <FieldRow key={field.name} field={field} />
        ))}
      </div>

      <p className="t-small text-ink-muted">Fields marked optional can be left blank.</p>

      {status === 'failed' && (
        <div role="alert" className="rounded-tag border-2 border-[#B42318] p-5 [[data-theme=dark]_&]:border-[#FDA29B]">
          <p className="font-semibold">Your message didn't send.</p>
          <p className="t-small mt-1 text-ink-muted">
            Please try again. If it still doesn't work, email{' '}
            <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
              {site.email}
            </a>{' '}
            or{' '}
            <a href={whatsappHref()} target="_blank" rel="noopener" className="text-ink underline underline-offset-4">
              message us on WhatsApp
            </a>
            .
          </p>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          aria-disabled={status === 'sending'}
          className="t-button inline-flex min-h-12 items-center justify-center rounded-tag bg-accent px-8 text-on-accent hover:brightness-110 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending' : form.submit}
        </button>
      </div>
    </Form>
  );
}

function FieldRow({ field }: { field: FormField }) {
  const wide = field.wide || field.type === 'textarea';
  const label = (
    <>
      {field.label}
      {!field.required && <span className="font-normal text-ink-muted"> (optional)</span>}
    </>
  );
  const missing =
    field.type === 'select' ? `Choose an option for ${lower(field.label)}.` : `Enter ${article(field)}${lower(field.label)}.`;

  if (field.type === 'select') {
    const items = field.options!.map((o) => ({ label: o, value: o }));
    return (
      <Field.Root name={field.name} className={`flex flex-col gap-2 ${wide ? 'sm:col-span-2' : ''}`}>
        <Select.Root name={field.name} items={items} required={field.required}>
          <Select.Label className={labelCls}>{label}</Select.Label>
          <Select.Trigger className={`${inputCls} flex items-center justify-between gap-3 text-left`}>
            <Select.Value className="data-placeholder:text-ink-muted" placeholder="Choose one" />
            <Select.Icon>
              <svg viewBox="0 0 10 10" className="size-2.5" aria-hidden="true">
                <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Positioner className="z-[70] outline-none" sideOffset={4} alignItemWithTrigger={false}>
              <Select.Popup
                data-theme="light"
                className="max-h-(--available-height) min-w-(--anchor-width) overflow-y-auto rounded-tag border border-line-strong bg-paper py-1 text-ink outline-none"
              >
                <Select.List>
                  {items.map((item) => (
                    <Select.Item
                      key={item.value}
                      value={item.value}
                      className="flex cursor-default items-center justify-between gap-4 px-3.5 py-2.5 text-[16px] outline-none select-none data-highlighted:bg-concrete data-selected:font-semibold"
                    >
                      <Select.ItemText>{item.label}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.List>
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>
        <Field.Error className={errorCls} match="valueMissing">
          {missing}
        </Field.Error>
      </Field.Root>
    );
  }

  return (
    <Field.Root name={field.name} className={`flex flex-col gap-2 ${wide ? 'sm:col-span-2' : ''}`}>
      <Field.Label className={labelCls}>{label}</Field.Label>
      {field.type === 'textarea' ? (
        <Field.Control
          required={field.required}
          render={<textarea rows={4} />}
          className={`${inputCls} min-h-32 resize-y`}
        />
      ) : (
        <Field.Control
          type={field.type}
          required={field.required}
          autoComplete={field.autoComplete}
          inputMode={field.type === 'number' ? 'decimal' : undefined}
          min={field.type === 'number' ? 0 : undefined}
          step={field.type === 'number' ? 'any' : undefined}
          pattern={field.type === 'tel' ? '\\+?[0-9][0-9 ]{6,}' : undefined}
          className={inputCls}
        />
      )}
      <Field.Error className={errorCls} match="valueMissing">
        {missing}
      </Field.Error>
      {field.type === 'email' && (
        <Field.Error className={errorCls} match="typeMismatch">
          Enter an email address in the format name@company.com.
        </Field.Error>
      )}
      {field.type === 'tel' && (
        <Field.Error className={errorCls} match="patternMismatch">
          Enter a phone number using digits, spaces and an optional +, for example +91 98201 80267.
        </Field.Error>
      )}
      {field.type === 'number' && (
        <>
          <Field.Error className={errorCls} match="badInput">
            Enter a number, for example 5 or 2.5.
          </Field.Error>
          <Field.Error className={errorCls} match="rangeUnderflow">
            Enter a quantity of 0 or more.
          </Field.Error>
        </>
      )}
    </Field.Root>
  );
}

const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
const article = (f: FormField) => {
  if (['name', 'company', 'email', 'phone'].includes(f.name)) return 'your ';
  if (f.type === 'date') return 'a ';
  return 'the ';
};
