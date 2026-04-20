export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold text-[#1E4D3A] mb-6">
        Contact Us
      </h1>

      <p className="text-gray-600 mb-6">
        For product inquiries, partnerships, or more information, please reach out.
      </p>

      <form className="space-y-4 max-w-md">

        <input
          type="text"
          placeholder="Name"
          className="w-full border px-4 py-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-3 rounded"
        />

        <input
          type="text"
          placeholder="Company"
          className="w-full border px-4 py-3 rounded"
        />

        <textarea
          placeholder="Your Requirement"
          className="w-full border px-4 py-3 rounded h-32"
        />

        <button className="bg-[#1E4D3A] text-white px-6 py-3 rounded w-full">
          Submit Inquiry
        </button>

      </form>

    </main>
  );
}