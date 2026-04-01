import type {
  AdmissionsStep,
  BrandVariant,
  FactItem,
  GalleryCollection,
  PageContent,
  PartnerItem,
  PressItem,
  SiteNavItem,
  SupportInfo,
  TeamGroup,
  TeamMember,
} from "@/types/paideia";

export const brand = {
  name: "Paideia",
  subtitle: "Freie Schule Salzburg",
  claim: "Bildung als Freiheit und Form.",
  strapline:
    "Eine freie Schule, in der Kinder getragen, herausgefordert und auf ein wirksames Leben vorbereitet werden.",
  email: "info@kreativwerkstattsalzburg.at",
  address: "Strubergasse 26, 5020 Salzburg",
};

export const mainNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Philosophie", href: "/philosophie" },
  { label: "Lernen & Alltag", href: "/lernen-alltag" },
  { label: "Aufnahme", href: "/aufnahme" },
  { label: "Team", href: "/team" },
  { label: "Partner & Foerderer", href: "/partner-foerderer" },
  { label: "Presse", href: "/presse" },
  { label: "Kontakt", href: "/kontakt" },
];

export const extendedNav: SiteNavItem[] = [
  { label: "Weitere Informationen", href: "/weitere-informationen" },
  { label: "Verein & Traeger", href: "/verein-traeger" },
  { label: "KreativWerkBlatt", href: "/kreativwerkblatt" },
  { label: "Fotos 2024/25", href: "/fotos/2024-25" },
  { label: "Fotos 2023/24", href: "/fotos/2023-24" },
];

export const homeFacts: FactItem[] = [
  {
    value: "31 Kinder",
    label: "bewusst klein statt industriell skaliert",
  },
  {
    value: "6 bis 15 Jahre",
    label: "altersgemischte Lernkultur im echten Alltag",
  },
  {
    value: "270 m2",
    label: "eigener Bereich in der Salzburger Volkshochschule",
  },
  {
    value: "BI 32441",
    label: "spendenbeguenstigter Traegerverein seit 29. September 2025",
  },
];

export const philosophyPillars = [
  {
    greek: "Philia",
    translation: "tragende Beziehung",
    title: "Gesehen werden",
    body:
      "Beziehung ist das Fundament. Kinder brauchen echte Naehe, Sicherheit und die Erfahrung, in ihrer Eigenart wahrgenommen zu werden.",
  },
  {
    greek: "Eleutheria + Kosmos",
    translation: "Freiheit mit Form",
    title: "Gefordert werden",
    body:
      "Freiheit bleibt nicht beliebig. Klare Rhythmen, Rituale und Herausforderung schaffen die Struktur, in der Kinder ueber sich hinauswachsen koennen.",
  },
  {
    greek: "Phronesis + Sophia",
    translation: "Urteilskraft und Weisheit",
    title: "Wirksam werden",
    body:
      "Bildung zielt nicht nur auf Wissen. Sie soll Kompetenz, Urteilskraft und verantwortungsvolle Wirksamkeit hervorbringen.",
  },
];

export const brandVariants: BrandVariant[] = [
  {
    label: "Farbe",
    description: "das aktuelle Logo in seiner mehrschichtigen Originalfassung",
    src: "/paideia/logos/wordmark-color.png",
    tone: "light",
  },
  {
    label: "Schwarz",
    description: "fuer klare Anwendungen auf hellen Flaechen",
    src: "/paideia/logos/wordmark-black.png",
    tone: "light",
  },
  {
    label: "Weiss",
    description: "fuer dunkle Hero-Flaechen und Overlay-Situationen",
    src: "/paideia/logos/wordmark-white.png",
    tone: "ink",
  },
  {
    label: "Rot",
    description: "fuer Signalstellen und konzentrierte Akzente",
    src: "/paideia/logos/wordmark-red.png",
    tone: "light",
  },
  {
    label: "Outline",
    description: "als wiederkehrendes Formmotiv fuer Raum, Bewegung und Aufbruch",
    src: "/paideia/logos/mark-outline-black.png",
    tone: "light",
  },
];

export const supportInfo: SupportInfo = {
  registrationNumber: "BI 32441",
  bankAccount: "AT48 3500 0000 4216 4087",
  paypalUrl: "https://www.paypal.com/donate/?hosted_button_id=X9XXNS4EKWFGE",
  email: brand.email,
  associationName:
    "Kreativwerkstatt - Verein zur Foerderung, Unterstuetzung und Erforschung ganzheitlicher Bildung",
};

export const admissionFacts: FactItem[] = [
  {
    value: "13. April 2026",
    label: "letzter bekannter Info-Abend fuer 2026/27, 19:00 Uhr",
    detail: "Ortsbekanntgabe bei Anmeldung",
  },
  {
    value: "5. Juli 2024",
    label: "historische Frist auf der Alt-Seite fuer alte Aufnahmeformulare",
    detail: "wird in Paideia klar als Altstand kenntlich gemacht",
  },
  {
    value: "7:30 bis 13:00",
    label: "regulaere Oeffnungszeit Montag bis Freitag",
  },
  {
    value: "keine Neuaufnahme im laufenden Schuljahr",
    label: "laut bestehender Schulrechtslage",
  },
];

