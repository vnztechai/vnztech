# Design Guidelines: Najaf SaaS/AI Landing Page

## Design Approach
**Reference-Based Approach**: Modern SaaS/AI landing page inspired by Framer's Najaf template - sleek, professional aesthetic with dark theme and strategic animations.

## Color Palette
- **Primary Background**: Warm Beige (#d2c6b8) - 60%
- **Accent/Interactive**: Warm Brown (#a1876e) - 10%
- **Secondary**: Muted Taupe (#b5a38d) - 20%
- **Dark Accent**: Deep charcoal (#0e0e10) - 10%
- **Text**: Dark text on light background, light text on dark

## Typography System
- **Font Family**: Inter (Google Fonts) for entire site
- **Headings**: Bold weight, large scale
  - H1: text-5xl md:text-7xl
  - H2: text-4xl md:text-5xl (centered, blue accent underline)
  - H3: text-2xl md:text-3xl
- **Body**: Regular weight, line-height 1.6, opacity-80 for descriptions
- **Maximum Content Width**: 1200px (mx-auto px-4)

## Layout System
**Spacing Units**: Consistent vertical rhythm with py-20 for major sections, p-6 to p-8 for card interiors

**Grid Patterns**:
- Features/Team: 3-column desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Pricing: 3-card horizontal layout, stack on mobile
- Benefits: Alternating 2-column (image-text switching sides)
- Testimonials: 3-column grid or carousel
- FAQ: Single column accordion

## Component Library

### Navigation Header
- Fixed top position with backdrop blur
- Logo (text-based "Najaf"), horizontal menu items, CTA button
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- Full viewport height (min-h-screen, pt-20 for header clearance)
- **Background**: Gradient overlay (from #0f0f23 to #1e3a8a) with abstract AI neural network pattern/image
- **Layout**: Two-column (text left, product mockup/dashboard image right on desktop)
- **Hero Image**: Large, responsive product dashboard mockup with object-cover
- **CTAs**: Dual buttons - primary blue solid, secondary outlined gray
- **Content**: Large headline, subheadline (opacity-80), 3-4 benefit bullet points

### Section Cards
- Dark background (bg-gray-800), rounded-xl, p-6, subtle shadow
- Features: Icon top, title, description, hover lift effect
- Team: Circular avatar, name, role, bio, LinkedIn link
- Testimonials: Quote (italic), star rating, author name/role, avatar
- Pricing: Tier name large, price prominent, checkmarked feature list, CTA button

### Interactive Elements
- Pricing Toggle: Monthly/annual switcher with visual state
- FAQ Accordion: Expandable panels with smooth height transitions
- Form: Email signup in hero (if applicable) - single input + button

## Images Strategy
- **Hero**: Large hero image required - product dashboard mockup or AI visualization (right side desktop, full-width mobile)
- **Client Logos**: 6-8 grayscale logos with hover color transition
- **Benefits Section**: Illustrative screenshots/icons for each benefit block
- **Team Members**: Circular avatar photos (4 members)
- **Testimonials**: Small circular avatars for each testimonial

All images use placeholder URLs, object-cover for consistency.

## Animation Principles
- **Hero**: Fade-in on load, image scale-up from bottom
- **Scroll Reveals**: Staggered slide-up (y:50→0) with opacity fade for features
- **Hover States**: Subtle scale (1.05) on cards, opacity changes on logos
- **Accordion**: Smooth height transitions for FAQ expansion
- **Navigation**: Smooth scroll to anchored sections
- Minimal, purposeful - enhance without distraction

## Responsive Behavior
- **Mobile-First**: Stack all grids to single column
- **Breakpoints**: md (768px) for 2-col, lg (1024px) for 3-col
- **Hero**: Column stack on mobile (text top, image bottom)
- **Benefits**: Alternating layout collapses to vertical
- **Navigation**: Hamburger menu below md breakpoint

## Section-Specific Requirements

1. **Clients Section**: py-20, bg-gray-800, centered heading, logo grid with grayscale filter
2. **Features**: 3 cards with React Icons (AI-related), centered heading with blue underline
3. **Benefits**: 3-4 alternating blocks, left-right image-text pattern
4. **Team**: 4-member grid, hover lift on cards
5. **Testimonials**: Quote cards with 5-star ratings, bg-gray-800 section
6. **Pricing**: 3 tiers (Free/Pro/Enterprise), Pro highlighted with blue border + "Most Popular" badge
7. **FAQ**: 4-5 questions, bordered items with expansion

## Footer
- Simple layout: Copyright center/left, social icons (LinkedIn, Twitter, GitHub) right, quick links above
- Dark background consistent with theme

## Accessibility
- ARIA labels on interactive elements
- Keyboard navigation for accordions and menus
- Sufficient color contrast on all text