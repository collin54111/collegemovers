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
    <header className="bg-white shadow">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <a className="flex items-center space-x-3">
            <Image src="/No-circle-words.png" alt="The College Movers logo" width={40} height={40} />
            <span className="font-semibold text-xl text-primary hidden sm:block">The College Movers</span>
          </a>
        </Link>
        <button
          className="md:hidden text-2xl text-primary"
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
                    className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                      router.pathname === href ? 'text-primary font-semibold' : ''
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