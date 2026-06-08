import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
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
const appCss = "/assets/styles-3d6y3FzS.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-display text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This page doesn't exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90", children: "Go home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border border-input bg-background px-4 py-2 text-sm", children: "Go home" })
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lashes by Shazz — Premium Lash Studio" },
      { name: "description", content: "Elegant lash extensions and microshading in Kilimani, Nairobi. Hygiene-first, professional lash artistry by Shazz." },
      { property: "og:title", content: "Lashes by Shazz — Premium Lash Studio" },
      { name: "twitter:title", content: "Lashes by Shazz — Premium Lash Studio" },
      { property: "og:site_name", content: "Lashes by Shazz" },
      { property: "og:description", content: "Elegant lash extensions and microshading in Kilimani, Nairobi. Hygiene-first, professional lash artistry by Shazz." },
      { name: "twitter:description", content: "Elegant lash extensions and microshading in Kilimani, Nairobi. Hygiene-first, professional lash artistry by Shazz." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/02848914-4427-4c90-a934-e961f12b7336/id-preview-d6fcdd89--d661a147-f253-42ce-a58e-4d635973dc1a.lovable.app-1780600630377.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/02848914-4427-4c90-a934-e961f12b7336/id-preview-d6fcdd89--d661a147-f253-42ce-a58e-4d635973dc1a.lovable.app-1780600630377.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
const BASE_URL = "https://soft-pink-lashes.lovable.app";
const Route$3 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const url$2 = "/images/lash-closeup-2.jpeg";
const lashCloseup2 = {
  url: url$2
};
const $$splitComponentImporter$2 = () => import("./services-DxL2QCmn.mjs");
const Route$2 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Lash Extensions & Microshading | Lashes by Shazz"
    }, {
      name: "description",
      content: "Classic, hybrid, volume and mega volume lash extensions, plus microshading. Book your appointment at Lashes by Shazz, Nairobi."
    }, {
      property: "og:title",
      content: "Services — Lashes by Shazz"
    }, {
      property: "og:description",
      content: "Premium lash extensions and microshading services in Nairobi."
    }, {
      property: "og:url",
      content: "https://soft-pink-lashes.lovable.app/services"
    }, {
      property: "og:image",
      content: lashCloseup2.url
    }],
    links: [{
      rel: "canonical",
      href: "https://soft-pink-lashes.lovable.app/services"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": ["Classic Lashes", "Hybrid Lashes", "Volume Lashes", "Mega Volume Lashes", "Microshading"].map((name) => ({
          "@type": "Service",
          "name": name,
          "provider": {
            "@type": "BeautySalon",
            "name": "Lashes by Shazz",
            "url": "https://soft-pink-lashes.lovable.app/"
          },
          "areaServed": "Nairobi",
          "serviceType": name
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const url$1 = "/images/studio-reception-new.jpg";
const studioReception = {
  url: url$1
};
const $$splitComponentImporter$1 = () => import("./contact-A2_i6HOz.mjs");
const Route$1 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Lashes by Shazz, Kilimani Nairobi"
    }, {
      name: "description",
      content: "Visit Lashes by Shazz at Silver Pool Suites, Jabavu Lane, Kilimani, Hurlingham, Nairobi. Call or email to book."
    }, {
      property: "og:title",
      content: "Contact Lashes by Shazz"
    }, {
      property: "og:description",
      content: "Get in touch to book your lash or microshading appointment."
    }, {
      property: "og:url",
      content: "https://soft-pink-lashes.lovable.app/contact"
    }, {
      property: "og:image",
      content: studioReception.url
    }],
    links: [{
      rel: "canonical",
      href: "https://soft-pink-lashes.lovable.app/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const url = "/images/lash-closeup-1.jpeg";
const lashCloseup1 = {
  url
};
const $$splitComponentImporter = () => import("./index-D-F718GH.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Lashes by Shazz — Premium Lash Extensions in Nairobi"
    }, {
      name: "description",
      content: "Hygiene-first lash extensions and microshading in Kilimani, Nairobi. Classic, hybrid, volume, and mega volume lashes by certified professionals."
    }, {
      property: "og:title",
      content: "Lashes by Shazz — Premium Lash Studio, Nairobi"
    }, {
      property: "og:description",
      content: "Elegant, expertly-applied lash extensions and microshading."
    }, {
      property: "og:url",
      content: "https://soft-pink-lashes.lovable.app/"
    }, {
      property: "og:image",
      content: lashCloseup1.url
    }],
    links: [{
      rel: "preload",
      as: "image",
      href: lashCloseup1.url,
      fetchpriority: "high"
    }, {
      rel: "canonical",
      href: "https://soft-pink-lashes.lovable.app/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        "name": "Lashes by Shazz",
        "image": lashCloseup1.url,
        "url": "https://soft-pink-lashes.lovable.app/",
        "telephone": "+254769781771",
        "email": "sales@lashesbyshazz.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Silver Pool Suites, Jabavu Lane",
          "addressLocality": "Kilimani, Hurlingham, Nairobi",
          "addressCountry": "KE"
        },
        "priceRange": "$$",
        "areaServed": "Nairobi"
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$3.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$4
});
const ServicesRoute = Route$2.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$4
});
const ContactRoute = Route$1.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  lashCloseup2 as a,
  lashCloseup1 as l,
  router as r,
  studioReception as s
};
