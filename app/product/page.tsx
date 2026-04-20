export default function Product() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* HEADER */}
      <h1 className="text-3xl font-semibold text-[#1E4D3A] mb-6">
        Xylitol
      </h1>

      <p className="text-gray-600 max-w-2xl mb-10">
        XiliHerb produces plant-derived xylitol through a controlled
        and scalable process, designed for industrial and commercial
        applications across multiple sectors.
      </p>

      {/* IMAGE */}
      <img
  src="/xylitol.jpg"
  alt="Xylitol crystals"
  className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-12"
/>

      {/* SPECIFICATIONS */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-4">
          Product Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">

          <div className="border p-4 rounded">
            <p><strong>Origin:</strong> Plant-based biomass</p>
          </div>

          <div className="border p-4 rounded">
            <p><strong>Form:</strong> Crystalline</p>
          </div>

          <div className="border p-4 rounded">
            <p><strong>Processing:</strong> Controlled conversion and purification</p>
          </div>

          <div className="border p-4 rounded">
            <p><strong>Application Suitability:</strong> Multi-industry use</p>
          </div>

        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-4">
          Applications
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-700">

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Food & Beverage</h3>
            <p className="text-sm text-gray-600">
              Used as a sugar alternative in processed foods and beverages.
            </p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Oral Care</h3>
            <p className="text-sm text-gray-600">
              Commonly used in formulations such as toothpaste and chewing gum.
            </p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Pharmaceutical</h3>
            <p className="text-sm text-gray-600">
              Suitable for use in formulations requiring controlled sweetness and stability.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS NOTE */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-3">
          Production Approach
        </h2>

        <p className="text-gray-600 max-w-2xl">
          The product is developed through a process that focuses on
          efficient conversion of plant-based raw materials, followed
          by controlled purification steps to ensure consistency in output.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-16 p-8 bg-gray-100 rounded-lg text-center">
        <h3 className="text-lg mb-4">
          Interested in sourcing xylitol for your application?
        </h3>

        <button className="bg-[#1E4D3A] text-white px-6 py-3 rounded">
          Request Product Information
        </button>
      </section>

    </main>
  );
}