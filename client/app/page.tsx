import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">

        <div>

          <p className="text-yellow-400 uppercase tracking-widest mb-4">
            Capturing Moments. Creating Memories.
          </p>

          <h1 className="text-5xl md:text-8xl font-bold mb-6">
            MYPrince <br /> Photography
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Professional photography for weddings, lobola ceremonies,
            traditional weddings, birthdays, matric dances,
            studio shoots, and business events across South Africa.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">

            <Link
              href="/book"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold"
            >
              Book a Session
            </Link>

            <Link
              href="/portfolio"
              className="border border-white px-6 py-3 rounded-full"
            >
              View Portfolio
            </Link>

          </div>

        </div>

      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Wedding Photography",
            "Lobola Ceremonies",
            "Traditional Weddings",
            "Birthday & Parties",
            "Matric Dance",
            "Studio Shoots",
            "Business Events",
            "Maternity Shoots",
            "Social Events",
          ].map((service) => (
            <div
              key={service}
              className="bg-zinc-900 p-6 rounded-2xl text-center"
            >
              {service}
            </div>
          ))}

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 text-center bg-zinc-950">

        <h2 className="text-4xl font-bold mb-6">
          Ready to capture your moment?
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s create timeless memories together.
        </p>

        <a
          href="https://wa.me/27798121272"
          target="_blank"
          className="bg-green-500 text-black px-8 py-4 rounded-full font-bold"
        >
          WhatsApp Us Now
        </a>

      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t border-zinc-800">

        <p>
          © {new Date().getFullYear()} MYPrince Photography
        </p>

        <p className="mt-2">
          Pretoria, South Africa
        </p>

      </footer>

    </main>
  );
}