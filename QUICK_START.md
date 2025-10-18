# 🚀 Quick Start - Media Comparator

## ✅ Installation Complete!

Your Media Comparator component is ready to use. Here's what's been set up:

### 📦 Installed Packages
- ✅ GSAP 3.13.0 (Animation library)
- ✅ ScrollTrigger (Scroll-based animations)

### 📁 Files Created
```
src/components/Home/
├── MediaComparator.tsx     (Main component - 200 lines)
├── MediaComparator.css     (Styles - 250 lines)
└── MEDIA_COMPARATOR_README.md  (Documentation)

Root directory/
├── MEDIA_COMPARATOR_SUMMARY.md  (Implementation summary)
└── MEDIA_COMPARATOR_VISUAL.md   (Visual guide)
```

### 🔗 Integration Complete
- ✅ Exported from `components/Home/index.ts`
- ✅ Imported in `App.tsx`
- ✅ Two sections added (RTL & LTR)
- ✅ Using local images from `/public/images/`

## 🎯 Current Setup

### Section 1: Landscaping Services (RTL)
```tsx
Location: After HeroSection
Direction: Right-to-Left
Slides: 3 (Garden Design, Lawn Care, Hardscaping)
Images: /images/1.jpg, 2.jpg, 3.jpg
```

### Section 2: Maintenance Services (LTR)
```tsx
Location: After Section 1
Direction: Left-to-Right
Slides: 3 (Tree Care, Irrigation, Seasonal)
Images: /images/4.jpg, 5.jpg, 6.jpg
```

## 🏃 How to Run

### 1. Start Development Server
```bash
npm start
```

### 2. View in Browser
```
http://localhost:3000
```

### 3. Test the Feature
1. Scroll down past the hero section
2. You'll see "Our Landscaping Services - Scroll to Explore"
3. Continue scrolling - slides will move horizontally
4. Keep scrolling to see the maintenance section

## 🎨 Customize Your Slides

### Edit in App.tsx

Find this section (around line 17):
```tsx
const landscapingSlides = [
  {
    image: '/images/1.jpg',           // Change image
    title: 'Your Title',              // Change title
    subtitle: 'Your description'      // Change subtitle
  },
  // Add more slides...
];
```

### Add More Slides
```tsx
const mySlides = [
  { image: '/images/1.jpg', title: 'Slide 1', subtitle: 'Description 1' },
  { image: '/images/2.jpg', title: 'Slide 2', subtitle: 'Description 2' },
  { image: '/images/3.jpg', title: 'Slide 3', subtitle: 'Description 3' },
  { image: '/images/4.jpg', title: 'Slide 4', subtitle: 'Description 4' },
  // As many as you want!
];
```

### Create New Section
```tsx
<MediaComparator
  id="my_unique_id"
  title="My Custom Section"
  slides={mySlides}
  direction="rtl"
  showComparatorLine={true}
  showOverlayAnimation={true}
/>
```

## 🎛️ Configuration Options

### Direction
```tsx
direction="rtl"  // Right-to-Left (standard)
direction="ltr"  // Left-to-Right (reversed)
```

### Visual Features
```tsx
showComparatorLine={true}      // Show line between slides
showComparatorLine={false}     // Hide line

showOverlayAnimation={true}    // Animate text overlays
showOverlayAnimation={false}   // Static text
```

## 🎨 Style Customization

### Change Colors
Edit `MediaComparator.css`:
```css
:root {
  --color-dark: #your-color;          /* Text color */
  --color-dark-brighten: #your-color; /* Subtitle color */
  --line-color: #your-color;          /* Comparator line */
}
```

### Adjust Animation Speed
Edit `MediaComparator.tsx` (line ~95):
```tsx
scrollTrigger: {
  scrub: 0.25,  // Lower = faster, Higher = slower
}
```

### Change Aspect Ratio
Edit `MediaComparator.css`:
```css
.swiper-container {
  aspect-ratio: 16/9;  /* Change to 21/9, 4/3, etc. */
}
```

## 🐛 Troubleshooting

### Slides Not Moving?
1. Check browser console for errors
2. Verify GSAP is imported: `import { gsap } from 'gsap';`
3. Ensure ScrollTrigger is registered

### Images Not Showing?
1. Check image paths start with `/images/`
2. Verify files exist in `public/images/` folder
3. Check browser Network tab for 404 errors

### Layout Jumping?
1. This is usually fixed automatically
2. Check that `pinSpacing: true` is set
3. Try refreshing the page

### Smooth Scrolling Not Working?
- This is normal on touch devices
- Smooth scrolling is desktop-only
- Mobile uses native scroll

## 📊 Expected Behavior

### Desktop
- ✅ Section pins at center
- ✅ Horizontal sliding on scroll
- ✅ Smooth parallax effects
- ✅ Comparator line visible
- ✅ Text overlays animate

### Mobile
- ✅ Smaller container (80vh)
- ✅ 4:3 aspect ratio
- ✅ Touch-friendly
- ✅ All animations work
- ✅ Responsive text sizes

## 📈 Performance

### Good Performance Indicators
- 60 FPS during scroll
- No lag or jank
- Smooth transitions
- Instant image loading

### If Performance Issues
1. Reduce number of slides
2. Optimize images (compress, resize)
3. Check browser DevTools Performance tab

## 🎯 Next Steps

### 1. Test It
- Run the app and scroll to see it in action
- Try on different devices
- Test in different browsers

### 2. Customize Content
- Update slide titles and subtitles
- Use your own images
- Adjust colors and spacing

### 3. Add More Sections
- Create additional MediaComparator instances
- Try different directions (RTL/LTR)
- Experiment with different content

### 4. Fine-Tune
- Adjust animation speeds
- Modify parallax intensity
- Customize styling

## 📚 Documentation

- **Full Guide**: `MEDIA_COMPARATOR_README.md`
- **Visual Overview**: `MEDIA_COMPARATOR_VISUAL.md`
- **Summary**: `MEDIA_COMPARATOR_SUMMARY.md`

## 💡 Pro Tips

1. **Use High-Quality Images**: 1920x1080 or larger
2. **Optimize for Web**: Compress images to < 500KB
3. **Consistent Aspect**: All images same dimensions
4. **Readable Text**: Ensure good contrast with images
5. **Test Scroll**: Scroll slowly and quickly to test

## ✨ Features Summary

✅ Scroll-triggered horizontal slider  
✅ GSAP ScrollTrigger integration  
✅ Multi-layer parallax effects  
✅ Bidirectional scrubbing (RTL/LTR)  
✅ Visual comparator line  
✅ Animated text overlays  
✅ Fully responsive  
✅ Performance optimized  
✅ Touch-friendly  
✅ Accessible  

---

**You're all set!** 🎉

Run `npm start` and scroll down to see your new Media Comparator in action!
