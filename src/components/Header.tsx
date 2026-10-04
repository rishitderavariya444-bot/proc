import { useEffect, useState } from 'react';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import { Dialog } from '@base-ui/react/dialog';
import Logo from './Logo';
import { mainNav, quoteHref, site, whatsappHref, type NavGroup } from '../data/site';

interface Props {
  currentPath?: string;
  /** Sit transparently over a full-bleed hero until the page scrolls. */
  overlay?: boolean;
  /** Colour the logo's full stop with the page's accent. */
  accentStop?: boolean;
  whatsappMessage?: string;
}

const isCurrent = (href: string, path: string) =>
  href === path || (href !== '/' && path.startsWith(href + '/'));

const groupIsCurrent = (group: NavGroup, path: string) =>
  group.href ? isCurrent(group.href, path) : !!group.links?.some((l) => isCurrent(l.href, path));

const navText = 't-button text-ink no-underline';
const triggerCls =
  `${navText} flex h-10 items-center gap-1.5 rounded-tag px-3 hover:bg-concrete data-popup-open:bg-concrete aria-[current=page]:underline underline-offset-[6px] decoration-2`;

export default function Header({ currentPath = '/', overlay = false, accentStop = false, whatsappMessage }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Over a photo: dark theme, transparent. Otherwise: light theme, solid.
  const transparent = overlay && !scrolled;
  const theme = transparent ? 'dark' : 'light';

  return (
    <header
      data-theme={theme}
      data-scrolled={scrolled || undefined}
      className={[
        overlay ? 'fixed' : 'sticky',
        'inset-x-0 top-0 z-50 transition-colors duration-200',
        transparent ? 'bg-transparent' : 'bg-paper',
        scrolled ? 'shadow-[0_1px_0_var(--line)]' : '',
      ].join(' ')}
    >
      <a
        href="#main"
        className="t-button sr-only rounded-tag bg-ink px-4 py-3 text-paper focus:not-sr-only focus:absolute focus:top-3 focus:left-4"
      >
        Skip to content
      </a>
      <div className="container-site flex h-[72px] items-center justify-between gap-6 lg:h-20">
        <a href="/" className="text-ink" aria-label="Procuro India, home">
          <Logo className="h-[14px] w-auto lg:h-4" accentStop={accentStop} />
        </a>

        <NavigationMenu.Root className="hidden xl:block" aria-label="Main">
          <NavigationMenu.List className="flex items-center gap-1">
            {mainNav.map((group) => (
              <NavigationMenu.Item key={group.label}>
                {group.links ? (
                  <>
                    <NavigationMenu.Trigger
                      className={triggerCls}
                      aria-current={groupIsCurrent(group, currentPath) ? 'page' : undefined}
                    >
                      {group.label}
                      <NavigationMenu.Icon className="transition-transform duration-200 data-popup-open:rotate-180">
                        <Caret />
                      </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="w-max min-w-64 p-2 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0">
                      <ul className="flex flex-col">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <NavigationMenu.Link
                              href={link.href}
                              active={isCurrent(link.href, currentPath)}
                              data-vertical={link.vertical}
                              className="block rounded-tag px-3 py-2.5 text-[16px] leading-snug text-ink no-underline hover:bg-concrete data-active:font-semibold"
                            >
                              {link.label}
                              {link.vertical && <span className="text-accent">.</span>}
                            </NavigationMenu.Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  </>
                ) : (
                  <NavigationMenu.Link
                    href={group.href}
                    active={isCurrent(group.href!, currentPath)}
                    className={`${triggerCls} data-active:underline`}
                  >
                    {group.label}
                  </NavigationMenu.Link>
                )}
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>

          <NavigationMenu.Portal>
            <NavigationMenu.Positioner
              sideOffset={8}
              align="start"
              collisionPadding={16}
              className="z-50 h-(--positioner-height) w-(--positioner-width) transition-[top,left] duration-200 data-instant:transition-none"
            >
              <NavigationMenu.Popup
                data-theme="light"
                className="relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) overflow-hidden rounded-tag border border-line bg-paper text-ink transition-[opacity,width,height] duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0"
              >
                <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
              </NavigationMenu.Popup>
            </NavigationMenu.Positioner>
          </NavigationMenu.Portal>
        </NavigationMenu.Root>

        <div className="flex items-center gap-2">
          <a
            href={quoteHref}
            className={`t-button hidden min-h-11 items-center rounded-tag px-5 no-underline sm:inline-flex ${
              transparent ? 'bg-ink text-paper' : 'bg-ink text-paper hover:bg-ink/85'
            }`}
          >
            Get a quote
          </a>

          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger className={`${navText} flex h-11 items-center rounded-tag px-3 hover:bg-concrete xl:hidden`}>
              Menu
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Popup
                data-theme="light"
                className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-paper text-ink transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0"
              >
                <div className="container-site flex h-[72px] shrink-0 items-center justify-between">
                  <a href="/" className="text-ink" aria-label="Procuro India, home">
                    <Logo className="h-[14px] w-auto" accentStop={accentStop} />
                  </a>
                  <Dialog.Close className={`${navText} flex h-11 items-center rounded-tag px-3 hover:bg-concrete`}>
                    Close
                  </Dialog.Close>
                </div>
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <nav aria-label="Main" className="container-site flex flex-col gap-10 pt-6 pb-12">
                  {mainNav.map((group) =>
                    group.links ? (
                      <div key={group.label}>
                        <p className="t-small mb-3 text-ink-muted">{group.label}</p>
                        <ul className="flex flex-col gap-3">
                          {group.links.map((link) => (
                            <li key={link.href} data-vertical={link.vertical}>
                              <a
                                href={link.href}
                                aria-current={isCurrent(link.href, currentPath) ? 'page' : undefined}
                                className="text-[26px] leading-tight font-semibold text-ink no-underline aria-[current=page]:underline"
                                style={{ fontStretch: '115%' }}
                              >
                                {link.label}
                                {link.vertical && <span className="text-accent">.</span>}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <a
                        key={group.label}
                        href={group.href}
                        aria-current={isCurrent(group.href!, currentPath) ? 'page' : undefined}
                        className="text-[26px] leading-tight font-semibold text-ink no-underline aria-[current=page]:underline"
                        style={{ fontStretch: '115%' }}
                      >
                        {group.label}
                      </a>
                    ),
                  )}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={quoteHref}
                      className="t-button inline-flex min-h-12 items-center justify-center rounded-tag bg-ink px-6 text-paper no-underline"
                    >
                      Get a quote
                    </a>
                    <a
                      href={whatsappHref(whatsappMessage)}
                      target="_blank"
                      rel="noopener"
                      className="t-button inline-flex min-h-12 items-center justify-center rounded-tag border border-ink px-6 text-ink no-underline"
                    >
                      Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                  <div className="t-small text-ink-muted">
                    <a href={`mailto:${site.email}`} className="block text-ink">{site.email}</a>
                    <a href={site.phoneHref} className="block text-ink">{site.phone}</a>
                  </div>
                </nav>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

function Caret() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="block">
      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
