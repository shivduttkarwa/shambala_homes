// Types for Strapi CMS integration

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  caption?: string;
}

export interface ServiceBox {
  id: number;
  title: string;
  description: string;
  image: StrapiImage;
  index: number;
}

export interface HeroContent {
  id: number;
  mainTitle: string[];
  typedTexts: string[];
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: StrapiImage;
  serviceBoxes: ServiceBox[];
}

export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: StrapiImage;
  link: string;
}

export interface IconLink {
  id: number;
  title: string;
  icon: string;
  link: string;
}

export interface MenuItem {
  id: number;
  label: string;
  link: string;
}
