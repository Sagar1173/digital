import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { services } from "@/data/services";

export const metadata = {
  title: "Our Services | The Creators House",
  description: "Explore our comprehensive suite of digital services including digital marketing, SEO, web design, video production, and social media management.",
  openGraph: {
    title: "Our Services | The Creators House",
    description: "Explore our comprehensive suite of digital services including digital marketing, SEO, web design, video production, and social media management.",
    url: "https://www.thecreatorshouse.com.np/services",
    siteName: "The Creators House",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Our Services | The Creators House",
            "description": "Explore our comprehensive suite of digital services including digital marketing, SEO, web design, video production, and social media management.",
            "url": "https://www.thecreatorshouse.com.np/services"
          })
        }}
      />
      <SiteHeader />

      {/* Hero */}
      <section className="site-section">
        <div className="site-container mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/15 text-xs font-medium uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Services
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Your complete digital growth solution,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Under one roof.</span>
              <span className="absolute inset-x-0 bottom-1 h-4 md:h-6 bg-accent -z-0" />
            </span>
          </h1>
          <p className="mt-8 px-1 text-lg md:text-xl text-muted-foreground max-w-2xl">
            From strategy and content to ads and websites eight specialized services delivered by one in-house team.
          </p>
        </div>
      </section>

      {/* Service detail blocks */}
      <section className="">
        <div className="site-container mx-auto divide-y divide-border">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className="py-10 md:py-20 flex flex-col lg:flex-row justify-between gap-10 lg:gap-16"
            >
              {/* Left Side */}
              <div className="w-full lg:w-[42%]">
                <div className="font-display px-2 pb-4 font-bold text-2xl text-muted-foreground">
                  0{i + 1}
                </div>

                <div className="w-14 h-14 bg-accent flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-background" strokeWidth={1.5} />
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <Link href={`/services/${s.slug}`} className="hover:text-accent transition-colors">
                    {s.title}
                  </Link>
                </h2>

                <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">
                  {s.short}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1.5 bg-foreground text-background px-5 py-3 font-semibold rounded-md hover:bg-foreground/90 transition-colors"
                  >
                    View details
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-full lg:w-[50%]">
                <div className="border border-border p-6 md:p-8 lg:p-10 h-full">
                  <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-6">
                    What's included
                  </div>

                  <ul className="space-y-4">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-3">
                        <Check className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                        <span className="text-sm md:text-base">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="site-section">
        <div className="site-container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Not sure where to start?</h3>
            <p className="mt-2 text-muted-foreground">Book a free 20-minute strategy call. We'll point you in the right direction.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-1.5 bg-background text-foreground border border-border px-5 py-3 font-semibold rounded-md hover:border-foreground">
              Contact us
            </Link>
            <Link href="/quote" className="inline-flex items-center gap-1.5 bg-foreground text-background px-5 py-3 font-semibold rounded-md hover:bg-foreground/90">
              Get a quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
