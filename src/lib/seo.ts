// Lightweight per-route SEO helper: title, description, canonical, og:*, JSON-LD
const SITE = "https://photosurfpaysbasque.fr";

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(schemas: object[]) {
  // Remove previous route-injected JSON-LD
  document.head
    .querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"][data-seo="route"]')
    .forEach((el) => el.remove());
  schemas.forEach((schema) => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-seo", "route");
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
  });
}

export function setSeo(opts: {
  title: string;
  description: string;
  path: string; // e.g. "/photographe-surf-anglet"
  keywords?: string;
  image?: string; // absolute or root-relative; will be normalized to absolute
  type?: string; // og:type, default "website"
  jsonLd?: object[];
}) {
  const url = `${SITE}${opts.path}`;
  document.title = opts.title;
  setMeta("name", "description", opts.description);
  setLink("canonical", url);
  setMeta("property", "og:title", opts.title);
  setMeta("property", "og:description", opts.description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:type", opts.type || "website");
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", opts.title);
  setMeta("name", "twitter:description", opts.description);
  if (opts.image) {
    const absolute = opts.image.startsWith("http")
      ? opts.image
      : `${SITE}${opts.image.startsWith("/") ? "" : "/"}${opts.image}`;
    setMeta("property", "og:image", absolute);
    setMeta("name", "twitter:image", absolute);
  }
  if (opts.keywords) {
    setMeta("name", "keywords", opts.keywords);
  }
  if (opts.jsonLd && opts.jsonLd.length > 0) {
    setJsonLd(opts.jsonLd);
  } else {
    setJsonLd([]);
  }
}

// Shared schema builders ------------------------------------------------------

export const buildLocalBusiness = (opts: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Photographer"],
  name: opts.name,
  description: opts.description,
  url: `${SITE}${opts.path}`,
  telephone: "+33695349187",
  image: opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE}${opts.image.startsWith("/") ? "" : "/"}${opts.image}`
    : undefined,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Anglet",
    postalCode: "64600",
    addressRegion: "Nouvelle-Aquitaine",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.505, longitude: -1.541 },
  areaServed: [
    { "@type": "City", name: "Anglet" },
    { "@type": "City", name: "Biarritz" },
    { "@type": "City", name: "Bidart" },
    { "@type": "City", name: "Guéthary" },
    { "@type": "City", name: "Hossegor" },
  ],
  priceRange: "€€",
});

export const buildFaqPage = (items: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export const buildBreadcrumbs = (
  items: { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE}${it.path}`,
  })),
});
