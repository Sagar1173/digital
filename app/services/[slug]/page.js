import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Check, ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { services } from "@/data/services";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return {
      title: "Service Not Found | The Creators House",
    };
  }

  return {
    title: `${service.title} | The Creators House`,
    description: service.short,
    openGraph: {
      title: `${service.title} | The Creators House`,
      description: service.short,
      url: `https://www.thecreatorshouse.com.np/services/${service.slug}`,
      siteName: "The Creators House",
      type: "website",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "provider": {
              "@type": "LocalBusiness",
              "name": "The Creators House"
            },
            "description": service.short,
            "url": `https://www.thecreatorshouse.com.np/services/${service.slug}`
          })
        }}
      />
      <SiteHeader />

      <section className="site-section pb-10">
        <div className="site-container mx-auto">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-8">
            <Link href="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/15 text-xs font-medium uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Service details
              </div>
              
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                {service.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                {service.longDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1.5 bg-accent text-foreground px-6 py-3.5 font-semibold rounded-md hover:opacity-90 transition-opacity"
                >
                  Request a quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 bg-foreground text-background px-6 py-3.5 font-semibold rounded-md hover:bg-foreground/90 transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-foreground/5 border border-border">
              {/* Using standard img to keep things simple if next/image isn't fully configured, but let's use an img with object-cover */}
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-foreground/5 border-y border-border">
        <div className="site-container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold mb-4">What's included</h2>
              <p className="text-muted-foreground">Everything you need, handled by our expert team.</p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {service.details.map((d, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-background rounded-xl border border-border">
                    <div className="w-10 h-10 shrink-0 bg-accent/20 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="site-section">
        <div className="site-container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/15 text-xs font-medium uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                How we work
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground">A proven methodology to ensure your project's success.</p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { step: "01", title: "Discovery & Strategy", desc: "We start by understanding your goals, audience, and market to craft a tailored plan." },
                  { step: "02", title: "Creative Development", desc: "Our team conceptualizes and designs assets that align with your brand identity." },
                  { step: "03", title: "Execution & Delivery", desc: "We implement the strategy with precision, ensuring high-quality output." },
                  { step: "04", title: "Review & Optimize", desc: "We monitor performance and iterate to maximize results and ROI." }
                ].map((p, i) => (
                  <div key={i} className="border-l-2 border-border pl-6 relative">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-accent" />
                    <div className="text-sm font-bold text-accent mb-2">STEP {p.step}</div>
                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="site-section bg-foreground text-background">
        <div className="site-container mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why partner with us?</h2>
            <p className="text-xl text-background/70">
              We bring expertise, creativity, and a data-driven approach to every project.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "In-House Experts", desc: "No outsourcing. You work directly with our dedicated team of specialists." },
              { title: "Data-Driven Results", desc: "We base our decisions on analytics and performance metrics, not guesswork." },
              { title: "Transparent Reporting", desc: "You'll always know exactly where your budget is going and what it's achieving." }
            ].map((w, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-2xl bg-white/5">
                <h3 className="text-xl font-bold mb-4">{w.title}</h3>
                <p className="text-background/70">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="site-section border-t border-border">
        <div className="site-container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to elevate your brand?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss how our {service.title.toLowerCase()} services can help you achieve your goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-1.5 bg-foreground text-background px-8 py-4 font-semibold rounded-md hover:bg-foreground/90 transition-colors text-lg"
            >
              Start your project <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
