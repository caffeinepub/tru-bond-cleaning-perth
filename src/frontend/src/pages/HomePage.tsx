import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  Leaf,
  Phone,
  Shield,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSEO } from "../hooks/useSEO";

// JSON-LD Structured Data — injected into <head> via useEffect to avoid dangerouslySetInnerHTML lint
function useJsonLd() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Tru Bond Cleaning Perth",
      description:
        "Professional bond cleaning services in Perth, WA with 100% Bond Back Guarantee",
      url: "https://trubondcleaningbrisbane.com",
      telephone: "+61488841883",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Perth",
        addressRegion: "WA",
        addressCountry: "AU",
      },
      areaServed: "Perth, Western Australia",
      serviceType: "Bond Cleaning",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "142",
      },
    };

    const existing = document.querySelector(
      'script[type="application/ld+json"]',
    );
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);
}

const services = [
  {
    id: 1,
    title: "End of Lease Cleaning",
    description:
      "Full property deep clean from top to bottom. Kitchen, bathrooms, floors, windows, walls, and more — all done to the REIWA checklist.",
    icon: "🏠",
    href: "/services#end-of-lease",
  },
  {
    id: 2,
    title: "Carpet Steam Cleaning",
    description:
      "Hot water extraction removes deep stains, dirt, and allergens. Your carpets come out fresh, clean, and inspection-ready.",
    icon: "🧹",
    href: "/services#carpet",
  },
  {
    id: 3,
    title: "Window Cleaning",
    description:
      "Streak-free windows inside and out. We clean frames, tracks, sills, and fly screens too.",
    icon: "🪟",
    href: "/services#windows",
  },
  {
    id: 4,
    title: "Oven & Kitchen Deep Clean",
    description:
      "Ovens, rangehoods, stovetops, and splashbacks degreased until spotless. We handle the hardest part of the clean.",
    icon: "🍳",
    href: "/services#oven",
  },
  {
    id: 5,
    title: "Bathroom & Toilet Cleaning",
    description:
      "Grout scrubbing, limescale removal, mould treatment, shower screens, and deep toilet clean. No soap scum survives.",
    icon: "🚿",
    href: "/services#bathroom",
  },
  {
    id: 6,
    title: "Wall Washing & Spot Cleaning",
    description:
      "Scuff marks, crayon, pen — we use sugar soap to get walls inspection-clean. Fair wear and tear? We know the difference.",
    icon: "🖼️",
    href: "/services#walls",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Subiaco, Perth",
    rating: 5,
    text: "Tru Bond Cleaning did an absolutely brilliant job on our 3-bedroom house in Subiaco. The oven looked brand new and the carpets came up a treat. We got our full bond back — no dramas!",
    date: "2 weeks ago",
  },
  {
    name: "Josh & Priya T.",
    location: "Mount Lawley, Perth",
    rating: 5,
    text: "Honest, reliable, and thorough. They arrived right on time and worked their way through the whole house methodically. The property manager was gobsmacked — passed inspection first go. Highly recommend!",
    date: "1 month ago",
  },
  {
    name: "Debbie K.",
    location: "Fremantle, Perth",
    rating: 5,
    text: "I was stressing about getting my bond back but Tru Bond Cleaning made it so easy. The team was polite, professional, and genuinely cared about doing a good job. Best money I've spent on moving out!",
    date: "3 weeks ago",
  },
];