export const admissionsSteps: AdmissionsStep[] = [
  {
    step: "01",
    title: "Informieren",
    body:
      "Familien erhalten auf der Website, im Leitbild und in den FAQ einen klaren Einblick in Haltung, Tagesrhythmus und Rahmenbedingungen.",
  },
  {
    step: "02",
    title: "Info-Abend besuchen",
    body:
      "Der verbleibende bekannte Termin fuer das Schuljahr 2026/27 ist Montag, 13. April 2026, um 19:00 Uhr. Die Ortsbekanntgabe erfolgt nach Anmeldung per Mail.",
  },
  {
    step: "03",
    title: "Schriftliches Aufnahmeansuchen",
    body:
      "Nach dem ersten Kennenlernen folgt das formale Aufnahmeansuchen. So wird das Interesse verbindlich und dokumentiert.",
  },
  {
    step: "04",
    title: "Schnupperwoche und Gespraech",
    body:
      "Das Kind verbringt eine volle Schulwoche in der Gemeinschaft. Danach folgt das Kennenlerngespraech mit der Familie.",
  },
  {
    step: "05",
    title: "Entscheidung und Vertragsphase",
    body:
      "Die Schul- und Vereinsleitung entscheidet nach paedagogischen und organisatorischen Kriterien. Mit Zusage folgen Elternvertrag, Kaution und Einschreibgebuehr.",
  },
];

const coreMembers: TeamMember[] = [
  {
    name: "Mag. Karin Mitterbauer",
    role: "Initiatorin und Leiterin der Kreativwerkstatt",
    order: 1,
    image: "/paideia/team/karin-mitterbauer.jpg",
    shortBio:
      "Seit ueber 20 Jahren beschaeftigt sie sich mit freier, intrinsisch motivierter Bildung und hat die Schule als Herzensprojekt ins Leben gerufen.",
    longBio: [
      "Studium Lehramt Musikerziehung, elementare Musik- und Tanzpaedagogik sowie kombinierte Religionspaedagogik.",
      "Lebens- und Sozialberaterin, Koerpertherapeutin, langjaehrig in Fortbildung, Supervision und Fuehrungskraeftecoaching taetig.",
      "Sie beschreibt Schule als einen Ort, an dem Kinder begleitet, inspiriert und in ihrer Potentialentfaltung ernst genommen werden.",
    ],
    area: "core",
    visible: true,
  },
  {
    name: "Oliwia Garlicka",
    role: "Lernbegleiterin der Kreativwerkstatt",
    order: 2,
    image: "/paideia/team/oliwia-garlicka.jpg",
    shortBio:
      "Sie verbindet Herzensbildung, kuenstlerische Impulse und psychologisches Gespuer mit dem Wunsch, Kinder in ihrer Neugier und ihrem Mut zu staerken.",
    longBio: [
      "Ihre beruflichen Stationen reichen von Zahntechnik und Dekoration bis zu Kinderfotografie, Schauspiel, Buehnengestaltung, Kostuem und Maske.",
      "Sie liebt es, theoretisches Wissen mit handwerklichem Geschick und Aesthetik zu verbinden.",
      "Durch ihre Ausbildung zur Heilpraktikerin fuer Psychotherapie legt sie besonderes Gewicht auf seelische Beduerfnisse, Gruppendynamik und Herzensbildung.",
    ],
    area: "core",
    visible: true,
  },
  {
    name: "Momo Feichtinger",
    role: "Bildungsphilosophie, Zukunftskompetenz und Teamprofil",
    order: 3,
    image: "/paideia/team/momo-feichtinger.jpg",
    shortBio:
      "Er bringt die Perspektive des Dreiklangs der Bildung ein: Beziehung als Fundament, sinnvolles Schaffen als Weg und Weisheit plus Kompetenz als Ziel.",
    longBio: [
      "Momo arbeitet an der Schnittstelle von Bildungsdenken, praktischer Umsetzung, Lehre und Zukunftstechnologien.",
      "Fuer Paideia bringt er insbesondere die Baumrind-inspirierte Balance aus Waerme, Struktur, Herausforderung und echter Wirksamkeit ein.",
      "Sein YouTube-Impuls Der perfekte Dreiklang der Bildung verdichtet diese Linie oeffentlich in eine klare, anschlussfaehige Sprache.",
      "Er wird bewusst nicht als Gruender inszeniert, sondern als Teammitglied und philosophische Stimme in dritter Person.",
    ],
    area: "core",
    visible: true,
  },
];

const extendedMembers: TeamMember[] = [
  {
    name: "Mag. Kristina Sachs",
    role: "Lernbegleiterin der Kreativwerkstatt",
    order: 4,
    image: "/paideia/team/kristina-sachs.jpg",
    shortBio:
      "Sie arbeitet aus einer Haltung der gelungenen Beziehung, der Selbstwirksamkeit und einer Gemeinschaft, die Sicherheit und Potentialentfaltung zusammenbringt.",
    longBio: [
      "Ausbildungen in zeitgenoessischem Tanz, Tanzpaedagogik, Bewegung & Sport, Spanisch, Waldorf, Yoga und Elementarpaedagogik praegen ihre Vielseitigkeit.",
      "Sie beschreibt Schule als Lernumgebung, in der Besonderheiten jedes Menschen anerkannt und eingebettet in Gemeinschaft gelebt werden koennen.",
    ],
    area: "extended",
    visible: true,
  },
  {
    name: "Julian Reutterer",
    role: "Lernbegleiter der Kreativwerkstatt",
    order: 5,
    image: "/paideia/team/julian-reutterer.jpg",
    shortBio:
      "Er verbindet autodidaktisches Lernen, Jugendarbeit und Tanzpaedagogik mit einer klaren Haltung: Kinder muessen zuerst spueren, dass man sie wirklich meint.",
    longBio: [
      "Studium urbane Tanzstile, langjaehrige Arbeit in Jugendarbeit und Tanzpaedagogik sowie Taetigkeit als Religionslehrer.",
      "Sein Leitsatz auf der bestehenden Seite lautet: Children do not care how much you know, until they know how much you care.",
    ],
    area: "extended",
    visible: true,
  },
  {
    name: "Tanja Nagaikin",
    role: "Lernbegleiterin der Kreativwerkstatt",
    status: "derzeit karenziert",
    order: 6,
    image: "/paideia/team/tanja-nagaikin.jpg",
    shortBio:
      "Sie steht fuer eine konzentrierte, inspirierende Lernatmosphaere, in der Sicherheit, Wunsch und Fehlertoleranz wieder moeglich werden.",
    longBio: [
      "Erstes und Zweites Staatsexamen fuer Lehramt an Gymnasien in Bayern, Montessori-Diplom fuer die Sekundarstufe.",
      "Sie beschreibt freie Schule als Oase fuer Inspiration und tiefe Konzentration in einer hektischen Zeit.",
    ],
    area: "extended",
    visible: true,
  },
  {
    name: "Lupe Marcos Solar",
    role: "Europaeische Freiwillige",
    order: 7,
    image: "/paideia/team/lupe-marcos-solar.jpg",
    shortBio:
      "Sie bringt soziale Paedagogik, Empathie, Anpassungsfaehigkeit und die Freude an kreativen, autonomen und sinnvollen Lernwegen in den Alltag ein.",
    longBio: [
      "Geboren 2002 in Spanien, soziale Paedagogin und Lifeguard.",
      "Sie hebt Vertrauen, Motivation und alltaegliche Begleitung im Bildungsprozess hervor.",
    ],
    area: "extended",
    visible: true,
  },
  {
    name: "Birgit Brandner",
    role: "Grafik und Design",
    order: 8,
    image: "/paideia/team/birgit-brandner.png",
    shortBio:
      "Sie begleitet die Schule in den Themen Grafik und Design und sorgt fuer visuelle Klarheit rund um die Marke.",
    longBio: [
      "Geboren 1988, Mutter eines Sohnes.",
      "Sie ist Teil der gestalterischen Kontinuitaet zwischen bestehender Kreativwerkstatt-Kommunikation und Paideia-Auftritt.",
    ],
    area: "extended",
    visible: true,
  },
];

