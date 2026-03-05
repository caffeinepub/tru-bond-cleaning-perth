import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function useSEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  canonical,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create meta tag
    function setMeta(
      selector: string,
      attr: string,
      value: string,
      content: string,
    ) {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    }

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta(
      'meta[property="og:title"]',
      "property",
      "og:title",
      ogTitle ?? title,
    );
    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      ogDescription ?? description,
    );
    setMeta('meta[property="og:type"]', "property", "og:type", ogType);
    setMeta(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      ogImage ? "summary_large_image" : "summary",
    );
    setMeta(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      ogTitle ?? title,
    );
    setMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      ogDescription ?? description,
    );

    if (ogImage) {
      setMeta('meta[property="og:image"]', "property", "og:image", ogImage);
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
    }

    if (canonical) {
      let link = document.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogType, canonical]);
}
