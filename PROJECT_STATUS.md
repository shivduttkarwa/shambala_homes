# Landscaping Website - React Conversion

## Project Structure
```
landscaping-app/
├── public/
│   └── images/           (Copy all images from ../images/)
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── IconLinksSection.tsx
│   │   └── SliderModal.tsx
│   ├── data/
│   │   └── defaultData.ts    ✓ Created
│   ├── services/
│   │   └── strapi.ts         ✓ Created
│   ├── styles/
│   │   ├── global.css        ✓ Created
│   │   └── App.css           ✓ Created
│   ├── types/
│   │   └── index.ts          ✓ Created
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

## Setup Complete
✅ React app created with TypeScript
✅ GSAP, Typed.js, Axios installed
✅ Type definitions created for Strapi integration
✅ Strapi service file with API helpers
✅ Default data file (can be replaced with Strapi content)
✅ Complete CSS styles extracted and organized

## Next Steps to Complete

### 1. Copy Images
```bash
cp -r ../images ./public/
```

### 2. Create Components (In Progress)
- Header component with menu
- Hero section with GSAP animations
- Service boxes grid with Swiper modal
- Icon links section
- Services grid section

### 3. Wire Up App.tsx
- Import all components
- Add scroll restoration
- Initialize GSAP ScrollTrigger

### 4. Test Animations
- Verify typed text animation
- Check GSAP brick wall effect
- Test service box hover and modal
- Validate button particle effects

### 5. Strapi Integration (Ready)
The app is structured to easily connect to Strapi:
- Update `.env` with `REACT_APP_STRAPI_URL=http://localhost:1337`
- Use `fetchHeroContent()`, `fetchServices()` from services/strapi.ts
- Replace defaultData with Strapi responses

## Strapi Content Types Needed
```
Collection Types:
- hero (Single Type)
- services
- menu-items
- service-boxes
```

## Running the App
```bash
cd landscaping-app
npm start
```

## Build for Production
```bash
npm run build
```
