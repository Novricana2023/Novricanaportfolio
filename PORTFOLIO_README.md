# Novricana Viola Lungu - AI Developer & Software Engineer Portfolio

## Overview

A premium, modern personal portfolio website showcasing Novricana Viola Lungu as an AI Developer, Software Engineer, Tech Innovator, and Founder. The portfolio communicates technical excellence, leadership, innovation, research potential, community impact, digital inclusion, and technology for social good.

## Design Philosophy

**Minimalist Sophistication with Technological Elegance** — The design emphasizes clarity, authenticity, and human connection through:

- **Clean Aesthetic**: Predominantly white background with carefully chosen accent colors
- **Premium Typography**: Sora (display) + Inter (body) for modern, professional communication
- **Strategic Colors**: Deep teal/slate primary, warm orange accents, soft blue highlights
- **Smooth Animations**: Subtle entrance animations, hover effects, and transitions
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop

## Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Components**: shadcn/ui component library
- **Routing**: Wouter (lightweight client-side routing)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Fonts**: Google Fonts (Sora, Inter)

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   └── portfolio/
│   │       ├── Navigation.tsx      # Fixed top navigation bar
│   │       ├── Hero.tsx            # Hero section with profile image
│   │       ├── AreasOfFocus.tsx    # 8 key focus areas
│   │       ├── About.tsx           # Professional biography
│   │       ├── Projects.tsx        # Featured projects showcase
│   │       ├── HealingTech.tsx     # HealingTech Initiative details
│   │       ├── ResearchInnovation.tsx # Research & thought leadership
│   │       ├── Writing.tsx         # Tech writing & Medium integration
│   │       ├── Recognition.tsx     # Achievements & recognitions
│   │       ├── Contact.tsx         # Contact information
│   │       └── Footer.tsx          # Footer with social links
│   ├── pages/
│   │   ├── Home.tsx               # Main portfolio page
│   │   └── NotFound.tsx           # 404 page
│   ├── App.tsx                    # Main app component with routing
│   ├── index.css                  # Global styles & design tokens
│   └── main.tsx                   # React entry point
├── public/
│   └── [favicon & config files]
└── index.html                     # HTML template

