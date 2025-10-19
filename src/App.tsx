import React from 'react';
import './styles/App.css';
import { Header, Footer, Preloader } from './components/Layout';
import { 
  HeroSection, 
  IconLinksSection, 
  HorizontalCarousel,
  MediaComparator,
  StudioSection,
  QualityHomes,
  DreamHomeJourney,
  BlogSection
} from './components/Home';
import { defaultHeroData } from './data/defaultData';

function App() {
  // Media Comparator slides data
  const publicUrl = process.env.PUBLIC_URL || '';

  const landscapingSlides = [
    {
      image: `${publicUrl}/images/l3.jpg`,
      title: 'Garden Design & Planning',
      subtitle: 'Transform your outdoor space with expert design'
    },
    {
      image: `${publicUrl}/images/l1.jpg`,
      title: 'Professional Lawn Care',
      subtitle: 'Maintain a lush, healthy lawn year-round'
    },
    {
      image: `${publicUrl}/images/l4.jpg`,
      title: 'Hardscaping Solutions',
      subtitle: 'Patios, walkways, and retaining walls'
    }
  ];

  const maintenanceSlides = [
    {
      image: `${publicUrl}/images/hero.jpg`,
      title: 'Tree & Plant Care',
      subtitle: 'Expert pruning and plant health services'
    },
    {
      image: `${publicUrl}/images/5.jpg`,
      title: 'Irrigation Systems',
      subtitle: 'Efficient watering solutions for your landscape'
    },
    {
      image: `${publicUrl}/images/6.jpg`,
      title: 'Seasonal Maintenance',
      subtitle: 'Year-round care for your outdoor spaces'
    }
  ];

  return (
    <div className="App">
      <Preloader />
      <Header />
      <main>
        <HeroSection
          mainTitle={defaultHeroData.mainTitle}
          typedTexts={defaultHeroData.typedTexts}
          description={defaultHeroData.description}
          ctaText={defaultHeroData.ctaText}
          ctaLink={defaultHeroData.ctaLink}
          backgroundImage={defaultHeroData.backgroundImage}
          serviceBoxes={defaultHeroData.serviceBoxes}
        />
        
        <MediaComparator
          id="landscaping_services_comparator"
          title="Our Landscaping Services - Scroll to Explore"
          slides={landscapingSlides}
          direction="rtl"
          showComparatorLine={true}
          showOverlayAnimation={true}
        />

        <MediaComparator
          id="maintenance_services_comparator"
          title="Maintenance & Care Services"
          slides={maintenanceSlides}
          direction="ltr"
          showComparatorLine={true}
          showOverlayAnimation={true}
        />

        <IconLinksSection />
        <HorizontalCarousel title="Our Premium Services" />
        
        {/* 
          StudioSection Layout Customization Examples:
          
          The masonry grid uses 12 columns. You can position elements by passing props:
          
          Example 1 - Default Layout (current):
          <StudioSection />
          
          Example 2 - Custom positions:
          <StudioSection 
            contentPosition={{ gridColumn: "1 / 7", gridRow: "1 / 5" }}
            image1Position={{ gridColumn: "7 / 13", gridRow: "1 / 4" }}
            image2Position={{ gridColumn: "7 / 13", gridRow: "4 / 7" }}
          />
          
          Example 3 - Images on left, content on right:
          <StudioSection 
            contentPosition={{ gridColumn: "7 / 13", gridRow: "2 / 6" }}
            image1Position={{ gridColumn: "1 / 7", gridRow: "1 / 4" }}
            image2Position={{ gridColumn: "1 / 7", gridRow: "4 / 7" }}
          />
          
          Example 4 - Content centered, images on sides:
          <StudioSection 
            contentPosition={{ gridColumn: "5 / 9", gridRow: "2 / 6" }}
            image1Position={{ gridColumn: "1 / 5", gridRow: "1 / 7" }}
            image2Position={{ gridColumn: "9 / 13", gridRow: "1 / 7" }}
          />
          
          Grid Format: 
          - gridColumn: "start / end" (1-13, where 13 is the edge)
          - gridRow: "start / end" (each row is 100px tall on desktop)
          
          Larger numbers = bigger element
          Example: "1 / 7" spans 6 columns, "1 / 13" spans full width
        */}
        <StudioSection />
        
        <QualityHomes />
        <DreamHomeJourney />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
