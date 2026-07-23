"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { X, Send, ChevronDown } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
  links?: { text: string; href: string }[];
}

interface FAQ {
  keywords: string[];
  answer: string;
  links?: { text: string; href: string }[];
}

const faqs: FAQ[] = [
  {
    keywords: ["what is xiliherb", "about xiliherb", "who are you", "what do you do", "tell me about", "company"],
    answer:
      "XiliHerb is a science-driven biotechnology startup based in Bangalore, India. We convert agricultural crop residue — primarily non-GMO corn cobs — into bio-based molecules through enzymatic bioconversion. Our first validated output is xylitol.",
    links: [{ text: "Learn about us", href: "/about" }],
  },
  {
    keywords: ["xylitol", "what is xylitol", "sugar alcohol", "sweetener"],
    answer:
      "Xylitol is a natural sugar alcohol used in food, oral care, and pharmaceuticals. Conventionally it's made from birch wood or imported hardwood. XiliHerb produces it from corn cob hemicellulose via enzymatic hydrolysis — bio-derived with near-zero feedstock cost.",
    links: [{ text: "Explore our xylitol technology", href: "/xylitol-technology" }],
  },
  {
    keywords: ["technology", "how does it work", "process", "enzymatic", "hydrolysis", "bioconversion", "corn cob", "feedstock", "xylan"],
    answer:
      "Our technology converts non-GMO corn cob hemicellulose into bio-based xylitol via enzymatic hydrolysis — no harsh acid catalysts, ambient temperature, near-zero feedstock cost. Corn cobs represent ~40% of the harvestable plant by dry weight and are naturally rich in xylan (30–35%).",
    links: [{ text: "See our technology", href: "/xylitol-technology" }],
  },
  {
    keywords: ["contact", "reach", "email", "talk", "speak", "get in touch", "enquire", "inquiry", "message"],
    answer:
      "You can reach the XiliHerb team at team@xiliherb.com or through our contact form.",
    links: [{ text: "Open contact page", href: "/contact" }],
  },
  {
    keywords: ["partner", "partnership", "collaborate", "collaboration", "invest", "investor", "work with", "join"],
    answer:
      "XiliHerb welcomes collaboration across science, sustainability, biotechnology, and industrial ecosystems. We are open to partnerships with researchers, industry players, and impact investors.",
    links: [{ text: "Partner with us", href: "/contact" }],
  },
  {
    keywords: ["stage", "development", "lab", "commercial", "progress", "status", "ready", "launched"],
    answer:
      "XiliHerb is currently at lab-scale validation stage. We are refining our enzymatic bioconversion protocols before scaling toward pilot and commercial production.",
  },
  {
    keywords: ["sustainability", "sustainable", "environment", "green", "eco", "carbon", "waste", "emissions"],
    answer:
      "Sustainability is central to our platform. We use agricultural residue that would otherwise be burned as feedstock. Our process runs at mild temperatures with no harsh acid catalysts — a significantly lower carbon footprint than conventional xylitol production.",
    links: [{ text: "Read about sustainability", href: "/sustainability" }],
  },
  {
    keywords: ["team", "founder", "who built", "people", "who is behind", "founders"],
    answer:
      "XiliHerb was founded in Bangalore and operates under the AIC-GKVK Innovation Hub at the University of Agricultural Sciences, Bangalore.",
    links: [{ text: "Meet the team", href: "/team" }],
  },
  {
    keywords: ["innovation", "ai", "artificial intelligence", "future", "platform", "next", "roadmap"],
    answer:
      "XiliHerb's platform produces multiple outputs from a single feedstock: xylitol (primary), arabinoxylan, and lignin derivatives. We also use AI-assisted process modelling to accelerate enzyme activity analysis and reduce experimental iteration cycles.",
    links: [{ text: "Learn about innovation", href: "/innovation" }],
  },
  {
    keywords: ["location", "based", "india", "bangalore", "where", "address", "office"],
    answer:
      "XiliHerb's office is at No. 472/7, Balaji Arcade, 20th L Cross Rd, Ejipura, Koramangala VI Bk, Bangalore South, Bangalore - 560095 — incubated at the AIC-GKVK Innovation Hub at the University of Agricultural Sciences, Bangalore.",
  },
  {
    keywords: ["arabinoxylan", "lignin", "cellulose", "other products", "other outputs", "byproduct"],
    answer:
      "While xylitol is our primary output, our platform also yields arabinoxylan and lignin derivatives from the same corn cob feedstock — maximising value at every stage of biomass conversion.",
    links: [{ text: "Explore our technology", href: "/xylitol-technology" }],
  },
];

const SUGGESTIONS = [
  "What is XiliHerb?",
  "How does the technology work?",
  "What is xylitol?",
  "How can I partner with you?",
];

const WELCOME = "Hi! I'm Xili, XiliHerb's assistant. Ask me anything about our company, technology, or how to get in touch.";