const legacyMembers: TeamMember[] = [
  {
    name: "Franziska Berger",
    role: "bisherige Wegbegleiterin",
    order: 1,
    image: "/paideia/team/franziska-berger.jpg",
    shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    area: "legacy",
    visible: true,
  },
  {
    name: "Magdalena Maria Heidinger",
    role: "bisherige Wegbegleiterin",
    order: 2,
    image: "/paideia/team/magdalena-maria-heidinger.jpg",
    shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    area: "legacy",
    visible: true,
  },
  {
    name: "Andrea Volgger",
    role: "bisherige Wegbegleiterin",
    order: 3,
    image: "/paideia/team/andrea-volgger.jpg",
    shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    area: "legacy",
    visible: true,
  },
  {
    name: "Mag. Dr. Michaela Weihs",
    role: "bisherige Wegbegleiterin",
    order: 4,
    image: "/paideia/team/michaela-weihs.jpg",
    shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    area: "legacy",
    visible: true,
  },
  {
    name: "Carina Allerberger, MA, Bsc",
    role: "bisherige Wegbegleiterin",
    order: 5,
    image: "/paideia/team/carina-allerberger.jpg",
    shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    area: "legacy",
    visible: true,
  },
  {
    name: "Sabrina Winkler",
    role: "bisherige Wegbegleiterin",
    order: 6,
    image: "/paideia/team/sabrina-winkler.png",
    shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    area: "legacy",
    visible: true,
  },
  {
    name: "Iciar Perez Martin",
    role: "ehemalige europaeische Freiwillige",
    order: 7,
    image: "/paideia/team/iciar-perez-martin.jpg",
    shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    area: "legacy",
    visible: true,
  },
  {
    name: "Gabriela Kulincheva",
    role: "ehemalige europaeische Freiwillige",
    order: 8,
    image: "/paideia/team/gabriela-kulincheva.jpg",
    shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    area: "legacy",
    visible: true,
  },
];

export const teamGroups: TeamGroup[] = [
  {
    title: "Kernteam",
    description:
      "Die sichtbar fuehrende Reihe fuer Version 1: Karin zuerst, Oliwia danach, Momo an dritter Stelle.",
    members: coreMembers,
  },
  {
    title: "Weiteres Team",
    description:
      "Die weiteren aktuellen Personen der bestehenden Teamseite werden gleichwertig und vollstaendig mitgefuehrt.",
    members: extendedMembers,
  },
  {
    title: "Bisher begleitet",
    description:
      "Ein klar getrennter Bereich fuer fruehere und ergaenzende Wegbegleiterinnen und Wegbegleiter.",
    members: legacyMembers,
  },
];

export const partners: PartnerItem[] = [
  ["bw advertising", "https://bw-advertising.at/", "Kommunikation und Sichtbarkeit"],
  ["Europaeisches Solidaritaetskorps", "https://www.solidaritaetskorps.at/", "Unterstuetzung europaeischer Freiwilliger"],
  ["Birgit Brandner", "https://www.birgit-brandner.com/", "Design und kreative Begleitung"],
  ["Naturfutterlaedchen", "https://www.naturfutterlaedchen.eu/", "Lokale Unterstuetzung"],
  ["Angela Balance", "https://www.angela-balance.com/", "Bewegung und Koerperarbeit"],
  ["Holz Enzinger", "https://holz-enzinger.at/", "Handwerk und Material"],
  ["Ferox", "http://www.ferox.world", "Unterstuetzung aus der Region"],
  ["Physio Juandmi", "http://www.physio-juandmi.at/", "Gesundheit und Begleitung"],
].map(([name, href, note]) => ({ name, href, note }));

