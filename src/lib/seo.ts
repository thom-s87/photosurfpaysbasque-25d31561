// Lightweight per-route SEO helper: title, description, canonical, og:*
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

export function setSeo(opts: {
  title: string;
  description: string;
  path: string; // e.g. "/photographe-surf-anglet"
}) {
  const url = `${SITE}${opts.path}`;
  document.title = opts.title;
  setMeta("name", "description", opts.description);
  setLink("canonical", url);
  setMeta("property", "og:title", opts.title);
  setMeta("property", "og:description", opts.description);
  setMeta("property", "og:url", url);
}
