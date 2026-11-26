# Xena’s Flavor Lab — private chef website

Next.js App Router, TypeScript and Tailwind CSS 3. Run `npm install` then `npm run dev` and open http://localhost:3000. Production: `npm run build` then `npm start`.

Xena’s Flavor Lab is a placeholder brand. Edit app/page.tsx and app/layout.tsx to add your real business name, biography, contact and social links. Images are bundled locally in public/images; confirm rights and replace any illustrative images before publishing. The inquiry form validates and prepares a copyable draft; it does not send email or store personal information. Connect a real form endpoint before launch. No external font or image requests are required.

## Image notes
The luxury-bites and rooftop-dining images are AI-generated concept imagery. Rooftop-dining includes its original editorial text. Replace concept imagery with verified client work where appropriate.

## Modular source
Each section lives in components/ as a separate React TSX component. app/page.tsx composes them. Navbar and InquiryForm own their local state; RevealAnimations handles scroll effects. Images remain in public/images. No compiled output or dependencies are included.
