import { Accordion } from '@base-ui/react/accordion';

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    // hiddenUntilFound keeps closed answers in the HTML, so browser search
    // and search engines can read them.
    <Accordion.Root multiple hiddenUntilFound className="flex flex-col border-t border-line">
      {items.map((item) => (
        <Accordion.Item key={item.q} className="border-b border-line">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left text-[18px] leading-snug font-semibold text-ink md:text-[20px]">
              {item.q}
              <PlusIcon />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <p className="measure pb-6 text-ink-muted">{item.a}</p>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="size-4 shrink-0 transition-transform duration-200 group-data-panel-open:rotate-45"
    >
      <path d="M1 8h14M8 1v14" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
