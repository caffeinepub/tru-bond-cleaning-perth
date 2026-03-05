import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  canonical?: string;
  robots?: string;
}

export function useSEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  ogType = "website",
  canonical,
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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

    // Helper to set or create link tag
    function setLink(rel: string, href: string) {
      let el = document.querySelector(
        `link[rel="${rel}"]`,
      ) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    }

    // Core
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", robots);
    setMeta('meta[name="googlebot"]', "name", "googlebot", robots);

    if (keywords) {
      setMeta('meta[name="keywords"]', "name", "keywords", keywords);
    }

    // Open Graph
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

    if (ogImage) {
      setMeta('meta[property="og:image"]', "property", "og:image", ogImage);
      if (ogImageAlt) {
        setMeta(
          'meta[property="og:image:alt"]',
          "property",
          "og:image:alt",
          ogImageAlt,
        );
      }
    }

    // Twitter Card
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
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
      if (ogImageAlt) {
        setMeta(
          'meta[name="twitter:image:alt"]',
          "name",
          "twitter:image:alt",
          ogImageAlt,
        );
      }
    }

    // Canonical
    if (canonical) {
      setLink("canonical", canonical);
    }
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogImageAlt,
    ogType,
    canonical,
    robots,
  ]);
}
