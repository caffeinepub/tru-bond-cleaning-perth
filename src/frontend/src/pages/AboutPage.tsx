import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Leaf,
  Shield,
  Star,
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";

const values = [
  {
    icon: <Shield className="w-6 h-6 text-primary" aria-hidden="true" />,
    title: "Honesty & Transparency",
    description:
      "We give you a fixed price before we start. No hidden extras, no surprise charges. What you see is what you pay — every single time.",
  },
  {
    icon: <Star className="w-6 h-6 text-primary" aria-hidden="true" />,
    title: "Reliability You Can Count On",
    description:
      "We show up on time, do what we say we'll do, and follow through with our guarantee. You've got enough on your plate when moving — you can rely on us.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" aria-hidden="true" />,
    title: "Attention to Detail",
    description:
      "We follow the REIWA inspection checklist from top to bottom. Nothing gets skipped. Property managers notice everything — and so do we.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-primary" aria-hidden="true" />,
    title: "Eco-Friendly Products",
    description:
      "We use commercial-grade, eco-friendly cleaning products that are safe for families, pets, and the environment. Tough on dirt, gentle on the planet.",
  },
  {
    icon: <Heart className="w-6 h-6 text-primary" aria-hidden="true" />,
    title: "Care for Our Community",
    description:
      "We're a local Perth business. We care about our community and take pride in helping Perth renters get their hard-earned bond back without the stress.",
  },
];

export function AboutPage() {
  useSEO({
    title: "About Tru Bond Cleaning Perth | Local Bond Cleaners You Can Trust",
    description:
      "Learn about Tru Bond Cleaning Perth — locally owned, fully insured, police-checked bond cleaners. We follow the REIWA checklist and guarantee your bond back.",
    canonical: "https://trubondcleaningbrisbane.com/about",
  });

  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 lg:py-28 gradient-hero relative overflow-hidden"
        aria-labelledby="about-page-heading"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <Badge className="mb-6 bg-teal-500/20 text-teal-200 border-teal-500/30 text-xs font-semibold tracking-wider uppercase">
            About Us
          </Badge>
          <h1
            id="about-page-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            About Tru Bond Cleaning Perth — <br className="hidden lg:block" />
            Perth's Trusted Bond Cleaning Experts
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            We're a locally owned Perth bond cleaning company that started with
            one simple goal: help renters get their full bond back, stress-free.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section
        className="py-16 lg:py-24 bg-white"
        aria-labelledby="our-story-heading"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground border-primary/20 text-xs font-semibold tracking-wider uppercase">
                Our Story
              </Badge>
              <h2
                id="our-story-heading"
                className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6"
              >
                We Started Because We Knew Perth Renters Deserved Better
              </h2>
              <div className="space-y-4 text-foreground/75 text-sm leading-relaxed">
                <p>
                  Tru Bond Cleaning Perth started because the founders knew
                  first-hand how stressful moving out of a rental property could
                  be. As renters themselves, they understood the fear of losing
                  their bond over something as avoidable as a dirty oven or a
                  smeared window. They wanted to build a bond cleaning company
                  that Perth renters could genuinely trust — one that does the
                  job properly, the first time, every time.
                </p>
                <p>
                  From day one, we built our service around the REIWA (Real
                  Estate Institute of Western Australia) inspection checklist.
                  We made sure every cleaner on our team knows the checklist
                  inside out and follows it without cutting corners. We invested
                  in professional-grade equipment and commercial cleaning
                  products because we knew consumer-grade tools just don't get
                  the same results.
                </p>
                <p>
                  We introduced our 100% Bond Back Guarantee because we stand
                  behind our work completely. If your property manager isn't
                  happy with any part of our clean, we come back and fix it for
                  free. No arguments, no excuses — just results.
                </p>
                <p>
                  Today, Tru Bond Cleaning Perth has helped over 500 Perth
                  renters get their full bond returned. We serve all Perth
                  suburbs, seven days a week, and we're available for same-day
                  bookings when you need us in a hurry. We're proud of what
                  we've built, and we're proud of every five-star review from a
                  Perth renter who got their bond back thanks to our work.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/tru-bond-cleaning-team-perth.dim_800x500.jpg"
                alt="The Tru Bond Cleaning Perth team — professional, police-checked bond cleaners serving all Perth suburbs with care and expertise"
                className="rounded-2xl shadow-xl w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-gold-500 text-gold-500"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-xs font-bold text-foreground">
                  142 Five-Star Reviews
                </p>
                <p className="text-xs text-muted-foreground">Google Verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 lg:py-24 bg-muted/30"
        aria-labelledby="values-heading"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground border-primary/20 text-xs font-semibold tracking-wider uppercase">
              Our Values
            </Badge>
            <h2
              id="values-heading"
              className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4"
            >
              What We Stand For
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              These values shape how we work and why Perth renters keep coming
              back to us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card
                key={value.title}
                className="bg-white border-border shadow-sm card-hover"
              >
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-base mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Guarantee */}
      <section
        className="py-16 lg:py-24 bg-white"
        aria-labelledby="team-heading"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground border-primary/20 text-xs font-semibold tracking-wider uppercase">
                Our Team
              </Badge>
              <h2
                id="team-heading"
                className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6"
              >
                Police-Checked, Fully Insured, and Experienced
              </h2>
              <div className="space-y-4 text-foreground/75 text-sm leading-relaxed mb-8">
                <p>
                  Every member of the Tru Bond Cleaning Perth team is
                  police-checked before they join us. We take the security and
                  trust of our customers seriously — you're letting us into your
                  home, and we treat that with the respect it deserves.
                </p>
                <p>
                  Our business carries full public liability insurance. This
                  means you're protected in the unlikely event that anything
                  goes wrong during a clean. We're covered, so you're covered.
                </p>
                <p>
                  All our cleaners receive comprehensive training in bond
                  cleaning standards and the REIWA inspection checklist. They
                  know exactly what property managers look for — because they've
                  been trained to look for the same things.
                </p>
                <p>
                  We bring all our own professional-grade equipment and
                  eco-friendly cleaning products. You don't need to provide a
                  thing. We arrive ready to work and we don't leave until the
                  job is done properly.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "✅ Police-checked team members",
                  "✅ Full public liability insurance",
                  "✅ REIWA-checklist trained",
                  "✅ Professional-grade equipment",
                  "✅ Eco-friendly, safe products",
                  "✅ Available 7 days a week",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm font-semibold text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-8">
              <img
                src="/assets/generated/bond-back-guarantee-badge-transparent.dim_400x400.png"
                alt="Tru Bond Cleaning Perth 100% Bond Back Guarantee — certified, trusted bond cleaning service in Perth, Western Australia"
                className="w-56 h-56 object-contain"
                loading="lazy"
              />
              <div className="w-full bg-accent/50 border border-primary/20 rounded-2xl p-6 text-center">
                <h3 className="font-display font-bold text-foreground text-xl mb-2">
                  Our Promise to You
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-4">
                  If your property manager is not satisfied with any part of our
                  clean, we come back and re-clean the areas of concern for
                  free. No back-and-forth, no arguments — we just fix it.
                </p>
                <div className="text-2xl font-display font-bold text-primary">
                  100% Bond Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 gradient-teal"
        aria-labelledby="about-cta-heading"
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2
            id="about-cta-heading"
            className="font-display text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Ready to Meet the Team?
          </h2>
          <p className="text-white/85 max-w-xl mx-auto mb-8 leading-relaxed">
            Book your bond clean today and see why 500+ Perth renters trust Tru
            Bond Cleaning Perth.
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-bold"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
