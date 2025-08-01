import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Head>
        <title>Moving Services | The College Movers</title>
        <meta
          name="description"
          content="Explore our moving services including packing, loading, assembly, storage and junk removal. We serve college towns across IA, SC, NC, FL and TX."
        />
        <link rel="canonical" href="https://thecollegemovers.com/services" />
      </Head>
      <section className="bg-primary text-white py-16 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Our Moving Services</h1>
          <p className="mb-8 text-lg">Comprehensive solutions for students and residents.</p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-box-open text-primary text-3xl mb-4"></i>
              <h2 className="text-xl font-semibold mb-2">Packing &amp; Unpacking</h2>
              <p className="text-sm text-gray-600">
                Let us pack your belongings securely and unpack them in your new
                space so you can focus on what matters.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-dolly text-primary text-3xl mb-4"></i>
              <h2 className="text-xl font-semibold mb-2">Loading &amp; Unloading</h2>
              <p className="text-sm text-gray-600">
                Our strong movers handle the heavy lifting, loading and
                unloading your items quickly and safely.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-couch text-primary text-3xl mb-4"></i>
              <h2 className="text-xl font-semibold mb-2">Furniture Assembly</h2>
              <p className="text-sm text-gray-600">
                We disassemble and reassemble furniture, ensuring nothing is
                damaged in the process.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-road text-primary text-3xl mb-4"></i>
              <h2 className="text-xl font-semibold mb-2">Local &amp; Long‑Distance</h2>
              <p className="text-sm text-gray-600">
                From quick campus moves to long‑distance relocations, we’ve got
                the experience you need.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-warehouse text-primary text-3xl mb-4"></i>
              <h2 className="text-xl font-semibold mb-2">Storage Solutions</h2>
              <p className="text-sm text-gray-600">
                We partner with secure storage facilities to keep your
                possessions safe between moves.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-recycle text-primary text-3xl mb-4"></i>
              <h2 className="text-xl font-semibold mb-2">Junk Removal</h2>
              <p className="text-sm text-gray-600">
                Get rid of unwanted items during your move and let us donate or
                recycle them responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary text-white py-16 text-center">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="mb-8">Schedule your move today and experience stress‑free service.</p>
          <Link href="/contact">
            <a className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold shadow hover:bg-gray-100 transition">
              Book Now
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}