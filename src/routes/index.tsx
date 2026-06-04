import { createFileRoute, Link } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Sparkles, ShieldCheck, Award, Heart } from "lucide-react";
import lashCloseup1 from "@/assets/lash-closeup-1.asset.json";
import lashCloseup2 from "@/assets/lash-closeup-2.asset.json";
import lashTechWork from "@/assets/lash-tech-work.asset.json";
import studioRoom from "@/assets/studio-room.asset.json";
import studioReception from "@/assets/studio-reception.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lashes by Shazz — Premium Lash Extensions in Nairobi" },
      { name: "description", content: "Hygiene-first lash extensions and microshading in Kilimani, Nairobi. Classic, hybrid, volume, and mega volume lashes by certified professionals." },
      { property: "og:title", content: "Lashes by Shazz — Premium Lash Studio, Nairobi" },
      { property: "og:description", content: "Elegant, expertly-applied lash extensions and microshading." },
      { property: "og:image", content: lashCloseup1.url },
    ],
    links: [
      { rel: "preload", as: "image", href: lashCloseup1.url, fetchpriority: "high" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blush via-background to-secondary/60" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-primary mb-4">Nairobi · Kilimani</p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-foreground">
              Lashes that whisper <em className="text-primary">elegance.</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Premium semi-permanent lash extensions and microshading, handcrafted with surgical-grade hygiene and an artist's eye.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/services">Book a session</Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/contact">Visit the studio</Link></Button>
            </div>
          </div>
          <div className="relative">
            <img src={lashCloseup1.url} alt="Close-up of classic lash extensions" width={640} height={800} fetchPriority="high" className="rounded-2xl shadow-2xl aspect-[4/5] object-cover w-full" />
            <img src={lashCloseup2.url} alt="Volume lash extensions detail" width={320} height={400} loading="lazy" className="absolute -bottom-8 -left-8 w-1/2 rounded-2xl shadow-xl border-4 border-background hidden md:block" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {[
          { icon: ShieldCheck, t: "Hygiene First", d: "Sterilized tools, single-use applicators, and a sanitized suite for every client." },
          { icon: Award, t: "Certified Artistry", d: "Trained lash technicians with years of refined, detail-obsessed craft." },
          { icon: Heart, t: "Made for You", d: "Custom mapping & curl selection to flatter your unique eye shape." },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="text-center p-6">
            <Icon className="w-10 h-10 mx-auto text-primary" strokeWidth={1.4} />
            <h3 className="font-display text-2xl mt-4">{t}</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{d}</p>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={lashTechWork.url} alt="Lash technician at work" width={600} height={800} loading="lazy" className="rounded-xl aspect-[3/4] object-cover row-span-2 shadow-lg" />
            <img src={studioReception.url} alt="Lashes by Shazz studio reception" width={400} height={400} loading="lazy" className="rounded-xl aspect-square object-cover shadow-lg" />
            <img src={studioRoom.url} alt="Lashes by Shazz treatment room" width={400} height={400} loading="lazy" className="rounded-xl aspect-square object-cover shadow-lg" />
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-primary mb-4">About the studio</p>
            <h2 className="font-display text-4xl md:text-5xl">A sanctuary for your lashes.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Lashes by Shazz is a boutique lash studio tucked inside Silver Pool Suites, Hurlingham. Every appointment unfolds in a calm, immaculately clean suite — pink towels, soft lighting, and the quiet hum of an artist at work.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our certified technicians follow strict sanitation protocols, use premium mink lashes, and tailor every set to your features. The result: lashes that feel weightless and look effortlessly polished.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <Sparkles className="w-5 h-5 text-gold" />
              <span>Trusted by hundreds of Nairobi clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Ready to flutter?</h2>
        <p className="mt-4 text-muted-foreground">Browse our services and reserve your seat in the suite.</p>
        <Button asChild size="lg" className="mt-8"><Link to="/services">Explore services</Link></Button>
      </section>
    </SiteLayout>
  );
}
