import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function BookingDialog({ service, trigger }: { service: string; trigger?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", day: "", time: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Lashes by Shazz!%0A%0AI'd like to book:%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${service}%0A*Day:* ${form.day}%0A*Time:* ${form.time}`;
    window.open(`https://wa.me/254769781771?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp to confirm your booking…");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? <Button>Book {service}</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Book {service}</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4 pt-2">
          <div>
            <Label htmlFor="name">Full name</Label>
            <Input id="name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="service">Service of interest</Label>
            <Input id="service" value={service} disabled readOnly />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="day">Preferred day</Label>
              <Input id="day" type="date" required value={form.day} onChange={e => setForm({ ...form, day: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="time">Preferred time</Label>
              <Input id="time" type="time" required value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} />
            </div>
          </div>
          <Button type="submit" className="w-full">Send booking request</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
