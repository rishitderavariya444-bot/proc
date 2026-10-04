import { logoLetters, logoStop, logoViewBox } from '../data/logo';

interface Props {
  className?: string;
  /** Colour the full stop with the page's vertical accent. */
  accentStop?: boolean;
  /** Vertical lockup: name shown beside the wordmark, e.g. "Stone". */
  lockup?: string;
  title?: string;
}

export default function Logo({ className, accentStop = false, lockup, title = 'Procuro' }: Props) {
  const mark = (
    <svg
      viewBox={logoViewBox}
      role="img"
      aria-label={lockup ? `${title} ${lockup}` : title}
      className={lockup ? 'block h-full w-auto' : `block ${className ?? ''}`}
    >
      <path fill="currentColor" fillRule="evenodd" d={logoLetters} />
      <path fill={accentStop ? 'var(--accent)' : 'currentColor'} d={logoStop} />
    </svg>
  );
  if (!lockup) return mark;
  return (
    <span className={`inline-flex items-end gap-[0.6em] ${className ?? ''}`}>
      {mark}
      <span aria-hidden="true" className="relative top-[0.12em] leading-none font-semibold" style={{ fontStretch: '125%' }}>
        {lockup}
      </span>
    </span>
  );
}
