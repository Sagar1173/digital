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

import Link from "next/link"; 
import { ChevronRight } from "lucide-react"; 

const linkClass = "hover:opacity-60 transition-opacity"; 

export default function SiteHeader() { 
  return ( 
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur "> 
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16"> 
        
        {/* Logo Container */}
        <Link href="/" className="font-display font-bold text-lg tracking-tight flex items-center gap-2"> 
          {/* <div className="flex items-center">
            The Creators <span className="bg-accent px-1.5 ml-1">House</span> 
          </div> */}
          <img 
            src="/brandlogo.png" 
            alt="Brand Logo" 
            className="h-20 w-auto object-contain" 
          /> 
        </Link> 

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium"> 
          <Link href="/services" className={linkClass}>Services</Link> 
          <a href="/#packages" className={linkClass}>Packages</a> 
          <a href="/#work" className={linkClass}>Clients</a> 
          <Link href="/contact" className={linkClass}>Contact</Link> 
        </div> 

        {/* CTA Button */}
        <Link href="/quote" className="inline-flex items-center gap-1.5 bg-foreground text-background px-4 py-2 text-sm font-semibold hover:bg-foreground/90 rounded-md"> 
          Get a quote 
          <ChevronRight className="w-4 h-4" /> 
        </Link> 
      </nav> 
    </header> 
  ); 
}
