import { Link } from "@tanstack/react-router";
import { ExternalLink, MapPin, Phone, SprayCan } from "lucide-react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-teal flex items-center justify-center shadow-teal flex-shrink-0">
                <SprayCan className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block font-display font-bold text-base text-white">
                  Tru Bond Cleaning
                </span>
                <span className="block text-[11px] text-teal-400 font-semibold tracking-wide uppercase">
                  Perth, WA
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Perth's most trusted bond cleaning company. We get your bond back
              — guaranteed.
            </p>
            <a
              href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%20Perth%2C%20I%27d%20like%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.whatsapp_button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg btn-whatsapp text-sm font-bold shadow-sm hover:shadow-md transition-all"
              aria-label="Message Tru Bond Cleaning Perth on WhatsApp"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              0488 841 883
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Our Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Get a Free Quote", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {[
                "End of Lease Cleaning",
                "Carpet Steam Cleaning",
                "Window Cleaning",
                "Oven & Kitchen Cleaning",
                "Bathroom Deep Cleaning",
                "Wall Washing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-white/70 hover:text-teal-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <address className="not-italic text-sm text-white/70 leading-relaxed">
                  Perth, Western Australia
                  <br />
                  Serving All Perth Suburbs
                </address>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="w-4 h-4 text-teal-400 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="https://wa.me/61488841883"
                  className="text-sm text-white/70 hover:text-teal-400 transition-colors"
                  aria-label="Call or WhatsApp 0488 841 883"
                >
                  0488 841 883 (WhatsApp)
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-teal-900/30 border border-teal-700/30">
              <p className="text-xs text-teal-300 font-semibold">
                ⏰ Available 7 Days a Week
              </p>
              <p className="text-xs text-white/60 mt-0.5">
                Same-day bookings available
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © {currentYear} Tru Bond Cleaning Perth. All rights reserved. Perth,
            WA.
          </p>
          <p className="text-xs text-white/40">
            Built with <span aria-label="love">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "trubondcleaningperth.com")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400/70 hover:text-teal-400 transition-colors inline-flex items-center gap-0.5"
            >
              caffeine.ai
              <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
