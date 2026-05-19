import type { Dict } from './en'


export const hr: Dict = {
  nav: {
    about: 'O meni',
    now: 'Sada',
    experience: 'Iskustvo',
    projects: 'Projekti',
    skills: 'Vještine',
    contact: 'Kontakt',
  },
  hero: {
    greeting: 'Bok, ja sam',
    taglinePrefix: 'Gradim stvari',
    phrases: ['za web.', 'za mobilne uređaje.', 'za igre.', 's pažnjom.'],
    description:
      'Software developer iz Hrvatske, trenutno polaznik Sofascore Frontend Academyja. Volim raditi čista korisnička sučelja i robusne backend sustave — od WebSocket messaging sustava do 3D renderera s vlastitim GLSL shaderima.',
    viewWork: 'Pogledaj moj rad',
    getInTouch: 'Kontaktiraj me',
    downloadCV: 'Preuzmi životopis',
  },
  about: {
    title: 'O meni',
    p1prefix: 'Software developer iz Hrvatske s čvrstim full-stack znanjem. Trenutno sam polaznik ',
    p1highlight: 'Sofascore Frontend Academyja',
    p1suffix:
      ', gdje radim s mentorima i inženjerima Sofascorea na stvarnim projektima koristeći React, TypeScript i modernu frontend arhitekturu.',
    p2prefix: 'Završavam ',
    p2highlight: 'prijediplomski studij informatike',
    p2suffix:
      ' na Fakultetu organizacije i informatike Sveučilišta u Zagrebu. Iskustvo mi obuhvaća web, desktop i mobilne aplikacije — od arhitekture sigurnih WebSocket messaging sustava u Uvei do gradnje 3D renderera s vlastitim GLSL shaderima.',
    p3: 'Volim raditi kroz cijeli stack i držim do čistog koda, dobrog UX-a i isporuke stvari koje stvarno rade. Kada ne kodiram, naći ćeš me u teretani, na planinarenju ili u kuhinji.',
    education: 'Obrazovanje',
    eduInstitution: 'Fakultet organizacije i informatike',
    eduDegree: 'Sveučilišni prvostupnik informatike',
    eduMeta: 'Sveučilište u Zagrebu · 2026',
    links: 'Linkovi',
    resume: 'Preuzmi životopis',
  },
  now: {
    title: 'Trenutno',
    subtitle: 'Pregled onoga čime se bavim.',
    items: [
      { label: 'Frontend Academy', text: 'Polazim Sofascore Frontend Academy' },
      { label: 'Učim', text: 'Detaljno proučavam React paterne, TypeScript i frontend arhitekturu' },
      { label: 'Gradim', text: 'Ovaj portfolio — Vite + React + TS + Three.js' },
      { label: 'Čitam', text: 'Refactoring UI i Designing Data-Intensive Applications' },
    ],
  },
  experience: {
    title: 'Gdje sam radio',
    locations: {
      sofascore: 'Zagreb, Hrvatska',
      uvea: 'Zagreb, Hrvatska',
      zen: 'Zagreb, Hrvatska',
    },
    roles: {
      sofascore: 'Polaznik Akademije',
      uvea: 'Software Engineer',
      zen: 'Web Developer',
    },
    periods: {
      sofascore: '2026 – Danas',
      uvea: 'Kol 2024 – Ruj 2025',
      zen: 'Kol 2023 – Srp 2024',
    },
    bullets: {
      sofascore: [
        'Odabrani polaznik kompetitivne frontend akademije usmjerene na moderni web development.',
        'Radim s Reactom, TypeScriptom, modernim JavaScriptom i frontend arhitekturom.',
        'Surađujem s mentorima i inženjerima Sofascorea na stvarnim projektima i izazovima.',
      ],
      uvea: [
        'Arhitektirao realtime, siguran WebSocket messaging sustav za privatne, grupne i tematske razgovore.',
        'Razvijao napredne module za End-to-End enkripciju (E2EE) i prevođenje poruka u letu.',
        'Dizajnirao i implementirao RESTful API-je s Django Rest Frameworkom za kompleksne tokove podataka.',
        'Smanjio vrijeme odziva API-ja za procijenjenih 25–40% rješavanjem N+1 query problema u Django ORM-u.',
      ],
      zen: [
        'Razvijao Next.js frontend značajke s Chakra UI i SWR-om za dohvat podataka iz Djanga.',
        'Vodio verzije koda kroz Git workflow (PR-ovi, code review) i sudjelovao u Agile/Scrum procesu.',
        'Pridonio optimizacijama baze koje su smanjile vrijeme učitavanja za 20% na ključnim stranicama.',
      ],
    },
  },
  projects: {
    title: 'Što sam izgradio',
    items: {
      web: {
        title: 'Full-Stack Web Aplikacija',
        description:
          'Full-stack platforma s Angularom i Nest.js-om (TypeScript). Dizajnirao REST API-je i relacijske modele za upravljanje korisnicima, autentifikaciju i izvještavanje. Integrirao vanjske API-je poput TMDB-a.',
      },
      mobile: {
        title: 'Android i Desktop Aplikacije',
        description:
          'Povezane Android (Kotlin) i Desktop (C#/.NET) aplikacije koje dijele isti web servis i bazu, s realtime sinkronizacijom i CRUD operacijama. Preveo Figma prototipove u pixel-perfect UI.',
      },
      renderer: {
        title: '3D Scene Renderer',
        description:
          'Vlastiti 3D rendering engine s implementiranom camera/perspective matricom. Phong reflection model preveden u vlastite GLSL shadere s texture mappingom kroz UV koordinate.',
      },
      game: {
        title: 'MMORPG SpriteStacking Igra',
        description:
          'Ključni sustavi za animaciju, sprite stacking i multiplayer interakciju. Backend s bazom podataka i web servisima za podatke igrača i mrežnu komunikaciju.',
      },
    },
  },
  skills: {
    title: 'Vještine',
    groups: {
      Languages: 'Jezici',
      Frontend: 'Frontend',
      Backend: 'Backend',
      Tools: 'Alati',
    },
  },
  contact: {
    overline: 'Što slijedi?',
    title: 'Stupi u kontakt',
    body:
      'Bilo da imaš priliku, projektnu ideju ili samo želiš pozdraviti — inbox mi je uvijek otvoren. Trudim se odgovoriti što prije!',
    cta: 'Pozdravi',
    footer: 'Dizajnirao i izgradio Tin Račić',
  },
}
