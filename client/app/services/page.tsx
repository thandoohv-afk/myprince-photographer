export default function ServicesPage() {
  const services = [
    "Wedding Photography",
    "Graduation Shoots",
    "Birthday Events",
    "Corporate Events",
    "Lifestyle Photography",
    "Family Portraits",
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">

      <h1 className="text-5xl font-bold text-center mb-16">
        Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {services.map((service) => (
          <div
            key={service}
            className="bg-zinc-900 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold">
              {service}
            </h2>
          </div>
        ))}

      </div>

    </main>
  );
}