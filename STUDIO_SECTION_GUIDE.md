# StudioSection Layout Customization Guide

## Overview
The `StudioSection` component uses a **12-column CSS Grid** masonry layout. You can control the position and size of all 3 elements (content box + 2 images) by passing props.

## Grid System
- **12 columns** (numbered 1-13, where column 13 is the right edge)
- **100px row height** on desktop (auto-adjusts on mobile)
- **20px gap** between elements

## Props

### Position Props
Each element accepts a `GridPosition` object:

```typescript
{
  gridColumn: string;  // e.g., "1 / 7" (start / end)
  gridRow: string;     // e.g., "2 / 5" (start / end)
}
```

### Available Props
- `contentPosition` - Controls the text content box placement
- `image1Position` - Controls first image placement
- `image2Position` - Controls second image placement

---

## Layout Examples

### Example 1: Default Layout (Current)
```tsx
<StudioSection />
```
- Content: Left middle
- Image 1: Top right (tall)
- Image 2: Bottom spanning left

---

### Example 2: Stacked Vertical Layout
```tsx
<StudioSection 
  contentPosition={{ gridColumn: "1 / 13", gridRow: "1 / 3" }}
  image1Position={{ gridColumn: "1 / 7", gridRow: "3 / 7" }}
  image2Position={{ gridColumn: "7 / 13", gridRow: "3 / 7" }}
/>
```
- Content: Full width at top
- Images: Side by side below

---

### Example 3: Images Left, Content Right
```tsx
<StudioSection 
  contentPosition={{ gridColumn: "7 / 13", gridRow: "2 / 6" }}
  image1Position={{ gridColumn: "1 / 7", gridRow: "1 / 4" }}
  image2Position={{ gridColumn: "1 / 7", gridRow: "4 / 7" }}
/>
```
- Images: Stacked on left
- Content: Right side

---

### Example 4: Content Centered, Images Flanking
```tsx
<StudioSection 
  contentPosition={{ gridColumn: "5 / 9", gridRow: "2 / 6" }}
  image1Position={{ gridColumn: "1 / 5", gridRow: "1 / 7" }}
  image2Position={{ gridColumn: "9 / 13", gridRow: "1 / 7" }}
/>
```
- Content: Centered
- Images: One on each side (tall)

---

### Example 5: Asymmetric Artistic Layout
```tsx
<StudioSection 
  contentPosition={{ gridColumn: "2 / 7", gridRow: "3 / 7" }}
  image1Position={{ gridColumn: "7 / 11", gridRow: "1 / 5" }}
  image2Position={{ gridColumn: "3 / 9", gridRow: "1 / 3" }}
/>
```
- Overlapping, magazine-style layout

---

### Example 6: Large Image Showcase
```tsx
<StudioSection 
  contentPosition={{ gridColumn: "1 / 5", gridRow: "1 / 5" }}
  image1Position={{ gridColumn: "5 / 13", gridRow: "1 / 9" }}
  image2Position={{ gridColumn: "1 / 5", gridRow: "5 / 8" }}
/>
```
- Image 1: Massive hero image
- Content: Small box top left
- Image 2: Small box below content

---

## Tips for Custom Layouts

### Column Sizing
- **Small element**: 3-4 columns (e.g., "1 / 5")
- **Medium element**: 5-7 columns (e.g., "1 / 8")
- **Large element**: 8+ columns (e.g., "1 / 10")
- **Full width**: All 12 columns (e.g., "1 / 13")

### Row Sizing
- **Short element**: 2-3 rows (200-300px)
- **Medium element**: 4-5 rows (400-500px)
- **Tall element**: 6+ rows (600px+)

### Creating Overlaps
Elements can overlap by using overlapping grid areas:
```tsx
contentPosition={{ gridColumn: "1 / 7", gridRow: "2 / 6" }}
image1Position={{ gridColumn: "5 / 13", gridRow: "1 / 5" }}
// Content and Image 1 will overlap in columns 5-7, rows 2-5
```

### Z-Index
Elements render in order (content, image1, image2), so later elements naturally appear on top.

---

## Responsive Behavior

The layout automatically adjusts on smaller screens:
- **< 1024px**: Switches to 6-column grid
- **< 768px**: Stacks vertically (1 column)

You can override responsive behavior by passing different props based on screen size using media queries or state.

---

## Quick Reference: Common Patterns

| Pattern | Description |
|---------|-------------|
| `"1 / 13"` | Full width |
| `"1 / 7"` | Left half |
| `"7 / 13"` | Right half |
| `"1 / 5"` | Left third |
| `"5 / 9"` | Center third |
| `"9 / 13"` | Right third |
| `"1 / 4"` | Left quarter |
| `"4 / 7"` | Left-center |
| `"7 / 10"` | Right-center |
| `"10 / 13"` | Right quarter |

---

## Testing Your Layout

1. Open `src/App.tsx`
2. Find the `<StudioSection />` component
3. Add your custom props
4. Save and view in browser
5. Adjust numbers until you're happy!

---

## Need Help?

- Grid starts at column/row **1** (not 0)
- End numbers are **exclusive** (so "1 / 7" spans columns 1,2,3,4,5,6)
- Larger numbers = bigger elements
- Elements can overlap for creative layouts
- Use browser DevTools to visualize the grid
