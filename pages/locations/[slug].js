import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { locations } from '../../data/locations';

export default function LocationPage({ location }) {
  const router = useRouter();
  // Show nothing if fallback
  if (router.isFallback) {
    return null;
  }
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: `The College Movers - ${location.city}, ${location.state}`,
    url: `https://thecollegemovers.com/locations/${location.slug}`,
    description: `College moving services for ${location.college} students and residents in ${location.city}, ${location.state}.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: 'US',
    },
    areaServed: [location.city, location.college],
    telephone: '+1-555-123-4567',
  };
  return (
    <>
      <Head>
        <title>{location.title}</title>
        <meta name="description" content={location.description} />
        <meta name="keywords" content={location.keywords} />
        <link
          rel="canonical"
          href={`https://thecollegemovers.com/locations/${location.slug}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <section className="bg-primary text-white py-16 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">
            College Movers {location.city}, {location.state}
          </h1>
          <p className="text-lg">
            Reliable moving services for {location.college} students and {location.city} residents.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-white text-primary px-8 py-3 mt-8 rounded font-semibold shadow hover:bg-gray-100 transition">
              Get Your Free Quote
            </a>
          </Link>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6">Our {location.city} Moving Services</h2>
          <p className="text-gray-700 text-sm mb-4">
            Whether you’re moving on campus or across town, our student‑run team
            has you covered. We offer packing and unpacking, loading and
            unloading, furniture disassembly and reassembly, and temporary
            storage options – everything you need for a smooth move.
          </p>
          <p className="text-gray-700 text-sm">
            Our movers are friendly, experienced and dedicated to making your
            move stress‑free. We guarantee transparent pricing and flexible
            service options inspired by industry leaders. With 1% of revenue
            donated to scholarships and local nonprofits, you can feel good about
            your move too.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Our {location.city} Movers?</h2>
          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="flex items-start space-x-3">
              <i className="fas fa-user-graduate text-primary text-xl mt-1"></i>
              <span>
                Student‑run experts – we know {location.college} and {location.city} like the back
                of our hands.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <i className="fas fa-dollar-sign text-primary text-xl mt-1"></i>
              <span>
                Transparent pricing with no hidden fees – you only pay for the
                time we work.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <i className="fas fa-star text-primary text-xl mt-1"></i>
              <span>
                Top‑rated, background‑checked movers dedicated to care and
                professionalism.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <i className="fas fa-sliders-h text-primary text-xl mt-1"></i>
              <span>
                Flexible service options for local, long‑distance and labor‑only
                moves.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <i className="fas fa-hand-holding-heart text-primary text-xl mt-1"></i>
              <span>
                Giving back – 1% of revenue supports scholarships and local
                nonprofits.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <i className="fas fa-box-open text-primary text-xl mt-1"></i>
              <span>
                Full‑service moving: packing, loading, assembly and storage for
                a complete moving solution.
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-primary text-white py-16 text-center">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-4">Ready to Move in {location.city}?</h2>
          <p className="mb-8 text-sm">
            Contact us now to book your {location.city} move with The College
            Movers.
          </p>
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

export async function getStaticPaths() {
  const paths = locations.map((loc) => ({ params: { slug: loc.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const location = locations.find((loc) => loc.slug === params.slug);
  return { props: { location } };
}