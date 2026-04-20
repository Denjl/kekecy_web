export type PriceTier = {
  price: string;
  deadline: string;
};

export type RefundRule = {
  refund: string;
  condition: string;
};

export type YearAlbum = {
  year: string;
  url: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export const campContent = {
  brand: "KECY Košice",
  subtitle: "Conversational English Camp for Youth",
  tagline:
    "Americko-slovenský konverzačný tábor pre stredoškolákov, ktorí chcú zažiť výnimočné leto.",
  heroText:
    "Týždeň plný angličtiny, priateľstiev, športu, workshopov a mnoho ďalšieho 😉",
  heroImage: "/assets/img/outsidethebox.webp",
  infoImage: "/assets/img/",
  teamImage: "/assets/img/team.webp",
  videoUrl: "https://www.youtube.com/embed/XdCsmJnULNc",
  dateRange: "19.-25. Júl 2026",
  locationLabel: "Borda, Košický Klečenov",
  locationUrl:
    "https://www.google.com/maps/place/044+45+Ko%C5%A1ick%C3%BD+Kle%C4%8Denov-Borda/@48.7544933,21.5050588,17z/data=!3m1!4b1!4m6!3m5!1s0x473eda4fdcc75f15:0xa00f7d44d302540!8m2!3d48.7548!4d21.5091699!16s%2Fg%2F1t_tj1r1?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D",
  registrationWindow: "Registrácia prebieha od 10. 4. do 30. 6. 2026.",
  registrationUrl:
    "https://www.emsreg.eu/public_otm/events/16860/registrations/landing_page?group_id=14007",
  registrationNote:
    "Za prihláseného ťa považujeme až po zaplatení zálohy vo výške 50 €.",
  payment: {
    iban: "SK33 1100 0000 0026 2771 7397",
    note: "KECY CAMP a svoje meno",
    scholarshipEmail: "kekecy@gmail.com",
  },
  priceTiers: [
    { price: "219 €", deadline: "do 3. mája" },
    { price: "239 €", deadline: "do 31. mája" },
    { price: "259 €", deadline: "do 30. júna" },
  ] as PriceTier[],
  refundRules: [
    {
      refund: "100 %",
      condition:
        "písomné odhlásenie aspoň 30 dní pred začiatkom tábora (najneskôr 19. 6. 2026)",
    },
    {
      refund: "50 %",
      condition:
        "písomné odhlásenie aspoň 10 a menej ako 30 dní pred začiatkom tábora (najneskôr 9. 7. 2026)",
    },
    {
      refund: "25 %",
      condition:
        "písomné odhlásenie aspoň 5 a menej ako 10 dní pred začiatkom tábora (najneskôr do 14. 7. 2026)",
    },
    {
      refund: "0 %",
      condition: "písomné odhlásenie menej ako 5 dní pred začiatkom tábora (15. 7. 2026 a neskôr)",
    },
  ] as RefundRule[],
  dayPlan: [
    {
      title: "Dopoludnie",
      description:
        "Konverzačná angličtina (hry, diskusie, scénky, aktivity) alebo športy. Iniciatívy a rôzne iné úlohy, pri ktorých si potrápiš mozog aj svaly.",
    },
    {
      title: "Popoludnie",
      description:
        "Súťažné aktivity v skupinkách, americké športy (frisbee, americký futbal a iné), crazy zážitkové hry, tvorivé dielne, workshopy, oddych.",
    },
    {
      title: "Večer",
      description:
        "Tematický zábavný program so živou kapelou, tancom, projekciou, aktivitami a zaujímavou témou. Po programe sú diskusné skupinky a voľný program až do polnoci.",
    },
  ],
  packingList: [
    "občiansky preukaz",
    "preukaz poistenca",
    "športovú nepremokavú obuv a oblečenie",
    "šiltovku, opaľovací krém, repelent",
  ],
  albums: [
    {
      year: "2025 - Real life",
      url: "https://photos.google.com/share/AF1QipOUXcL1eqwBvQE0idbGMWZLaBpxpgT5j2KFVlL6Zbxnz8QwasqqCt_9Td_7d1xCAA?key=V2NCTEFRdS1ZdHkxRllRMWRzRWR6Ylh6NkY0a1p3",
    },
    {
      year: "2025 - Real life (Skupinky)",
      url: "https://photos.google.com/share/AF1QipPJ6oMJGxKmWN61cAXhT-k4zaHUUn-dXcus-JGLEWhvC_29braF3y9PYplIdlYopg?key=WHhUbjhYWlk0YUNkRVFHUTF3S1RqZVQyb3paTk1B",
    },
    {
      year: "2024 - The Original",
      url: "https://photos.google.com/share/AF1QipN-Fj6C_H7AGiHTvdY9G3S9p-mmfF0tNCE7G1vcOlO4MJl0HUTttImWSCh9VZKejg?pli=1&key=eHYzRTZlOU1BOEZfY0lYT1p5Z1ZLcTFBeG5Fd0Zn",
    },
    {
      year: "2024 - The Original (Skupinky)",
      url: "https://photos.google.com/share/AF1QipNByJ8fkvex1-nz_iVJySIq6dq-kvE1m6fkdGAVnARTEKvWztTHhET1K1pVSv1BbA?key=Q1dFaTdpZ0dPbFRURm94cnZRMV9EazZBRDFzQl93",
    },
    {
      year: "2023 - Part of the plan",
      url: "https://photos.google.com/share/AF1QipPUQLBpyOHKQ2e00I5OD21TI2vn1eYKylRzSxVuG83r9B7qfQuJSCvNDdfw3zCCcA?pli=1&key=aUhCU2RyUHI0NmlKdjdqb2pTbjRfVE9PQ2pTUXB3",
    },
    {
      year: "2023 - Part of the plan (Skupinky)",
      url: "https://photos.google.com/share/AF1QipMdCSaLcH15gUu7jiUHmXr3M6PzOkWTExl26U7qYt8RWeXVEn3gX1ktV8Q13RCraw?key=dm53Q0k2UG05YnJJdXBUZlJaRUdyZHRIWUtPX2h3",
    },
    {
      year: "2022 - All Good",
      url: "https://photos.google.com/share/AF1QipNrYooa9_Pe6e3GiH3TTafc845uszvKJioIS5boN_4dLP1LyMqBzut3E9bzT5A4vQ?key=bWNQdUo5bE5LYXVVbGRzRnVZdVVaMWNKNGQzaGZn",
    },
    {
      year: "2022 - All Good (Skupinky)",
      url: "https://photos.google.com/share/AF1QipNawwc8I3XTJbScw2h3Zkn3-ayuoBvwHXW4utwR0Jt1eMqWHi2Ppex6hgBKMnkYrg?key=MzZPTl82TVpJZDlmM3dCVUhLRk1nMmtkYTJKSVl3",
    },
    {
      year: "2021 - Beyond",
      url: "https://photos.google.com/share/AF1QipPuLZL81DxOUMX5bJNk2--d9zpNImNvIB1Ktw7iYewMnxXwbfE2Oa_K3fKofVleUw?key=dHQ1Z2tIeDJVQVZsV24tVHZ2N05VMWtCNFdQYUNn",
    },
    { year: "2018 - Reign Forever", url: "https://photos.app.goo.gl/WrRwUo8YRhkA4JQb9" },
    { year: "2017 - Seen", url: "https://photos.app.goo.gl/H5Wqy2xMK6XBYuJH2" },
  ] as YearAlbum[],
  galleryImages: [
    { src: "/assets/img/17.webp", alt: "Kecy camp moment 17" },
    { src: "/assets/img/18.webp", alt: "Kecy camp moment 18" },
    { src: "/assets/img/19.webp", alt: "Kecy camp moment 19" },
    { src: "/assets/img/20.webp", alt: "Kecy camp moment 20" },
    { src: "/assets/img/21.webp", alt: "Kecy camp moment 21" },
    { src: "/assets/img/22.webp", alt: "Kecy camp moment 22" },
    { src: "/assets/img/23.webp", alt: "Kecy camp moment 23" },
    { src: "/assets/img/24.webp", alt: "Kecy camp moment 24" },
    { src: "/assets/img/25.webp", alt: "Kecy camp moment 25" },
    { src: "/assets/img/26.webp", alt: "Kecy camp moment 26" },
    { src: "/assets/img/27.webp", alt: "Kecy camp moment 27" },
    { src: "/assets/img/28.webp", alt: "Kecy camp moment 28" },
    { src: "/assets/img/29.webp", alt: "Kecy camp moment 29" },
    { src: "/assets/img/30.webp", alt: "Kecy camp moment 30" },
    { src: "/assets/img/31.webp", alt: "Kecy camp moment 31" },
    { src: "/assets/img/32.webp", alt: "Kecy camp moment 32" },
  ] as GalleryImage[],
  organizers: [
    "Kecy team (cca 20 mladých ľudí)",
    "Evanjelická cirkev Košice",
    "Občianske Združenie Útočište",
    "Tréningové centrum Kompas, Žilina",
  ],
  contact: {
    address:
      "Klub Hore, Zvonárska 23, Košice (vo dvore dvere vpravo, zvonček ZBC 1. poschodie)",
    email: "kekecy@gmail.com",
    person: "Filip Iglai - vedúci tábora",
    phone: "0907 572 697",
  },
};
