import { useCallback, useState } from 'react';
import { Dialog } from '@base-ui/react/dialog';

export interface GalleryImage {
  /** Image URL. Omit to show a placeholder panel. */
  src?: string;
  alt: string;
  caption?: string;
}

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const count = images.length;

  const step = useCallback(
    (by: number) => setIndex((i) => (i === null ? i : (i + by + count) % count)),
    [count],
  );


  const current = index === null ? null : images[index];

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        {images.map((img, i) => (
          <li key={i} className={i === 0 ? 'col-span-2 row-span-2 md:col-span-2' : ''}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="block h-full w-full text-left"
              aria-label={`Open image ${i + 1} of ${count}: ${img.alt}`}
            >
              <Frame img={img} className={i === 0 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'} />
            </button>
          </li>
        ))}
      </ul>

      <Dialog.Root open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-[60] bg-black transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0" />
          <Dialog.Popup
            data-theme="dark"
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') step(1);
              if (e.key === 'ArrowLeft') step(-1);
            }}
            className="fixed inset-0 z-[61] flex flex-col bg-paper text-ink transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0"
          >
            <div className="container-site flex h-[72px] shrink-0 items-center justify-between">
              <Dialog.Title className="t-small text-ink-muted">
                {index !== null && `${index + 1} of ${count}`}
              </Dialog.Title>
              <Dialog.Close className="t-button flex h-11 items-center rounded-tag px-3 text-ink hover:bg-concrete">
                Close
              </Dialog.Close>
            </div>
            {current && (
              <figure className="container-site flex min-h-0 flex-1 flex-col gap-4 pb-4">
                <div className="flex min-h-0 flex-1 items-center justify-center">
                  <Frame img={current} large className="h-full max-h-full w-full" />
                </div>
                {current.caption && <figcaption className="t-small text-ink-muted">{current.caption}</figcaption>}
              </figure>
            )}
            <div className="container-site flex shrink-0 justify-between gap-3 pb-6">
              <button
                type="button"
                onClick={() => step(-1)}
                className="t-button flex min-h-12 items-center rounded-tag border border-ink px-6 text-ink hover:bg-ink hover:text-paper"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="t-button flex min-h-12 items-center rounded-tag border border-ink px-6 text-ink hover:bg-ink hover:text-paper"
              >
                Next
              </button>
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

function Frame({ img, className = '', large = false }: { img: GalleryImage; className?: string; large?: boolean }) {
  if (img.src) {
    return (
      <img
        src={img.src}
        alt={img.alt}
        loading={large ? 'eager' : 'lazy'}
        className={`${className} ${large ? 'object-contain' : 'object-cover'}`}
      />
    );
  }
  return (
    <div className={`flex items-end bg-concrete p-4 text-ink-muted ${className}`}>
      <span className="t-small">Photo to come: {img.alt}</span>
    </div>
  );
}
