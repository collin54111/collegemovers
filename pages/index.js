import Head from 'next/head';
import Link from 'next/link';
import { locations } from '../data/locations';

export default function Home() {
  return (
    <>
      <Head>
        <title>The College Movers | Student Moving Company</title>
        <meta
          name="description"
          content="The College Movers offers affordable moving services for college students and residents across Iowa, South Carolina, North Carolina, Florida and Texas. Get a free quote today."
        />
        <link rel="canonical" href="https://thecollegemovers.com/" />
      </Head>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Stress‑Free College Moves
          </h1>
          <p className="text-lg mb-8">
            Trusted student movers for dorms, apartments and houses across IA, SC,
            NC, FL &amp; TX.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold shadow hover:bg-gray-100 transition">
              Get a Free Quote
            </a>
          </Link>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-box-open text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Packing &amp; Unpacking</h3>
              <p className="text-sm text-gray-600">
                We carefully pack your belongings and unpack them at your new home so you can focus on settling in.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-dolly text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Loading &amp; Unloading</h3>
              <p className="text-sm text-gray-600">
                Our strong team handles all the heavy lifting, safely loading and unloading your possessions.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-couch text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Furniture Assembly</h3>
              <p className="text-sm text-gray-600">
                We disassemble and reassemble furniture, ensuring it arrives in perfect condition.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-road text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Local &amp; Long‑Distance</h3>
              <p className="text-sm text-gray-600">
                Moving across town or across the state, our flexible services meet your needs.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-warehouse text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Storage Options</h3>
              <p className="text-sm text-gray-600">
                Need temporary storage? We partner with secure facilities to keep your items safe.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <i className="fas fa-recycle text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Junk Removal</h3>
              <p className="text-sm text-gray-600">
                Clear out unwanted items and donate or recycle them responsibly as part of your move.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-secondary text-white">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Why Choose The College Movers?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <i className="fas fa-user-graduate text-primary text-3xl"></i>
              <div>
                <h3 className="text-xl font-semibold mb-1">Student‑Run Experts</h3>
                <p className="text-sm opacity-90">We understand the unique needs of college students and their families.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <i className="fas fa-dollar-sign text-primary text-3xl"></i>
              <div>
                <h3 className="text-xl font-semibold mb-1">Transparent Pricing</h3>
                <p className="text-sm opacity-90">Pay only for the time we work – no hidden fees.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <i className="fas fa-star text-primary text-3xl"></i>
              <div>
                <h3 className="text-xl font-semibold mb-1">Top‑Rated Movers</h3>
                <p className="text-sm opacity-90">Our background‑checked movers deliver professional, 5‑star service.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <i className="fas fa-sliders-h text-primary text-3xl"></i>
              <div>
                <h3 className="text-xl font-semibold mb-1">Flexible Options</h3>
                <p className="text-sm opacity-90">Choose local, long‑distance or labor‑only services to match your move.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <i className="fas fa-hand-holding-heart text-primary text-3xl"></i>
              <div>
                <h3 className="text-xl font-semibold mb-1">Giving Back</h3>
                <p className="text-sm opacity-90">We donate 1% of revenue – half to scholarships and half to local nonprofits.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <i className="fas fa-box-open text-primary text-3xl"></i>
              <div>
                <h3 className="text-xl font-semibold mb-1">Full‑Service Moving</h3>
                <p className="text-sm opacity-90">Packing, loading, assembly and storage for a complete moving solution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Promise</h2>
          <div className="space-y-6 text-gray-700 text-sm">
            <p>
              <strong>Stress‑free, full‑service moves.</strong> We manage your
              entire move from start to finish — including packing supplies, junk
              removal and assembly/disassembly — so you can sit back and relax【531961792645271†L79-L85】.
            </p>
            <p>
              <strong>Clear pricing and honest quotes.</strong> We’re happy to
              discuss every detail of your move and billing before you book.
              There are no hidden fees and no surprises【531961792645271†L90-L97】.
            </p>
            <p>
              <strong>Proven quality &amp; experience.</strong> Our professional
              team is licensed and insured with years of moving experience and
              high customer satisfaction【531961792645271†L126-L143】【117233856102567†L199-L202】.
            </p>
            <p>
              <strong>Comprehensive services.</strong> We offer local, long‑distance
              and office moves, along with storage solutions and labor‑only
              options to meet any need【531961792645271†L114-L121】.
            </p>
          </div>
        </div>
      </section>
      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-8">Service Areas</h2>
          <p className="text-center text-gray-600 mb-8">
            We proudly serve college towns across Iowa, South Carolina, North
            Carolina, Florida and Texas.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {locations.map((loc) => (
              <div key={loc.slug} className="p-4 bg-white rounded shadow">
                <h3 className="font-semibold text-lg mb-1">
                  {loc.city}, {loc.state}
                </h3>
                <p className="text-sm text-primary mb-2">{loc.college}</p>
                <Link href={`/locations/${loc.slug}`}>
                  <a className="text-sm text-gray-600 hover:text-primary">Learn More</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Moving?</h2>
          <p className="mb-8">Get your free quote today and let our friendly movers handle the heavy lifting.</p>
          <Link href="/contact">
            <a className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold shadow hover:bg-gray-100 transition">
              Book Your Move
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}