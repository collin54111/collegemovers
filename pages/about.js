import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | The College Movers</title>
        <meta
          name="description"
          content="Learn about The College Movers, a student‑run moving company dedicated to providing stress‑free moves for students and residents while giving back to the community."
        />
        <link rel="canonical" href="https://thecollegemovers.com/about" />
      </Head>
      <section className="bg-primary text-white py-16 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">About The College Movers</h1>
          <p className="text-lg">Our story, mission and values</p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container space-y-12 max-w-4xl">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
            <p className="text-gray-700 text-sm">
              The College Movers was founded by a group of university students who
              saw how stressful moving could be for classmates and community
              members. We set out to create a moving company that offers
              professional service, flexible options and compassionate support –
              all at student‑friendly prices.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Mission &amp; Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              <li>
                <strong>Serve with integrity:</strong> We treat every customer’s
                belongings as if they were our own.
              </li>
              <li>
                <strong>Empower students:</strong> Our team is made up of
                hardworking students who gain valuable experience while helping
                others.
              </li>
              <li>
                <strong>Give back:</strong> 1% of revenue goes toward
                scholarships and local nonprofit organizations.
              </li>
              <li>
                <strong>Deliver excellence:</strong> We strive for 5‑star
                service and continuous improvement in everything we do.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-primary text-white py-16 text-center">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-4">Want to Join Our Team?</h2>
          <p className="mb-8 text-sm">
            We’re always looking for motivated students to help make moves
            easier for others. Get in touch to learn more.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold shadow hover:bg-gray-100 transition">
              Contact Us
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}