export const pressItems: PressItem[] = [
  {
    year: "2025",
    date: "13.03.2025",
    title: "Die Kreativwerkstatt in den Salzburger Stadtnachrichten",
    body:
      "Die Schule wird mit Lernkonzept, provisorischen Raeumen und der Vision eines eigenen Gebaeudes vorgestellt.",
    href: "https://www.sn.at/salzburg/chronik/in-salzburg-schulen-145826224",
    image: "/paideia/press/2025-stadtnachrichten.jpg",
  },
  {
    year: "2025",
    date: "08.01.2025",
    title: "Die Kreativwerkstatt im Radio",
    body:
      "In der Sendung auf der Radiofabrik geht es um Schule ohne Notendruck, mit Selbstbestimmung, Kreativitaet und Gemeinschaft.",
    href: "https://cba.media/692211",
    image: "/paideia/press/2025-radiofabrik.jpg",
  },
  {
    year: "2023",
    date: "25.09.2023",
    title: "Drei freie Schulen gestartet",
    body:
      "Ein frueher Bericht darueber, wie sich alternative Schulgruendungen in Salzburg positionieren und warum neue Bildungsorte entstehen.",
    href: "https://www.sn.at/salzburg/politik/50-kinder-lernen-in-der-stadt-salzburg-bald-in-neuer-freier-schule-137440807",
    image: "/paideia/press/2023-salzburger-nachrichten.png",
  },
  {
    year: "2023",
    date: "04.2023",
    title: "Neue freie Schule nach Seekirchner Vorbild",
    body:
      "Ein frueher Medienmoment, in dem die Entstehungsidee der Schule erstmals groesser oeffentlich sichtbar wurde.",
    href: "https://www.sn.at/salzburg/politik/neue-freie-schule-soll-in-salzburg-nach-seekirchner-vorbild-entstehen-125208910",
    image: "/paideia/press/2023-seekirchen-vorbild.png",
  },
];

export const galleries: Record<string, GalleryCollection> = {
  "2024-25": {
    slug: "2024-25",
    title: "Fotos Schuljahr 2024/25",
    description:
      "Eindruecke aus Lernmomenten, Kulturarbeit, Begegnung und Alltag im dritten Schuljahr.",
    items: [
      {
        src: "/paideia/gallery/2024-25/kws2422.jpeg",
        alt: "Kinder in konzentrierter Lernatmosphaere",
        caption: "Konzentriertes Arbeiten mit echter Praesenz.",
      },
      {
        src: "/paideia/gallery/2024-25/kws2421.jpeg",
        alt: "Lernmoment in der Gruppe",
        caption: "Gemeinschaft und Eigenstaendigkeit zugleich.",
      },
      {
        src: "/paideia/gallery/2024-25/kws2418.jpeg",
        alt: "Werkmoment im Schulalltag",
        caption: "Lernen ueber Tun, Beobachten und Ausprobieren.",
      },
      {
        src: "/paideia/gallery/2024-25/kws2416.jpeg",
        alt: "Dokumentarischer Blick in den Alltag",
        caption: "Ruhige Konzentration statt hektischer Oberflaeche.",
      },
      {
        src: "/paideia/gallery/2024-25/kws2413.jpeg",
        alt: "Schulgemeinschaft im Raum",
        caption: "Struktur als Boden fuer Freiheit.",
      },
      {
        src: "/paideia/gallery/2024-25/kws2436.jpeg",
        alt: "Kinder im Lernraum",
        caption: "Eigenes Tempo, echte Beziehung, sichtbare Arbeit.",
      },
      {
        src: "/paideia/gallery/2024-25/kws2433.jpeg",
        alt: "Alltagsszene aus der Schule",
        caption: "Bildung als gelebter Tagesrhythmus.",
      },
      {
        src: "/paideia/gallery/2024-25/kws2456.jpeg",
        alt: "Kinder in Bewegung und Interaktion",
        caption: "Bewegung, Ausdruck und soziale Resonanz.",
      },
    ],
  },
  "2023-24": {
    slug: "2023-24",
    title: "Fotos Schuljahr 2023/24",
    description:
      "Fruehe Bildspuren der Schule: Werkstatt, Gemeinschaft, Spielflaechen und Lernmomente.",
    items: [
      {
        src: "/paideia/gallery/2023-24/kws1.jpeg",
        alt: "Schulgemeinschaft im Freien",
        caption: "Der Ort als Gemeinschaft und nicht nur als Gebaeude.",
      },
      {
        src: "/paideia/gallery/2023-24/kws12.jpeg",
        alt: "Lernende Kinder im Innenraum",
        caption: "Sanfte Dokumentarfotografie statt Inszenierung.",
      },
      {
        src: "/paideia/gallery/2023-24/kws14.jpeg",
        alt: "Schulalltag und Werkmomente",
        caption: "Lernen mit allen Sinnen und sichtbarer Arbeit.",
      },
      {
        src: "/paideia/gallery/2023-24/kws17.jpeg",
        alt: "Kinder in konzentrierter Runde",
        caption: "Praesenz, Beziehung und gemeinsame Orientierung.",
      },
      {
        src: "/paideia/gallery/2023-24/kws7.jpeg",
        alt: "Werkstatt- und Arbeitsmoment",
        caption: "Eigenaktivitaet statt bulimischem Lernen.",
      },
      {
        src: "/paideia/gallery/2023-24/kws39.jpeg",
        alt: "Schulalltag mit Bewegung",
        caption: "Rhythmus, Raum und Koerperlichkeit gehoeren dazu.",
      },
      {
        src: "/paideia/gallery/2023-24/kws38.jpeg",
        alt: "Lernkultur in der Gruppe",
        caption: "Gemeinschaft als tragende Lernform.",
      },
      {
        src: "/paideia/gallery/2023-24/kws44.jpeg",
        alt: "Dokumentarischer Blick auf Kinder im Alltag",
        caption: "Gesehen werden und herausgefordert werden.",
      },
    ],
  },
};

