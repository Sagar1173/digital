"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";

const navItems = [
  { href: "/services", label: "Services", type: "link" },
  { href: "/#packages", label: "Packages", type: "anchor" },
  { href: "/#work", label: "Clients", type: "anchor" },
  { href: "/contact", label: "Contact", type: "link" },
];

const linkClass = "text-sm font-medium hover:opacity-60 transition-opacity";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="site-container relative flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2"
          aria-label="The Creators House home"
        >
          <img
            src="/brandlogo.png"
            alt="The Creators House"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        <div className="hidden lg:flex items-center justify-center gap-8 text-sm font-medium">
          {navItems.map((item) =>
            item.type === "link" ? (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ),
          )}
        </div>

        <Link
          href="/quote"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background hover:bg-foreground/90"
        >
          Get a quote
          <ChevronRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:border-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div
          id="mobile-navigation"
          className={`absolute inset-x-4 top-full overflow-hidden border-x border-b border-border bg-background shadow-lg transition-all duration-300 ease-out sm:inset-x-6 lg:hidden ${open
              ? "max-h-96 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-1 p-4">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 text-base font-semibold hover:bg-muted"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 text-base font-semibold hover:bg-muted"
                >
                  {item.label}
                </a>
              ),
            )}
            <Link
              href="/quote"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-md bg-foreground px-5 py-3 font-semibold text-background hover:bg-foreground/90"
            >
              Get a quote
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}





// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

// const linkClass = "hover:opacity-60 transition-opacity";

// export default function SiteHeader() {
//   return (
//     <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
//       <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
//         <Link href="/" className="font-display font-bold text-lg tracking-tight">
//           The Creators <span className="bg-accent px-1.5">House</span>
//           <img src="/brandlogo.png" alt="Brand Logo" />
//         </Link>
//         <div className="hidden md:flex items-center gap-8 text-sm font-medium">
//           <Link href="/services" className={linkClass}>Services</Link>
//           <a href="/#packages" className={linkClass}>Packages</a>
//           <a href="/#work" className={linkClass}>Clients</a>
//           <Link href="/contact" className={linkClass}>Contact</Link>
//         </div>
//         <Link href="/quote" className="inline-flex items-center gap-1.5 bg-foreground text-background px-4 py-2 text-sm font-semibold hover:bg-foreground/90 rounded-md">
//           Get a quote <ChevronRight className="w-4 h-4" />
//         </Link>
//       </nav>
//     </header>
//   );
// }

// import Link from "next/link"; 
// import { ChevronRight } from "lucide-react"; 

// const linkClass = "hover:opacity-60 transition-opacity"; 

// export default function SiteHeader() { 
//   return ( 
//     <header className="sticky top-0 z-50 bg-background/90 backdrop-blur "> 
//       <nav className="max-w-7xl mx-auto flex items-center justify-between h-16"> 
        
//         {/* Logo Container */}
//         <Link href="/" className="font-display font-bold text-lg tracking-tight flex items-center gap-2"> 
//           {/* <div className="flex items-center">
//             The Creators <span className="bg-accent px-1.5 ml-1">House</span> 
//           </div> */}
//           <img 
//             src="/brandlogo.png" 
//             alt="Brand Logo" 
//             className="h-20 w-auto object-contain" 
//           /> 
//         </Link> 

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center gap-8 text-sm font-medium"> 
//           <Link href="/services" className={linkClass}>Services</Link> 
//           <a href="/#packages" className={linkClass}>Packages</a> 
//           <a href="/#work" className={linkClass}>Clients</a> 
//           <Link href="/contact" className={linkClass}>Contact</Link> 
//         </div> 

//         {/* CTA Button */}
//         <Link href="/quote" className="inline-flex items-center gap-1.5 bg-foreground text-background px-4 py-2 text-sm font-semibold hover:bg-foreground/90 rounded-md"> 
//           Get a quote 
//           <ChevronRight className="w-4 h-4" /> 
//         </Link> 
//       </nav> 
//     </header> 
//   ); 
// }
