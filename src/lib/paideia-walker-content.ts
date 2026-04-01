export interface WalkerLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface WalkerMenuColumn {
  title: string;
  links: WalkerLink[];
}

export interface WalkerShellConfig {
  logoAlt: string;
  homeLogoSrc: string;
  pageLogoSrc: string;
  quickLinks: WalkerLink[];
  spotlightLinks: WalkerLink[];
  menuColumns: WalkerMenuColumn[];
  menuImage: {
    src: string;
    alt: string;
    href: string;
  };
  footerLinks: WalkerLink[];
  footerLineHtml: string;
  footerRightHtml: string;
}

export interface TeamMember {
  name: string;
  role: string;
  status?: string;
  image: string;
  shortBio: string;
  longBio?: string[];
}

export interface TeamGroup {
  title: string;
  description: string;
  members: TeamMember[];
}

export interface PressItem {
  sortDate: string;
  year: string;
  date: string;
  title: string;
  body: string;
  href: string;
  image: string;
}

export interface SchoolPaperIssue {
  title: string;
  year: string;
  body: string;
  href: string;
  image: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryPage {
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  items: GalleryItem[];
}

export interface FeatureCard {
  title: string;
  body: string;
  href: string;
  buttonLabel: string;
  image: string;
}

export interface WalkerSubpageContent {
  slug: string;
  navLabel: string;
  breadcrumbLabel: string;
  title: string;
  description: string;
  eyebrow: string;
  heroImage: string;
  heroAlt: string;
  lead: string;
  sideButtons: WalkerLink[];
  sideCard: {
    eyebrow: string;
    title: string;
    href: string;
    image: string;
    alt: string;
  };
  sections: string[];
}

export const nextInfoabendDate = "Montag, 13. April 2026";
export const nextInfoabendTime = "19:00 Uhr";
export const nextInfoabendLocation = "Ort nach Anmeldung";
export const nextInfoabendFull = `${nextInfoabendDate}, ${nextInfoabendTime} – ${nextInfoabendLocation}`;

export const shellConfig: WalkerShellConfig = {
  logoAlt: "Paideia | Freie Schule Salzburg",
  homeLogoSrc: "/paideia/logos/mark-color.png",
  pageLogoSrc: "/paideia/logos/mark-color.png",
  quickLinks: [
    { label: "Aufnahme", href: "/aufnahme" },
    { label: "Team", href: "/team" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "Spenden", href: "/verein-traeger#spenden" },
  ],
  spotlightLinks: [
    { label: "Partner", href: "/partner-foerderer" },
    { label: "Presse", href: "/presse" },
    { label: "Schulzeitung", href: "/kreativwerkblatt" },
  ],
  menuColumns: [
    {
      title: "Kennenlernen",
      links: [
        { label: "Aufnahme", href: "/aufnahme" },
        { label: "Infoabend", href: "/aufnahme#infoabend" },
        { label: "Weitere Informationen", href: "/weitere-informationen" },
        { label: "Kontakt", href: "/kontakt" },
      ],
    },
    {
      title: "Paideia",
      links: [
        { label: "Philosophie", href: "/philosophie" },
        { label: "Lernen & Alltag", href: "/lernen-alltag" },
        { label: "Gemeinschaft", href: "/gemeinschaft" },
        { label: "Team", href: "/team" },
      ],
    },
    {
      title: "Mehr",
      links: [
        { label: "Verein & Träger", href: "/verein-traeger" },
        { label: "Partner & Förderer", href: "/partner-foerderer" },
        { label: "Schulzeitung", href: "/kreativwerkblatt" },
        { label: "Presse", href: "/presse" },
        { label: "Fotos 2024/25", href: "/fotos/2024-25" },
      ],
    },
  ],
  menuImage: {
    src: "/paideia/icloud/forest-group.jpg",
    alt: "Paideia Gemeinschaft",
    href: "/team",
  },
  footerLinks: [
    { label: "Philosophie", href: "/philosophie" },
    { label: "Aufnahme", href: "/aufnahme" },
    { label: "Infoabend", href: "/aufnahme#infoabend" },
    { label: "Team", href: "/team" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  footerLineHtml:
    `<p><span style="color:#283058;"><strong>info@kreativwerkstattsalzburg.at</strong></span> <strong><span style="color:#283058;">|</span></strong> <strong>Paideia – Freie Schule Salzburg</strong> – Strubergasse 26, 5020 Salzburg <strong><span style="color:#283058;">|</span></strong> <strong><a href="/aufnahme#infoabend">Nächster Infoabend</a></strong> – ${nextInfoabendFull}</p>`,
  footerRightHtml:
    '<p><a href="/verein-traeger#spenden">Spenden</a> <a href="/partner-foerderer">Partner</a> <a href="/kreativwerkblatt">Schulzeitung</a> <a href="/presse">Presse</a></p>',
};

export const homeContent = {
  introWord: "PAIDEIA",
  introDefinition:
    "Paideia bezeichnet die Bildung des ganzen Menschen: Beziehung als Fundament, sinnvolles Schaffen als Weg und Weisheit plus Kompetenz als Ziel.",
  hero: {
    lead:
      "Paideia ist die freie Schule in Salzburg, in der Kinder gesehen, gefordert und in eine verantwortliche Wirksamkeit hinein begleitet werden.",
    definition:
      "Paideia meint mehr als Unterricht: die Bildung des ganzen Menschen in Haltung, Urteilskraft, Ausdruck und Gemeinschaft.",
    word: "GESEHEN",
    videoSrc: "/paideia/icloud/videos/album-video-416.mp4",
    poster: "/paideia/icloud/videos/album-video-416-poster.jpg",
    still: "/paideia/icloud/videos/album-video-416-poster.jpg",
  },
  values: [
    {
      number: "01",
      title: "PHILÍA",
      body: "Tragende Beziehung: gesehen werden, vertrauen lernen und in echter Nähe wachsen.",
      href: "/philosophie",
      image: "/paideia/icloud/relationship-knit.jpg",
    },
    {
      number: "02",
      title: "ELEUTHERÍA",
      body: "Freiheit: Eigenständigkeit, Initiative und innerer Antrieb ohne Beliebigkeit.",
      href: "/lernen-alltag",
      image: "/paideia/icloud/lake-handstands.jpg",
    },
    {
      number: "03",
      title: "KÓSMOS",
      body: "Form und Ordnung: Rhythmus, Struktur und Herausforderung als tragender Boden.",
      href: "/weitere-informationen",
      image: "/paideia/icloud/table-group.jpg",
    },
    {
      number: "04",
      title: "PHRÓNESIS",
      body: "Urteilskraft: Kompetenz mit Weisheit, Verantwortung und Wirksamkeit verbinden.",
      href: "/philosophie",
      image: "/paideia/icloud/kitchen-whisk.jpg",
    },
  ],
  familyChoice: {
    eyebrow: "Darum entscheiden sich Familien bewusst für",
    title: "PAIDEIA",
    lead:
      "Klein, persönlich, verbindlich und in einer Haltung verankert, die Wärme und Anspruch nicht gegeneinander ausspielt.",
    body: [
      "31 Kinder lernen derzeit in einer bewusst überschaubaren Gemeinschaft.",
      "Die Schule verbindet Beziehung, Projektlernen, Kulturarbeit, Schulzeitung und klare Tagesrhythmen.",
    ],
    cutoutImage: "/paideia/team/karin-mitterbauer.jpg",
  },
  gridImages: [
    "/paideia/gallery/2024-25/kws2413.jpeg",
    "/paideia/icloud/table-group.jpg",
    "/paideia/gallery/2024-25/kws2416.jpeg",
    "/paideia/icloud/stage-performance.jpg",
    "/paideia/gallery/2024-25/kws2418.jpeg",
    "/paideia/icloud/climbing-action.jpg",
    "/paideia/gallery/2024-25/kws2421.jpeg",
    "/paideia/icloud/sailing-group.jpg",
    "/paideia/gallery/2024-25/kws2422.jpeg",
    "/paideia/icloud/heart-hats.jpg",
    "/paideia/icloud/forest-circle.jpg",
    "/paideia/gallery/2024-25/kws2433.jpeg",
    "/paideia/icloud/stream-play.jpg",
    "/paideia/gallery/2024-25/kws2436.jpeg",
    "/paideia/icloud/classroom-boys.jpg",
    "/paideia/icloud/climbing-wall-group.jpg",
    "/paideia/icloud/forest-group.jpg",
    "/paideia/gallery/2024-25/kws2456.jpeg",
    "/paideia/icloud/teens-grass.jpg",
    "/paideia/icloud/dock-group.jpg",
    "/paideia/gallery/2023-24/kws1.jpeg",
    "/paideia/gallery/2023-24/kws17.jpeg",
  ],
  mission: {
    eyebrow: "Bildung als",
    title: "UNSER AUFTRAG",
    lead:
      "Paideia verbindet tragende Beziehungen, sinnvolles Schaffen und eine Bildung, die auf Kompetenz und Weisheit zielt.",
    body:
      "Kinder sollen nicht nur Stoff erledigen, sondern verstehen, warum sie etwas tun, worin ihr eigener Weg liegt und wie sie der Gemeinschaft etwas beitragen können. Ausgangspunkt ist deshalb nicht die Frage, wie Schule üblicherweise organisiert wird, sondern was einen Menschen wirklich wachsen lässt.",
  },
  balance: {
    eyebrow: "Baumrind und Haltung",
    title: "FREIHEIT MIT FORM",
    lead:
      "Autoritative Beziehungen bedeuten: Wärme, echtes Gesehenwerden, klare Strukturen und die Einladung, über eigene Grenzen hinauszuwachsen.",
    body:
      "Paideia ist weder kalter Leistungsdruck noch laissez-faire. Die Schule gestaltet einen Rahmen, in dem Kinder sich sicher fühlen und zugleich ernsthaft gefordert werden. Mit wachsender Verlässlichkeit wachsen auch die Freiräume: Vor allem Jugendliche verdienen sich mehr Freiheit, indem sie Verantwortungsbewusstsein, Selbstführung und Reife sichtbar zeigen.",
  },
  purposefulLearning: {
    eyebrow: "Sinnvoll lernen",
    title: "PROJEKTE, KULTUR, PORTFOLIO",
    lead:
      "Lernen wird tiefer, wenn es in echte Vorhaben, Ausdruck und sichtbare Ergebnisse eingebettet ist.",
    body:
      "Theater, Zeitung, Werkstatt, Präsentation und gemeinschaftliche Projekte sind deshalb keine Nebensache, sondern Ausdruck von Bildungsqualität. Einzelne Verantwortungswege und Entwicklungsschritte werden dabei bewusst spielerisch sichtbar gemacht, damit Reife, Initiative und Verlässlichkeit motivierend erfahrbar werden.",
  },
  threeCards: [
    {
      title: "PROJEKTE",
      body:
        "Wertschöpfendes Lernen verbindet Verantwortung, Eigeninitiative und reale Ergebnisse.",
      href: "/lernen-alltag",
      buttonLabel: "Mehr erfahren",
      image: "/paideia/icloud/kitchen-whisk.jpg",
    },
    {
      title: "KULTUR",
      body:
        "RHABARBER RHABARBER und die Schulzeitung zeigen, dass Schule eine kulturelle Öffentlichkeit haben darf.",
      href: "/kreativwerkblatt",
      buttonLabel: "Zur Schulzeitung",
      image: "/paideia/icloud/stage-performance.jpg",
    },
    {
      title: "GEMEINSCHAFT",
      body:
        "Eine glaubwürdige Schule entsteht durch Erwachsene, die Beziehung, Haltung und Konsequenz verkörpern.",
      href: "/team",
      buttonLabel: "Zum Team",
      image: "/paideia/icloud/forest-group.jpg",
    },
  ],
  pathways: {
    title: "ORIENTIERUNG",
    lead:
      "Die wichtigsten Einstiege sollen sofort klar sein: kennenlernen, verstehen, Menschen sehen und Materialien entdecken.",
  },
  stages: [
    {
      label: "Kennenlernen",
      title: "AUFNAHME",
      body:
        "Infoabend, Schnupperwoche, Gespräch und Entscheidung sind jetzt auf einer klaren Seite zusammengeführt.",
      href: "/aufnahme",
      buttonLabel: "Zur Aufnahme",
      image: "/paideia/icloud/classroom-boys.jpg",
    },
    {
      label: "Menschen",
      title: "TEAM",
      body:
        "Kernteam, weiteres Team und bisher begleitet bleiben sichtbar und lassen sich jetzt vertieft aufklappen.",
      href: "/team",
      buttonLabel: "Zum Team",
      image: "/paideia/icloud/forest-team.jpg",
    },
    {
      label: "Netzwerk",
      title: "PARTNER & FÖRDERER",
      body:
        "Die Schule zeigt ihr lokales Unterstützungsnetzwerk kompakter und ohne unnötige Sponsorensprache.",
      href: "/partner-foerderer",
      buttonLabel: "Zu den Partnern",
      image: "/paideia/icloud/room-circle.jpg",
    },
    {
      label: "Material",
      title: "SCHULZEITUNG",
      body:
        "Die bisherigen Ausgaben werden als echte Vorschau mit Klick auf die jeweilige Ausgabe sichtbar.",
      href: "/kreativwerkblatt",
      buttonLabel: "Zur Schulzeitung",
      image: "/paideia/newspaper/kreativwerkblatt-cover.png",
    },
  ],
  finalBanner: {
    title: "KENNENLERNEN",
    imageSrc: "/paideia/home/campus-wide.jpg",
    videoSrc: undefined,
    poster: undefined,
    buttonPrimary: { label: "Aufnahme", href: "/aufnahme" },
    buttonSecondary: { label: "Kontakt", href: "/kontakt" },
  },
};

const coreTeam: TeamGroup = {
  title: "Kernteam",
  description:
    "Die sichtbare Reihenfolge für Version 1 bleibt klar: Karin zuerst, Oliwia danach, Momo an dritter Stelle.",
  members: [
    {
      name: "Mag. Karin Mitterbauer",
      role: "Initiatorin und Leiterin",
      image: "/paideia/team/karin-mitterbauer.jpg",
      shortBio:
        "Seit über 20 Jahren beschäftigt sie sich mit freier, intrinsisch motivierter Bildung und hat die Schule als Herzensprojekt aufgebaut.",
      longBio: [
        "Sie hält die pädagogische Linie, begleitet Familien durch den Aufnahmeprozess und verbindet den Alltag der Schule mit der größeren Vision eines freien Bildungsortes in Salzburg.",
        "Im Call wurde klar, wie wichtig ihre Präsenz als erste sichtbare Person bleibt. Diese Ordnung bleibt deshalb bewusst erhalten.",
      ],
    },
    {
      name: "Oliwia Garlicka",
      role: "Lernbegleiterin",
      image: "/paideia/team/oliwia-garlicka.jpg",
      shortBio:
        "Sie verbindet Herzensbildung, künstlerische Impulse und psychologisches Gespür mit einer starken Präsenz im Alltag der Kinder.",
      longBio: [
        "Ihre Arbeit verbindet Beziehung, Kreativität und eine feine Aufmerksamkeit dafür, was Kinder innerlich gerade brauchen, um sicher und zugleich mutig zu werden.",
      ],
    },
    {
      name: "Momo Feichtinger",
      role: "Bildungsphilosophie und Zukunftskompetenz",
      image: "/paideia/team/momo-feichtinger.jpg",
      shortBio:
        "Er bringt den Dreiklang der Bildung ein, den er durch First-Principles Thinking und ein Jahr intensiver Gespräche im Education Revolutionaries Club geschärft hat: Beziehung als Fundament, sinnvolles Schaffen als Weg und Weisheit plus Kompetenz als Ziel. Dabei richtet er den Blick auf die Grundprinzipien gelingender Bildung, nicht bloß auf die Gewohnheiten bestehender Systeme.",
      longBio: [
        "Sein Beitrag liegt besonders in der begrifflichen Schärfung: Welche Form von Freiheit, Form, Verantwortung und Kompetenz braucht Schule heute wirklich?",
        "Damit prägt er nicht nur Texte und Positionierung, sondern auch den Blick auf Zukunftskompetenz, KI und eine Lernkultur jenseits bloßer Systemgewohnheiten.",
      ],
    },
  ],
};

const extendedTeam: TeamGroup = {
  title: "Weiteres Team",
  description:
    "Alle weiteren aktuellen Personen der bestehenden Teamseite bleiben sichtbar und gleichwertig dokumentiert.",
  members: [
    {
      name: "Mag. Kristina Sachs",
      role: "Lernbegleiterin",
      image: "/paideia/team/kristina-sachs.jpg",
      shortBio:
        "Sie arbeitet aus einer Haltung gelingender Beziehung, Selbstwirksamkeit und einer Gemeinschaft, die Sicherheit und Potenzialentfaltung verbindet.",
      longBio: [
        "Ihre Stärke liegt darin, Lernumgebungen zu halten, in denen Kinder gleichzeitig Sicherheit und Wachstum erleben können.",
      ],
    },
    {
      name: "Julian Reutterer",
      role: "Lernbegleiter",
      image: "/paideia/team/julian-reutterer.jpg",
      shortBio:
        "Er verbindet autodidaktisches Lernen, Jugendarbeit und Tanzpädagogik mit einer klaren Haltung von echter Zuwendung.",
      longBio: [
        "Damit bringt er Bewegung, Eigeninitiative und eine unmittelbare Arbeit mit Jugendlichen in die Schulkultur ein.",
      ],
    },
    {
      name: "Tanja Nagaikin",
      role: "Lernbegleiterin",
      status: "derzeit karenziert",
      image: "/paideia/team/tanja-nagaikin.jpg",
      shortBio:
        "Sie steht für eine konzentrierte, inspirierende Lernatmosphäre, in der Sicherheit, Wunsch und Fehlertoleranz möglich werden.",
      longBio: [
        "Auch in ihrer derzeitigen Pause bleibt sie als Teil der gewachsenen Schulkultur sichtbar.",
      ],
    },
    {
      name: "Lupe Marcos Solar",
      role: "Europäische Freiwillige",
      image: "/paideia/team/lupe-marcos-solar.jpg",
      shortBio:
        "Sie bringt soziale Pädagogik, Empathie und die Freude an kreativen, autonomen und sinnvollen Lernwegen in den Alltag ein.",
      longBio: [
        "Gerade in kleineren Lernmomenten und im gelebten Alltag trägt diese Form von Freiwilligenarbeit spürbar zur Atmosphäre der Schule bei.",
      ],
    },
    {
      name: "Birgit Brandner",
      role: "Grafik und Design",
      image: "/paideia/team/birgit-brandner.png",
      shortBio:
        "Sie begleitet die Schule in den Themen Grafik und Design und trägt die visuelle Kontinuität zwischen Marke und Alltag.",
      longBio: [
        "Ihre Arbeit ist auch auf der Website spürbar: Sie verbindet Erscheinungsbild, Materialien und die grafische Linie der Schule.",
      ],
    },
  ],
};

const legacyTeam: TeamGroup = {
  title: "Bisher begleitet",
  description:
    "Frühere und ergänzende Wegbegleiterinnen und Wegbegleiter bleiben als Teil der Geschichte der Schule sichtbar.",
  members: [
    {
      name: "Franziska Berger",
      role: "Wegbegleiterin",
      image: "/paideia/team/franziska-berger.jpg",
      shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    },
    {
      name: "Magdalena Maria Heidinger",
      role: "Wegbegleiterin",
      image: "/paideia/team/magdalena-maria-heidinger.jpg",
      shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    },
    {
      name: "Andrea Volgger",
      role: "Wegbegleiterin",
      image: "/paideia/team/andrea-volgger.jpg",
      shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    },
    {
      name: "Mag. Dr. Michaela Weihs",
      role: "Wegbegleiterin",
      image: "/paideia/team/michaela-weihs.jpg",
      shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    },
    {
      name: "Carina Allerberger, MA, BSc",
      role: "Wegbegleiterin",
      image: "/paideia/team/carina-allerberger.jpg",
      shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    },
    {
      name: "Sabrina Winkler",
      role: "Wegbegleiterin",
      image: "/paideia/team/sabrina-winkler.png",
      shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    },
    {
      name: "Iciar Perez Martin",
      role: "Ehemalige europäische Freiwillige",
      image: "/paideia/team/iciar-perez-martin.jpg",
      shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    },
    {
      name: "Gabriela Kulincheva",
      role: "Ehemalige europäische Freiwillige",
      image: "/paideia/team/gabriela-kulincheva.jpg",
      shortBio: "Teil des erweiterten Kreises, der die Schulgemeinschaft seit ihrem Bestehen mitgetragen hat.",
    },
  ],
};

export const teamGroups: TeamGroup[] = [coreTeam, extendedTeam, legacyTeam];

export const pressItems: PressItem[] = [
  {
    sortDate: "2025-03-13",
    year: "2025",
    date: "13.03.2025",
    title: "Die Kreativwerkstatt in den Salzburger Stadtnachrichten",
    body:
      "Die Schule wird mit Lernkonzept, provisorischen Räumen und der Vision eines eigenen Gebäudes vorgestellt.",
    href: "https://www.sn.at/salzburg/chronik/in-salzburg-schulen-145826224",
    image: "/paideia/press/2025-stadtnachrichten.jpg",
  },
  {
    sortDate: "2025-01-08",
    year: "2025",
    date: "08.01.2025",
    title: "Die Kreativwerkstatt im Radio",
    body:
      "In der Sendung auf der Radiofabrik geht es um Schule ohne Notendruck, mit Selbstbestimmung, Kreativität und Gemeinschaft.",
    href: "https://cba.media/692211",
    image: "/paideia/press/2025-radiofabrik.jpg",
  },
  {
    sortDate: "2023-09-25",
    year: "2023",
    date: "25.09.2023",
    title: "Drei freie Schulen gestartet",
    body:
      "Ein früher Bericht darüber, wie sich alternative Schulgründungen in Salzburg positionieren und warum neue Bildungsorte entstehen.",
    href: "https://www.sn.at/salzburg/politik/50-kinder-lernen-in-der-stadt-salzburg-bald-in-neuer-freier-schule-137440807",
    image: "/paideia/press/2023-salzburger-nachrichten.png",
  },
  {
    sortDate: "2023-04-01",
    year: "2023",
    date: "04.2023",
    title: "Neue freie Schule nach Seekirchner Vorbild",
    body:
      "Ein früher Medienmoment, in dem die Entstehungsidee der Schule erstmals größer öffentlich sichtbar wurde.",
    href: "https://www.sn.at/salzburg/politik/neue-freie-schule-soll-in-salzburg-nach-seekirchner-vorbild-entstehen-125208910",
    image: "/paideia/press/2023-seekirchen-vorbild.png",
  },
];

export const schoolPaperIssues: SchoolPaperIssue[] = [
  {
    title: "Schulzeitung 2024",
    year: "2024",
    body: "Eine sichtbare Ausgabe der Kulturarbeit mit Gestaltung, Text und dokumentierter Öffentlichkeit.",
    href: "/paideia/newspaper/kreativwerkblatt-2024.png",
    image: "/paideia/newspaper/kreativwerkblatt-2024.png",
  },
  {
    title: "Schulzeitung Ausgabe 2",
    year: "2024/25",
    body: "Weitere Seiten aus der Zeitung, die direkt aus der Schulpraxis und den Beiträgen der Kinder entstanden sind.",
    href: "/paideia/newspaper/kreativwerkblatt-issue-2.png",
    image: "/paideia/newspaper/kreativwerkblatt-issue-2.png",
  },
  {
    title: "Titelblatt und Cover",
    year: "Archiv",
    body: "Das bisherige Cover bleibt als Einstieg und visuelle Klammer der Schulzeitung erhalten.",
    href: "/paideia/newspaper/kreativwerkblatt-cover.png",
    image: "/paideia/newspaper/kreativwerkblatt-cover.png",
  },
];

export const galleries: Record<string, GalleryPage> = {
  "2024-25": {
    title: "Fotos Schuljahr 2024/25",
    description:
      "Eindrücke aus Lernmomenten, Kulturarbeit, Begegnung und Alltag im dritten Schuljahr.",
    heroImage: "/paideia/icloud/lake-handstands.jpg",
    heroAlt: "Paideia zwischen See, Bewegung und Gemeinschaft",
    items: [
      {
        src: "/paideia/icloud/classroom-boys.jpg",
        alt: "Kinder in gemeinsamer Lernrunde",
        caption: "Gemeinschaft und Eigenständigkeit zugleich.",
      },
      {
        src: "/paideia/icloud/kitchen-whisk.jpg",
        alt: "Kind beim Arbeiten in der Küche",
        caption: "Lernen über Tun, Beobachten und Ausprobieren.",
      },
      {
        src: "/paideia/icloud/forest-circle.jpg",
        alt: "Kinder im Wald",
        caption: "Wald, Begegnung und gemeinsamer Aufbruch.",
      },
      {
        src: "/paideia/icloud/climbing-wall-group.jpg",
        alt: "Kinder und Jugendliche an der Kletterwand",
        caption: "Herausforderung wird zum gemeinsamen Erfahrungsraum.",
      },
      {
        src: "/paideia/icloud/lake-handstands.jpg",
        alt: "Kinder am See in Bewegung",
        caption: "Freiheit, Spiel und Mut im selben Bild.",
      },
      {
        src: "/paideia/icloud/sailing-group.jpg",
        alt: "Kinder auf einem Boot am See",
        caption: "Weite, Sommer und geteilte Leichtigkeit.",
      },
      {
        src: "/paideia/icloud/heart-hats.jpg",
        alt: "Kinder am Wasser mit herzförmiger Geste",
        caption: "Freude, Nähe und feine Momente gehören dazu.",
      },
      {
        src: "/paideia/icloud/forest-group.jpg",
        alt: "Kindergruppe im Wald",
        caption: "Natur, Freundschaft und getragene Zugehörigkeit.",
      },
      {
        src: "/paideia/icloud/stream-play.jpg",
        alt: "Kinder am Bach",
        caption: "Spiel, Natur und Wachheit gehören ebenso zum Lernen.",
      },
      {
        src: "/paideia/icloud/dock-group.jpg",
        alt: "Kinder am Steg am See",
        caption: "Gemeinschaft gewinnt Tiefe, wenn sie draußen erlebt wird.",
      },
    ],
  },
  "2023-24": {
    title: "Fotos Schuljahr 2023/24",
    description:
      "Frühe Bildspuren der Schule: Werkstatt, Gemeinschaft, Spielflächen und Lernmomente.",
    heroImage: "/paideia/home/hero-warm.jpg",
    heroAlt: "Frühe Paideia Bildspuren",
    items: [
      {
        src: "/paideia/gallery/2023-24/kws1.jpeg",
        alt: "Schulgemeinschaft im Freien",
        caption: "Der Ort als Gemeinschaft und nicht nur als Gebäude.",
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
        caption: "Präsenz, Beziehung und gemeinsame Orientierung.",
      },
      {
        src: "/paideia/gallery/2023-24/kws7.jpeg",
        alt: "Werkstatt- und Arbeitsmoment",
        caption: "Eigenaktivität statt bulimischem Lernen.",
      },
      {
        src: "/paideia/gallery/2023-24/kws39.jpeg",
        alt: "Schulalltag mit Bewegung",
        caption: "Rhythmus, Raum und Körperlichkeit gehören dazu.",
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

export const pageOrder = [
  "/philosophie",
  "/lernen-alltag",
  "/primary-school",
  "/lower-school",
  "/new-avenues",
  "/middle-school",
  "/upper-school",
  "/gemeinschaft",
  "/athletics",
  "/academics",
  "/arts",
  "/aufnahme",
  "/infoabend",
  "/weitere-informationen",
  "/team",
  "/verein-traeger",
  "/partner-foerderer",
  "/kreativwerkblatt",
  "/presse",
  "/kontakt",
] as const;

export const pageNav = [
  { label: "Philosophie", href: "/philosophie" },
  { label: "Lernen & Alltag", href: "/lernen-alltag" },
  { label: "Gemeinschaft", href: "/gemeinschaft" },
  { label: "Aufnahme", href: "/aufnahme" },
  { label: "Infoabend", href: "/aufnahme#infoabend" },
  { label: "Weitere Informationen", href: "/weitere-informationen" },
  { label: "Team", href: "/team" },
  { label: "Verein & Träger", href: "/verein-traeger" },
  { label: "Partner & Förderer", href: "/partner-foerderer" },
  { label: "Schulzeitung", href: "/kreativwerkblatt" },
  { label: "Presse", href: "/presse" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Fotos 2024/25", href: "/fotos/2024-25" },
  { label: "Fotos 2023/24", href: "/fotos/2023-24" },
];

export const pages: Record<string, WalkerSubpageContent> = {
  philosophie: {
    slug: "philosophie",
    navLabel: "Philosophie",
    breadcrumbLabel: "Paideia",
    title: "Philosophie",
    description:
      "Paideia versteht Bildung als Formung des ganzen Menschen: Beziehung als Fundament, sinnvolles Schaffen als Weg und Weisheit plus Kompetenz als Ziel.",
    eyebrow: "DIE",
    heroImage: "/paideia/icloud/lake-handstands.jpg",
    heroAlt: "Paideia zwischen Freiheit und Form",
    lead:
      "Paideia denkt Schule nicht als Stoffverteilung, sondern als Beziehungskultur, Praxisraum und Weg zu Urteilskraft. Ausgangspunkt ist die Frage, was Kinder und Jugendliche innerlich wachsen lässt und sie zugleich befähigt, verantwortlich in der Welt zu handeln.",
    sideButtons: [
      { label: "Aufnahme", href: "/aufnahme" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Dreiklang-Video", href: "https://www.youtube.com/watch?v=I3Zg7t5-a-M", external: true },
    ],
    sideCard: {
      eyebrow: "Impuls",
      title: "Momo über den Dreiklang der Bildung",
      href: "https://www.youtube.com/watch?v=I3Zg7t5-a-M",
      image: "/paideia/team/momo-feichtinger.jpg",
      alt: "Momo Feichtinger",
    },
    sections: [
      `<h3><font color="#762123">DREIKLANG DER BILDUNG</font></h3>
      <p>Im Zentrum steht für Paideia ein einfacher, aber anspruchsvoller Dreiklang. Bildung beginnt nicht mit Lehrplänen, sondern mit Beziehung. Sie vertieft sich durch sinnvolles Tun. Und sie erfüllt ihren Zweck erst dann, wenn aus Können auch Urteilskraft und Verantwortung werden.</p>
      <ul>
        <li><strong>Beziehung</strong><br />Gesehen werden, getragen sein und in einer echten Wachstumsbeziehung lernen.</li>
        <li><strong>Sinnvolles Schaffen</strong><br />Lernen wird tiefer, wenn es an Projekte, Verantwortung und sichtbare Ergebnisse gebunden ist.</li>
        <li><strong>Weisheit + Kompetenz</strong><br />Bildung zielt auf Wirksamkeit, Urteilskraft und einen verantwortlichen Umgang mit Macht und Können.</li>
      </ul>
      <p>Die Formulierung dieser Grundprinzipien wurde auch durch die Bildungsarbeit von Momo Feichtinger mitgeprägt: geschärft durch First-Principles Thinking und ein Jahr vertiefter Gespräche im Education Revolutionaries Club. Entscheidend war dabei immer dieselbe Frage: Was brauchen junge Menschen wirklich, um stark, frei, verantwortungsbewusst und lebensfähig zu werden?</p>`,
      `<h3><font color="#762123">FIRST-PRINCIPLES THINKING</font></h3>
      <p>Paideia fragt nicht zuerst, wie Schule üblicherweise organisiert wird, sondern was Bildung im Kern leisten soll: Was braucht ein Mensch, um sich selbst zu kennen, Verantwortung zu tragen, wirksam zu werden und sinnvoll mit anderen zu leben?</p>
      <p>Von dort aus werden Inhalte, Rhythmen, Verantwortungsräume und Lernformate neu gedacht. Das bedeutet: Nicht jede schulische Gewohnheit wird automatisch übernommen. Beibehalten wird, was trägt. Verändert wird, was Kinder klein hält, entkoppelt oder nur auf äußeren Druck setzt.</p>
      <p>Darum dürfen bei Paideia Dinge zusammenkommen, die in klassischen Schulen oft getrennt bleiben: Projektlernen, Kulturarbeit, Portfolio, Gemeinschaftspraxis, Künstliche Intelligenz, Handwerk, Ausdruck und konkrete Verantwortung. Schule wird so nicht einfacher, sondern wirklicher.</p>
      <p>Gemeint ist damit nicht ständige Neuerfindung um der Neuerung willen. Gemeint ist die Disziplin, immer wieder zum Wesentlichen zurückzukehren und von dort aus gute Formen zu bauen.</p>`,
      `<h3><font color="#762123">WÄRME UND HERAUSFORDERUNG</font></h3>
      <p>Die Schule orientiert sich am autoritativen Feld des Baumrind-Modells: Kinder sollen sich gesehen fühlen und zugleich über ihre aktuellen Grenzen hinauswachsen können.</p>
      <p>Paideia steht damit bewusst weder für kalten Leistungsdruck noch für laissez-faire. Freiheit und Struktur gehören zusammen. Kinder sollen nicht verwaltet werden, aber auch nicht allein gelassen sein.</p>
      <p>Gerade für Jugendliche bedeutet das auch: Freiheit wird nicht einfach vorausgesetzt, sondern wächst mit gezeigter Reife, Verlässlichkeit und Verantwortungsbewusstsein. Wer mit Freiheit gut umgehen kann, erhält mehr davon. Wer sie noch nicht tragen kann, wird begleitet, bis mehr innere Form gewachsen ist.</p>`,
      `<h3><font color="#762123">WARUM PAIDEIA?</font></h3>
      <p>Der Name <strong>Paideia</strong> verweist auf eine alte Frage: Wie wird ein Mensch nicht nur klüger, sondern reifer? Gemeint ist Bildung des ganzen Menschen, nicht bloß Wissensanhäufung.</p>
      <p>Darum tauchen auf der Website einige griechische Begriffe auf. <strong>Philía</strong> steht für tragende Beziehung und Gemeinschaft. <strong>Eleuthería</strong> erinnert an Freiheit, die innerlich getragen werden kann. <strong>Kósmos</strong> meint Form, Ordnung und einen guten Rahmen. <strong>Phrónesis</strong> verweist auf praktische Klugheit und Urteilskraft.</p>
      <p>Diese Worte sind keine Dekoration. Sie benennen knapp, worum im Alltag gerungen wird: Nähe ohne Vereinnahmung, Freiheit ohne Beliebigkeit, Form ohne Härte und Kompetenz ohne Verantwortungslosigkeit.</p>`,
      `<h3><font color="#762123">WEITERLESEN</font></h3>
      <p>Wer tiefer in die Gedanken hinter Paideia einsteigen möchte, findet in zwei Texten von Momo Feichtinger eine gute Vertiefung. Sie sind keine Voraussetzung, aber sie helfen, den Hintergrund des Dreiklangs und der Wachstumslogik genauer zu verstehen.</p>
      <ul>
        <li><a href="/paideia/papers/weise-macht-whitepaper-feichtinger.pdf" target="_blank" rel="noopener noreferrer"><strong>Weise Macht</strong></a><br />Ein Whitepaper zum Dreiklang wahrer Bildung aus ersten Prinzipien: Beziehung, sinnvolles Schaffen sowie Weisheit und Kompetenz.</li>
        <li><a href="/paideia/papers/zwei-achsen-theorie-working-paper-feichtinger.pdf" target="_blank" rel="noopener noreferrer"><strong>Die Zwei-Achsen-Theorie menschlichen Wachstums</strong></a><br />Ein Working Paper zur Balance aus Wärme, Attunement, Herausforderung und innerem Wachstum.</li>
      </ul>`,
    ],
  },
  "lernen-alltag": {
    slug: "lernen-alltag",
    navLabel: "Lernen & Alltag",
    breadcrumbLabel: "Paideia",
    title: "Lernen & Alltag",
    description:
      "Rhythmus, Raum, Projektlernen, Kulturarbeit und wachsende Verantwortungsräume bilden den Alltag von Paideia.",
    eyebrow: "LERNEN &",
    heroImage: "/paideia/icloud/room-circle.jpg",
    heroAlt: "Paideia Alltag in echter Gruppe",
    lead:
      "Morgenbewegung, Freiarbeit, gemeinsame Zeit und reale Projekte bilden einen Rahmen, der Sicherheit gibt, Sinn freisetzt und Freiheit mit Verantwortung verbindet.",
    sideButtons: [
      { label: "Fotos 2024/25", href: "/fotos/2024-25" },
      { label: "Aufnahme", href: "/aufnahme" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    sideCard: {
      eyebrow: "Kulturarbeit",
      title: "RHABARBER RHABARBER",
      href: "/kreativwerkblatt",
      image: "/paideia/icloud/stage-performance.jpg",
      alt: "Theaterarbeit",
    },
    sections: [
      `<h3><font color="#762123">TAGESRHYTHMUS</font></h3>
      <p>Die Schule ist Montag bis Freitag von 7:30 bis 13:00 Uhr geöffnet. Bewegung, Kreis, eigenständiges Arbeiten, Jause und Abschluss bilden einen wiederkehrenden Takt.</p>
      <p>Rhythmus ist dabei nicht Enge, sondern ein verlässlicher Boden, von dem aus Kinder selbstständig werden.</p>`,
      `<h3><font color="#762123">SINNVOLL LERNEN</font></h3>
      <p>Paideia arbeitet mit Projekten, kultureller Arbeit und Aufgaben, die in der Wirklichkeit Resonanz haben. Portfolio und Verantwortung ersetzen das reine Lernen für den nächsten Test.</p>
      <p>Künstliche Intelligenz, Handwerk, Schreiben, Bühne, Bewegung und Gemeinschaft dürfen zusammenkommen, wenn daraus echtes Lernen entsteht.</p>`,
      `<h3><font color="#762123">VERDIENTE FREIHEIT</font></h3>
      <p>Freiheit wird bei Paideia nicht gegen Struktur ausgespielt. Gerade Jugendliche erhalten mehr Freiräume, wenn sie Selbstführung, Verlässlichkeit und Verantwortungsbewusstsein im Alltag tatsächlich zeigen.</p>
      <p>Das schafft ein transparentes Vertrauensmodell: Wer mit Freiheit gut umgeht, bekommt mehr davon. Wer sie noch nicht tragen kann, wird begleitet, bis mehr Reife gewachsen ist.</p>`,
      `<h3><font color="#762123">SPIELERISCH SICHTBARE ENTWICKLUNG</font></h3>
      <p>Einige Wege im Alltag werden bewusst leicht gamifiziert, damit Entwicklung nicht abstrakt bleibt. Verantwortung, Beiträge zur Gemeinschaft und persönliche Fortschritte dürfen sichtbar, motivierend und greifbar werden.</p>
      <p>Nicht Belohnung um der Belohnung willen ist das Ziel, sondern eine Kultur, in der Kinder und Jugendliche erleben: Reife, Initiative und Mittragen verändern ihren realen Handlungsspielraum.</p>`,
      `<h3><font color="#762123">RÄUME</font></h3>
      <ul>
        <li><strong>270 m²</strong><br />Eigener Bereich in der Salzburger Volkshochschule</li>
        <li><strong>Bewegung</strong><br />Zusätzliche Räume für Sport, Körperarbeit und Spiel</li>
        <li><strong>Werkstatt</strong><br />Küche, Töpfern, Zeitung und Aufführung als Teil des Alltags</li>
      </ul>`,
    ],
  },
  "primary-school": {
    slug: "primary-school",
    navLabel: "Primary School",
    breadcrumbLabel: "School",
    title: "Primary School",
    description:
      "Die frühen Jahre bei Paideia bauen auf Beziehung, Rhythmus, Spiel und eine ruhige erste Selbstständigkeit.",
    eyebrow: "DIE",
    heroImage: "/paideia/icloud/heart-hats.jpg",
    heroAlt: "Jüngere Kinder am Wasser",
    lead:
      "Die Primary School ist eine Zeit des Ankommens. Kinder brauchen Nähe, Wiederholung, Staunen und sichere Formen, damit aus Neugier echte Lernfreude werden kann.",
    sideButtons: [
      { label: "Lower School", href: "/lower-school" },
      { label: "Aufnahme", href: "/aufnahme" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    sideCard: {
      eyebrow: "Beginn",
      title: "Beziehung kommt vor Beschleunigung",
      href: "/philosophie",
      image: "/paideia/icloud/drawing-closeup.jpg",
      alt: "Kind beim Zeichnen",
    },
    sections: [
      `<h3><font color="#762123">WAS DIE PRIMARY SCHOOL AUSZEICHNET</font></h3>
      <p>Die ersten Schuljahre sind bei Paideia keine Vorstufe für „später“, sondern eine eigene Lebensphase mit eigenem Tempo. Kinder dürfen hier noch staunen, spielen, fragen, nachahmen und sich in sicherer Beziehung verorten.</p>
      <p>Gerade dadurch entsteht ein stabiler Boden für Sprache, Zahl, Ausdruck und soziales Lernen.</p>`,
      `<h3><font color="#762123">RHYTHMUS UND SICHERHEIT</font></h3>
      <p>Wiederkehrende Morgenformen, Werkmomente, Geschichten, Bewegung und gemeinsame Abschlussrituale geben Halt. Aus Halt wächst Mut. Aus Mut wächst Eigenständigkeit.</p>
      <p>Rhythmus bedeutet dabei nicht Starrheit, sondern Verlässlichkeit.</p>`,
      `<h3><font color="#762123">MIT HAND, KÖRPER UND SINNEN LERNEN</font></h3>
      <p>Lesen, Schreiben, Zahl, Naturerfahrung, Musik, Bewegung und Gestaltung bleiben verbunden. Kinder lernen nicht nur mit dem Kopf, sondern mit Blick, Stimme, Händen und Beziehung.</p>`,
    ],
  },
  "lower-school": {
    slug: "lower-school",
    navLabel: "Lower School",
    breadcrumbLabel: "School",
    title: "Lower School",
    description:
      "In der Lower School wachsen erste Verantwortungen, Arbeitsgewohnheiten und gemeinschaftliche Verlässlichkeit.",
    eyebrow: "DIE",
    heroImage: "/paideia/icloud/forest-circle.jpg",
    heroAlt: "Kindergruppe im Wald",
    lead:
      "Die Lower School verbindet Entdeckergeist mit wachsender Form. Kinder arbeiten eigenständiger, übernehmen erste Aufgaben für die Gemeinschaft und erleben, dass Einsatz sichtbar etwas verändert.",
    sideButtons: [
      { label: "Primary School", href: "/primary-school" },
      { label: "Middle School", href: "/middle-school" },
      { label: "Aufnahme", href: "/aufnahme" },
    ],
    sideCard: {
      eyebrow: "Wachstum",
      title: "Eigenständigkeit entsteht durch echte Aufgaben",
      href: "/lernen-alltag",
      image: "/paideia/icloud/classroom-boys.jpg",
      alt: "Kinder in der Lernrunde",
    },
    sections: [
      `<h3><font color="#762123">WAS DIE LOWER SCHOOL AUSZEICHNET</font></h3>
      <p>Zwischen frühem Kindsein und späterer Jugend liegt eine Phase, in der Kinder spürbar mehr selbst tragen wollen. Paideia antwortet darauf mit passenden Verantwortungen, klaren Arbeitsformen und einem Alltag, der Mut zur Initiative macht.</p>`,
      `<h3><font color="#762123">ERSTE VERANTWORTUNG</font></h3>
      <p>Kleine Dienste, Gruppenaufgaben, Projekte und Verlässlichkeit im Tagesrhythmus helfen dabei, dass Freiheit nicht abstrakt bleibt. Kinder merken: Was ich tue, hat Folgen für andere.</p>`,
      `<h3><font color="#762123">WERK, BEWEGUNG, GEMEINSCHAFT</font></h3>
      <p>Lernen wird nicht auf Arbeitsblätter reduziert. Wald, Werk, Küche, Sprache, Spiel und Bewegung bleiben Teil derselben Bildungserfahrung.</p>`,
    ],
  },
  "new-avenues": {
    slug: "new-avenues",
    navLabel: "New Avenues",
    breadcrumbLabel: "School",
    title: "New Avenues",
    description:
      "New Avenues bündelt individualisierte Begleitung für Kinder, die einen anderen Zugang, mehr Entzerrung oder präzisere Unterstützung brauchen.",
    eyebrow: "NEUE",
    heroImage: "/paideia/icloud/relationship-knit.jpg",
    heroAlt: "Begleitung in ruhiger Beziehung",
    lead:
      "Nicht jedes Kind wächst über dieselben Wege. New Avenues schafft Raum für präzisere Begleitung, ohne Kinder auf ein Defizit oder Etikett zu reduzieren.",
    sideButtons: [
      { label: "Lower School", href: "/lower-school" },
      { label: "Middle School", href: "/middle-school" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    sideCard: {
      eyebrow: "Individuell",
      title: "Neue Zugänge statt vorschneller Zuschreibungen",
      href: "/philosophie",
      image: "/paideia/icloud/table-drawing.jpg",
      alt: "Kinder beim konzentrierten Arbeiten",
    },
    sections: [
      `<h3><font color="#762123">FÜR WEN NEW AVENUES GEDACHT IST</font></h3>
      <p>Für Kinder und Familien, die merken, dass der übliche Schultakt nicht stimmig greift: weil mehr Entschleunigung, gezieltere Begleitung, andere Lernzugänge oder eine feinere Übergangsphase nötig sind.</p>`,
      `<h3><font color="#762123">WIE DIE BEGLEITUNG AUSSIEHT</font></h3>
      <p>Paideia schaut genauer hin: Welche Form von Beziehung, welche Struktur, welches Material und welches Tempo helfen diesem Kind wirklich? Von dort aus werden Arbeitsweisen, Verantwortungsräume und Erwartungen bewusster angepasst.</p>`,
      `<h3><font color="#762123">ZIEL: TRAGFÄHIGKEIT UND WACHSTUM</font></h3>
      <p>New Avenues ist kein Schonraum ohne Anspruch. Ziel ist, dass Kinder wieder tragfähig lernen, Selbstvertrauen aufbauen und Schritt für Schritt mehr Handlungsspielraum gewinnen.</p>`,
    ],
  },
  "middle-school": {
    slug: "middle-school",
    navLabel: "Middle School",
    breadcrumbLabel: "School",
    title: "Middle School",
    description:
      "Die Middle School verbindet wachsende Freiheit mit Organisation, Selbstführung und einem stärkeren Projektbezug.",
    eyebrow: "DIE",
    heroImage: "/paideia/icloud/table-group.jpg",
    heroAlt: "Jugendliche in gemeinsamer Arbeit",
    lead:
      "Die Middle School ist eine Übergangsphase: Interessen werden klarer, Eigenständigkeit wächst und Jugendliche brauchen zugleich mehr Stimme und mehr Form.",
    sideButtons: [
      { label: "Lower School", href: "/lower-school" },
      { label: "Upper School", href: "/upper-school" },
      { label: "Aufnahme", href: "/aufnahme" },
    ],
    sideCard: {
      eyebrow: "Praxis",
      title: "Organisation wird Teil echter Reifung",
      href: "/lernen-alltag",
      image: "/paideia/icloud/room-circle.jpg",
      alt: "Jugendliche in konzentrierter Runde",
    },
    sections: [
      `<h3><font color="#762123">WAS DIE MIDDLE SCHOOL AUSZEICHNET</font></h3>
      <p>Jugendliche wollen in diesem Alter ausprobieren, argumentieren, dazugehören und zugleich ihren eigenen Platz finden. Paideia verbindet diese Energie mit klarer Tagesstruktur und wachsender Eigenverantwortung.</p>`,
      `<h3><font color="#762123">FREIHEIT MIT FORM</font></h3>
      <p>Gerade in der Middle School zeigt sich die Baumrind-Balance besonders deutlich: Wärme und echtes Gesehenwerden gehen mit verbindlichen Absprachen, Planung und Konsequenz zusammen.</p>`,
      `<h3><font color="#762123">PROJEKTE, TEAM, ORIENTIERUNG</font></h3>
      <p>Projekte, Kulturarbeit, Lernen im Team und erste Portfolio-Bausteine helfen dabei, Interessen nicht nur zu benennen, sondern in Können zu verwandeln.</p>`,
    ],
  },
  "upper-school": {
    slug: "upper-school",
    navLabel: "Upper School",
    breadcrumbLabel: "School",
    title: "Upper School",
    description:
      "Die Upper School bündelt Reife, Portfolio, Öffentlichkeit und jene Freiheit, die mit Verantwortung mitwächst.",
    eyebrow: "DIE",
    heroImage: "/paideia/icloud/teens-grass.jpg",
    heroAlt: "Jugendliche in der Gemeinschaft",
    lead:
      "In der Upper School wird Paideias Idee verdichteter: Jugendliche arbeiten eigenständiger, zeigen mehr Selbstführung und verwandeln Interessen in sichtbare Projekte, Beiträge und Portfolios.",
    sideButtons: [
      { label: "Middle School", href: "/middle-school" },
      { label: "Academics", href: "/academics" },
      { label: "Arts", href: "/arts" },
    ],
    sideCard: {
      eyebrow: "Reife",
      title: "Mehr Freiheit wird sichtbar verdient",
      href: "/lernen-alltag",
      image: "/paideia/icloud/climbing-action.jpg",
      alt: "Herausforderung und Körperlichkeit",
    },
    sections: [
      `<h3><font color="#762123">WAS DIE UPPER SCHOOL AUSZEICHNET</font></h3>
      <p>Die älteren Jugendlichen sollen nicht infantil verwaltet, sondern ernst genommen werden. Paideia schafft dafür einen Rahmen, in dem Selbstführung, Verlässlichkeit und Urteilskraft wirklich zählen.</p>`,
      `<h3><font color="#762123">VERDIENTE FREIHEIT</font></h3>
      <p>Gerade hier gilt der Grundsatz besonders klar: Freiheit wächst mit gezeigter Reife. Wer mit Zeit, Aufgaben, Beziehungen und Verantwortung gut umgeht, bekommt sichtbar mehr Handlungsspielraum.</p>`,
      `<h3><font color="#762123">PORTFOLIO, KI, WIRKSAMKEIT</font></h3>
      <p>Upper-School-Arbeit darf bereits Zukunftskompetenzen bündeln: tieferes Schreiben, Projektsteuerung, Präsentation, Kulturarbeit, KI als Werkzeug und sichtbare Resultate, auf die Jugendliche mit Recht stolz sein können.</p>`,
    ],
  },
  gemeinschaft: {
    slug: "gemeinschaft",
    navLabel: "Gemeinschaft",
    breadcrumbLabel: "Gemeinschaft",
    title: "Gemeinschaft",
    description:
      "Paideia will nicht bloß beschulen, sondern eine getragene Gemeinschaft aus Kindern, Eltern und Erwachsenen bilden.",
    eyebrow: "DIE",
    heroImage: "/paideia/icloud/forest-group.jpg",
    heroAlt: "Paideia Gemeinschaft im Wald",
    lead:
      "Die Kultur einer Schule zeigt sich nicht nur im Unterricht, sondern darin, wie Menschen einander begegnen, Verantwortung teilen und einen gemeinsamen Raum halten.",
    sideButtons: [
      { label: "Team", href: "/team" },
      { label: "Aufnahme", href: "/aufnahme" },
      { label: "Verein & Träger", href: "/verein-traeger" },
    ],
    sideCard: {
      eyebrow: "Miteinander",
      title: "Schule als Beziehungskultur",
      href: "/team",
      image: "/paideia/icloud/forest-team.jpg",
      alt: "Kindergruppe in der Natur",
    },
    sections: [
      `<h3><font color="#762123">EIN KULTURRAUM</font></h3>
      <p>Paideia versteht Schule nicht als reine Dienstleistung. Der Ort soll Kulturraum sein: getragen von Haltung, Sprache, Verlässlichkeit, Feier, Spiel, Arbeit und gemeinsamen Bildern.</p>`,
      `<h3><font color="#762123">ELTERN UND ERWACHSENE TRAGEN MIT</font></h3>
      <p>Eltern bleiben nicht am Rand. Sie tragen den Geist der Schule mit, helfen beim Halten des Rahmens und verstehen sich idealerweise als Mitgestaltende statt bloß als Konsumenten.</p>`,
      `<h3><font color="#762123">BEGEGNUNG, AUSFLÜGE, RITUALE</font></h3>
      <p>Gemeinschaft wird durch Feste, Ausflüge, Kulturarbeit, Naturerfahrung und einen würdevollen Alltag konkret. Gerade dadurch entsteht Zugehörigkeit, die nicht künstlich inszeniert werden muss.</p>`,
    ],
  },
  athletics: {
    slug: "athletics",
    navLabel: "Athletics",
    breadcrumbLabel: "Gemeinschaft",
    title: "Athletics",
    description:
      "Bewegung, Mut, Körperwahrnehmung und Spiel sind bei Paideia Teil von Bildung und nicht bloß Ergänzung.",
    eyebrow: "DIE",
    heroImage: "/paideia/icloud/lake-handstands.jpg",
    heroAlt: "Kinder am See in Bewegung",
    lead:
      "Athletics meint bei Paideia nicht nur Sport im engen Sinn. Gemeint ist ein Verhältnis zum Körper, zur Herausforderung und zur Freude an Bewegung.",
    sideButtons: [
      { label: "Gemeinschaft", href: "/gemeinschaft" },
      { label: "Academics", href: "/academics" },
      { label: "Arts", href: "/arts" },
    ],
    sideCard: {
      eyebrow: "Mut",
      title: "Klettern, Wasser, Wald und Spiel",
      href: "/lernen-alltag",
      image: "/paideia/icloud/climbing-action.jpg",
      alt: "Klettern als Herausforderung",
    },
    sections: [
      `<h3><font color="#762123">BEWEGUNG ALS BILDUNG</font></h3>
      <p>Körperlichkeit hilft Kindern und Jugendlichen, sich zu regulieren, Grenzen zu spüren und Selbstvertrauen aufzubauen. Darum gehört Bewegung nicht an den Rand, sondern in den Kern eines stimmigen Alltags.</p>`,
      `<h3><font color="#762123">KLETTERN, WALD, WASSER</font></h3>
      <p>Paideia nutzt Erfahrungsräume, in denen Mut, Koordination, Balance und Gemeinschaft spürbar werden: draußen in der Natur, im Spiel, beim Klettern oder in bewegten gemeinsamen Unternehmungen.</p>`,
      `<div class="paideia-inline-video-frame">
        <video class="paideia-inline-video" controls playsinline autoplay muted loop preload="metadata" poster="/paideia/icloud/videos/climbing-clip-poster.jpg">
          <source src="/paideia/icloud/climbing-clip.mp4" type="video/mp4" />
        </video>
      </div>
      <p>Dieser bewegte Ausschnitt stammt direkt aus dem iCloud-Album und zeigt genau jene reale Körperlichkeit, die auf dieser Seite gemeint ist.</p>`,
      `<h3><font color="#762123">SPIEL, SPORT, SELBSTWIRKSAMKEIT</font></h3>
      <p>Leistung kann darin vorkommen, ist aber nicht der einzige Maßstab. Wichtig ist, dass Kinder ihren Körper als Quelle von Präsenz, Kraft, Freude und echter Selbstwirksamkeit erleben.</p>`,
    ],
  },
  academics: {
    slug: "academics",
    navLabel: "Academics",
    breadcrumbLabel: "Gemeinschaft",
    title: "Academics",
    description:
      "Paideia verbindet starke Grundlagen mit Tiefe, Projektbezug, Urteilskraft und einer modernen Lernkultur.",
    eyebrow: "DIE",
    heroImage: "/paideia/icloud/room-circle.jpg",
    heroAlt: "Lernrunde bei Paideia",
    lead:
      "Akademische Substanz wird bei Paideia nicht geopfert, sondern anders gebaut: mit Sinn, Beziehung, echter Praxis und einem klaren Blick auf das, was junge Menschen heute wirklich können müssen.",
    sideButtons: [
      { label: "Arts", href: "/arts" },
      { label: "Athletics", href: "/athletics" },
      { label: "Philosophie", href: "/philosophie" },
    ],
    sideCard: {
      eyebrow: "Tiefe",
      title: "Grundlagen, Denken und Wirksamkeit",
      href: "/philosophie",
      image: "/paideia/icloud/table-group.jpg",
      alt: "Jugendliche bei gemeinsamer Arbeit",
    },
    sections: [
      `<h3><font color="#762123">AKADEMISCHE GRUNDLAGEN</font></h3>
      <p>Sprache, Lesen, Schreiben, Mathematik, Sachwissen und Englisch bleiben tragende Grundlagen. Der Unterschied liegt nicht im Verzicht, sondern in der Art, wie diese Grundlagen aufgebaut und vertieft werden.</p>`,
      `<h3><font color="#762123">FIRST-PRINCIPLES UND KI</font></h3>
      <p>Paideia fragt nicht zuerst nach Gewohnheit, sondern nach Prinzip. Was muss ein junger Mensch wirklich verstehen, um urteilsfähig und wirksam zu werden? Dazu kommen moderne Werkzeuge wie KI nicht als Abkürzung, sondern als Instrument für vertieftes Lernen und bessere Umsetzung.</p>`,
      `<div class="paideia-inline-video-frame">
        <video class="paideia-inline-video" controls playsinline autoplay muted loop preload="metadata" poster="/paideia/icloud/videos/album-video-416-poster.jpg">
          <source src="/paideia/icloud/videos/album-video-416.mp4" type="video/mp4" />
        </video>
      </div>
      <p>Auch dieser Clip kommt direkt aus dem Album: konzentrierte Arbeitsphase, kein inszeniertes Stock-Motiv.</p>`,
      `<h3><font color="#762123">PORTFOLIO STATT BULIMIELERNEN</font></h3>
      <p>Wissen bleibt nicht nur für den nächsten Test bestehen. Projekte, Präsentationen, Schreibstücke, Kulturarbeit und greifbare Ergebnisse machen Lernen nachvollziehbar und langfristig wertvoll.</p>`,
    ],
  },
  arts: {
    slug: "arts",
    navLabel: "Arts",
    breadcrumbLabel: "Gemeinschaft",
    title: "Arts",
    description:
      "Theater, Gestaltung, Zeitung und performative Arbeit gehören bei Paideia in den Kern der Bildung.",
    eyebrow: "DIE",
    heroImage: "/paideia/icloud/stage-performance.jpg",
    heroAlt: "Aufführung auf der Bühne",
    lead:
      "Kunst ist bei Paideia kein freundlicher Zusatz, sondern ein Weg zu Ausdruck, Öffentlichkeit, Schönheit und innerer Form.",
    sideButtons: [
      { label: "Academics", href: "/academics" },
      { label: "Schulzeitung", href: "/kreativwerkblatt" },
      { label: "Gemeinschaft", href: "/gemeinschaft" },
    ],
    sideCard: {
      eyebrow: "Ausdruck",
      title: "RHABARBER RHABARBER und die Schulzeitung",
      href: "/kreativwerkblatt",
      image: "/paideia/newspaper/kreativwerkblatt-cover.png",
      alt: "Schulzeitung",
    },
    sections: [
      `<h3><font color="#762123">KUNST IST KEIN RANDPROGRAMM</font></h3>
      <p>Wenn Kinder und Jugendliche gestalten, auftreten, schreiben oder performen, zeigen sie nicht bloß Talent. Sie bilden Haltung, Präsenz, Sprache und Mut aus.</p>`,
      `<h3><font color="#762123">BÜHNE, ZEITUNG, GESTALTUNG</font></h3>
      <p>Theaterarbeit, visuelle Gestaltung, Zeitung und öffentliche Präsentation machen Lernen sichtbar. Paideia schätzt genau diese Momente, in denen Inneres Form gewinnt und Resonanz erzeugt.</p>`,
      `<div class="paideia-inline-video-frame">
        <video class="paideia-inline-video" controls playsinline autoplay muted loop preload="metadata" poster="/paideia/icloud/videos/album-video-046-poster.jpg">
          <source src="/paideia/icloud/videos/album-video-046.mp4" type="video/mp4" />
        </video>
      </div>
      <p>Der Clip zeigt eine echte Werk- und Gestaltungsphase aus dem Album und passt deshalb besser als ein beliebiges Kunstsymbol.</p>`,
      `<h3><font color="#762123">AUSDRUCK MACHT BILDUNG SICHTBAR</font></h3>
      <p>Kunst ist auch ein Prüfstein für Qualität: Nicht über Ziffern, sondern über Sprache, Form, Zusammenarbeit, Timing und Echtheit wird spürbar, was bereits gewachsen ist.</p>`,
    ],
  },
  aufnahme: {
    slug: "aufnahme",
    navLabel: "Aufnahme",
    breadcrumbLabel: "Aufnahme",
    title: "Aufnahme",
    description:
      "Ansuchen, Schnupperwoche, Gespräch und Entscheidung machen den Aufnahmeprozess transparent und nachvollziehbar.",
    eyebrow: "DIE",
    heroImage: "/paideia/icloud/classroom-boys.jpg",
    heroAlt: "Aufnahme und erstes Kennenlernen",
    lead:
      "Die Aufnahme soll weder Casting noch Blackbox sein. Familien sollen früh verstehen, welche Haltung, welche Verantwortlichkeiten und welche Form von Zusammenarbeit Paideia wirklich meint.",
    sideButtons: [
      { label: "Infoabend", href: "/aufnahme#infoabend" },
      { label: "Weitere Informationen", href: "/weitere-informationen" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    sideCard: {
      eyebrow: "Erster Schritt",
      title: "Der Infoabend eröffnet den Aufnahmeweg",
      href: "/aufnahme#infoabend",
      image: "/paideia/icloud/forest-group.jpg",
      alt: "Ort für Kennenlernen",
    },
    sections: [
      `<h3><font color="#762123">ABLAUF</font></h3>
      <ul>
        <li><strong>1. Informieren</strong><br />Website, Leitbild und FAQ lesen</li>
        <li><strong>2. Infoabend besuchen</strong><br />Der erste ruhige Einstieg läuft direkt über den Abschnitt <a href="/aufnahme#infoabend">Infoabend</a> auf dieser Seite</li>
        <li><strong>3. Ansuchen</strong><br />Schriftliches Aufnahmeansuchen nach dem ersten Kennenlernen</li>
        <li><strong>4. Schnupperwoche</strong><br />Eine ganze Schulwoche in der Gemeinschaft</li>
        <li><strong>5. Gespräch und Entscheidung</strong><br />Danach folgt die Rückmeldung der Leitung und gegebenenfalls die Vertragsphase</li>
      </ul>`,
      `<h3><a id="infoabend" name="infoabend"></a><font color="#762123">INFOABEND</font></h3>
      <p>Der Infoabend ist kein ausgelagerter Nebenschritt mehr, sondern bewusst Teil des Aufnahmewegs. Familien sehen hier direkt, wann der nächste Abend stattfindet und wofür er gedacht ist.</p>
      <p><strong>Nächster bekannter Termin:</strong> ${nextInfoabendFull}</p>
      <p>Am Infoabend geht es um Haltung, Alltag, Aufnahmeweg, Fragen der Passung und die Kultur gemeinsamer Verantwortung. Anmeldung und Rückfragen bitte über <a href="mailto:info@kreativwerkstattsalzburg.at">info@kreativwerkstattsalzburg.at</a>.</p>`,
      `<h3><font color="#762123">WICHTIGE HINWEISE</font></h3>
      <p><strong>Keine Neuaufnahme im laufenden Schuljahr</strong> – laut bestehender Schulrechtslage.</p>
      <p>Familien sollen früh verstehen, welche Haltung Paideia meint und wie verbindlich der gemeinsame Weg gedacht ist. Genau deshalb stehen Infoabend und Aufnahme nun an einem Ort.</p>`,
      `<h3><font color="#762123">WAS GEPRÜFT WIRD</font></h3>
      <p>Paideia fragt nicht nur, ob ein Kind „passt“, sondern ob Schule, Familie und Alltag wirklich zusammen tragfähig werden können.</p>
      <p>Entscheidend sind Beziehung, Reife, Gruppenkonstellation, organisatorischer Rahmen und die Bereitschaft, die Kultur der Schule mitzutragen.</p>
      <p>Besonders bei älteren Kindern und Jugendlichen wird auch darauf geachtet, ob sie mit wachsender Freiheit verantwortungsvoll umgehen können oder bereit sind, in diese Reife hineinzuwachsen.</p>`,
    ],
  },
  infoabend: {
    slug: "infoabend",
    navLabel: "Infoabend",
    breadcrumbLabel: "Aufnahme",
    title: "Infoabend",
    description:
      "Der Infoabend ist der erste Einstieg in Paideia und zeigt Haltung, Alltag, Aufnahmeweg und die Kultur gemeinsamer Verantwortung.",
    eyebrow: "DER",
    heroImage: "/paideia/icloud/forest-group.jpg",
    heroAlt: "Infoabend und Gemeinschaft",
    lead:
      "Der Infoabend ist kein Verkaufsgespräch, sondern der erste ehrliche Einblick in Haltung, Alltag und Aufnahmeweg von Paideia. Familien sollen spüren können, worauf die Schule baut und was sie von gemeinsamer Verantwortung erwartet.",
    sideButtons: [
      { label: "Aufnahme", href: "/aufnahme" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Spenden", href: "/verein-traeger#spenden" },
    ],
    sideCard: {
      eyebrow: "Nächster Termin",
      title: nextInfoabendDate,
      href: "/kontakt",
      image: "/paideia/icloud/forest-group.jpg",
      alt: "Paideia Gemeinschaft",
    },
    sections: [
      `<h3><font color="#762123">WORUM ES GEHT</font></h3>
      <p>Familien bekommen an diesem Abend ein klares Bild davon, wie Paideia Bildung versteht: Beziehung als Fundament, Freiheit mit Form, sinnvolles Schaffen und Verantwortung als Teil echter Reifung.</p>
      <p>Der Abend hilft dabei, früh zu spüren, ob die Kultur der Schule zur Familie passt, noch bevor ein Ansuchen oder eine Schnupperwoche sinnvoll wird.</p>`,
      `<h3><font color="#762123">WAS DICH ERWARTET</font></h3>
      <ul>
        <li><strong>Haltung und Leitbild</strong><br />Warum Paideia Bildung nicht von Gewohnheiten, sondern von Grundprinzipien her denkt</li>
        <li><strong>Einblick in den Alltag</strong><br />Rhythmus, Lernbegleitung, Projekte, Verantwortung und Gemeinschaft</li>
        <li><strong>Aufnahmeweg</strong><br />Wie Ansuchen, Schnupperwoche, Gespräch und Entscheidung zusammenhängen</li>
        <li><strong>Raum für Fragen</strong><br />Zeit für ehrliche Rückfragen zu Erwartungen, Organisation und Passung</li>
      </ul>`,
      `<h3><font color="#762123">FÜR WEN DER ABEND GEDACHT IST</font></h3>
      <p>Vor allem für Eltern und Sorgeberechtigte, die Paideia ernsthaft prüfen möchten. Je nach Situation kann auch ein gemeinsames erstes Kennenlernen mit dem Kind sinnvoll vorbereitet werden.</p>
      <p>Wenn ihr danach weitergehen möchtet, führt der nächste Schritt auf die Seite <a href="/aufnahme">Aufnahme</a>.</p>`,
      `<h3><font color="#762123">NÄCHSTER BEKANNTER TERMIN</font></h3>
      <p><strong>${nextInfoabendFull}</strong></p>
      <p>Anmeldung und Rückfragen bitte über <a href="mailto:info@kreativwerkstattsalzburg.at">info@kreativwerkstattsalzburg.at</a>. Sobald ein weiterer Termin feststeht, wird diese Seite zuerst aktualisiert.</p>`,
    ],
  },
  "weitere-informationen": {
    slug: "weitere-informationen",
    navLabel: "Weitere Informationen",
    breadcrumbLabel: "Aufnahme",
    title: "Weitere Informationen",
    description:
      "Transparenz über Tagesablauf, Sprachen, Entwicklungsdokumentation und schulrechtliche Rahmenbedingungen.",
    eyebrow: "WEITERE",
    heroImage: "/paideia/icloud/table-group.jpg",
    heroAlt: "Weitere Informationen zu Paideia",
    lead:
      "Sachliche Informationen sollen Familien nicht abschrecken oder verwirren, sondern wirklich orientieren.",
    sideButtons: [
      { label: "Aufnahme", href: "/aufnahme" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Spenden", href: "/verein-traeger#spenden" },
    ],
    sideCard: {
      eyebrow: "Orientierung",
      title: "Schulrecht, Sprache und Alltag auf einen Blick",
      href: "/aufnahme",
      image: "/paideia/icloud/table-group.jpg",
      alt: "Paideia Orientierung",
    },
    sections: [
      `<h3><font color="#762123">ORGANISATION</font></h3>
      <ul>
        <li><strong>Montag bis Freitag</strong><br />7:30 bis 13:00 Uhr</li>
        <li><strong>Unterrichtssprache</strong><br />Deutsch, Englisch fließt regelmäßig ein</li>
        <li><strong>Dokumentation</strong><br />Entwicklungsbeobachtung statt bloßer Ziffernlogik</li>
      </ul>`,
      `<h3><font color="#762123">SCHULRECHT</font></h3>
      <p>Die bisherige Seite weist darauf hin, dass Kinder in einer Privatschule ohne dauerhaftes Öffentlichkeitsrecht formal bei der Bildungsdirektion gemeldet werden müssen.</p>
      <p>Paideia übernimmt diese Fakten, formuliert sie aber klarer: inklusive möglicher Rückkehr in die öffentliche Schule und gegebenenfalls Externistenprüfung.</p>`,
      `<h3><font color="#762123">ELTERN ALS MITTRAGENDE</font></h3>
      <p>Die Kultur der Schule funktioniert tiefer, wenn Eltern nicht nur Konsumenten sind, sondern den Geist von individuellem Lerntempo, intrinsischer Motivation und gemeinsamer Verantwortung mittragen.</p>`,
    ],
  },
  team: {
    slug: "team",
    navLabel: "Team",
    breadcrumbLabel: "Gemeinschaft",
    title: "Team",
    description:
      "Alle Menschen, die die Schule tragen, sichtbar und sauber geordnet.",
    eyebrow: "DAS",
    heroImage: "/paideia/icloud/forest-team.jpg",
    heroAlt: "Team und Schulgemeinschaft",
    lead:
      "Eine Schule wird über Erwachsene glaubwürdig. Deshalb zeigt Paideia nicht nur Funktionen, sondern die Menschen und ihre Haltung.",
    sideButtons: [
      { label: "Kontakt", href: "/kontakt" },
      { label: "Fotos 2024/25", href: "/fotos/2024-25" },
      { label: "Philosophie", href: "/philosophie" },
    ],
    sideCard: {
      eyebrow: "Einblick",
      title: "Lernbegleitung braucht Beziehung und Profil",
      href: "/philosophie",
      image: "/paideia/team/oliwia-garlicka.jpg",
      alt: "Oliwia Garlicka",
    },
    sections: [],
  },
  "verein-traeger": {
    slug: "verein-traeger",
    navLabel: "Verein & Träger",
    breadcrumbLabel: "Gemeinschaft",
    title: "Verein & Träger",
    description:
      "Der Trägerverein hält die Schule nicht nur formal, sondern kulturell und finanziell.",
    eyebrow: "VEREIN &",
    heroImage: "/paideia/support/pfarrhof.jpg",
    heroAlt: "Verein und Trägerschaft",
    lead:
      "Nicht nur Pädagogik, auch Ort, Finanzierung und Langfristigkeit werden gemeinschaftlich verantwortet.",
    sideButtons: [
      { label: "Spenden", href: "/verein-traeger#spenden" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Partner & Förderer", href: "/partner-foerderer" },
    ],
    sideCard: {
      eyebrow: "Spendenbegünstigt",
      title: "Registrierungsnummer BI 32441",
      href: "/kontakt",
      image: "/paideia/support/pfarrhof.jpg",
      alt: "Zukunftsort",
    },
    sections: [
      `<h3><font color="#762123">TRÄGERSTRUKTUR</font></h3>
      <p>Alle Eltern und Kinder sind Mitglieder im Verein und verantworten damit den Ort, die finanziellen Ressourcen und die allgemeinen Rahmenbedingungen der Schule mit.</p>
      <p>Weitere Unterstützerinnen und Unterstützer können sich ebenfalls beteiligen. Schule wird so nicht bloß Service, sondern echter Kulturraum.</p>`,
      `<h3><font color="#762123">SPENDEN</font></h3>
      <p id="spenden"><strong>Spendenkonto:</strong> AT48 3500 0000 4216 4087</p>
      <p><strong>PayPal:</strong> <a href="https://www.paypal.com/donate/?hosted_button_id=X9XXNS4EKWFGE" target="_blank" rel="noreferrer">Jetzt unterstützen</a></p>
      <p>Die bestehende Angabe lautet: spendenbegünstigt seit 29. September 2025.</p>`,
    ],
  },
  "partner-foerderer": {
    slug: "partner-foerderer",
    navLabel: "Partner & Förderer",
    breadcrumbLabel: "Gemeinschaft",
    title: "Partner & Förderer",
    description:
      "Ein lokales Netzwerk aus Bildung, Gestaltung, Körperarbeit und praktischer Unterstützung.",
    eyebrow: "PARTNER &",
    heroImage: "/paideia/icloud/forest-group.jpg",
    heroAlt: "Partner und Förderer als getragene Gemeinschaft",
    lead:
      "Eine Schule dieser Art entsteht nie allein. Paideia zeigt ihre Partner bewusst als Teil eines nahen Ökosystems.",
    sideButtons: [
      { label: "Verein & Träger", href: "/verein-traeger" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Spenden", href: "/verein-traeger#spenden" },
    ],
    sideCard: {
      eyebrow: "Region",
      title: "Lokale Unterstützung mit Substanz",
      href: "/verein-traeger",
      image: "/paideia/icloud/room-circle.jpg",
      alt: "Regionale Unterstützung",
    },
    sections: [
      `<h3><font color="#762123">NETZWERK</font></h3>
      <ul>
        <li><strong>bw advertising</strong><br />Kommunikation und Sichtbarkeit</li>
        <li><strong>Europäisches Solidaritätskorps</strong><br />Unterstützung europäischer Freiwilliger</li>
        <li><strong>Birgit Brandner</strong><br />Design und kreative Begleitung</li>
        <li><strong>Naturfutterlädchen</strong>, <strong>Angela Balance</strong>, <strong>Holz Enzinger</strong>, <strong>Ferox</strong>, <strong>Physio Juandmi</strong><br />Praktische Unterstützung aus der Region</li>
      </ul>`,
      `<h3><font color="#762123">HALTUNG</font></h3>
      <p>Die Partnerseite spricht bewusst nicht in Sponsorensprache. Sie zeigt Menschen und Institutionen, die die Schule wirklich mittragen.</p>`,
    ],
  },
  kreativwerkblatt: {
    slug: "kreativwerkblatt",
    navLabel: "Schulzeitung",
    breadcrumbLabel: "Gemeinschaft",
    title: "Schulzeitung",
    description:
      "Schülerische Kulturarbeit wird sichtbar und zeigt Lernen mit Ausdruck, Sprache und Form.",
    eyebrow: "DAS",
    heroImage: "/paideia/newspaper/kreativwerkblatt-2024.png",
    heroAlt: "Schulzeitung",
    lead:
      "Zeitung, Aufführung und Öffentlichkeit sind keine Nebensache, sondern Ausdruck von Bildung mit Resonanz. Die bisherigen Ausgaben lassen sich hier direkt ansehen und öffnen.",
    sideButtons: [
      { label: "Fotos 2024/25", href: "/fotos/2024-25" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Philosophie", href: "/philosophie" },
    ],
    sideCard: {
      eyebrow: "Kulturarbeit",
      title: "Lernen wird sichtbar, nicht nur benotet",
      href: "/lernen-alltag",
      image: "/paideia/newspaper/kreativwerkblatt-cover.png",
      alt: "Schulzeitung Cover",
    },
    sections: [
      `<h3><font color="#762123">WERK STATT BEHAUPTUNG</font></h3>
      <p>Wenn Kinder und Jugendliche an einer Zeitung, einer Aufführung oder einer Ausstellung arbeiten, entsteht Lernen mit Resonanz.</p>
      <p>Es wird prüfbar im besten Sinn: nicht über Punkte, sondern über Wirklichkeit, Sprache, Gestaltung und Stolz.</p>`,
    ],
  },
  presse: {
    slug: "presse",
    navLabel: "Presse",
    breadcrumbLabel: "Gemeinschaft",
    title: "Presse",
    description:
      "Medienmomente der Schule als Wegmarken einer entstehenden Bildungsinstitution.",
    eyebrow: "DIE",
    heroImage: "/paideia/press/2023-lokal-titelblatt.png",
    heroAlt: "Presse und öffentliche Sichtbarkeit",
    lead:
      "Medienbeiträge werden hier nicht als Trophäen gesammelt, sondern als Chronik eines Bildungsortes gelesen, der sichtbar wird.",
    sideButtons: [
      { label: "Kontakt", href: "/kontakt" },
      { label: "Team", href: "/team" },
      { label: "Philosophie", href: "/philosophie" },
    ],
    sideCard: {
      eyebrow: "Archiv",
      title: "Chronik der öffentlichen Wegmarken",
      href: "/presse",
      image: "/paideia/press/2025-stadtnachrichten.jpg",
      alt: "Pressebild",
    },
    sections: [],
  },
  kontakt: {
    slug: "kontakt",
    navLabel: "Kontakt",
    breadcrumbLabel: "Aufnahme",
    title: "Kontakt",
    description:
      "Ein klarer Ort für Fragen, Kennenlernen und Unterstützung.",
    eyebrow: "DER",
    heroImage: "/paideia/icloud/dock-group.jpg",
    heroAlt: "Kontakt und erstes Kennenlernen",
    lead:
      "Paideia führt Kontakt, Standort, Zeiten und Aufnahmehinweise bewusst knapp und konkret zusammen.",
    sideButtons: [
      { label: "Aufnahme", href: "/aufnahme" },
      { label: "Infoabend", href: "/aufnahme#infoabend" },
      { label: "Spenden", href: "/verein-traeger#spenden" },
    ],
    sideCard: {
      eyebrow: "Direkt",
      title: "info@kreativwerkstattsalzburg.at",
      href: "mailto:info@kreativwerkstattsalzburg.at",
      image: "/paideia/icloud/forest-team.jpg",
      alt: "Kontakt",
    },
    sections: [
      `<h3><font color="#762123">SO ERREICHST DU UNS</font></h3>
      <ul>
        <li><strong>E-Mail</strong><br />info@kreativwerkstattsalzburg.at</li>
        <li><strong>Ort</strong><br />Strubergasse 26, 5020 Salzburg</li>
        <li><strong>Zeiten</strong><br />Montag bis Freitag, 7:30 bis 13:00 Uhr</li>
        <li><strong>Nächster Infoabend</strong><br />${nextInfoabendFull}</li>
      </ul>`,
      `<h3><font color="#762123">UNTERSTÜTZUNG UND VORTRÄGE</font></h3>
      <p>Die bestehende Schule erwähnt ausdrücklich Vorträge für interessierte Familien oder Sponsoren. Diese Offenheit bleibt erhalten.</p>
      <p>Spenden und Kontakt werden nicht getrennt, sondern als zwei Arten verstanden, an der Schule mitzuwirken: finanziell oder im Gespräch.</p>`,
    ],
  },
};

export const searchDocuments = [
  ...Object.values(pages).map((page) => ({
    title: page.title,
    href: `/${page.slug}`,
    body: `${page.description} ${page.lead} ${page.sections.join(" ")}`,
  })),
  ...schoolPaperIssues.map((issue) => ({
    title: issue.title,
    href: issue.href,
    body: `${issue.year} ${issue.body}`,
  })),
  {
    title: "Fotos 2024/25",
    href: "/fotos/2024-25",
    body: `${galleries["2024-25"].description} ${galleries["2024-25"].items
      .map((item) => item.caption)
      .join(" ")}`,
  },
  {
    title: "Fotos 2023/24",
    href: "/fotos/2023-24",
    body: `${galleries["2023-24"].description} ${galleries["2023-24"].items
      .map((item) => item.caption)
      .join(" ")}`,
  },
];
