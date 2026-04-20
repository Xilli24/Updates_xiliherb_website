export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      {/* HEADER */}
      <h1 className="text-3xl font-semibold text-[#1E4D3A] mb-6">
        About XiliHerb
      </h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        XiliHerb is a Bangalore-based company focused on producing xylitol
        from plant-derived biomass through a controlled and scalable process.
      </p>

      {/* IMAGE PLACEHOLDER */}
      <img
  src="/biomassabout.jpg"
  alt="Biomass raw material"
  className="h-64 w-full object-cover rounded-lg mb-12"
/>

      {/* WHAT WE DO */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-3">
          What We Focus On
        </h2>

        <p className="text-gray-600 mb-4">
          Our work centers on improving how agricultural biomass is converted
          into high-value ingredients. The focus is on building a process that
          is efficient, consistent, and suitable for industrial application.
        </p>

        <p className="text-gray-600">
          Rather than approaching xylitol production as a single-step outcome,
          we focus on the entire conversion pathway—from raw material handling
          to purification and output quality.
        </p>
      </section>

     <img
  src="/xylitolabout.jpg"
  alt="Xylitol crystals"
  className="h-64 w-full object-cover rounded-lg mb-12"
/>

      {/* APPROACH */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-3">
          Our Approach
        </h2>

        <p className="text-gray-600 mb-4">
          XiliHerb follows a process-driven approach to xylitol production,
          with emphasis on controlled conversion and purification stages.
        </p>

        <p className="text-gray-600">
          The process has been shaped through research-led development and
          collaboration with established academic and agricultural institutions,
          enabling a balance between technical rigor and practical scalability.
        </p>
      </section>

      {/* DIFFERENTIATION */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-4">
          Key Considerations
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-700">

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Input Utilization</h3>
            <p className="text-sm text-gray-600">
              Focus on agricultural biomass as a starting point for value creation.
            </p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Process Consistency</h3>
            <p className="text-sm text-gray-600">
              Controlled conversion methods designed for stable output quality.
            </p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-2">Scalability</h3>
            <p className="text-sm text-gray-600">
              Designed with industrial production requirements in mind.
            </p>
          </div>

        </div>
      </section>

     <img
  src="/processabout.jpg"
  alt="Xylitol crystals"
  className="h-64 w-full object-cover rounded-lg mb-12"
/>

      {/* WHY IT MATTERS */}
      <section>
        <h2 className="text-xl font-semibold text-[#1E4D3A] mb-3">
          Why It Matters
        </h2>

        <p className="text-gray-600 max-w-2xl">
          By improving how plant-based raw materials are converted into
          functional ingredients, XiliHerb aims to contribute to more
          efficient and reliable production systems for industries that
          depend on consistent material quality.
        </p>
      </section>

    </main>
  );
}