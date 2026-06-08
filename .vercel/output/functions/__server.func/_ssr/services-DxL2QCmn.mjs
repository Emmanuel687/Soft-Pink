import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteLayout, B as Button, c as cn } from "./button-CFPqLxdE.mjs";
import { R as Root, T as Trigger, P as Portal, C as Content, a as Close, b as Title, O as Overlay, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { L as Label, I as Input } from "./label-8O9pbKVS.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { l as lashCloseup1, a as lashCloseup2 } from "./router-Xn5vE3VP.mjs";
import { l as lashTechWork } from "./lash-tech-work.asset-DnMhQfZR.mjs";
import { X } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const Dialog = Root;
const DialogTrigger = Trigger;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
function BookingDialog({ service, trigger }) {
  const [open, setOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({ name: "", phone: "", day: "", time: "" });
  const submit = (e) => {
    e.preventDefault();
    const msg = `Hi Lashes by Shazz!%0A%0AI'd like to book:%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${service}%0A*Day:* ${form.day}%0A*Time:* ${form.time}`;
    window.open(`https://wa.me/254769781771?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp to confirm your booking…");
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: trigger ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { children: [
      "Book ",
      service
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-2xl", children: [
        "Book ",
        service
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", required: true, value: form.name, onChange: (e) => setForm({ ...form, name: e.target.value }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", type: "tel", required: true, value: form.phone, onChange: (e) => setForm({ ...form, phone: e.target.value }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "service", children: "Service of interest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "service", value: service, disabled: true, readOnly: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "day", children: "Preferred day" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "day", type: "date", required: true, value: form.day, onChange: (e) => setForm({ ...form, day: e.target.value }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "time", children: "Preferred time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "time", type: "time", required: true, value: form.time, onChange: (e) => setForm({ ...form, time: e.target.value }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", children: "Send booking request" })
      ] })
    ] })
  ] });
}
const lashServices = [{
  name: "Classic Lashes",
  image: lashCloseup1.url,
  desc: "A natural, mascara-like effect achieved by applying individual semi-permanent lash extensions for a subtle and elegant look."
}, {
  name: "Hybrid Lashes",
  image: lashCloseup2.url,
  desc: "A blend of classic and volume lashes — 70% individual lashes with 30% volume lashes (2D–4D) for added fluff and definition."
}, {
  name: "Volume Lashes",
  image: lashTechWork.url,
  desc: "Multiple lightweight mink extensions applied to each natural lash, creating a fuller, more voluminous appearance ranging from 3D to 7D."
}, {
  name: "Mega Volume Lashes",
  image: lashCloseup1.url,
  desc: "A dramatic, dense look using Russian Volume lash extensions. Specialized mink lashes deliver the fullest, darkest lash line — 6D to 10D volume."
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-6 pt-16 pb-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "uppercase tracking-[0.3em] text-xs text-primary mb-4", children: "Our Menu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "Choose your look, then tap to book. Every set is custom-mapped to your eyes." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-6 pb-10 space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl border-b border-border pb-3", children: "Lash Extensions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: lashServices.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-card rounded-2xl overflow-hidden shadow-sm border border-border flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.name, width: 800, height: 480, loading: "lazy", className: "aspect-[5/3] object-cover w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm leading-relaxed flex-1", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingDialog, { service: s.name, trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full", children: [
            "Book ",
            s.name
          ] }) }) })
        ] })
      ] }, s.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl border-b border-border pb-3 mb-8", children: "Microshading" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-card rounded-2xl overflow-hidden shadow-sm border border-border grid md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lashTechWork.url, alt: "Microshading service", width: 800, height: 640, loading: "lazy", className: "aspect-[5/4] md:aspect-auto object-cover w-full h-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl", children: "Microshading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 leading-relaxed", children: "A soft, powdered brow finish that mimics the look of beautifully filled-in makeup. Semi-permanent, hygienic, and tailored to your natural brow shape and skin tone for a flawless wake-up-and-go look." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingDialog, { service: "Microshading", trigger: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", children: "Book Microshading" }) }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  Services as component
};
