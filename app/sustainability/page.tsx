export default function Sustainability() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      {/* HEADER */}
      <h1 className="text-3xl font-semibold text-[#1E4D3A] mb-6">
        Sustainability
      </h1>

      <p className="text-gray-600 max-w-2xl mb-10">
        Sustainability at XiliHerb is approached through how raw materials
        are selected and how efficiently they are converted into useful
        products.
      </p>

      {/* IMAGE */}
      <img
        src="/biomass.jpg"
        alt="Agricultural biomass"
        className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-12"
      />

      {/* CORE IDEA */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-3">
          Biomass Utilization
        </h2>

        <p className="text-gray-600 mb-4">
          Our approach focuses on utilizing agricultural biomass as a
          starting point for xylitol production. This allows for better
          use of materials that are often underutilized in conventional
          value chains.
        </p>

        <p className="text-gray-600">
          By working with plant-based inputs, we aim to align production
          with more resource-efficient material flows.
        </p>
      </section>

      {/* PROCESS LINK */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-3">
          Process Efficiency
        </h2>

        <p className="text-gray-600">
          Sustainability is also reflected in how the conversion process
          is designed. Emphasis is placed on improving efficiency across
          stages of processing to reduce unnecessary material loss and
          maintain consistent output quality.
        </p>
      </section>

      {/* KEY POINTS */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-4">
          Key Considerations
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-700">

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Resource Efficiency</h3>
            <p className="text-sm text-gray-600">
              Improving how raw materials are utilized across the process.
            </p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Waste Reduction</h3>
            <p className="text-sm text-gray-600">
              Minimizing unused by-products through better process design.
            </p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Scalable Practices</h3>
            <p className="text-sm text-gray-600">
              Designing systems that remain efficient at industrial scale.
            </p>
          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section>
        <p className="text-gray-600 max-w-2xl">
          XiliHerb views sustainability as an ongoing aspect of process
          development, where improvements in efficiency and material
          utilization contribute to more responsible production systems.
        </p>
      </section>

    </main>
  );
}