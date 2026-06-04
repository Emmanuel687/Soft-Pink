import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";
import { BookingDialog } from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";
import lashCloseup1 from "@/assets/lash-closeup-1.asset.json";
import lashCloseup2 from "@/assets/lash-closeup-2.asset.json";
import lashTechWork from "@/assets/lash-tech-work.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lash Extensions & Microshading | Lashes by Shazz" },
      { name: "description", content: "Classic, hybrid, volume and mega volume lash extensions, plus microshading. Book your appointment at Lashes by Shazz, Nairobi." },
      { property: "og:title", content: "Services — Lashes by Shazz" },
      { property: "og:description", content: "Premium lash extensions and microshading services in Nairobi." },
      { property: "og:url", content: "https://soft-pink-lashes.lovable.app/services" },
      { property: "og:image", content: lashCloseup2.url },
    ],
    links: [
      { rel: "canonical", href: "https://soft-pink-lashes.lovable.app/services" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            "Classic Lashes",
            "Hybrid Lashes",
            "Volume Lashes",
            "Mega Volume Lashes",
            "Microshading",
          ].map((name) => ({
            "@type": "Service",
            "name": name,
            "provider": {
              "@type": "BeautySalon",
              "name": "Lashes by Shazz",
              "url": "https://soft-pink-lashes.lovable.app/",
            },
            "areaServed": "Nairobi",
            "serviceType": name,
          })),
        }),
      },
    ],
  }),
  component: Services,
});

const lashServices = [
  {
    name: "Classic Lashes",
    image: lashCloseup1.url,
    desc: "A natural, mascara-like effect achieved by applying individual semi-permanent lash extensions for a subtle and elegant look.",
  },
  {
    name: "Hybrid Lashes",
    image: lashCloseup2.url,
    desc: "A blend of classic and volume lashes — 70% individual lashes with 30% volume lashes (2D–4D) for added fluff and definition.",
  },
  {
    name: "Volume Lashes",
    image: lashTechWork.url,
    desc: "Multiple lightweight mink extensions applied to each natural lash, creating a fuller, more voluminous appearance ranging from 3D to 7D.",
  },
  {
    name: "Mega Volume Lashes",
    image: lashCloseup1.url,
    desc: "A dramatic, dense look using Russian Volume lash extensions. Specialized mink lashes deliver the fullest, darkest lash line — 6D to 10D volume.",
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-primary mb-4">Our Menu</p>
        <h1 className="font-display text-5xl md:text-6xl">Services</h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Choose your look, then tap to book. Every set is custom-mapped to your eyes.</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-10 space-y-10">
        <h2 className="font-display text-3xl border-b border-border pb-3">Lash Extensions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {lashServices.map((s) => (
            <article key={s.name} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border flex flex-col">
              <img src={s.image} alt={s.name} width={800} height={480} loading="lazy" className="aspect-[5/3] object-cover w-full" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl">{s.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-5">
                  <BookingDialog service={s.name} trigger={<Button className="w-full">Book {s.name}</Button>} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl border-b border-border pb-3 mb-8">Microshading</h2>
        <article className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border grid md:grid-cols-2">
          <img src={lashTechWork.url} alt="Microshading service" width={800} height={640} loading="lazy" className="aspect-[5/4] md:aspect-auto object-cover w-full h-full" />
          <div className="p-8 flex flex-col justify-center">
            <h3 className="font-display text-3xl">Microshading</h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              A soft, powdered brow finish that mimics the look of beautifully filled-in makeup. Semi-permanent, hygienic, and tailored to your natural brow shape and skin tone for a flawless wake-up-and-go look.
            </p>
            <div className="mt-6">
              <BookingDialog service="Microshading" trigger={<Button size="lg">Book Microshading</Button>} />
            </div>
          </div>
        </article>
      </section>
    </SiteLayout>
  );
}
