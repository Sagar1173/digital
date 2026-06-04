import Link from "next/link";
import { Check, ChevronRight, Camera, Megaphone, Video, BarChart3, Globe, Search, Users, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClientsMarquee from "@/components/ClientsMarquee";
import  ReelsGrid from "@/components/ReelsGrid";

export const metadata = {
  title: "The Creators House — Digital Marketing Agency in Nepal",
  description:
    "Kathmandu-based digital marketing, branding, video production and web development agency helping brands grow online.",
  openGraph: {
    title: "The Creators House — Digital Marketing Agency in Nepal",
    description:
      "Kathmandu-based digital marketing, branding, video production and web development agency helping brands grow online.",
  },
};

const services = [
  { icon: Megaphone, title: "Digital Marketing & Branding", desc: "Professional photoshoots, video ads and creative graphics built for Facebook, Instagram, LinkedIn, X and TikTok." },
  { icon: Users, title: "Social Media Management", desc: "We post, engage and analyze. Your accounts stay active, on-brand and growing every week." },
  { icon: Video, title: "Video Production & Photoshoot", desc: "Cinematic videos and high-quality photography that tell your brand story and stop the scroll." },
  { icon: BarChart3, title: "Social Media Ads", desc: "Paid campaigns on Meta and TikTok that drive visibility, leads and sales. Boosting handled end-to-end." },
  { icon: Search, title: "SEO", desc: "On-page and technical SEO so customers find you on Google when it matters most." },
  { icon: Globe, title: "Web Design & Development", desc: "Modern, responsive websites tailored to your business — fast, beautiful and built to convert." },
  { icon: Camera, title: "Social Media Audit", desc: "We analyze your accounts to surface strengths, gaps and quick wins for your online strategy." },
  { icon: Sparkles, title: "Influencer Marketing", desc: "Curated TikTok and Instagram creators to expand reach and build authentic brand awareness." },
];

const smPackages = [
  {
    name: "Basic", price: "Rs 25,000", posts: "14 posts / month",
    features: ["Facebook & Instagram handling", "Audience & hashtag research", "Content calendar", "6 Reels videos", "8 photos / graphics", "Festive post (complimentary)", "Month-end reporting"],
  },
  {
    name: "Standard", price: "Rs 50,000", posts: "18 posts / month", featured: true,
    features: ["Facebook, Instagram & TikTok", "Market trends & strategy", "Professional shoots", "10 Reels videos", "5 photos / graphics", "3 motion graphics", "Boosting report", "Influencer marketing (as needed)"],
  },
  {
    name: "Premium", price: "Rs 70,000", posts: "25 posts / month",
    features: ["Facebook, Instagram & TikTok", "Cinematic shoots with drone", "15 Reels videos", "6 photos / graphics", "4 motion graphics", "Festive graphics", "3 shoot days / month", "Influencer marketing included"],
  },
];

const prodPackages = [
  { name: "Basic", price: "Rs 40,000", videos: "8 videos / month", extras: ["Video shoot, edit, sound, color", "Logo design", "FB & IG handling", "Weekly updates", "1 site visit / month"] },
  { name: "Advanced", price: "Rs 80,000", videos: "18 videos / month", featured: true, extras: ["Everything in Basic", "Content plan (1 month free)", "Festive posts", "Competitor analysis", "15 stories / month", "2 site visits / month"] },
  { name: "Premium", price: "Rs 120,000", videos: "24 videos / month", extras: ["Everything in Advanced", "LinkedIn handling", "Daily stories", "Influencer marketing", "Q&A handling", "Up to 4 site visits / month"] },
];

const whyUs = [
  { title: "Expertise & Experience", desc: "4+ years building brands across Nepal with a team of cinematographers, designers and strategists." },
  { title: "Customized Strategy", desc: "Every plan is shaped around your brand identity, audience and growth goals — never copy-paste." },
  { title: "High-Quality Content", desc: "Professional-grade photography, videography and graphics shot on cameras and drones." },
  { title: "End-to-End Solutions", desc: "From brand identity to ad campaigns, you get one team handling the full marketing stack." },
];

const process = [
  { step: "01", title: "Discover", desc: "We learn your brand, audience and goals through a deep-dive workshop." },
  { step: "02", title: "Strategize", desc: "Custom content calendar, channel plan and creative direction tailored to you." },
  { step: "03", title: "Create", desc: "Professional shoots, edits and graphics produced by our in-house team." },
  { step: "04", title: "Grow", desc: "Publish, boost and optimize — with monthly reporting on what is working." },
];

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      {children}
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/15 text-xs font-medium uppercase tracking-widest mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <Section className="pt-20 pb-28 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Digital Marketing Agency · Kathmandu, Nepal</SectionLabel>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
            We build brands <br className="hidden md:block" />
            that{" "}
            <span className="relative inline-block">
              <span className="relative z-10">stop the scroll.</span>
              <span className="absolute inset-x-0 bottom-1 h-4 md:h-6 bg-accent -z-0" />
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
            The Creators House by Dhakal Digital Solutions — a full-service digital marketing, branding, video production and web development studio based in Kathmandu.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#packages"
              className="inline-flex items-center gap-1.5 bg-foreground text-background px-6 py-3.5 font-semibold rounded-md hover:bg-foreground/90"
            >
              See packages <ChevronRight className="w-4 h-4" />
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center gap-1.5 bg-accent text-foreground px-6 py-3.5 font-semibold rounded-md hover:opacity-90"
            >
              Start a project
            </Link>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border">
            {[["4+", "Years in the game"], ["20+", "Brands trusted us"], ["10", "Core services"], ["100%", "In-house team"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-4xl md:text-5xl font-bold">{n}</div>
                <div className="text-sm text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section className="border-b border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <SectionLabel>About us</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A creative house built for brands that want to grow online.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              <span className="text-foreground font-semibold">The Creators House</span>, operated under Dhakal Digital Solutions Pvt. Ltd., is a Kathmandu-based agency helping brands win attention, trust and customers across digital channels.
            </p>
            <p>
              With more than <span className="text-foreground font-semibold">4 years of experience</span> in online marketing, we have built a reputation for solving real branding and growth challenges — not just posting pretty pictures.
            </p>
            <p>
              Our team includes cinematographers, videographers, editors, content creators, writers, brand identity designers, creative designers, digital and social media marketers, and a creative director.
            </p>
          </div>
        </div>
      </Section>

      {/* WHY US */}
      <Section className="bg-foreground text-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Why us</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Your <span className="bg-accent text-foreground px-2">ideal partner</span> for marketing in Nepal.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px mt-16 bg-background/10">
            {whyUs.map((w, i) => (
              <div key={w.title} className="bg-foreground p-8">
                <div className="font-display text-accent text-sm font-bold">0{i + 1}</div>
                <h3 className="mt-4 text-xl font-bold">{w.title}</h3>
                <p className="mt-3 text-background/70 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" className="border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <SectionLabel>What we do</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
                Eight services. One team. Zero hand-offs.
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1.5 font-semibold hover:underline self-start md:self-end">
              View all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s) => (
              <Link href="/services" key={s.title} className="bg-background p-8 group hover:bg-accent transition-colors block">
                <s.icon className="w-8 h-8" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>How we work</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            A simple four-step process built for momentum.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {process.map((p) => (
              <div key={p.step} className="border border-border p-8 hover:border-foreground transition-colors">
                <div className="font-display text-6xl font-bold text-accent">{p.step}</div>
                <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SOCIAL MEDIA PACKAGES */}
      <Section id="packages" className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Packages · Social media marketing</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Pick a monthly plan. We handle the rest.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {smPackages.map((p) => (
              <div key={p.name} className={`p-8 border ${p.featured ? "bg-foreground text-background border-foreground" : "bg-background border-border"} flex flex-col`}>
                {p.featured && (
                  <div className="self-start mb-4 bg-accent text-foreground text-xs font-bold px-2 py-1 rounded">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold">{p.price}</span>
                  <span className={`text-sm ${p.featured ? "text-background/60" : "text-muted-foreground"}`}>/ month</span>
                </div>
                <div className={`text-sm mt-1 ${p.featured ? "text-accent" : "text-foreground/70"}`}>{p.posts}</div>
                <ul className="mt-8 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.featured ? "text-accent" : "text-foreground"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`mt-8 inline-flex items-center justify-center gap-1.5 px-5 py-3 font-semibold rounded-md ${p.featured ? "bg-accent text-foreground" : "bg-foreground text-background"} hover:opacity-90`}
                >
                  Choose {p.name} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRODUCTION PACKAGES */}
      <Section className="border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Packages · Production</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Cinematic video & photo production.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Promotional videos, event coverage and branded commercials — polished, premium and built to perform.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {prodPackages.map((p) => (
              <div key={p.name} className={`p-8 border-2 ${p.featured ? "border-accent bg-accent/10" : "border-border"}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  {p.featured && (
                    <span className="bg-accent text-foreground text-xs font-bold px-2 py-1">POPULAR</span>
                  )}
                </div>
                <div className="mt-4 font-display text-4xl font-bold">{p.price}</div>
                <div className="text-sm text-muted-foreground mt-1">{p.videos}</div>
                <ul className="mt-6 space-y-3">
                  {p.extras.map((e) => (
                    <li key={e} className="flex gap-3 text-sm">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Note: 13% Meta tax applies on ad boosting, plus 15% agency service charge. Influencer rates billed at actual + 15%.
          </p>
        </div>
      </Section>
      

      <ReelsGrid />
      {/* CLIENTS — marquee */}
      <Section id="work" className="bg-foreground text-background border-b border-border">
        <div className="max-w-7xl mx-auto mb-12">
          <SectionLabel>Trusted by</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            20+ brands across Nepal trust us with their story.
          </h2>
        </div>
        <ClientsMarquee />
      </Section>

      {/* NOTES */}
      <Section className="border-b border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <SectionLabel>Working with us</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Long-term thinking, short-term wins.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We are confident our strategic approach will significantly enhance your brand visibility and customer engagement. Modifications are always welcome.
            </p>
            <a
              href="https://www.instagram.com/the.creators.house"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 bg-foreground text-background px-6 py-3.5 font-semibold rounded-md hover:bg-foreground/90"
            >
              See our work <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <ul className="space-y-6">
            {[
              "Minimum engagement period is yearly — to build presence that compounds.",
              "Every campaign is coordinated with your team for proper functioning.",
              "Impromptu revisions and new strategies formulated as needed.",
              "Timely payments ensure smooth continuation and consistent progress.",
            ].map((n, i) => (
              <li key={i} className="flex gap-4 border-b border-border pb-6">
                <div className="font-display font-bold text-accent text-2xl shrink-0">0{i + 1}</div>
                <p className="text-foreground/80">{n}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}