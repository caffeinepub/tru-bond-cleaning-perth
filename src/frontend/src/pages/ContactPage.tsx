import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// ContactPage does not need Link import
import { CheckCircle, Clock, MapPin, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ServiceType } from "../backend";
import { useSubmitContactForm } from "../hooks/useQueries";
import { useSEO } from "../hooks/useSEO";

const serviceOptions = [
  {
    value: "endOfLease",
    label: "End of Lease Cleaning",
    backendType: ServiceType.residentialCleaning,
  },
  {
    value: "carpetSteam",
    label: "Carpet Steam Cleaning",
    backendType: ServiceType.carpetCleaning,
  },
  {
    value: "windowCleaning",
    label: "Window Cleaning",
    backendType: ServiceType.windowCleaning,
  },
  {
    value: "ovenCleaning",
    label: "Oven & Kitchen Cleaning",
    backendType: ServiceType.residentialCleaning,
  },
  {
    value: "bathroomCleaning",
    label: "Bathroom Deep Cleaning",
    backendType: ServiceType.residentialCleaning,
  },
  {
    value: "wallWashing",
    label: "Wall Washing & Spot Cleaning",
    backendType: ServiceType.residentialCleaning,
  },
  {
    value: "other",
    label: "Other / Full Bond Clean Package",
    backendType: ServiceType.other,
  },
];

const propertySizes = [
  "Studio / 1 Bed",
  "2 Bedroom",
  "3 Bedroom",
  "4 Bedroom",
  "5+ Bedroom",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  propertySize: string;
  preferredDate: string;
  message: string;
}

