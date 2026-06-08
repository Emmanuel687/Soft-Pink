import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, B as Button, c as cn } from "./button-CFPqLxdE.mjs";
import { L as Label, I as Input } from "./label-8O9pbKVS.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { s as studioReception } from "./router-Xn5vE3VP.mjs";
import { M as MapPin, a as Mail, P as Phone } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const services = ["Classic Lashes", "Hybrid Lashes", "Volume Lashes", "Mega Volume Lashes", "Microshading"];
function Contact() {
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    service: services[0],
    day: "",
    time: "",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    const msg = `Hi Lashes by Shazz!%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service}%0A*Day:* ${form.day}%0A*Time:* ${form.time}%0A*Note:* ${form.message}`;
    window.open(`https://wa.me/254769781771?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp to confirm your booking…");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: studioReception.url, alt: "Lashes by Shazz studio reception", width: 1200, height: 480, className: "w-full h-64 md:h-80 object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90 flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto w-full px-6 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-4 py-1.5 bg-background/80 backdrop-blur-sm rounded-full text-primary font-display text-sm md:text-base tracking-wide border border-primary/20 shadow-sm", children: "Lashes by Shazz" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl", children: "Contact & Booking" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "uppercase tracking-[0.3em] text-xs text-primary mb-2", children: "Visit us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "We'd love to meet you." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium", children: "Main Studio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
                "Silver Pool Suites, Jabavu Lane,",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Kilimani, Hurlingham, Nairobi, Kenya"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-primary shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sales@lashesbyshazz.com", className: "text-muted-foreground text-sm hover:text-primary", children: "sales@lashesbyshazz.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-primary shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+254769781771", className: "hover:text-primary block", children: "+254 769 781 771" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+254792066140", className: "hover:text-primary block", children: "+254 792 066 140" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Studio location", src: "https://www.google.com/maps?q=Silver+Pool+Suites+Jabavu+Lane+Kilimani+Nairobi&output=embed", className: "w-full h-64 border-0", loading: "lazy" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "bg-card border border-border rounded-2xl p-8 shadow-sm space-y-4 h-fit", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "Book an appointment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground -mt-2", children: "We'll confirm via WhatsApp." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cname", children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cname", required: true, value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cphone", children: "Phone number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cphone", type: "tel", required: true, value: form.phone, onChange: (e) => setForm({
            ...form,
            phone: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cservice", children: "Service of interest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { id: "cservice", className: "w-full h-10 rounded-md border border-input bg-background px-3 text-sm", value: form.service, onChange: (e) => setForm({
            ...form,
            service: e.target.value
          }), children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cday", children: "Preferred day" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cday", type: "date", required: true, value: form.day, onChange: (e) => setForm({
              ...form,
              day: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ctime", children: "Preferred time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "ctime", type: "time", required: true, value: form.time, onChange: (e) => setForm({
              ...form,
              time: e.target.value
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cmsg", children: "Note (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "cmsg", rows: 3, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", className: "w-full", children: "Send booking request" })
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
