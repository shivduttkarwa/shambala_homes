import { useEffect, useState } from 'react';
import { fetchHomePage, mediaUrl } from '@/lib/strapi';

// Match your HeroSection props (keep as-is in your component)
export type HeroSectionProps = {
  mainTitle?: string[];        // e.g. ["WE","MAKE"]
  typedTexts?: string[];       // rotating lines
  description?: string;        // (unused yet — stays optional)
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  serviceBoxes?: Array<{
    id: number;
    index: number;
    title: string;
    description: string;
    image: string;
  }>;
};

type StrapiHero = {
  __component?: string;
  component?: string;

  heading?: string;
  rotatingPhrases?: Array<{ id: number; text: string }>;
  backgroundImage?: any;
  cta?: { label?: string; url?: string };

  // circle gallery coming from Strapi
  circleGallery?: Array<{
    id: number;
    image?: any;
    alt?: string;
  }>;

  // optional
  heroSettings?: any;
};

type StrapiPage = {
  title: string;
  slug: string;
  sections: Array<StrapiHero>;
};

export function useHome() {
  const [page, setPage] = useState<StrapiPage | null>(null);
  const [heroProps, setHeroProps] = useState<HeroSectionProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = (await fetchHomePage()) as StrapiPage | null;
        setPage(data);

        const sections = data?.sections ?? [];
        const hero = sections.find((s) => (s.__component ?? s.component) === 'sections.hero');

        if (hero) {
          // Map Strapi → your component prop shape
          const serviceBoxes =
            hero.circleGallery?.map((item, idx) => ({
              id: item.id,
              index: idx,
              title: item.alt || `Item ${idx + 1}`,
              description: '', // keep empty unless you add a field in Strapi
              image: mediaUrl(item.image) ?? '',
            })) ?? [];

          setHeroProps({
            mainTitle: hero.heading ? hero.heading.split(' ') : undefined,
            typedTexts: hero.rotatingPhrases?.map((p) => p.text) ?? [],
            description: undefined,
            ctaText: hero.cta?.label,
            ctaLink: hero.cta?.url,
            backgroundImage: mediaUrl(hero.backgroundImage),
            serviceBoxes,
          });
        } else {
          setHeroProps(null);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, page, heroProps };
}
