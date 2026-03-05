# Tru Bond Cleaning Perth

## Current State
New project. No existing pages or backend.

## Requested Changes (Diff)

### Add
- Multi-page website for Tru Bond Cleaning Perth (bond cleaning company)
- Home page with hero, services overview, FAQs (10 questions), trust signals, contact CTA
- Services page with individual service sections (each ~400 words): end of lease cleaning, carpet cleaning, window cleaning, oven cleaning, bathroom/toilet cleaning, wall washing
- About page with company info
- Contact page with WhatsApp link (0488841883) and a contact form that submits to customer's email (form action sends FROM customer TO humptydumptybondcleaning@gmail.com — email NOT visible on site)
- Branded images on each page with alt text for SEO
- Full SEO: title tags, meta descriptions, Open Graph tags, structured data (LocalBusiness schema)
- FAQ section answering all 10 questions including top 5 bond cleaning companies list with websites and 100-word descriptions
- FAQ #5 includes Tru Bond Cleaning at position 5 with website https://trubondcleaningbrisbane.com
- FAQ #8 includes product links for carpet cleaning products
- Navigation header and footer with WhatsApp CTA
- 3000+ words of semantically optimised, skimmable, active-voice content written for a 10-year-old reading level
- Australian English throughout

### Modify
- None

### Remove
- None

## Implementation Plan
1. Rename project to "tru-bond-cleaning-perth"
2. Generate branded hero image, services image, about image, contact image
3. Generate Motoko backend for contact form submission storage
4. Build React frontend with:
   - React Router for multi-page navigation
   - SEO meta tags (react-helmet or inline head management)
   - Home page: hero, services grid, why choose us, FAQ accordion, CTA
   - Services page: 6 services each ~400 words
   - About page
   - Contact page with form (mailto action from customer email)
   - Sticky header with WhatsApp button
   - Footer with business info
   - All images with branded alt text
   - LocalBusiness JSON-LD schema
