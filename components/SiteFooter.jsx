import Link  from "next/link";
import {  Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function SiteFooter() {
  return (
    <section className="bg-accent text-foreground py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] max-w-4xl">
          Let's build something worth watching.
        </h2>
        <p className="mt-8 text-lg max-w-2xl text-foreground/80">
          Tell us about your brand. We'll come back with a tailored plan and a quote usually within 48 hours.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/quote" className="inline-flex items-center gap-1.5 bg-foreground text-background px-6 py-3.5 font-semibold rounded-md hover:bg-foreground/90">
            Get a quote <ChevronRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-1.5 bg-background text-foreground px-6 py-3.5 font-semibold rounded-md border border-foreground/10 hover:border-foreground">
            Contact us
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <a href="mailto:creatorshouseofficial@gmail.com" className="bg-background p-8 border border-foreground/10 hover:border-foreground transition-colors group">
            <Mail className="w-6 h-6" />
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-6">Email</div>
            <div className="mt-2 font-semibold text-lg break-all group-hover:underline">creatorshouseofficial@gmail.com</div>
          </a>
          <a href="tel:+9779863200123" className="bg-background p-8 border border-foreground/10 hover:border-foreground transition-colors group">
            <Phone className="w-6 h-6" />
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-6">Phone</div>
            <div className="mt-2 font-semibold text-lg group-hover:underline">+977 9863200123</div>
          </a>
          <div className="bg-background p-8 border border-foreground/10">
            <MapPin className="w-6 h-6" />
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-6">Studio</div>
            <div className="mt-2 font-semibold text-lg">Tukucha Marg, Baluwatar 4, Kathmandu</div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-foreground/20 flex flex-col md:flex-row justify-between gap-6 text-sm">
          <div>
            {/* <div className="font-display font-bold text-lg">The Creators House</div>
            <div className="text-foreground/70 mt-1">by Dhakal Digital Solutions Pvt. Ltd.</div> */}
            <Link href="/" className="font-display font-bold text-lg tracking-tight flex items-center gap-2"> 
          {/* <div className="flex items-center">
            The Creators <span className="bg-accent px-1.5 ml-1">House</span> 
          </div> */}
          <img 
            src="/brandlogo.png" 
            alt="Brand Logo" 
            className="h-26 w-auto object-contain" 
          /> 
        </Link> 
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/the.creators.house" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
              <FiInstagram className="w-4 h-4" /> @the.creators.house
            </a>
            <span className="text-foreground/60">© {new Date().getFullYear()} All rights reserved</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
