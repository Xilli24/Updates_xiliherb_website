export default function Process() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* HEADER */}
      <h1 className="text-3xl font-semibold text-[#1E4D3A] mb-6">
        Our Process
      </h1>

      <p className="text-gray-600 max-w-2xl mb-10">
        XiliHerb focuses on converting plant-based biomass into xylitol
        through a structured and controlled process designed for
        efficiency, consistency, and scalability.
      </p>

      {/* IMAGE */}
      <img
        src="/process.jpg"
        alt="Processing setup"
        className="w-full h-72 object-cover rounded-lg mb-12"
      />

      {/* PROCESS STEPS */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-6">
          Process Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">

          <div className="border p-5 rounded">
            <h3 className="font-medium mb-2">01. Biomass Sourcing</h3>
            <p className="text-sm text-gray-600">
              Selection and sourcing of suitable plant-based raw materials,
              focusing on agricultural residues with potential for value conversion.
            </p>
          </div>

          <div className="border p-5 rounded">
            <h3 className="font-medium mb-2">02. Pre-Processing</h3>
            <p className="text-sm text-gray-600">
              Preparation of biomass through physical and chemical conditioning
              to enable efficient downstream conversion.
            </p>
          </div>

          <div className="border p-5 rounded">
            <h3 className="font-medium mb-2">03. Conversion</h3>
            <p className="text-sm text-gray-600">
              Controlled conversion of biomass-derived components into xylitol
              through a defined process pathway.
            </p>
          </div>

          <div className="border p-5 rounded">
            <h3 className="font-medium mb-2">04. Purification</h3>
            <p className="text-sm text-gray-600">
              Refinement and crystallization steps to achieve consistent
              product quality suitable for industrial applications.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE */}
      <img
        src="/processabout.jpg"
        alt="Processing setup"
        className="w-full h-72 object-cover rounded-lg mb-12"
      />

      {/* APPROACH */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-3">
          Process Approach
        </h2>

        <p className="text-gray-600 max-w-2xl">
          The process is designed to maintain control across each stage,
          with emphasis on consistency in conversion and output quality.
          This enables alignment with industrial requirements while
          maintaining flexibility in raw material utilization.
        </p>
      </section>

      {/* KEY CONSIDERATIONS */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-4">
          Key Considerations
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-700">

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Efficiency</h3>
            <p className="text-sm text-gray-600">
              Optimizing conversion pathways to improve overall yield.
            </p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Consistency</h3>
            <p className="text-sm text-gray-600">
              Maintaining stable output quality across production cycles.
            </p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Scalability</h3>
            <p className="text-sm text-gray-600">
              Designed to support transition from pilot to industrial scale.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 p-8 bg-gray-100 rounded-lg text-center">
        <h3 className="text-lg mb-4">
          Interested in understanding our production capabilities?
        </h3>

        <button className="bg-[#1E4D3A] text-white px-6 py-3 rounded">
          Contact Us
        </button>
      </section>

    </main>
  );
}