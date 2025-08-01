import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/locations', label: 'Locations' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <header className="bg-secondary shadow">
      <div className="container flex items-center justify-between py-4 text-white">
        <Link href="/">
          <a className="flex items-center space-x-3">
            <Image src="/No-circle-words.png" alt="The College Movers logo" width={40} height={40} />
            <span className="font-semibold text-xl hidden sm:block">The College Movers</span>
          </a>
        </Link>
        <button
          className="md:hidden text-2xl"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <nav className={`${open ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            {navItems.map(({ href, label }) => (
              <li key={href} className="mb-2 md:mb-0">
                <Link href={href}>
                  <a
                    className={`transition-colors font-medium ${
                      router.pathname === href ? 'text-primary font-semibold' : 'text-white hover:text-primary'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}