server/                            # Static deployment server
shared/                            # Shared types
```

## Key Features

### 1. **Navigation**
- Fixed top navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active state tracking
- Smooth anchor link navigation

### 2. **Hero Section**
- Asymmetric layout with profile image
- Compelling headline and subheadline
- Professional statement
- Multiple CTAs (View Projects, Explore Leadership, Contact)

### 3. **Areas of Focus**
- 8 key focus areas with icons
- Smooth entrance animations
- Hover effects with gradient backgrounds
- Responsive grid layout

### 4. **About Section**
- Professional biography
- Technical and impact focus areas
- Core philosophy statement
- Role positioning (6 key roles)

### 5. **Projects Showcase**
- Featured project (Umoyo AI) with prominent styling
- 6 additional project cards
- Project descriptions, impact statements, and tags
- External links to live projects
- Note about AI applications entering sleep mode

### 6. **HealingTech Initiative**
- Initiative overview and mission
- Clear Sight Project (optical support for children with albinism)
- Children & Youth Empowerment programs
- Digital Training & Workshops
- Image galleries showcasing community impact

### 7. **Research & Innovation**
- Thought leadership positioning
- Research interests and emerging technologies
- Future vision statement
- AI governance and responsible innovation focus

### 8. **Writing & Publications**
- Tech writing positioning
- Topics covered (6 areas)
- Medium profile integration
- Writing philosophy statement

### 9. **Recognition**
- 8 achievement cards
- Prestigious recognitions (Mastercard Scholar, Millennium Fellow, etc.)
- Professional credentials summary

### 10. **Contact Section**
- 4 contact methods (Email, LinkedIn, GitHub, Medium)
- Professional contact cards
- Call-to-action for collaboration
- Email contact button

### 11. **Footer**
- Brand information
- Quick navigation links
- Social media links
- Copyright notice

## Design Tokens

### Colors
- **Primary**: Deep teal/slate (`oklch(0.25 0.05 260)`)
- **Accent**: Warm orange (`oklch(0.6 0.2 30)`)
- **Background**: Pure white (`oklch(1 0 0)`)
- **Foreground**: Deep slate (`oklch(0.2 0.03 260)`)
- **Secondary**: Soft light backgrounds (`oklch(0.95 0.002 260)`)

### Typography
- **Display Font**: Sora (bold, geometric, tech-forward)
- **Body Font**: Inter (clean, highly readable)
- **H1**: 48px (desktop), 32px (mobile) | Bold
- **H2**: 36px (desktop), 24px (mobile) | Bold
- **Body**: 16px (desktop), 14px (mobile) | Regular

### Spacing
- Container: 1rem (mobile), 1.5rem (tablet), 2rem (desktop)
- Section padding: 20px (mobile), 32px (desktop)
- Gap sizes: Consistent 4px, 6px, 8px, 12px, 16px, 24px

## Local Development

### Prerequisites
- Node.js 22.13.0+
- pnpm 10.4.1+

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# The site will be available at http://localhost:3000
```

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build
pnpm preview
```

## Asset Management

All images are stored in cloud storage (`/manus-storage/`) and referenced via URLs:

- **Profile Image**: `/manus-storage/Profile.jpg_69f1eb4c.jpg`
- **HealingTech Images**: Clear Sight Project, Children & Youth, Digital Training
- **Research Image**: `/manus-storage/Researchandinnovation_ae8a076e.jpeg`

See `ASSETS.md` for complete asset mapping.

## Deployment

### Deploy to Vercel

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Vercel will automatically detect the build configuration
4. Deploy with one click

```bash
# Or deploy via Vercel CLI
vercel
```

### Deploy to Netlify

1. Push code to GitHub repository
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
4. Deploy

### Environment Variables

No environment variables are required for this static portfolio.

## Customization Guide

### Updating Content

1. **Hero Section**: Edit `client/src/components/portfolio/Hero.tsx`
2. **About Section**: Edit `client/src/components/portfolio/About.tsx`
3. **Projects**: Edit `client/src/components/portfolio/Projects.tsx`
4. **Contact Information**: Edit `client/src/components/portfolio/Contact.tsx`

### Updating Colors

Edit design tokens in `client/src/index.css`:

```css
:root {
  --primary: oklch(0.25 0.05 260);      /* Primary color */
  --accent: oklch(0.6 0.2 30);          /* Accent color */
  --background: oklch(1 0 0);           /* Background */
  --foreground: oklch(0.2 0.03 260);    /* Text color */
}
```

### Updating Typography

Modify font imports and sizes in `client/src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

h1 {
  @apply font-display text-4xl md:text-5xl font-bold;
}
```

## Performance Optimizations

- **Image Optimization**: All images use cloud storage with CDN delivery
- **Code Splitting**: Automatic with Vite
- **CSS Optimization**: Tailwind purges unused styles
- **Lazy Loading**: Components load on scroll with entrance animations
- **Responsive Images**: Mobile-first responsive design

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus States**: Visible focus rings on interactive elements
- **Alt Text**: Descriptive alt text on all images

## SEO

- **Meta Tags**: Proper title and description
- **Semantic HTML**: Structured content with proper headings
- **Mobile Responsive**: Mobile-first responsive design
- **Performance**: Fast load times with optimized assets
- **Open Graph**: Social media sharing support ready

## Maintenance

### Regular Updates

1. **Content Updates**: Update project descriptions, links, and achievements
2. **Image Updates**: Replace images in cloud storage
3. **Link Checks**: Verify all external links are working
4. **Mobile Testing**: Test on various devices and screen sizes

### Monitoring

- Check analytics for traffic patterns
- Monitor for broken links
- Test contact form functionality
- Verify all project links are accessible

## Troubleshooting

### Dev Server Issues

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Build Errors

```bash
# Check TypeScript errors
pnpm check

# Format code
pnpm format
```

### Image Loading Issues

- Verify image URLs are correct in `ASSETS.md`
- Check that images are uploaded to cloud storage
- Ensure URLs are accessible from your network

## Future Enhancements

- Blog section for technical articles
- Project filtering by technology
- Dark mode toggle
- Newsletter signup
- Analytics integration
- Contact form backend integration

## License

Personal portfolio - All rights reserved © 2026 Novricana Viola Lungu

## Support

For questions or issues, contact: nlungu@usiu.ac.ke

---

**Built with ❤️ for impact** | Designed for excellence, built for purpose
