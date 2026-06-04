import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import studioReception from "@/assets/studio-reception-new.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lashes by Shazz, Kilimani Nairobi" },
      { name: "description", content: "Visit Lashes by Shazz at Silver Pool Suites, Jabavu Lane, Kilimani, Hurlingham, Nairobi. Call or email to book." },
      { property: "og:title", content: "Contact Lashes by Shazz" },
      { property: "og:description", content: "Get in touch to book your lash or microshading appointment." },
      { property: "og:image", content: studioReception.url },
    ],
    links: [
      { rel: "canonical", href: "/contact" },
    ],
  }),
  component: Contact,
});

const services = ["Classic Lashes", "Hybrid Lashes", "Volume Lashes", "Mega Volume Lashes", "Microshading"];

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0], day: "", time: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Lashes by Shazz!%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service}%0A*Day:* ${form.day}%0A*Time:* ${form.time}%0A*Note:* ${form.message}`;
    window.open(`https://wa.me/254769781771?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp to confirm your booking…");
  };

  return (
    <SiteLayout>
      <section className="relative">
        <img src={studioReception.url} alt="Lashes by Shazz studio reception" width={1200} height={480} className="w-full h-64 md:h-80 object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90 flex items-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-8">
            <div className="mb-3">
              <span className="inline-block px-4 py-1.5 bg-background/80 backdrop-blur-sm rounded-full text-primary font-display text-sm md:text-base tracking-wide border border-primary/20 shadow-sm">
                Lashes by Shazz
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl">Contact & Booking</h1>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-primary mb-2">Visit us</p>
            <h2 className="font-display text-3xl">We'd love to meet you.</h2>
          </div>

          <div className="space-y-5">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Main Studio</h3>
                <p className="text-muted-foreground text-sm">Silver Pool Suites, Jabavu Lane,<br/>Kilimani, Hurlingham, Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:sales@lashesbyshazz.com" className="text-muted-foreground text-sm hover:text-primary">sales@lashesbyshazz.com</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground text-sm">
                  <a href="tel:+254769781771" className="hover:text-primary block">+254 769 781 771</a>
                  <a href="tel:+254792066140" className="hover:text-primary block">+254 792 066 140</a>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="Studio location"
              src="https://www.google.com/maps?q=Silver+Pool+Suites+Jabavu+Lane+Kilimani+Nairobi&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={submit} className="bg-card border border-border rounded-2xl p-8 shadow-sm space-y-4 h-fit">
          <h2 className="font-display text-3xl">Book an appointment</h2>
          <p className="text-sm text-muted-foreground -mt-2">We'll confirm via WhatsApp.</p>

          <div>
            <Label htmlFor="cname">Full name</Label>
            <Input id="cname" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="cphone">Phone number</Label>
            <Input id="cphone" type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="cservice">Service of interest</Label>
            <select
              id="cservice"
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
              value={form.service}
              onChange={e => setForm({ ...form, service: e.target.value })}
            >
              {services.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="cday">Preferred day</Label>
              <Input id="cday" type="date" required value={form.day} onChange={e => setForm({ ...form, day: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="ctime">Preferred time</Label>
              <Input id="ctime" type="time" required value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} />
            </div>
          </div>
          <div>
            <Label htmlFor="cmsg">Note (optional)</Label>
            <Textarea id="cmsg" rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
          </div>
          <Button type="submit" size="lg" className="w-full">Send booking request</Button>
        </form>
      </section>
    </SiteLayout>
  );
}
