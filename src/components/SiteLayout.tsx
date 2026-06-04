import { Link, Outlet } from "@tanstack/react-router";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/254769781771?text=Hi%20Lashes%20by%20Shazz%2C%20I%27d%20like%20to%20book%20an%20appointment.";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-wide">
          Lashes <span className="italic text-primary">by Shazz</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.15em]">
          <Link to="/" className="hover:text-primary transition" activeProps={{ className: "text-primary" }}>Home</Link>
          <Link to="/services" className="hover:text-primary transition" activeProps={{ className: "text-primary" }}>Services</Link>
          <Link to="/contact" className="hover:text-primary transition" activeProps={{ className: "text-primary" }}>Contact</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background flex flex-col px-6 py-4 gap-3 text-sm uppercase tracking-wider">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-display text-xl mb-2">Lashes by Shazz</h3>
          <p className="text-muted-foreground">Elegant lash artistry & microshading in the heart of Nairobi.</p>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-xs mb-3 text-muted-foreground">Studio</h4>
          <p>Silver Pool Suites, Jabavu Lane,<br/>Kilimani, Hurlingham, Nairobi</p>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-xs mb-3 text-muted-foreground">Contact</h4>
          <p>sales@lashesbyshazz.com<br/>+254 769 781 771<br/>+254 792 066 140</p>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground py-4 border-t border-border">© {new Date().getFullYear()} Lashes by Shazz</div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-xl hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

export default function SiteLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children ?? <Outlet />}</main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
