# Media Comparator Component

A sophisticated scroll-triggered horizontal slider component inspired by premium design patterns. Built with React, TypeScript, and GSAP ScrollTrigger.

## Features

✨ **Scroll-Based Animation**: Slides transition smoothly as user scrolls
🎯 **ScrollTrigger Integration**: Pinned section with horizontal scrubbing
🖼️ **Parallax Effects**: Multi-layer image movement for depth
📱 **Fully Responsive**: Adapts to all screen sizes
🎨 **Overlay Animations**: Text overlays fade and translate
📏 **Comparator Line**: Visual divider between active slides
↔️ **Bidirectional**: Support for RTL and LTR scrub directions
⚡ **Performance Optimized**: GPU-accelerated transforms

## How It Works

### Scroll Mechanism
1. **Pin Section**: Container gets pinned to viewport when it reaches center
2. **Scroll Distance**: End trigger is calculated based on total wrapper width
3. **Progress Tracking**: Scroll progress (0-1) controls slide transitions
4. **Translation**: Wrapper translates horizontally based on progress

### Parallax System
- **Slide Images**: Move at 50% speed (interleaveOffset = 0.5)
- **Text Overlays**: Move at 90% speed + fade effect (interleaveOverlayOffset = 0.9)
- **Creates depth**: Different speeds create parallax illusion

### Direction Control
- **RTL (Right-to-Left)**: Standard progress (0 → 1)
- **LTR (Left-to-Right)**: Reversed progress (1 → 0)

## Installation

```bash
npm install gsap
```

## Usage

### Basic Implementation

```tsx
import MediaComparator from './components/Home/MediaComparator';

const slides = [
  {
    image: '/images/1.jpg',
    title: 'Garden Design',
    subtitle: 'Transform your outdoor space'
  },
  {
    image: '/images/2.jpg',
    title: 'Lawn Care',
    subtitle: 'Professional maintenance services'
  },
  {
    image: '/images/3.jpg',
    title: 'Hardscaping',
    subtitle: 'Patios and walkways'
  }
];

<MediaComparator
  id="my_comparator"
  title="Scroll to Explore"
  slides={slides}
  direction="rtl"
  showComparatorLine={true}
  showOverlayAnimation={true}
/>
```

### Multiple Sections

```tsx
function App() {
  return (
    <>
      {/* Right-to-Left Scrub */}
      <MediaComparator
        id="section_1"
        title="Our Services - Scroll Down"
        slides={servicesSlides}
        direction="rtl"
        showComparatorLine={true}
        showOverlayAnimation={true}
      />

      {/* Left-to-Right Scrub */}
      <MediaComparator
        id="section_2"
        title="Our Portfolio"
        slides={portfolioSlides}
        direction="ltr"
        showComparatorLine={true}
        showOverlayAnimation={true}
      />
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | Required | Unique identifier for the component |
| `title` | `string` | `undefined` | Optional title shown above component |
| `slides` | `Slide[]` | Required | Array of slide objects |
| `direction` | `'rtl' \| 'ltr'` | `'rtl'` | Scrub direction (right-to-left or left-to-right) |
| `showComparatorLine` | `boolean` | `true` | Show vertical line between slides |
| `showOverlayAnimation` | `boolean` | `true` | Enable text overlay animations |

### Slide Object Structure

```typescript
interface Slide {
  image: string;      // Path to image
  title: string;      // Main heading
  subtitle: string;   // Subheading/description
}
```

## Technical Details

### GSAP ScrollTrigger Configuration

```javascript
scrollTrigger: {
  trigger: wrapper,           // Element to watch
  pin: container,             // Element to pin
  pinSpacing: true,          // Add space for pinned element
  scrub: 0.25,               // Smooth scrubbing with 0.25s delay
  anticipatePin: 1,          // Prevent jump when pinning
  start: 'center center',    // Start when center meets center
  end: '+={wrapperWidth}',   // End after scrolling wrapper width
}
```

### Animation Formula

```javascript
// Calculate current translate based on progress
const wrapperWidth = swiperWrapper.offsetWidth;
const maxTranslate = -(wrapperWidth * (numSlides - 1));
const currentTranslate = maxTranslate * progress;

// For each slide's parallax
const slideProgress = progress * (numSlides - 1) - index;
const innerTranslate = slideProgress * wrapperWidth * 0.5;
```

### Performance Optimizations

1. **GPU Acceleration**: Using `translate3d()` for transforms
2. **will-change**: Applied to animated elements
3. **Caching**: DOM elements cached on mount
4. **Clamping**: Progress values clamped to prevent overscroll
5. **RequestAnimationFrame**: Smooth 60fps animations via GSAP

## Responsive Behavior

### Desktop (> 1024px)
- 16:9 aspect ratio
- Full parallax effects
- Smooth overlay animations

### Tablet (769px - 1024px)
- 16:10 aspect ratio
- Slightly reduced text sizes
- Maintained parallax

### Mobile (< 768px)
- 4:3 aspect ratio
- 80vh container height
- Adjusted text sizes
- Maintained core animations

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Customization

### Changing Aspect Ratio

```css
.swiper-container {
  aspect-ratio: 21/9; /* Ultra-wide */
}

@media (max-width: 768px) {
  .swiper-container {
    aspect-ratio: 1/1; /* Square on mobile */
  }
}
```

### Adjusting Parallax Speed

```typescript
// In MediaComparator.tsx
const interleaveOffset = 0.75; // Increase for more parallax
const interleaveOverlayOffset = 0.5; // Adjust overlay speed
```

### Custom Colors

```css
:root {
  --color-dark: #your-color;
  --color-dark-brighten: #your-color;
  --line-color: #your-color;
}
```

### Animation Duration

```typescript
scrollTrigger: {
  scrub: 0.5,  // Increase for slower scrubbing
}
```

## Common Issues

### 1. Slides Not Moving
**Solution**: Ensure GSAP and ScrollTrigger are properly imported and registered.

### 2. Layout Jump When Pinning
**Solution**: Check that `pinSpacing: true` is set in ScrollTrigger config.

### 3. Images Not Loading
**Solution**: Verify image paths are correct and accessible from public directory.

### 4. Flickering on Scroll
**Solution**: Already handled with `transform: scale(1.001)` on hover devices.

## Example Data

```typescript
const exampleSlides = [
  {
    image: '/images/landscape-1.jpg',
    title: 'Professional Design',
    subtitle: 'Award-winning landscape architecture'
  },
  {
    image: '/images/landscape-2.jpg',
    title: 'Expert Installation',
    subtitle: 'Quality craftsmanship guaranteed'
  },
  {
    image: '/images/landscape-3.jpg',
    title: 'Ongoing Maintenance',
    subtitle: 'Keep your landscape pristine'
  }
];
```

## Credits

Inspired by premium web design patterns used by high-end brands. Implemented with modern React patterns and GSAP animation library.

## License

Part of the landscaping-app project.
