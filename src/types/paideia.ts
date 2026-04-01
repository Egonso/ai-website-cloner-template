export type ThemeTone = "light" | "ink" | "tint";

export interface BrandVariant {
  label: string;
  description: string;
  src: string;
  tone: ThemeTone;
}

export interface SiteNavItem {
  label: string;
  href: string;
  description?: string;
}

export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface PageHero {
  eyebrow: string;
  title: string;
  description: string;
  kicker?: string;
  image?: string;
  imageAlt?: string;
  ctas?: CtaLink[];
}

export interface Pillar {
  greek: string;
  translation: string;
  title: string;
  body: string;
}

export interface FactItem {
  value: string;
  label: string;
  detail?: string;
}

export interface AdmissionsStep {
  step: string;
  title: string;
  body: string;
}

export interface TeamMember {
  name: string;
  role: string;
  status?: string;
  order: number;
  image?: string;
  shortBio: string;
  longBio?: string[];
  area: "core" | "extended" | "legacy";
  visible: boolean;
}

export interface TeamGroup {
  title: string;
  description: string;
  members: TeamMember[];
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryCollection {
  slug: string;
  title: string;
  description: string;
  items: GalleryItem[];
}

export interface PartnerItem {
  name: string;
  href: string;
  note: string;
}

export interface PressItem {
  year: string;
  date: string;
  title: string;
  body: string;
  href: string;
  image: string;
}

export interface SupportInfo {
  registrationNumber: string;
  bankAccount: string;
  paypalUrl: string;
  email: string;
  associationName: string;
}

export interface QuoteBlock {
  quote: string;
  attribution: string;
  context?: string;
}

export type PageSection =
  | {
      type: "prose";
      theme?: ThemeTone;
      eyebrow?: string;
      title: string;
      body: string[];
      bullets?: string[];
      image?: string;
      imageAlt?: string;
      ctas?: CtaLink[];
      quote?: QuoteBlock;
    }
  | {
      type: "pillars";
      theme?: ThemeTone;
      eyebrow?: string;
      title: string;
      intro: string;
      items: Pillar[];
    }
  | {
      type: "facts";
      theme?: ThemeTone;
      eyebrow?: string;
      title: string;
      intro?: string;
      items: FactItem[];
    }
  | {
      type: "process";
      theme?: ThemeTone;
      eyebrow?: string;
      title: string;
      intro?: string;
      steps: AdmissionsStep[];
    }
  | {
      type: "team";
      theme?: ThemeTone;
      eyebrow?: string;
      title: string;
      intro: string;
      groups: TeamGroup[];
    }
  | {
      type: "partners";
      theme?: ThemeTone;
      eyebrow?: string;
      title: string;
      intro: string;
      items: PartnerItem[];
    }
  | {
      type: "press";
      theme?: ThemeTone;
      eyebrow?: string;
      title: string;
      intro: string;
      items: PressItem[];
    }
  | {
      type: "logos";
      theme?: ThemeTone;
      eyebrow?: string;
      title: string;
      intro: string;
      items: BrandVariant[];
    }
  | {
      type: "gallery";
      theme?: ThemeTone;
      eyebrow?: string;
      title: string;
      intro: string;
      collection: GalleryCollection;
    };

export interface PageContent {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  hero: PageHero;
  ribbon?: FactItem[];
  sections: PageSection[];
}
