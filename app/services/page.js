// import { createFileRoute } from "@tanstack/react-router";
import Link from "next/link";
import { ChevronRight, Check, Camera, Megaphone, Video, BarChart3, Globe, Search, Users, Sparkles } from "lucide-react";
import  SiteHeader  from "@/components/SiteHeader";
import SiteFooter  from "@/components/SiteFooter";

// export const Route = createFileRoute("/services")({
//   head: () => ({
//     meta: [
//       { title: "Services — The Creators House" },
//       { name: "description", content: "Digital marketing, social media management, video production, SEO, web development and influencer marketing services in Nepal." },
//       { property: "og:title", content: "Services — The Creators House" },
//       { property: "og:description", content: "Full-service digital marketing, branding and web development from Kathmandu." },
//     ],
//   }),
//   component: ServicesPage,
// });

const services = [
  {
    icon: Megaphone, title: "Digital Marketing & Branding",
    short: "Strategy, content and campaigns built for every major social platform.",
    details: [
      "Professional photoshoots and creative direction",
      "Video ads and motion graphics",
      "Brand identity, voice and visual guidelines",
      "Cross-platform strategy for Facebook, Instagram, LinkedIn, X and TikTok",
    ],
  },
  {
    icon: Users, title: "Social Media Management",
    short: "End-to-end management of your social accounts.",
    details: [
      "Daily posting and community engagement",
      "Audience and hashtag research",
      "Caption writing and content calendars",
      "Monthly performance reports with insights",
    ],
  },
  {
    icon: Video, title: "Video Production & Photoshoot",
    short: "Cinematic production for brands that want to look premium.",
    details: [
      "Pre-production planning and shoot scripts",
      "Camera and drone cinematography",
      "Editing, color grading and sound design",
      "Reels, commercials, event coverage and product films",
    ],
  },
  {
    icon: BarChart3, title: "Social Media Ads",
    short: "Paid campaigns on Meta and TikTok that drive measurable results.",
    details: [
      "Audience targeting and lookalike research",
      "Creative testing across multiple variants",
      "Boosting setup, monitoring and optimization",
      "13% Meta tax and 15% agency service charge apply",
    ],
  },
  {
    icon: Search, title: "Search Engine Optimization",
    short: "Rank higher on Google and capture intent-driven traffic.",
    details: [
      "On-page SEO and technical audits",
      "Keyword research aligned to business goals",
      "Content optimization and internal linking",
      "Monthly ranking and traffic reporting",
    ],
  },
  {
    icon: Globe, title: "Web Design & Development",
    short: "Fast, beautiful, responsive websites that convert.",
    details: [
      "Custom UI and UX tailored to your brand",
      "Built mobile-first with modern frameworks",
      "Landing pages, e-commerce and business sites",
      "Analytics, SEO basics and post-launch support",
    ],
  },
  {
    icon: Camera, title: "Social Media Audit",
    short: "A clear picture of where you stand and where to go next.",
    details: [
      "Profile and content health check",
      "Competitor and industry benchmarking",
      "Engagement and growth analysis",
      "Prioritized action plan you can act on immediately",
    ],
  },
  {
    icon: Sparkles, title: "Influencer Marketing",
    short: "Work with the right creators on TikTok and Instagram.",
    details: [
      "Creator discovery and vetting",
      "Brief writing and content collaboration",
      "Campaign execution and reporting",
      "Billed at actual influencer rate + 15% agency fee",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/15 text-xs font-medium uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Services
          </div>
          {/* <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Everything you need to grow online.{" "}
            <span className="bg-accent px-2 mt-8">Under one roof.</span>
          </h1> */}
         <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] max-w-4xl">
  Everything you need to grow online.{" "}
  <span className="relative inline-block whitespace-nowrap">
    <span className="relative z-10">Under one roof.</span>
    <span className="absolute inset-x-0 bottom-1 h-4 md:h-6 bg-accent -z-0" />
  </span>
</h1>
          <p className="mt-8 px-1text-lg md:text-xl text-muted-foreground max-w-2xl">
            From strategy and content to ads and websites — eight specialized services delivered by one in-house team.
          </p>
        </div>
      </section>

      {/* Service detail blocks */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto divide-y divide-border">
          {services.map((s, i) => (
            <div key={s.title} id={s.title.toLowerCase().replace(/[^a-z]+/g, "-")} className="py-16 md:py-20 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-1">
                <div className="font-display px-2 font-bold text-2xl text-muted-foreground">
                  0{i + 1}
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="w-14 h-14 bg-accent flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">{s.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{s.short}</p>
                <Link href="/quote" className="mt-6 inline-flex items-center gap-1.5 bg-foreground text-background px-5 py-3 font-semibold rounded-md hover:bg-foreground/90">
                  Request a quote <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="md:col-span-6">
                <div className="border border-border p-8">
                  <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4">What's included</div>
                  <ul className="space-y-4">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-3">
                        <Check className="w-5 h-5 mt-0.5 shrink-0 text-foreground" />
                        <span>{d}</span>
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
      <section className="px-6 py-20 border-t border-border bg-muted">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
