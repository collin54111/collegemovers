import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | The College Movers</title>
        <meta
          name="description"
          content="Get in touch with The College Movers to request a moving quote or ask questions about our student‑run moving services."
        />
        <link rel="canonical" href="https://thecollegemovers.com/contact" />
      </Head>
      <section className="bg-primary text-white py-16 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">We’re here to help with your next move.</p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">Request a Quote</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Moving From (City/State)"
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Moving To (City/State)"
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
              <input
                type="date"
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <textarea
              rows="4"
              placeholder="Additional Details"
              className="p-3 border border-gray-300 rounded w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary/90 transition"
            >
              Send Request
            </button>
          </form>
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              1% of all revenue is donated – half to our scholarship fund and
              half to local nonprofits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}