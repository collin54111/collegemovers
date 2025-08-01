import Head from 'next/head';
import Link from 'next/link';
import { locations } from '../../data/locations';

export default function Locations() {
  return (
    <>
      <Head>
        <title>Locations | The College Movers</title>
        <meta
          name="description"
          content="Discover the college towns we serve across Iowa, South Carolina, North Carolina, Florida and Texas. Find movers near your campus and get a free quote."
        />
        <link rel="canonical" href="https://thecollegemovers.com/locations" />
      </Head>
      <section className="bg-primary text-white py-16 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Service Areas</h1>
          <p className="text-lg">College movers in your town</p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {locations.map((loc) => (
              <div key={loc.slug} className="p-6 bg-white rounded shadow text-center">
                <h2 className="font-semibold text-lg mb-1">
                  {loc.city}, {loc.state}
                </h2>
                <p className="text-sm text-primary mb-3">{loc.college}</p>
                <Link href={`/locations/${loc.slug}`}>
                  <a className="text-sm text-gray-600 hover:text-primary">Learn More</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}