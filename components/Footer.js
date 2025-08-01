import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 py-10 mt-8">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold mb-3">About Us</h4>
          <p className="text-sm text-gray-600">
            The College Movers is a student‑run moving company helping students and
            residents relocate with ease. Our mission is to make moving
            stress‑free and affordable while giving back to our communities.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/">
                <a className="hover:text-primary">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="hover:text-primary">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/locations">
                <a className="hover:text-primary">Locations</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-primary">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:text-primary">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <i className="fas fa-phone mr-2 text-primary"></i>
              (555) 123‑4567
            </li>
            <li>
              <i className="fas fa-envelope mr-2 text-primary"></i>
              info@thecollegemovers.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
              Serving college towns across IA, SC, NC, FL &amp; TX
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-8">
        © {year} The College Movers. All rights reserved.
      </p>
    </footer>
  );
}