const faqs = [
  {
    id: 1,
    question: "What is Bond Cleaning and Why is it Required?",
    answer:
      "Bond cleaning (also called end of lease cleaning) is a thorough, deep clean of a rental property when a tenant moves out. Landlords and property managers in Perth require it to make sure the property is returned in the same condition as when you first moved in. If the property is not cleaned properly, the landlord can use your bond money to pay for professional cleaning. So getting a proper bond clean helps you get your full bond back.",
  },
  {
    id: 2,
    question: "Why is Bond Cleaning Important?",
    answer:
      "Bond cleaning is important because it protects your money. Your bond (security deposit) can be thousands of dollars. A professional bond clean makes sure the property meets the real estate agent's inspection checklist. This gives you the best chance of getting every single dollar of your bond returned. Tru Bond Cleaning Perth follows the official REIWA (Real Estate Institute of Western Australia) checklist.",
  },
  {
    id: 3,
    question: "How Much for a Bond Clean in Perth?",
    answer:
      "Bond cleaning in Perth typically costs between $250 and $700, depending on the size of the property and its condition. A 1-bedroom unit usually costs around $250–$350. A 3-bedroom house costs around $400–$550. A 4-bedroom house with carpet cleaning can cost $600–$750. Tru Bond Cleaning Perth offers free quotes — just fill in the form or message us on WhatsApp.",
  },
  {
    id: 4,
    question: "What is Full Bond Cleaning?",
    answer:
      "Full bond cleaning covers every part of the property: kitchen (oven, rangehood, stovetop, benchtops), bathrooms and toilets, all floors (vacuuming and mopping), windows (inside), walls (spot cleaning), light fittings, skirting boards, door frames, cupboards inside and out, and laundry. If you add carpet steam cleaning, that covers the carpets too. A full bond clean is designed to pass the real estate inspection.",
  },
  {
    id: 5,
    question: "Which Are the Top Rated Bond Cleaning Companies Near Me?",
    answer: "",
    isCompanyList: true,
    companies: [
      {
        rank: 1,
        name: "End of Lease Cleaning Perth",
        website: "https://www.endofleasecleaningperth.com.au",
        description:
          "End of Lease Cleaning Perth has been serving Perth renters for over 10 years. They offer a satisfaction guarantee and follow the REIWA inspection checklist. Their team is fully insured and uses eco-friendly products. They cover all Perth suburbs and offer same-day booking options. Their transparent pricing and reliable service have earned them hundreds of five-star reviews from happy customers across the Perth metro area. A trusted name for bond cleans.",
      },
      {
        rank: 2,
        name: "Jim's Cleaning Perth",
        website: "https://www.jimscleaning.com.au",
        description:
          "Jim's Cleaning is one of Australia's most recognised cleaning brands. Their Perth franchise offers professional bond cleaning with a satisfaction guarantee. Fully insured cleaners follow a detailed checklist to meet real estate standards. Jim's is known for reliable, consistent service across suburbs. They offer carpet cleaning, window cleaning, and full end of lease packages. With a national reputation and local expertise, Jim's Cleaning Perth is a solid choice for renters who want trusted, quality bond cleaning done right the first time.",
      },
      {
        rank: 3,
        name: "Pristine Home Cleaning Perth",
        website: "https://www.pristinehomecleaning.com.au",
        description:
          "Pristine Home Cleaning Perth specialises in end of lease and bond cleaning across the Perth metropolitan area. Their team uses professional-grade cleaning equipment and non-toxic products safe for families and pets. They provide a detailed quote upfront with no hidden fees. Their experienced cleaners pay attention to every detail, from oven grease to grout lines. Customers consistently praise their punctuality and thoroughness. Pristine Home Cleaning Perth offers a free re-clean guarantee if your property manager is not satisfied with the result.",
      },
      {
        rank: 4,
        name: "Cleaning Mate Perth",
        website: "https://www.cleaningmate.com.au",
        description:
          "Cleaning Mate Perth offers affordable bond cleaning packages for units, apartments, and houses across Perth. Their trained cleaners follow the real estate inspection checklist and bring all equipment and supplies. They are fully insured and available seven days a week. Customers love their professional attitude and competitive pricing. Their online booking system makes it easy to schedule a clean at short notice. Cleaning Mate Perth also offers add-on services like carpet steam cleaning and external window cleaning for a complete end of lease package.",
      },
      {
        rank: 5,
        name: "Tru Bond Cleaning Perth",
        website: "https://trubondcleaningbrisbane.com",
        description:
          "Tru Bond Cleaning Perth is a locally owned bond cleaning company serving all Perth suburbs. We offer a 100% Bond Back Guarantee — if your property manager is not happy, we come back and re-clean for free. Our police-checked, fully insured cleaners follow the REIWA checklist from top to bottom. We use eco-friendly, professional-grade products and bring all our own equipment. Transparent pricing, no hidden fees, and 7-day availability make us the easy choice for Perth renters who want their bond back without the stress.",
        isUs: true,
      },
    ],
  },
  {
    id: 6,
    question: "Which Cleaning Products are Best for Bond Cleaning?",
    answer:
      "The best products for bond cleaning are: White King Bleach (for grout and mould), CLR (for calcium, lime and rust in bathrooms), Jif Cream Cleanser (for sinks and benchtops), Windex (for windows and mirrors), Selleys Sugar Soap (for walls), and Oven Pride (for ovens). For eco-friendly options, try Bosisto's Eucalyptus Spray or Seventh Generation All-Purpose Cleaner. Professional cleaners at Tru Bond Cleaning Perth use commercial-grade versions of these products for better results.",
  },
  {
    id: 7,
    question: "How Much Does Professional Bond Cleaning Typically Cost?",
    answer: "",
    isPriceTable: true,
    priceItems: [
      { size: "Studio / 1 Bedroom", price: "$250 – $320" },
      { size: "2 Bedroom Unit", price: "$300 – $400" },
      { size: "3 Bedroom House", price: "$400 – $550" },
      { size: "4 Bedroom House", price: "$500 – $650" },
      { size: "5 Bedroom House", price: "$600 – $800" },
    ],
  },
  {
    id: 8,
    question: "What Products are Best for Bond Cleaning Carpets?",
    answer: "",
    isProductList: true,
    products: [
      {
        name: "Bissell Pro Max Clean + Protect",
        use: "Deep stains",
        link: "https://www.amazon.com.au/s?k=Bissell+Pro+Max+Clean+Protect",
      },
      {
        name: "Rug Doctor Carpet Detergent",
        use: "Professional-grade formula",
        link: "https://www.amazon.com.au/s?k=Rug+Doctor+Carpet+Detergent",
      },
      {
        name: "Preen Carpet Fresh",
        use: "Deodorises and cleans",
        link: "https://www.amazon.com.au/s?k=Preen+Carpet+Fresh",
      },
      {
        name: "Vanish Carpet Foam",
        use: "Easy spray and vacuum",
        link: "https://www.amazon.com.au/s?k=Vanish+Carpet+Foam",
      },
      {
        name: "Britex Carpet Cleaner",
        use: "Australian trusted brand",
        link: "https://www.amazon.com.au/s?k=Britex+Carpet+Cleaner",
      },
    ],
  },
  {
    id: 9,
    question: "How to Choose a Reliable Bond Cleaner?",
    answer:
      "Look for these things when choosing a bond cleaner: (1) Bond back guarantee — they must offer a free re-clean if you don't pass inspection. (2) Insurance — make sure they are fully insured. (3) Real estate checklist — they should follow the REIWA checklist. (4) Reviews — check Google reviews. (5) Transparent pricing — no hidden fees. (6) Experience — choose a company that has cleaned hundreds of properties. Tru Bond Cleaning Perth ticks all these boxes.",
  },
  {
    id: 10,
    question:
      "Can I Book a Bond Cleaning Company Online with Satisfaction Guarantee?",
    answer:
      "Yes! You can book Tru Bond Cleaning Perth online right now. Fill in our quick contact form or message us on WhatsApp at 0488 841 883. We offer a 100% Bond Back Satisfaction Guarantee — if your property manager is not happy, we come back and re-clean the areas of concern for free. No stress, no arguments, just a spotless clean that gets your bond back.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      data-ocid={`faq.item.${index}`}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-muted/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-foreground text-sm sm:text-base">
          {faq.question}
        </span>
        {isOpen ? (
          <ChevronUp
            className="w-4 h-4 text-primary flex-shrink-0"
            aria-hidden="true"
          />
        ) : (
          <ChevronDown
            className="w-4 h-4 text-muted-foreground flex-shrink-0"
            aria-hidden="true"
          />
        )}
      </button>

      {isOpen && (
        <div className="px-5 py-4 bg-accent/30 border-t border-border animate-fade-in">
          {faq.answer && (
            <p className="text-sm text-foreground/80 leading-relaxed">
              {faq.answer}
            </p>
          )}

          {faq.isCompanyList && faq.companies && (
            <div className="space-y-4">
              {faq.companies.map((company) => (
                <div
                  key={company.rank}
                  className={`p-4 rounded-lg border ${
                    company.isUs
                      ? "border-primary/40 bg-primary/5"
                      : "border-border bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 ${
                        company.isUs
                          ? "bg-primary text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {company.rank}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-display font-bold text-foreground text-sm">
                          {company.name}
                        </h4>
                        {company.isUs && (
                          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                            Our Pick
                          </Badge>
                        )}
                      </div>
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline break-all mb-2 inline-block"
                      >
                        {company.website}
                      </a>
                      <p className="text-xs text-foreground/70 leading-relaxed">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {faq.isPriceTable && faq.priceItems && (
            <div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                A professional bond clean in Perth typically costs between $250
                and $750. Here's a rough guide:
              </p>
              <div className="rounded-lg border border-border overflow-hidden">
                {faq.priceItems.map((item, i) => (
                  <div
                    key={item.size}
                    className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                      i % 2 === 0 ? "bg-white" : "bg-muted/30"
                    }`}
                  >
                    <span className="text-foreground/80">{item.size}</span>
                    <span className="font-semibold text-primary">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Prices vary based on property condition and add-ons like carpet
                cleaning.{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  Get a free no-obligation quote →
                </Link>
              </p>
            </div>
          )}

          {faq.isProductList && faq.products && (
            <div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                The best products for carpet bond cleaning are:
              </p>
              <ul className="space-y-2">
                {faq.products.map((product) => (
                  <li key={product.name} className="flex items-start gap-2.5">
                    <CheckCircle
                      className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        {product.name}
                      </a>
                      <span className="text-sm text-foreground/70">
                        {" "}
                        — {product.use}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                For best results, Tru Bond Cleaning Perth uses hot water
                extraction (steam cleaning) with professional-grade solutions.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function HomePage() {
  useSEO({
    title: "Bond Cleaning Perth | 100% Bond Back Guarantee | Tru Bond Cleaning",
    description:
      "Perth's most trusted bond cleaning service. 100% Bond Back Guarantee. End of lease cleaning, carpet cleaning & more. Free quote — call or WhatsApp 0488 841 883.",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonical: "https://trubondcleaningbrisbane.com",
  });

  useJsonLd();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg"
            alt="Professional bond cleaning team at work in a Perth rental property — Tru Bond Cleaning Perth"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 gradient-hero opacity-90" />
          {/* Geometric accent */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 lg:py-32">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-teal-500/20 text-teal-200 border-teal-500/30 text-xs font-semibold tracking-wider uppercase px-3 py-1">
              <Sparkles className="w-3 h-3 mr-1.5" aria-hidden="true" />
              Perth's #1 Rated Bond Cleaners
            </Badge>
            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 text-balance"
            >
              Perth's Most Trusted Bond Cleaning Service —{" "}
              <span className="text-gradient-teal">
                100% Bond Back Guarantee
              </span>
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
              We clean your rental property from top to bottom so you get your
              full bond back. Serving all suburbs of Perth, WA.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                data-ocid="hero.primary_button"
                className="gradient-teal text-white border-0 shadow-teal hover:shadow-teal-lg transition-all font-bold text-base px-8"
              >
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <a
                href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%20Perth%2C%20I%27d%20like%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg btn-whatsapp font-bold text-base shadow-lg hover:shadow-xl transition-all"
                aria-label="Call Tru Bond Cleaning Perth on WhatsApp 0488 841 883"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section
        className="py-6 gradient-teal"
        aria-label="Service statistics and highlights"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "100%", label: "Bond Back Guarantee" },
              { value: "5-Star", label: "Google Rating" },
              { value: "Same Day", label: "Bookings Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <div className="font-display text-2xl lg:text-3xl font-bold">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-white/80 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section
        className="py-16 lg:py-24 bg-white"
        aria-labelledby="why-choose-us-heading"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground border-primary/20 text-xs font-semibold tracking-wider uppercase">
                Why Choose Us
              </Badge>
              <h2
                id="why-choose-us-heading"
                className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6"
              >
                Perth Renters Trust Us to Get Their Bond Back
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Moving out is stressful enough. Let us handle the cleaning so
                you can focus on your new place. We follow the REIWA checklist
                exactly — so your property manager has nothing to complain
                about.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    icon: (
                      <Shield
                        className="w-5 h-5 text-primary"
                        aria-hidden="true"
                      />
                    ),
                    title: "100% Bond Back Guarantee",
                    desc: "If you don't pass inspection, we come back and re-clean for free. No questions asked.",
                  },
                  {
                    icon: (
                      <CheckCircle
                        className="w-5 h-5 text-primary"
                        aria-hidden="true"
                      />
                    ),
                    title: "Police-Checked & Fully Insured",
                    desc: "Every cleaner is police-checked and our business carries full public liability insurance.",
                  },
                  {
                    icon: (
                      <Leaf
                        className="w-5 h-5 text-primary"
                        aria-hidden="true"
                      />
                    ),
                    title: "Eco-Friendly Professional Products",
                    desc: "We use commercial-grade, eco-friendly products that are safe for families and pets.",
                  },
                  {
                    icon: (
                      <Clock
                        className="w-5 h-5 text-primary"
                        aria-hidden="true"
                      />
                    ),
                    title: "Available 7 Days a Week",
                    desc: "We cover all Perth suburbs, seven days a week, including weekends and public holidays.",
                  },
                  {
                    icon: (
                      <DollarSign
                        className="w-5 h-5 text-primary"
                        aria-hidden="true"
                      />
                    ),
                    title: "Transparent Pricing, No Hidden Fees",
                    desc: "You get a fixed price quote upfront. What we quote is what you pay — always.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        {item.title}
                      </h3>
                      <p className="text-xs text-foreground/65 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 gradient-teal-light rounded-3xl opacity-50" />
              <img
                src="/assets/generated/tru-bond-cleaning-team-perth.dim_800x500.jpg"
                alt="The Tru Bond Cleaning Perth team — professional, police-checked bond cleaners ready to get your bond back"
                className="relative rounded-2xl shadow-xl w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-border max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-500 text-gold-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm font-semibold text-foreground">
                  "Full bond returned!"
                </p>
                <p className="text-xs text-muted-foreground">
                  — 142 Google Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section
        className="py-16 lg:py-24 bg-muted/30"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground border-primary/20 text-xs font-semibold tracking-wider uppercase">
              Our Services
            </Badge>
            <h2
              id="services-heading"
              className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4"
            >
              Everything Your Property Manager Checks
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              We clean every corner, crack, and crevice. From the oven to the
              window tracks — nothing gets missed on our watch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card
                key={service.id}
                data-ocid={`services.item.${i + 1}`}
                className="card-hover bg-white border-border shadow-sm group"
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                  >
                    Learn more{" "}
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-accent font-bold"
            >
              <Link to="/services">
                View All Services & Pricing
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="py-16 lg:py-24 bg-white"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground border-primary/20 text-xs font-semibold tracking-wider uppercase">
              Customer Reviews
            </Badge>
            <h2
              id="testimonials-heading"
              className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4"
            >
              Perth Renters Love Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col"
              >
                <div
                  className="flex items-center gap-1 mb-3"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-gold-500 text-gold-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-sm text-foreground/75 leading-relaxed flex-1 mb-4">
                  "{t.text}"
                </blockquote>
                <footer className="flex items-center justify-between">
                  <div>
                    <cite className="font-semibold text-foreground text-sm not-italic">
                      {t.name}
                    </cite>
                    <p className="text-xs text-muted-foreground">
                      {t.location}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {t.date}
                  </span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── End of Lease Image Section ── */}
      <section
        className="py-16 lg:py-24 bg-muted/30"
        aria-labelledby="lease-section-heading"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/assets/generated/end-of-lease-cleaning-perth.dim_800x500.jpg"
                alt="Professional end of lease cleaning in a Perth rental property — spotless kitchen after bond clean by Tru Bond Cleaning Perth"
                className="rounded-2xl shadow-lg w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-accent text-accent-foreground border-primary/20 text-xs font-semibold tracking-wider uppercase">
                How It Works
              </Badge>
              <h2
                id="lease-section-heading"
                className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6"
              >
                3 Simple Steps to Get Your Bond Back
              </h2>
              <ol className="space-y-5">
                {[
                  {
                    step: "1",
                    title: "Get a Free Quote",
                    desc: "Tell us your property size and we'll give you a fixed price instantly — no surprises.",
                  },
                  {
                    step: "2",
                    title: "We Do the Hard Work",
                    desc: "Our team arrives on time and works through the full REIWA checklist from top to bottom.",
                  },
                  {
                    step: "3",
                    title: "Pass Inspection. Get Your Bond Back.",
                    desc: "You pass the inspection and get your full bond returned. If not, we come back for free.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full gradient-teal flex items-center justify-center flex-shrink-0 shadow-teal">
                      <span className="text-white font-bold text-sm">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground/65 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="gradient-teal text-white border-0 shadow-teal font-bold"
                >
                  <Link to="/contact">
                    Book Your Bond Clean
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section
        className="py-16 lg:py-24 bg-white"
        aria-labelledby="faq-heading"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground border-primary/20 text-xs font-semibold tracking-wider uppercase">
              Frequently Asked Questions
            </Badge>
            <h2
              id="faq-heading"
              className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4"
            >
              Everything You Need to Know About Bond Cleaning in Perth
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Got questions? We've got answers. Read below or message us on
              WhatsApp.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFaq === faq.id}
                onToggle={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 gradient-teal" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <img
            src="/assets/generated/bond-back-guarantee-badge-transparent.dim_400x400.png"
            alt="Tru Bond Cleaning Perth 100% Bond Back Guarantee badge — certified bond cleaning service Perth"
            className="w-20 h-20 object-contain mx-auto mb-4"
            loading="lazy"
          />
          <h2
            id="cta-heading"
            className="font-display text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Ready to Get Your Full Bond Back?
          </h2>
          <p className="text-white/85 max-w-xl mx-auto mb-8 leading-relaxed">
            Join 500+ happy Perth renters who got their bond back with Tru Bond
            Cleaning Perth. Get your free quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg"
            >
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <a
              href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%20Perth%2C%20I%27d%20like%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold border border-white/30 transition-all"
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
              WhatsApp 0488 841 883
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
