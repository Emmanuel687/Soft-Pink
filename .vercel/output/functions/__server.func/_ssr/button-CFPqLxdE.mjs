import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { X, c as Menu, d as MessageCircle } from "../_libs/lucide-react.mjs";
const WHATSAPP_URL = "https://wa.me/254769781771?text=Hi%20Lashes%20by%20Shazz%2C%20I%27d%20like%20to%20book%20an%20appointment.";
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-display text-2xl tracking-wide", children: [
        "Lashes ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary", children: "by Shazz" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.15em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary transition", activeProps: { className: "text-primary" }, children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-primary transition", activeProps: { className: "text-primary" }, children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary transition", activeProps: { className: "text-primary" }, children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden", onClick: () => setOpen(!open), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "md:hidden border-t border-border bg-background flex flex-col px-6 py-4 gap-3 text-sm uppercase tracking-wider", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", onClick: () => setOpen(false), children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", onClick: () => setOpen(false), children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", onClick: () => setOpen(false), children: "Contact" })
    ] })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 border-t border-border bg-secondary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-2", children: "Lashes by Shazz" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Elegant lash artistry & microshading in the heart of Nairobi." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "uppercase tracking-widest text-xs mb-3 text-muted-foreground", children: "Studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Silver Pool Suites, Jabavu Lane,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Kilimani, Hurlingham, Nairobi"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "uppercase tracking-widest text-xs mb-3 text-muted-foreground", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "sales@lashesbyshazz.com",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "+254 769 781 771",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "+254 792 066 140"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-xs text-muted-foreground py-4 border-t border-border", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Lashes by Shazz"
    ] })
  ] });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: WHATSAPP_URL,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-xl hover:scale-110 transition-transform",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6" })
    }
  );
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: children ?? /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
export {
  Button as B,
  SiteLayout as S,
  cn as c
};
