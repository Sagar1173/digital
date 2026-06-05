"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { FiInstagram } from "react-icons/fi";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`New enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\nMessage:\n${data.get("message")}`,
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
            "@type": "ContactPage",
            "name": "Contact Us | The Creators House",
            "description": "Get in touch with The Creators House. We're a Kathmandu based digital agency ready to help grow your brand online.",
            "url": "https://www.thecreatorshouse.com.np/contact"
          })
        }}
      />
      <SiteHeader />

      <section className="site-section ">
        <div className="site-container mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/15 text-xs font-medium uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Contact
          </div>
          {/* <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Let&apos;s talk about{" "}
            <span className="bg-accent px-2">your brand.</span>
          </h1> */}
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] max-w-2xl">
            Let&apos;s talk about{" "}
            <div className="relative inline-block">
              <span className="relative z-10">your brand.</span>
              <span className="absolute inset-x-0 bottom-1 h-4 md:h-6 bg-accent -z-0" />
            </div>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Have a project, a question or just want to say hi? Drop us a line
            we usually reply within one business day.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container mx-auto grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Your name"
                  name="name"
                  required
                  placeholder="Sita Sharma"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@brand.com"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Phone" name="phone" placeholder="+977 98XXXXXXXX" />
                <Field label="Company" name="company" placeholder="Brand name" />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your brand, goals and timelines."
                  className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:border-foreground"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 bg-foreground text-background px-6 py-3.5 font-semibold rounded-md hover:bg-foreground/90"
              >
                Send message <ChevronRight className="w-4 h-4" />
              </button>
              {sent && (
                <p className="text-sm text-muted-foreground">
                  Opening your email client… if nothing happens, email us
                  directly at creatorshouseofficial@gmail.com.
                </p>
              )}
            </form>
          </div>

          {/* Info */}
          <aside className="lg:col-span-2 space-y-4">
            <InfoCard
              icon={Mail}
              label="Email"
              value="creatorshouseofficial@gmail.com"
              href="mailto:creatorshouseofficial@gmail.com"
            />
            <InfoCard
              icon={Phone}
              label="Phone"
              value="+977 9863200123"
              href="tel:+9779863200123"
            />
            <InfoCard
              icon={MapPin}
              label="Studio"
              value="Tukucha Marg, Baluwatar 4, Kathmandu"
            />
            <InfoCard
              icon={FiInstagram}
              label="Instagram"
              value="@the.creators.house"
              href="https://www.instagram.com/the.creators.house"
            />
            <div className="bg-accent p-6 rounded-md">
              <Clock className="w-6 h-6" />
              <div className="text-xs uppercase tracking-widest font-bold mt-4">
                Working hours
              </div>
              <div className="mt-2 font-semibold">
                Sunday – Friday · 10 AM – 6 PM
              </div>
              <div className="text-sm text-foreground/70 mt-1">
                Closed Saturdays
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
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

function InfoCard({ icon: Icon, label, value, href }) {
  const inner = (
    <>
      <Icon className="w-5 h-5" />
      <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-4">
        {label}
      </div>
      <div className="mt-1 font-semibold break-words">{value}</div>
    </>
  );
  const cls =
    "block border border-border p-6 rounded-md hover:border-foreground transition-colors";
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={cls}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}