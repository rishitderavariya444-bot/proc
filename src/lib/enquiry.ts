// Server-side validation and email formatting for enquiry forms. Field rules
// come from src/data/forms.ts so the browser and the server agree.

import { forms, type FormDefinition, type FormId } from '../data/forms';

const MAX_LENGTH = 5000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[0-9][0-9 ]{6,}$/;

export type FieldErrors = Record<string, string>;

export interface ParsedEnquiry {
  form: FormDefinition;
  values: { name: string; label: string; value: string }[];
  replyTo?: string;
}

export function isFormId(id: unknown): id is FormId {
  return typeof id === 'string' && Object.hasOwn(forms, id);
}

export function parseEnquiry(form: FormDefinition, data: FormData): { ok: true; enquiry: ParsedEnquiry } | { ok: false; errors: FieldErrors } {
  const errors: FieldErrors = {};
  const values: ParsedEnquiry['values'] = [];

  for (const field of form.fields) {
    const raw = data.get(field.name);
    const value = typeof raw === 'string' ? raw.trim() : '';

    if (!value) {
      if (field.required) errors[field.name] = `Enter ${field.label.charAt(0).toLowerCase()}${field.label.slice(1)}.`;
      continue;
    }
    if (value.length > MAX_LENGTH) {
      errors[field.name] = `Keep this under ${MAX_LENGTH.toLocaleString('en-IN')} characters.`;
      continue;
    }
    if (field.type === 'email' && !EMAIL.test(value)) {
      errors[field.name] = 'Enter an email address in the format name@company.com.';
      continue;
    }
    if (field.type === 'tel' && !PHONE.test(value)) {
      errors[field.name] = 'Enter a phone number using digits, spaces and an optional +, for example +91 98201 80267.';
      continue;
    }
    if (field.type === 'select' && field.options && !field.options.includes(value)) {
      errors[field.name] = 'Choose one of the options.';
      continue;
    }
    values.push({ name: field.name, label: field.label, value });
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  const replyTo = values.find((v) => v.name === 'email')?.value;
  return { ok: true, enquiry: { form, values, replyTo } };
}

const verticalNames: Record<string, string> = {
  build: 'Build',
  minerals: 'Minerals',
  stone: 'Stone',
  source: 'Source',
};

/** Subject carries the form name and vertical (docs/SITEMAP.md "Forms"). */
export function subjectFor({ form, values }: ParsedEnquiry) {
  const formName = form.title.replace(/\.$/, '');
  const vertical = form.vertical ? verticalNames[form.vertical] : form.id === 'supplier' ? 'Suppliers' : 'General';
  const who = ['name', 'company'].map((n) => values.find((v) => v.name === n)?.value).filter(Boolean).join(', ');
  return `Website: ${formName} (${vertical})${who ? ` from ${who}` : ''}`;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function bodyFor(enquiry: ParsedEnquiry, page: string) {
  const rows = enquiry.values;
  const text = [...rows.map((r) => `${r.label}: ${r.value}`), '', `Sent from: ${page}`].join('\n');
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
${rows
  .map(
    (r) =>
      `<tr><th align="left" valign="top" style="border-bottom:1px solid #ddd">${escapeHtml(r.label)}</th><td style="border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(r.value)}</td></tr>`,
  )
  .join('\n')}
</table>
<p style="font-family:Arial,sans-serif;font-size:12px;color:#555">Sent from ${escapeHtml(page)}</p>`;
  return { text, html };
}
