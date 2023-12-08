'use client';
import { useState } from 'react';
import { ModeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { MenuIcon, MoveRightIcon } from 'lucide-react';

export function Header({ navLinks = links }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-b-muted bg-background">
      <nav className="container mx-auto  flex w-full items-center justify-between bg-background px-6 py-4">
        <a href="/" className="py rounded-[22px]  bg-secondary px-6 py-2  ">
          <Logo />
        </a>
        <Navigation navLinks={navLinks} />
        <Navigation mobile navLinks={navLinks} />
      </nav>
    </header>
  );
}

function Logo() {
  return <img src="/images/logo2.png" width={75} height={50} alt="logo" />;
}

const links: NavLink[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Who We Are',
    href: '/bout',
  },
  {
    title: 'Our Services',
    href: '/services',
  },
  {
    title: 'Power Class',
    href: '/power-class',
  },
  {
    title: 'Contact Us',
    href: '#contact',
    button: true,
  },
];

function Navigation({ mobile = false, navLinks = [] }: NavigationProps) {
  const [mobileNavigationOpened, setMobileNavigationOpened] = useState(false);

  const navClassName = ` text-base bg-background space-x-2
    ${
      mobile
        ? `transition transform -right-2/3 fixed top-0 z-20 py-4 pb-7 w-2/3 overflow-y-auto py-4 sm:hidden ${
            mobileNavigationOpened ? '-translate-x-full shadow-2xl' : ''
          }`
        : 'hidden sm:flex'
    }
  `;
  const navListClassName = `
    flex
    ${mobile ? 'flex-col space-y-2 w-full ' : 'items-center gap-12'}
  `;
  const navListItemClassName = `
    group relative
    ${mobile ? 'w-full overflow-x-visible text-right' : ''}
  `;
  const navListLinkClassName = mobile
    ? 'mx-4 text-black dark:text-white rounded-[20px]'
    : '';

  const closeMobileNavigation = () => setMobileNavigationOpened(false);

  return (
    <>
      {mobile && (
        <div className="flex gap-2 md:hidden ">
          <ModeToggle />
          <button
            className="block text-slate-900  dark:text-slate-50 sm:hidden"
            onClick={() => setMobileNavigationOpened(true)}
            title="Open navigation menu"
          >
            <MenuIcon />
          </button>
        </div>
      )}

      {mobile && mobileNavigationOpened && (
        <div
          className="fixed right-0 top-0 z-10 h-full w-full opacity-70 dark:opacity-90 sm:hidden"
          onClick={closeMobileNavigation}
        ></div>
      )}

      <nav className={navClassName}>
        <ul className={navListClassName}>
          {mobile && (
            <li className="text-right">
              <button
                className="px-6 py-2  text-slate-900 dark:text-slate-50"
                onClick={closeMobileNavigation}
              >
                <MoveRightIcon />
              </button>
            </li>
          )}
          {navLinks.map(({ title, href, button }) => (
            <li
              className={navListItemClassName}
              key={href}
              onClick={closeMobileNavigation}
            >
              {button ? (
                <Button
                  variant={'outline'}
                  className={`rounded-[20px] ${mobile && 'mx-4'}`}
                >
                  <a href={href}>{title}</a>
                </Button>
              ) : (
                <NavLink
                  className={navListLinkClassName}
                  mobile={mobile}
                  href={href}
                >
                  {title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className="max-sm:hidden">
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}

function NavLink({ children, className, mobile, href }: NavLinkProps) {
  return (
    <a
      className={`
        block whitespace-nowrap px-2 py-2 text-sm no-underline transition hover:font-bold hover:text-slate-900 dark:hover:text-slate-50
        ${mobile ? 'text-slate-900 dark:text-slate-50' : 'text-slate-400'}
        ${className}
      `}
      href={href}
    >
      {children}
    </a>
  );
}

interface NavLink {
  title: string;
  href: string;
  children?: NavLink[];
  button?: boolean;
}

interface NavigationProps {
  mobile?: boolean;
  navLinks?: NavLink[];
}

interface NavLinkProps extends React.HTMLProps<HTMLLinkElement> {
  mobile?: boolean;
}

interface HeaderProps {
  navLinks?: NavLink[];
}
