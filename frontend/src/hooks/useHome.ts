import { useEffect, useState } from 'react';
import { fetchHomePage, mediaUrl } from '@/lib/strapi';

// Match your HeroSection props (keep as-is in your component)
export type HeroSectionProps = {
  mainTitle?: string[];
  typedTexts?: string[];
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  serviceBoxes?: Array<{
    id: number;
    index: number;
    title: string;
    description: string;
    image: string;
    imageSmall?: string; // Add thumbnail for lazy loading
    fullImage?: string; // Full resolution for slider
  }>;
};

type StrapiHero = {
  __component?: string;
  component?: string;

  heading?: string;
  rotatingPhrases?: Array<{ id: number; text: string }>;
  backgroundImage?: any;
  cta?: { label?: string; url?: string };

  circleGallery?: Array<{
    id: number;
    heading?: string;
    description?: string;
    image?: any[];
    alt?: string;
  }>;

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
        console.log('Fetched data:', data);
        setPage(data);

        const sections = data?.sections ?? [];
        const hero = sections.find((s) => (s.__component ?? s.component) === 'sections.hero');
        console.log('Hero section:', hero);
        console.log('circleGallery:', hero?.circleGallery);

        if (hero) {
          // Map Strapi → your component prop shape
          const serviceBoxes =
            hero.circleGallery?.map((item, idx) => {
              const imageData = item.image?.[0];
              
              // Use optimized formats: thumbnail > small > medium > original
              const thumbnail = imageData?.formats?.thumbnail?.url;
              const small = imageData?.formats?.small?.url;
              const medium = imageData?.formats?.medium?.url;
              const original = imageData?.url;

              return {
                id: item.id,
                index: idx,
                title: item.heading || `Item ${idx + 1}`,
                description: item.description || '',
                // Use small/medium for display
                image: mediaUrl(medium || small || original) ?? '',
                // Use thumbnail for initial load
                imageSmall: mediaUrl(thumbnail || small) ?? '',
                // Full resolution for slider
                fullImage: mediaUrl(original) ?? '',
              };
            }) ?? [];

          console.log('Service boxes with optimized images:', serviceBoxes);

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
          console.log('No hero section found, set heroProps to null');
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