export const pages: Record<string, PageContent> = {
  philosophie: {
    slug: "philosophie",
    navLabel: "Philosophie",
    title: "Paideia bedeutet Bildung als Formung des ganzen Menschen",
    description:
      "Die Leitidee verbindet griechische Bildungsbegriffe mit dem modernen Dreiklang aus Beziehung, sinnvollem Schaffen und verantwortungsvoller Wirksamkeit.",
    hero: {
      eyebrow: "Paideia",
      title: "Nicht bloss Wissen vermitteln, sondern Menschen bilden.",
      description:
        "Paideia steht fuer eine Schule, in der Freiheit, Struktur, Exzellenz und menschliche Reifung nicht gegeneinander ausgespielt werden.",
      kicker: "Beziehung ist das Fundament. Sinnvolles Schaffen ist der Weg. Weisheit und Kompetenz sind das Ziel.",
      image: "/paideia/home/hero-cool.jpg",
      imageAlt: "Landschultage und gemeinsames Lernen",
      ctas: [
        { label: "Lernen & Alltag", href: "/lernen-alltag" },
        { label: "Team ansehen", href: "/team" },
      ],
    },
    ribbon: homeFacts,
    sections: [
      {
        type: "pillars",
        eyebrow: "Der Dreiklang",
        title: "Die neue Seite uebersetzt die Bildungsphilosophie sichtbar in Form, Sprache und Rhythmus.",
        intro:
          "Paideia liest die Schule nicht als Stoffverteilung, sondern als Beziehungskultur, Praxisraum und Weg zu Urteilskraft.",
        items: philosophyPillars,
      },
      {
        type: "prose",
        theme: "tint",
        eyebrow: "Baumrind",
        title: "Waerme und Herausforderung gehoeren zusammen.",
        body: [
          "Die neue Marke rahmt Freiheit nicht als Beliebigkeit, sondern als personale Entfaltung innerhalb klarer Beziehungen, Rhythmen und Vereinbarungen.",
          "Damit folgt Paideia dem autoritativen Quadranten: Kinder sollen sich getragen und gesehen fuehlen, zugleich aber ueber ihre aktuellen Grenzen hinauswachsen koennen.",
        ],
        bullets: [
          "Weder kalter Leistungsdruck noch laissez-faire.",
          "Sicherheit, echte Wahrnehmung und klare Struktur bilden eine gemeinsame Lernkultur.",
          "Herausforderung wird nicht gegen Naehe ausgespielt.",
        ],
      },
      {
        type: "prose",
        eyebrow: "Brand Core",
        title: "Still, klar, kultiviert und zukunftsoffen statt bunt-beliebig.",
        body: [
          "Die vorhandene Markenstrategie beschreibt Paideia als moderne Bildungsinstitution mit Licht, Luft, Ruhe, Klarheit und einer sehr reduzierten, edlen Formensprache.",
          "Die Website macht diesen Kern sichtbar: Freiheit, Tiefe, menschliche Entfaltung, eigenstaendiges Denken, Kreativitaet und Exzellenz werden nicht als Schlagworte gezeigt, sondern als Atmosphaere, Bildwahl, Typografie und Rhythmus.",
        ],
        bullets: [
          "weniger Reformschul-Romantik, mehr kultivierte Bildungsmarke",
          "nicht verspielt, nicht schulbuchhaft, nicht dekorativ",
          "helle Flaechen, praezise Akzentfarbe, klare kompositorische Ruhe",
          "Exzellenz ohne Eliteduenkel, Freiheit ohne Beliebigkeit",
        ],
      },
      {
        type: "prose",
        eyebrow: "Griechische Begriffe",
        title: "Ein bewusst kuratiertes Vokabular",
        body: [
          "Eleutheria steht fuer Freiheit, Arete fuer Exzellenz, Sophia fuer Weisheit, Phronesis fuer Urteilskraft, Ethos fuer Haltung und Philia fuer tragende Gemeinschaft.",
          "Diese Begriffe werden auf der Website sparsam eingesetzt: nicht als Schmuck, sondern als Praezisierung dessen, was die Schule meinen will.",
        ],
        quote: {
          quote:
            "Bildung braucht Naehe und Anspruch, Wirklichkeit und Sinn, Kompetenz und Weisheit.",
          attribution: "Paideia Arbeitsformel",
        },
        ctas: [
          {
            label: "Momo ueber den Dreiklang",
            href: "https://www.youtube.com/watch?v=I3Zg7t5-a-M",
            external: true,
          },
        ],
      },
      {
        type: "logos",
        eyebrow: "Branding",
        title: "Die Logo-Familie macht dieselbe Haltung in unterschiedlichen Situationen lesbar.",
        intro:
          "Das Outline-Motiv dient zugleich als visuelle Metapher fuer Aufbruch, Form und Durchlaessigkeit.",
        items: brandVariants,
      },
    ],
  },
  "lernen-alltag": {
    slug: "lernen-alltag",
    navLabel: "Lernen & Alltag",
    title: "Rhythmus, Raum und Projekterfahrung bilden den Boden fuer Freiheit",
    description:
      "Die Schulpraxis verbindet Tagesstruktur, kuenstlerische Arbeit, projektbasiertes Lernen und dokumentierte Entwicklung.",
    hero: {
      eyebrow: "Lernen & Alltag",
      title: "Ein Tagesrhythmus, der Sicherheit gibt und Sinn freisetzt.",
      description:
        "Morgenbewegung, Kreis, Freiarbeit, altersgemischte Zeit, Jause und Abschluss bilden einen Rahmen, in dem Kinder eigenstaendig und verbunden lernen koennen.",
      image: "/paideia/home/hero-warm.jpg",
      imageAlt: "Kinder im dokumentarischen Schulalltag",
      ctas: [
        { label: "Fotos 2024/25", href: "/fotos/2024-25" },
        { label: "Aufnahme", href: "/aufnahme" },
      ],
    },
    ribbon: [
      { value: "7:30", label: "Start mit Sport- und Bewegungsangeboten" },
      { value: "13:00", label: "Schulschluss, derzeit ohne Nachmittagsunterricht" },
      { value: "Kreativraum", label: "plus Bewegungsraum, Toepferwerkstatt und grosse Kueche" },
      { value: "Portfolio", label: "Lernen wird sichtbar statt nur geprueft" },
    ],
    sections: [
      {
        type: "prose",
        eyebrow: "Lernrealitaet",
        title: "Projektlernen und wertschaffendes Lernen sind kein Zusatz, sondern der Kern.",
        body: [
          "Kinder sollen verstehen, warum sie etwas tun. Lernen wird tiefer, wenn es in Projekte, Verantwortung und sichtbare Ergebnisse eingebettet ist.",
          "Kulturelle Arbeit wie RHABARBER RHABARBER oder das KreativWerkBlatt sind deshalb keine nette Zutat, sondern Ausdruck der Bildungsqualitaet selbst.",
        ],
        image: "/paideia/home/theater.jpg",
        imageAlt: "Musiktheaterprojekt der Schule",
      },
      {
        type: "facts",
        theme: "tint",
        eyebrow: "Raum",
        title: "Der aktuelle Ort ist provisorisch und zugleich bewusst beschrieben.",
        intro:
          "Die Schule arbeitet derzeit in den Raeumen der Salzburger Volkshochschule in der Strubergasse.",
        items: [
          {
            value: "Strubergasse 26",
            label: "5020 Salzburg, ehemaliges Areal der Stadtwerke",
          },
          {
            value: "autofreie Siedlung",
            label: "mit Spielflaechen, kleinen Plaetzen und Wegen",
          },
          {
            value: "grosser Spielplatz",
            label: "direkt vor dem eigenen Eingang",
          },
          {
            value: "eigenes Gebaeude",
            label: "bleibt ein klares Zukunftsziel der Schule",
          },
        ],
      },
      {
        type: "gallery",
        eyebrow: "Eindruecke",
        title: "Die Bilder bleiben dokumentarisch, warm und wirklich.",
        intro:
          "Die visuelle Sprache der neuen Seite arbeitet mit echten Raeumen, echten Menschen und konzentrierten Situationen statt mit Symbolbildern.",
        collection: galleries["2024-25"],
      },
    ],
  },
  aufnahme: {
    slug: "aufnahme",
    navLabel: "Aufnahme",
    title: "Ein bewusster Aufnahmeprozess statt schneller Einschreibung",
    description:
      "Paideia dokumentiert den Weg von erstem Kennenlernen bis zur Entscheidung transparent und ohne Widersprueche.",
    hero: {
      eyebrow: "Aufnahme",
      title: "Familien waehlen nicht nur eine Schule, sondern eine Kultur.",
      description:
        "Darum ist der Weg in die Schulgemeinschaft bewusst mehrstufig angelegt: Information, Begegnung, Schnuppern, Gespraech und Entscheidung.",
      image: "/paideia/home/campus-wide.jpg",
      imageAlt: "Schulgemeinschaft und Campusmoment",
      ctas: [
        { label: "Mail schreiben", href: `mailto:${brand.email}` },
        { label: "Weitere Informationen", href: "/weitere-informationen" },
      ],
    },
    ribbon: admissionFacts,
    sections: [
      {
        type: "process",
        eyebrow: "Prozess",
        title: "So laeuft die Aufnahme fuer das Schuljahr 2026/27.",
        intro:
          "Die Alt-Seite fuehrt verschiedene historische Stande. Paideia normalisiert sie auf eine klare, lesbare Abfolge.",
        steps: admissionsSteps,
      },
      {
        type: "prose",
        theme: "tint",
        eyebrow: "Rahmenbedingungen",
        title: "Was Familien heute wissen muessen",
        body: [
          "Waerend des laufenden Schuljahres koennen laut bestehender Schulrechtslage keine neuen Kinder aufgenommen werden.",
          "Privatschul- und Bildungsdirektionsfragen werden auf der Seite nicht vernebelt, sondern klar beschrieben: einschliesslich Oeffentlichkeitsrecht, formalen Meldungen und Externistenpruefungen, falls diese relevant werden.",
        ],
        bullets: [
          "Schulbesuch fuer Kinder ab Schuleintritt, neun Schulstufen, altersgemischte Gesamtgruppe.",
          "Deutsch als Unterrichtssprache; Englisch und weitere Sprachen fliessen projektbezogen ein.",
          "Kostenblatt und Aufnahmeansuchen bleiben als auslagerbare Dokumente vorgesehen.",
        ],
      },
    ],
  },
  "weitere-informationen": {
    slug: "weitere-informationen",
    navLabel: "Weitere Informationen",
    title: "Transparenz ueber Tagesablauf, Sprachen, Zeugnis und Schulrecht",
    description:
      "Die Seite sammelt die sachlichen Informationen der bisherigen Schulwebsite in einer klareren, ruhigeren Form.",
    hero: {
      eyebrow: "Weitere Informationen",
      title: "Souveraene Klarheit statt versteckter Fussnoten.",
      description:
        "Paideia fasst schulrechtliche, organisatorische und alltagspraktische Themen lesbar zusammen, damit Eltern Orientierung statt Reibung erleben.",
      image: "/paideia/home/campus.jpg",
      imageAlt: "Dokumentarischer Blick auf den aktuellen Standort",
    },
    sections: [
      {
        type: "facts",
        eyebrow: "Konkretes",
        title: "Die wichtigsten organisatorischen Punkte auf einen Blick",
        items: [
          { value: "Montag bis Freitag", label: "Schule geoeffnet von 7:30 bis 13:00 Uhr" },
          { value: "Deutsch", label: "Unterrichtssprache, Englisch fliesst regelmaessig ein" },
          { value: "Entwicklungsdokumentation", label: "statt bloesser Ziffernlogik" },
          { value: "Eltern als Mitglieder", label: "der Verein traegt die Rahmenbedingungen mit" },
        ],
      },
      {
        type: "prose",
        theme: "tint",
        eyebrow: "Schulrecht",
        title: "Alttext wird nicht versteckt, sondern eingeordnet.",
        body: [
          "Die bisherige Seite verweist darauf, dass Kinder in einer Privatschule ohne dauerhaftes Oeffentlichkeitsrecht formal bei der Bildungsdirektion gemeldet werden muessen.",
          "Paideia uebernimmt diese Fakten, formuliert sie aber so, dass Familien die Konsequenzen wirklich verstehen: inklusive moeglicher Rueckkehr in die oeffentliche Schule und eventueller Externistenpruefung.",
        ],
      },
      {
        type: "prose",
        eyebrow: "Paedagogik zu Hause",
        title: "Das Konzept soll auch von den Familien mitgetragen werden.",
        body: [
          "Die Schule betont auf der Alt-Seite, dass individuelles Lerntempo, intrinsische Motivation und Freude am Lernen auch zuhause respektiert werden sollen.",
          "Die neue Paideia-Seite macht daraus eine offene, klare Haltung: gute Schule gelingt tiefer, wenn Eltern nicht nur Konsumenten, sondern Mittragende der Kultur sind.",
        ],
      },
    ],
  },
  team: {
    slug: "team",
    navLabel: "Team",
    title: "Alle Menschen, die die Schule tragen, sichtbar und sauber geordnet",
    description:
      "Das Team wird in Kernteam, weiteres Team und bisherige Begleiterinnen und Begleiter gegliedert, ohne jemanden zu verlieren.",
    hero: {
      eyebrow: "Team",
      title: "Eine Schule wird ueber Erwachsene glaubwuerdig.",
      description:
        "Die neue Seite zeigt nicht nur Funktionen, sondern die Menschen dahinter: ihre Haltung, ihre Erfahrung und ihre Art, Beziehung zu gestalten.",
      image: "/paideia/home/group.jpg",
      imageAlt: "Schulgemeinschaft im Alltag",
      ctas: [
        { label: "Philosophie", href: "/philosophie" },
        { label: "Kontakt", href: "/kontakt" },
      ],
    },
    sections: [
      {
        type: "team",
        eyebrow: "Menschen",
        title: "Klar gefuehrt, vollstaendig dokumentiert.",
        intro:
          "Die Reihenfolge auf der Seite folgt dem abgestimmten Aufbau fuer Version 1 und zeigt danach alle weiteren relevanten Personen der bestehenden Teamseite.",
        groups: teamGroups,
      },
    ],
  },
  "verein-traeger": {
    slug: "verein-traeger",
    navLabel: "Verein & Traeger",
    title: "Der Traegerverein haelt die Schule nicht nur formal, sondern kulturell",
    description:
      "Die Schulgemeinschaft wird durch den Verein getragen, finanziert und mitgestaltet.",
    hero: {
      eyebrow: "Verein & Traeger",
      title: "Eltern und Unterstuetzer tragen den Rahmen der Schule mit.",
      description:
        "Nicht nur Paedagogik, auch Ort, Finanzierung und Langfristigkeit werden gemeinschaftlich verantwortet.",
      image: "/paideia/support/pfarrhof.jpg",
      imageAlt: "Bild fuer Zukunftsort und Traegerschaft",
      ctas: [
        { label: "Unterstuetzen", href: supportInfo.paypalUrl, external: true },
        { label: "Partner ansehen", href: "/partner-foerderer" },
      ],
    },
    sections: [
      {
        type: "prose",
        eyebrow: "Traegerstruktur",
        title: "Der Verein ist kein Appendix, sondern Teil des Modells.",
        body: [
          "Alle Eltern und Kinder sind Mitglieder im Verein und verantworten damit den Ort, die finanziellen Ressourcen und die allgemeinen Rahmenbedingungen fuer die Schule mit.",
          "Weitere Unterstuetzerinnen und Unterstuetzer koennen sich ebenfalls beteiligen. So wird aus Schule nicht bloss ein Service, sondern ein echter gemeinsamer Kulturraum.",
        ],
      },
      {
        type: "facts",
        theme: "tint",
        eyebrow: "Spenden",
        title: "Unterstuetzung ist konkret und transparent anschlussfaehig",
        items: [
          { value: supportInfo.registrationNumber, label: "spendenbeguenstigte Registrierungsnummer" },
          { value: supportInfo.bankAccount, label: "Spendenkonto des Vereins" },
          { value: "steuerlich absetzbar", label: "laut bestehender Angabe seit 29. September 2025" },
          { value: "Vortraege", label: "auch fuer interessierte Familien oder Sponsoren moeglich" },
        ],
      },
    ],
  },
  "partner-foerderer": {
    slug: "partner-foerderer",
    navLabel: "Partner & Foerderer",
    title: "Ein lokales Netzwerk aus Bildung, Gestaltung, Koerperarbeit und Unterstuetzung",
    description:
      "Die bestehende Partnerseite wird als ruhiges, glaubwuerdiges Netzwerkformat weitergefuehrt.",
    hero: {
      eyebrow: "Partner & Foerderer",
      title: "Eine Schule dieser Art entsteht nie allein.",
      description:
        "Paideia zeigt das bestehende Unterstuetzungsnetzwerk sichtbar und ohne Sponsorensprache.",
      image: "/paideia/home/campus-wide.jpg",
      imageAlt: "Schulumfeld und Gemeinschaft",
    },
    sections: [
      {
        type: "partners",
        eyebrow: "Netzwerk",
        title: "Menschen und Institutionen, die die Schule mittragen",
        intro:
          "Die Partner bleiben als Teil des Oekosystems lesbar: regional, praktisch und nah an der Sache.",
        items: partners,
      },
    ],
  },
  kreativwerkblatt: {
    slug: "kreativwerkblatt",
    navLabel: "KreativWerkBlatt",
    title: "Schuelerische Kulturarbeit wird sichtbar gemacht",
    description:
      "Das KreativWerkBlatt zeigt, dass Lernen hier nicht im Verborgenen bleibt, sondern Ausdruck, Sprache und Form gewinnt.",
    hero: {
      eyebrow: "KreativWerkBlatt",
      title: "Werk statt Behauptung.",
      description:
        "Die Zeitung und ihre Ausgaben stehen fuer ein Lernen, das sichtbar, stolz und gemeinschaftlich tragfaehig wird.",
      image: "/paideia/newspaper/kreativwerkblatt-2024.png",
      imageAlt: "Doppelseite oder Ausgabe des KreativWerkBlatts",
    },
    sections: [
      {
        type: "prose",
        eyebrow: "Kulturarbeit",
        title: "Sprache, Gestaltung und Oeffentlichkeit gehoeren zur Bildung dazu.",
        body: [
          "Wenn Kinder und Jugendliche an einer Zeitung, einer Auffuehrung oder einer Ausstellung arbeiten, entsteht Lernen mit Resonanz. Es wird pruefbar im besten Sinne: nicht ueber Punkte, sondern ueber Wirklichkeit.",
          "Paideia nutzt das KreativWerkBlatt deshalb nicht als Randthema, sondern als Beleg fuer wertschaffendes Lernen.",
        ],
      },
      {
        type: "gallery",
        theme: "tint",
        eyebrow: "Ausgaben",
        title: "Drei Blickfenster in die publizierte Arbeit",
        intro:
          "Die Website zeigt aktuelle und fruehere Ausgaben als gestaltete Objekte mit echter Materialitaet.",
        collection: {
          slug: "kreativwerkblatt",
          title: "KreativWerkBlatt",
          description: "Auswahl aus den publizierten Ausgaben",
          items: [
            {
              src: "/paideia/newspaper/kreativwerkblatt-cover.png",
              alt: "Cover der Zeitung",
              caption: "Cover als Einstieg in die Schuelerinnen- und Schuelerstimmen.",
            },
            {
              src: "/paideia/newspaper/kreativwerkblatt-2024.png",
              alt: "Layout der Zeitung",
              caption: "Zeitung als sichtbares Lernergebnis.",
            },
            {
              src: "/paideia/newspaper/kreativwerkblatt-issue-2.png",
              alt: "Weitere Ausgabe der Zeitung",
              caption: "Fortgesetzte Kulturarbeit statt Einmalmoment.",
            },
          ],
        },
      },
    ],
  },
  presse: {
    slug: "presse",
    navLabel: "Presse",
    title: "Medienmomente einer Schule, die sich erst im Aufbau befindet",
    description:
      "Die Presseseite ordnet Berichte als Wegmarken ein und zeigt, wie die Schule oeffentlich sichtbar geworden ist.",
    hero: {
      eyebrow: "Presse",
      title: "Vom fruehen Vorbild-Vergleich bis zur konkreten Sichtbarkeit in Salzburg.",
      description:
        "Medienbeitraege werden hier nicht gesammelt wie Trophaeen, sondern als Chronik einer entstehenden Bildungsinstitution gelesen.",
      image: "/paideia/press/2023-lokal-titelblatt.png",
      imageAlt: "Presse-Collage zur Schulgruendung",
    },
    sections: [
      {
        type: "press",
        eyebrow: "Archiv",
        title: "Vier oeffentliche Wegmarken",
        intro:
          "Die Auswahl folgt den auf der Alt-Seite sichtbaren Medienmomenten und ordnet sie klar in eine Timeline.",
        items: pressItems,
      },
    ],
  },
  kontakt: {
    slug: "kontakt",
    navLabel: "Kontakt",
    title: "Kontakt, Lage und naechste Schritte in einer klaren, ruhigen Form",
    description:
      "Die Seite gibt Familien, Partnern und Unterstuetzern einen sauberen Ankerpunkt fuer Kontakt und Orientierung.",
    hero: {
      eyebrow: "Kontakt",
      title: "Ein klarer Ort fuer Fragen, Kennenlernen und Unterstuetzung.",
      description:
        "Paideia fuehrt Kontakt, Standort, Zeiten und Aufnahmehinweise bewusst knapp und konkret zusammen.",
      image: "/paideia/home/campus.jpg",
      imageAlt: "Standortbild der Schule",
      ctas: [
        { label: "Mail schreiben", href: `mailto:${brand.email}` },
        { label: "Info-Abend", href: "/aufnahme" },
      ],
    },
    sections: [
      {
        type: "facts",
        eyebrow: "Direktkontakt",
        title: "So ist die Schule derzeit erreichbar",
        items: [
          { value: brand.email, label: "E-Mail fuer Anmeldung, Rueckfragen und Info-Abende" },
          { value: brand.address, label: "aktueller Standort fuer das Schuljahr 2024/25 und 2025/26" },
          { value: "Mo-Fr 7:30 bis 13:00", label: "regulaere Oeffnungszeit" },
          { value: "13. April 2026", label: "letzter bekannter Info-Abend, 19:00 Uhr" },
        ],
      },
      {
        type: "prose",
        theme: "tint",
        eyebrow: "Unterstuetzung",
        title: "Auch Foerderung und Vortraege sind ueber denselben Kontaktweg anschlussfaehig.",
        body: [
          "Die bestehende Seite erwaehnt ausdruecklich Vortraege fuer interessierte Familien oder Sponsoren. Diese Offenheit bleibt erhalten.",
          "Spenden und Kontakt werden nicht getrennt, sondern als zwei Arten verstanden, an der Schule mitzuwirken: finanziell oder im Gespraech.",
        ],
        ctas: [
          { label: "PayPal", href: supportInfo.paypalUrl, external: true },
          { label: "Verein & Traeger", href: "/verein-traeger" },
        ],
      },
    ],
  },
};

export const pageOrder = [
  "philosophie",
  "lernen-alltag",
  "aufnahme",
  "weitere-informationen",
  "team",
  "verein-traeger",
  "partner-foerderer",
  "kreativwerkblatt",
  "presse",
  "kontakt",
] as const;