function buildMailtoBody(data: FormData): string {
  const selectedService =
    serviceOptions.find((s) => s.value === data.serviceType)?.label ??
    data.serviceType;
  return [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Service: ${selectedService}`,
    `Property Size: ${data.propertySize}`,
    `Preferred Date: ${data.preferredDate}`,
    `Message: ${data.message}`,
  ].join("\n");
}

export function ContactPage() {
  useSEO({
    title: "Get a Free Bond Cleaning Quote in Perth | Tru Bond Cleaning",
    description:
      "Book your bond clean in Perth today. Free no-obligation quotes. Message us on WhatsApp 0488 841 883 or fill in our online form. 7-day availability.",
    canonical: "https://trubondcleaningbrisbane.com/contact",
  });

  const submitContactForm = useSubmitContactForm();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    propertySize: "",
    preferredDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.serviceType
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Backend submission
      const selectedService = serviceOptions.find(
        (s) => s.value === formData.serviceType,
      );
      const backendServiceType =
        selectedService?.backendType ?? ServiceType.other;
      const preferredDateTimestamp = formData.preferredDate
        ? BigInt(new Date(formData.preferredDate).getTime())
        : BigInt(Date.now());

      const fullMessage = `Property Size: ${formData.propertySize || "Not specified"}\n\n${formData.message || "(No message)"}`;

      await submitContactForm.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: backendServiceType,
        message: fullMessage,
        preferredDate: preferredDateTimestamp,
      });

      setSubmitted(true);
      toast.success("Your enquiry has been sent! We'll be in touch shortly.");
    } catch (_err) {
      // Backend failed — fall back to mailto
      const mailtoSubject = encodeURIComponent(
        "Bond Cleaning Quote Request — Tru Bond Cleaning Perth",
      );
      const mailtoBody = encodeURIComponent(buildMailtoBody(formData));
      const mailtoHref = `mailto:humptydumptybondcleaning%40gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Open the mailto link so user's email client handles delivery
      window.location.href = mailtoHref.replace(
        "humptydumptybondcleaning%40gmail.com",
        atob("aHVtcHR5ZHVtcHR5Ym9uZGNsZWFuaW5nQGdtYWlsLmNvbQ=="),
      );

      setSubmitted(true);
      toast.success("Opening your email client to send the quote request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 lg:py-28 gradient-hero relative overflow-hidden"
        aria-labelledby="contact-page-heading"
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
            Get a Free Quote
          </Badge>
          <h1
            id="contact-page-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Get a Free Bond Cleaning Quote in Perth
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            Fill in the form below or message us on WhatsApp. We'll get back to
            you fast with a fixed price quote — no hidden fees.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="py-16 lg:py-24 bg-white"
        aria-label="Contact form and information"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl shadow-sm p-6 lg:p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Send Us a Quote Request
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill in your details and we'll send you a fixed price quote
                  within a few hours.
                </p>

                {submitted ? (
                  <div
                    data-ocid="contact.success_state"
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle
                        className="w-8 h-8 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-xl mb-2">
                      Quote Request Sent!
                    </h3>
                    <p className="text-sm text-foreground/70 max-w-sm mx-auto mb-6">
                      Thanks for getting in touch. We'll send you a fixed-price
                      quote shortly. For faster response, message us on
                      WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%20Perth%2C%20I%27d%20like%20a%20quote"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg btn-whatsapp font-bold text-sm"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Message Us on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-sm font-semibold text-foreground mb-1.5 block"
                        >
                          Your Name{" "}
                          <span
                            className="text-destructive"
                            aria-label="required"
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          placeholder="Sarah Johnson"
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          data-ocid="contact.name_input"
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold text-foreground mb-1.5 block"
                        >
                          Email Address{" "}
                          <span
                            className="text-destructive"
                            aria-label="required"
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="sarah@email.com"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          data-ocid="contact.email_input"
                          className="bg-white"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-semibold text-foreground mb-1.5 block"
                      >
                        Phone Number{" "}
                        <span
                          className="text-destructive"
                          aria-label="required"
                        >
                          *
                        </span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        placeholder="0400 000 000"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        data-ocid="contact.phone_input"
                        className="bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label
                          htmlFor="serviceType"
                          className="text-sm font-semibold text-foreground mb-1.5 block"
                        >
                          Service Required{" "}
                          <span
                            className="text-destructive"
                            aria-label="required"
                          >
                            *
                          </span>
                        </Label>
                        <Select
                          value={formData.serviceType}
                          onValueChange={(v) => updateField("serviceType", v)}
                          required
                          name="serviceType"
                        >
                          <SelectTrigger
                            id="serviceType"
                            data-ocid="contact.service_select"
                            className="bg-white"
                          >
                            <SelectValue placeholder="Select a service..." />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label
                          htmlFor="propertySize"
                          className="text-sm font-semibold text-foreground mb-1.5 block"
                        >
                          Property Size
                        </Label>
                        <Select
                          value={formData.propertySize}
                          onValueChange={(v) => updateField("propertySize", v)}
                          name="propertySize"
                        >
                          <SelectTrigger
                            id="propertySize"
                            data-ocid="contact.size_select"
                            className="bg-white"
                          >
                            <SelectValue placeholder="Select size..." />
                          </SelectTrigger>
                          <SelectContent>
                            {propertySizes.map((size) => (
                              <SelectItem key={size} value={size}>
                                {size}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <Label
                        htmlFor="preferredDate"
                        className="text-sm font-semibold text-foreground mb-1.5 block"
                      >
                        Preferred Cleaning Date
                      </Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.preferredDate}
                        onChange={(e) =>
                          updateField("preferredDate", e.target.value)
                        }
                        data-ocid="contact.date_input"
                        className="bg-white"
                      />
                    </div>

                    <div className="mb-6">
                      <Label
                        htmlFor="message"
                        className="text-sm font-semibold text-foreground mb-1.5 block"
                      >
                        Special Requests or Notes
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Any special instructions, access details, or questions..."
                        value={formData.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        data-ocid="contact.message_textarea"
                        className="bg-white resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      data-ocid="contact.submit_button"
                      className="w-full gradient-teal text-white border-0 shadow-teal font-bold text-base"
                    >
                      {isSubmitting
                        ? "Sending Quote Request..."
                        : "Send My Free Quote Request"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-3">
                      We'll respond within a few hours. No spam, no hidden fees.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp CTA */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  Prefer to chat?
                </h3>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  Message us on WhatsApp right now! We reply fast and can give
                  you a quote in minutes.
                </p>
                <a
                  href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%20Perth%2C%20I%27d%20like%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg btn-whatsapp font-bold text-sm"
                  aria-label="Message Tru Bond Cleaning Perth on WhatsApp for an instant quote"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp: 0488 841 883
                </a>
              </div>

              {/* Info cards */}
              <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
                <h3 className="font-display font-bold text-foreground text-base">
                  Quick Info
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Service Area
                    </p>
                    <p className="text-xs text-muted-foreground">
                      All Perth suburbs, WA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Availability
                    </p>
                    <p className="text-xs text-muted-foreground">
                      7 days a week, same-day available
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Our Guarantee
                    </p>
                    <p className="text-xs text-muted-foreground">
                      100% Bond Back — free re-clean if needed
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing guide */}
              <div className="bg-accent/50 border border-primary/20 rounded-2xl p-5">
                <h3 className="font-display font-bold text-foreground text-base mb-3">
                  Rough Price Guide
                </h3>
                <div className="space-y-2">
                  {[
                    { size: "Studio / 1 Bed", price: "from $250" },
                    { size: "2 Bedroom", price: "from $300" },
                    { size: "3 Bedroom", price: "from $400" },
                    { size: "4 Bedroom", price: "from $500" },
                    { size: "5+ Bedroom", price: "from $600" },
                  ].map((item) => (
                    <div
                      key={item.size}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-foreground/75">{item.size}</span>
                      <span className="font-bold text-primary">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Final price depends on condition and add-ons. Get a free fixed
                  quote — no surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large WhatsApp CTA Banner */}
      <section
        className="py-16 bg-[#128C7E]"
        aria-labelledby="whatsapp-cta-heading"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h2
              id="whatsapp-cta-heading"
              className="font-display text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Prefer to Chat? Message Us on WhatsApp Right Now!
            </h2>
            <p className="text-white/85 leading-relaxed mb-8">
              We're available 7 days a week. Send us a quick message and we'll
              give you a price in minutes — no phone calls needed.
            </p>
            <a
              href="https://wa.me/61488841883?text=Hi%20Tru%20Bond%20Cleaning%20Perth%2C%20I%27d%20like%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-lg shadow-xl transition-all hover:shadow-2xl"
              aria-label="Open WhatsApp to message Tru Bond Cleaning Perth for a quote"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
