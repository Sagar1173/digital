"use client";

import { useState } from "react";
import { ChevronRight, Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


const serviceOptions = [
  "Digital Marketing & Branding",
  "Social Media Management",
  "Video Production & Photoshoot",
  "Social Media Ads",
  "Social Media Audit",
  "Web Design & Development",
  "SEO",
  "Influencer Marketing",
];

const budgets = [
  "Under Rs 25,000",
  "Rs 25,000 – 50,000",
  "Rs 50,000 – 1,00,000",
  "Rs 1,00,000+",
  "Not sure yet",
];

const timelines = ["ASAP", "Within 1 month", "1–3 months", "Just exploring"];

export default function QuotePage() {
  const [selected, setSelected] = useState([]);
  const [sent, setSent] = useState(false);

  const toggle = (s) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Quote request from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\nServices: ${selected.join(", ") || "—"}\nBudget: ${data.get("budget")}\nTimeline: ${data.get("timeline")}\n\nProject details:\n${data.get("details")}`,
    );
    window.location.href = `mailto:creatorshouseofficial@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Get a Quote | The Creators House",
            "description": "Request a tailored quote for digital marketing, video production, SEO or web design services from The Creators House.",
            "url": "https://www.thecreatorshouse.com.np/quote"
          })
        }}
      />
      <SiteHeader />

      <section className="site-section">
        <div className="site-container mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/15 text-xs font-medium uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Get a quote
          </div>
          {/* <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Share your project.{" "}
            <span className="bg-accent px-2">Get a quote in 48 hours.</span>
          </h1> */}
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Share your project. Get a quote{" "}
            <span className="relative inline-block">
              <span className="relative z-10"> within 48 hours.</span>
              <span className="absolute inset-x-0 bottom-1 h-4 md:h-6 bg-accent -z-0" />
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Fill out the form below. We&apos;ll review the details and reply
            with a tailored plan, timeline and price.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container mx-auto">
          <form onSubmit={onSubmit} className="space-y-12">
            {/* Step 1 */}
            <Step number="01" title="About you">
              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Your name"
                  name="name"
                  required
                  placeholder="Sita Sharma"
                />
                <Field
                  label="Company / Brand"
                  name="company"
                  placeholder="Brand name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@brand.com"
                />
                <Field
                  label="Phone"
                  name="phone"
                  placeholder="+977 98XXXXXXXX"
                />
              </div>
            </Step>

            {/* Step 2 */}
            <Step number="02" title="What do you need?">
              <p className="text-muted-foreground mb-4 text-sm">
                Select all that apply
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {serviceOptions.map((s) => {
                  const active = selected.includes(s);
                  return (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggle(s)}
                      className={`flex items-center gap-3 text-left px-4 py-3 border rounded-md transition-colors ${
                        active
                          ? "bg-accent border-accent"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center shrink-0 ${
                          active
                            ? "bg-foreground border-foreground"
                            : "border-border"
                        }`}
                      >
                        {active && (
                          <Check
                            className="w-3.5 h-3.5 text-background"
                            strokeWidth={3}
                          />
                        )}
                      </span>
                      <span className="font-medium">{s}</span>
                    </button>
                  );
                })}
              </div>
            </Step>

            {/* Step 3 */}
            <Step number="03" title="Budget & timeline">
              <div className="grid md:grid-cols-2 gap-6">
                <SelectField
                  label="Estimated monthly budget"
                  name="budget"
                  options={budgets}
                />
                <SelectField
                  label="When do you want to start?"
                  name="timeline"
                  options={timelines}
                />
              </div>
            </Step>

            {/* Step 4 */}
            <Step number="04" title="Project details">
              <textarea
                name="details"
                rows={6}
                required
                placeholder="Tell us about your brand, your audience, what you've tried before, and what success looks like."
                className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:border-foreground"
              />
            </Step>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 bg-foreground text-background px-6 py-3.5 font-semibold rounded-md hover:bg-foreground/90"
              >
                Submit request <ChevronRight className="w-4 h-4" />
              </button>
              <p className="text-sm text-muted-foreground">
                We&apos;ll get back to you within 48 hours.
              </p>
            </div>
            {sent && (
              <p className="text-sm text-muted-foreground">
                Opening your email client… if nothing happens, email us directly
                at creatorshouseofficial@gmail.com.
              </p>
            )}
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="grid md:grid-cols-12 gap-8 border-t border-border pt-12">
      <div className="md:col-span-3">
        <div className="font-display text-5xl font-bold text-accent">
          {number}
        </div>
        <h2 className="mt-3 text-2xl font-bold">{title}</h2>
      </div>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }) {
  return (
    <div>
      <label className="text-sm font-semibold mb-2 block">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:border-foreground"
      />
    </div>
  );
}

function SelectField({ label, name, options }) {
  return (
    <div>
      <label className="text-sm font-semibold mb-2 block">{label}</label>
      <select
        name={name}
        className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:border-foreground"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}