function matchFAQ(input: string): FAQ | null {
  const lower = input.toLowerCase();
  for (const faq of faqs) {
    if (faq.keywords.some((kw) => lower.includes(kw))) return faq;
  }
  return null;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", text: WELCOME }]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function send(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    const match = matchFAQ(text);
    const botMsg: Message = match
      ? { role: "bot", text: match.answer, links: match.links }
      : {
          role: "bot",
          text: "I'm not sure about that one. For anything specific, feel free to reach out to our team directly.",
          links: [{ text: "Contact us", href: "/contact" }],
        };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      {/* Floating molecule button */}
      <div className="fixed bottom-6 right-6 z-50 group flex items-center">

        {/* Hover tooltip */}
        {!open && (
          <div
            className="mr-3 px-3 py-1.5 rounded-full text-[12px] font-medium text-white whitespace-nowrap
                       opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                       transition-all duration-200 pointer-events-none select-none"
            style={{ background: "#1E3F6E", boxShadow: "0 2px 10px rgba(0,0,0,0.25)" }}
          >
            Chat with Xili
          </div>
        )}

        {/* Pulsing ring — draws attention */}
        {!open && (
          <span
            className="absolute right-0 w-14 h-14 rounded-full animate-ping"
            style={{ background: "rgba(91,172,46,0.28)", animationDuration: "2.4s" }}
          />
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close chat" : "Open chat"}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl
                     transition-transform duration-200 hover:scale-110 active:scale-95"
          style={{ background: "#1E3F6E", border: "2px solid #5BAC2E" }}
        >
          {open ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <div className="animate-[molecule-spin_9s_linear_infinite]">
              <svg viewBox="0 0 56 56" width="32" height="32" fill="none">
                {/* Center atom */}
                <circle cx="28" cy="28" r="6" fill="white" />
                {/* Bonds */}
                <line x1="28" y1="28" x2="10" y2="12" stroke="rgba(255,255,255,0.75)" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="28" y1="28" x2="46" y2="12" stroke="rgba(255,255,255,0.75)" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="28" y1="28" x2="28" y2="50" stroke="rgba(255,255,255,0.75)" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="10" y1="12" x2="46" y2="12" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" />
                {/* Coloured outer atoms */}
                <circle cx="10" cy="12" r="4.5" fill="#5BAC2E" />
                <circle cx="46" cy="12" r="4.5" fill="#1A9BA0" />
                <circle cx="28" cy="50" r="4.5" fill="#5BAC2E" />
                {/* Small terminals */}
                <circle cx="4"  cy="22" r="2.5" fill="rgba(255,255,255,0.45)" />
                <circle cx="52" cy="22" r="2.5" fill="rgba(255,255,255,0.45)" />
              </svg>
            </div>
          )}
        </button>
      </div>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[340px] rounded-xl shadow-2xl flex flex-col overflow-hidden"
          style={{ background: "#F7F6F2", border: "1px solid #E0E0DA", maxHeight: "520px" }}
        >
          {/* Header */}
          <div className="px-4 py-3 flex items-center gap-3 shrink-0" style={{ background: "#1E3F6E" }}>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#5BAC2E" }}
            >
              <svg viewBox="0 0 56 56" width="18" height="18" fill="none">
                <circle cx="28" cy="28" r="6" fill="white" />
                <line x1="28" y1="28" x2="10" y2="12" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="28" y1="28" x2="46" y2="12" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="28" y1="28" x2="28" y2="50" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="10" cy="12" r="4.5" fill="rgba(255,255,255,0.8)" />
                <circle cx="46" cy="12" r="4.5" fill="rgba(255,255,255,0.8)" />
                <circle cx="28" cy="50" r="4.5" fill="rgba(255,255,255,0.8)" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-white leading-none">Xili</p>
              <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                Typically replies instantly
              </p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Minimise chat">
              <ChevronDown className="w-5 h-5" style={{ color: "rgba(255,255,255,0.6)" }} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[82%] px-3 py-2 text-[13px] leading-[1.65]"
                  style={
                    msg.role === "user"
                      ? { background: "#1E3F6E", color: "#F7F6F2", borderRadius: "12px 12px 2px 12px" }
                      : { background: "#FFFFFF", color: "#2C2C2C", border: "1px solid #E0E0DA", borderRadius: "12px 12px 12px 2px" }
                  }
                >
                  {msg.text}
                  {msg.links && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {msg.links.map((l, j) => (
                        <Link
                          key={j}
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="text-[11px] px-2.5 py-1 rounded-full font-medium transition-opacity hover:opacity-80 inline-block"
                          style={{ background: "#5BAC2E", color: "#FFFFFF" }}
                        >
                          {l.text} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Suggestion chips — only while no user message yet */}
          {messages.length === 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-1.5 shrink-0">
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => send(s)}
                  className="text-[11px] px-3 py-1.5 rounded-full border transition-colors hover:bg-white"
                  style={{ borderColor: "#C8C8C0", color: "#1E3F6E", background: "transparent" }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input bar */}
          <div className="px-3 py-3 flex gap-2 shrink-0" style={{ borderTop: "1px solid #E0E0DA" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") send(input); }}
              placeholder="Ask a question..."
              className="flex-1 text-[13px] px-3 py-2 rounded-lg outline-none"
              style={{ background: "#FFFFFF", border: "1px solid #E0E0DA", color: "#2C2C2C" }}
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              aria-label="Send message"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80 disabled:opacity-40"
              style={{ background: "#5BAC2E" }}
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
