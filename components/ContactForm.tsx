"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#F7F6F2",
  border: "1px solid #E0E0DA",
  borderRadius: "2px",
  padding: "12px 16px",
  fontSize: "14px",
  color: "#2C2C2C",
  outline: "none",
  display: "block",
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", company: "", inquiry: "", message: "",
  });

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const result = await sendEmail(form);

    if (result.ok) {
      setStatus("success");
      setForm({ name: "", email: "", company: "", inquiry: "", message: "" });
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          border: "1px solid #E0E0DA",
          borderRadius: 2,
          padding: "48px 32px",
          textAlign: "center",
          background: "#F7F6F2",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "#1E3F6E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <span style={{ color: "#5BAC2E", fontSize: 22, lineHeight: 1 }}>✓</span>
        </div>
        <p
          className="text-[18px] font-semibold mb-2"
          style={{ color: "#1E3F6E", fontFamily: "var(--font-display)" }}
        >
          Inquiry sent
        </p>
        <p className="text-[14px] leading-[1.7]" style={{ color: "#6B6B6B" }}>
          Thank you — we'll be in touch within 2–3 business days.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        placeholder="Name *"
        value={form.name}
        onChange={set("name")}
        required
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Email *"
        value={form.email}
        onChange={set("email")}
        required
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Company / Organisation"
        value={form.company}
        onChange={set("company")}
        style={inputStyle}
      />
      <select
        value={form.inquiry}
        onChange={set("inquiry")}
        style={{ ...inputStyle, color: form.inquiry ? "#2C2C2C" : "#6B6B6B", appearance: "none" }}
      >
        <option value="" disabled style={{ color: "#6B6B6B" }}>Nature of Inquiry</option>
        <option value="partnership">Partnership</option>
        <option value="research">Research Collaboration</option>
        <option value="investment">Investment</option>
        <option value="sourcing">Agricultural Sourcing</option>
        <option value="other">Other</option>
      </select>
      <textarea
        placeholder="Your message *"
        rows={5}
        value={form.message}
        onChange={set("message")}
        required
        style={{ ...inputStyle, resize: "vertical" }}
      />

      {status === "error" && (
        <p className="text-[13px]" style={{ color: "#791f1f" }}>{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full text-[12px] uppercase tracking-[0.14em] font-medium transition-opacity duration-150"
        style={{
          background: "#1A9BA0",
          color: "#FFFFFF",
          borderRadius: "2px",
          padding: "15px 24px",
          border: "none",
          cursor: status === "sending" ? "not-allowed" : "pointer",
          opacity: status === "sending" ? 0.6 : 1,
        }}
      >
        {status === "sending" ? "Sending…" : "Submit Inquiry"}
      </button>

      <p className="text-[12px] text-center" style={{ color: "#6B6B6B" }}>
        We typically respond within 2–3 business days.
      </p>
    </form>
  );
}
