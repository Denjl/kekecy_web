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
  heroImage: "/assets/img/reallife.png",
  infoImage: "/assets/img/",
  teamImage: "/assets/img/team.jpg",
  videoUrl: "https://www.youtube.com/embed/9EGViR5E9B8",
  dateRange: "6.-12. Júl 2025",
  locationLabel: "Borda, Košický Klečenov",
  locationUrl:
    "https://www.google.com/maps/place/044+45+Ko%C5%A1ick%C3%BD+Kle%C4%8Denov-Borda/@48.7544933,21.5050588,17z/data=!3m1!4b1!4m6!3m5!1s0x473eda4fdcc75f15:0xa00f7d44d302540!8m2!3d48.7548!4d21.5091699!16s%2Fg%2F1t_tj1r1?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D",
  registrationWindow: "Registrácia prebieha od 1. 3. do 29. 6. 2025.",
  registrationUrl:
    "https://www.emsreg.eu/public_otm/events/15517/registrations/landing_page?group_id=12853",
  registrationNote:
    "Za prihláseného ťa považujeme až po zaplatení zálohy vo výške 50 €.",
  payment: {
    iban: "SK33 1100 0000 0026 2771 7397",
    note: "KECY CAMP a svoje meno",
    scholarshipEmail: "kekecy@gmail.com",
  },
  priceTiers: [
    { price: "209 €", deadline: "do 30. apríla" },
    { price: "229 €", deadline: "do 31. mája" },
    { price: "249 €", deadline: "do 29. júna" },
  ] as PriceTier[],
  refundRules: [
    {
      refund: "100 %",
      condition:
        "písomné odhlásenie aspoň 30 dní pred začiatkom tábora (najneskôr 6. 6. 2025)",
    },
    {
      refund: "50 %",
      condition:
        "písomné odhlásenie aspoň 10 a menej ako 30 dní pred začiatkom tábora (najneskôr 26. 6. 2025)",
    },
    {
      refund: "25 %",
      condition:
        "písomné odhlásenie aspoň 5 a menej ako 10 dní pred začiatkom tábora (najneskôr 30. 6. 2025)",
    },
    {
      refund: "0 %",
      condition: "písomné odhlásenie menej ako 5 dní pred začiatkom tábora (1. 7. 2025 a neskôr)",
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
      year: "2024",
      url: "https://photos.google.com/share/AF1QipN-Fj6C_H7AGiHTvdY9G3S9p-mmfF0tNCE7G1vcOlO4MJl0HUTttImWSCh9VZKejg?pli=1&key=eHYzRTZlOU1BOEZfY0lYT1p5Z1ZLcTFBeG5Fd0Zn",
    },
    {
      year: "2023",
      url: "https://photos.google.com/share/AF1QipPUQLBpyOHKQ2e00I5OD21TI2vn1eYKylRzSxVuG83r9B7qfQuJSCvNDdfw3zCCcA?pli=1&key=aUhCU2RyUHI0NmlKdjdqb2pTbjRfVE9PQ2pTUXB3",
    },
    {
      year: "2022",
      url: "https://photos.google.com/share/AF1QipNrYooa9_Pe6e3GiH3TTafc845uszvKJioIS5boN_4dLP1LyMqBzut3E9bzT5A4vQ?key=bWNQdUo5bE5LYXVVbGRzRnVZdVVaMWNKNGQzaGZn",
    },
    {
      year: "2021",
      url: "https://photos.google.com/share/AF1QipPuLZL81DxOUMX5bJNk2--d9zpNImNvIB1Ktw7iYewMnxXwbfE2Oa_K3fKofVleUw?key=dHQ1Z2tIeDJVQVZsV24tVHZ2N05VMWtCNFdQYUNn",
    },
    { year: "2018", url: "https://photos.app.goo.gl/WrRwUo8YRhkA4JQb9" },
    { year: "2017", url: "https://photos.app.goo.gl/H5Wqy2xMK6XBYuJH2" },
  ] as YearAlbum[],
  galleryImages: [
    { src: "/assets/img/17.jpg", alt: "Kecy camp moment 17" },
    { src: "/assets/img/18.jpg", alt: "Kecy camp moment 18" },
    { src: "/assets/img/19.jpg", alt: "Kecy camp moment 19" },
    { src: "/assets/img/20.jpg", alt: "Kecy camp moment 20" },
    { src: "/assets/img/21.jpg", alt: "Kecy camp moment 21" },
    { src: "/assets/img/22.jpg", alt: "Kecy camp moment 22" },
    { src: "/assets/img/23.jpg", alt: "Kecy camp moment 23" },
    { src: "/assets/img/24.jpg", alt: "Kecy camp moment 24" },
    { src: "/assets/img/25.jpg", alt: "Kecy camp moment 25" },
    { src: "/assets/img/26.jpg", alt: "Kecy camp moment 26" },
    { src: "/assets/img/27.jpg", alt: "Kecy camp moment 27" },
    { src: "/assets/img/28.jpg", alt: "Kecy camp moment 28" },
    { src: "/assets/img/29.jpg", alt: "Kecy camp moment 29" },
    { src: "/assets/img/30.jpg", alt: "Kecy camp moment 30" },
    { src: "/assets/img/31.jpg", alt: "Kecy camp moment 31" },
    { src: "/assets/img/32.jpg", alt: "Kecy camp moment 32" },
  ] as GalleryImage[],
  organizers: [
    "Kecy team (cca 15 mladých ľudí)",
    "Evanjelická cirkev Košice",
    "Občianske Združenie Útočište",
    "Tréningové centrum Kompas, Žilina",
  ],
  contact: {
    address:
      "Klub Hore, Zvonárska 23, Košice (vo dvore dvere vpravo, zvonček ZBC 1. poschodie)",
    email: "kekecy@gmail.com",
    person: "Barbora Benešová - vedúca tábora",
    phone: "0902 524 746",
  },
};
