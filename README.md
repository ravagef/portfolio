# Portfolio (EN/ES) 
 
- Dev: npm run dev -> http://localhost:3000 

> portfolio@0.1.0 start
> next start

 
## Content 
- Edit content/en.ts and content/es.ts for Experience/Projects/Education/Skills/Languages. 
- UI strings in i18n/en.json and i18n/es.json. 
 
## i18n 
- Locale routes: /en, /es. 
- Language gate at / and navbar toggle. 
 
## Contact 
- Uses Formspree. Configure .env.local: 
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mdkpzzke 
RESEND_API_KEY=... (optional) 
 
## Styling 
- Tailwind + topographic bg-topo.svg with parallax (components/ParallaxBG.tsx). 
 
## Deploy 
- Deploy to Vercel. Add env vars there too.
