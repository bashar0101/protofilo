# Java Developer Portfolio Website Specification

## 1. Project Overview

**Project Name:** Java Developer Portfolio  
**Project Type:** Single-page personal portfolio website  
**Core Functionality:** A professional portfolio showcasing Java developer's skills, projects, experience, and contact information with a distinctive dark theme inspired by IDE aesthetics  
**Target Users:** Recruiters, hiring managers, and potential clients seeking Java developers

---

## 2. UI/UX Specification

### Layout Structure

**Sections (in order):**

1. **Navigation Bar** - Fixed top, minimal with smooth scroll links
2. **Hero Section** - Full viewport height, name, title, and CTA
3. **About Section** - Brief bio and profile image area
4. **Skills Section** - Technical skills with visual indicators
5. **Projects Section** - Featured projects with cards
6. **Experience Section** - Work history timeline
7. **Contact Section** - Contact form and social links
8. **Footer** - Copyright and quick links

**Responsive Breakpoints:**

- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (two columns where applicable)
- Desktop: > 1024px (full layout with max-width 1200px)

### Visual Design

**Color Palette (IDE-inspired dark theme - Dracula influenced):**

- Background Primary: `#0d1117` (deep dark)
- Background Secondary: `#161b22` (card backgrounds)
- Background Tertiary: `#21262d` (elevated elements)
- Accent Primary: `#58a6ff` (links, highlights - blue)
- Accent Secondary: `#7ee787` (success, code - green)
- Accent Tertiary: `#ffa657` (warnings, highlights - orange)
- Accent Quaternary: `#f778ba` (special elements - pink)
- Text Primary: `#e6edf3` (main text)
- Text Secondary: `#8b949e` (muted text)
- Text Tertiary: `#6e7681` (subtle text)
- Border: `#30363d`

**Typography:**

- Headings: `'JetBrains Mono', monospace` - weights 700, 600
- Body: `'Source Sans 3', sans-serif` - weights 400, 600
- Code/Tags: `'Fira Code', monospace` - weight 400

**Font Sizes:**

- Hero Name: 4rem (64px)
- Section Titles: 2.5rem (40px)
- Subsection Titles: 1.5rem (24px)
- Body: 1rem (16px)
- Small/Tags: 0.875rem (14px)

**Spacing System:**

- Section Padding: 100px vertical, 20px horizontal
- Card Padding: 24px
- Element Gap: 16px
- Border Radius: 8px (cards), 4px (buttons/tags)

**Visual Effects:**

- Cards: subtle box-shadow `0 4px 24px rgba(0, 0, 0, 0.4)`
- Hover states: translateY(-4px) with 0.3s ease
- Gradient accents: linear-gradient(135deg, #58a6ff 0%, #7ee787 100%)
- Code syntax highlighting colors for skill tags

### Components

**Navigation:**

- Logo/Name on left
- Links: About, Skills, Projects, Experience, Contact
- Mobile: hamburger menu with slide-in drawer
- State: transparent background, becomes solid on scroll

**Hero Section:**

- Large name with gradient text effect
- Subtitle: "Java Backend Developer | Spring Expert"
- Two CTAs: "View Projects" (primary), "Contact Me" (outline)
- Animated code snippet decoration on right side
- Scroll indicator at bottom

**Skill Cards:**

- Categories: Languages, Frameworks, Tools, Databases
- Each skill as a tag with icon
- Hover: glow effect matching skill category color
- Categories use distinct accent colors

**Project Cards:**

- Thumbnail area (placeholder with gradient)
- Project title
- Tech stack tags
- Brief description
- Links: GitHub, Live Demo
- Hover: scale(1.02) with shadow increase

**Experience Timeline:**

- Vertical line with circular nodes
- Company name, role, duration
- Description bullets
- Alternating left/right on desktop, stacked on mobile

**Contact Form:**

- Fields: Name, Email, Message
- Submit button with loading state
- Social links: GitHub, LinkedIn, Email

---

## 3. Functionality Specification

### Core Features

1. **Smooth Scrolling Navigation**
   - Click nav links to smooth scroll to sections
   - Active section highlighting in nav

2. **Mobile Menu**
   - Hamburger toggle
   - Slide-in from right
   - Close on link click or outside click

3. **Scroll Animations**
   - Elements fade in and slide up on scroll into view
   - Staggered animation for skill tags and project cards

4. **Contact Form**
   - Client-side validation
   - Visual feedback on submit (simulated)

5. **Skills Interaction**
   - Hover reveals skill level/proficiency
   - Click filters projects by skill (optional enhancement)

### User Interactions

- Nav links → smooth scroll to section
- Mobile hamburger → toggle mobile menu
- Project cards → hover animation, click → external links
- Skill tags → hover glow effect
- Contact form → validation feedback, submit animation

### Edge Cases

- Navigation works with JavaScript disabled (anchor links)
- Form shows error states for invalid input
- Mobile menu closes on orientation change
- Images have alt text for accessibility

---

## 4. Acceptance Criteria

### Visual Checkpoints

- [ ] Dark theme applied consistently across all sections
- [ ] Hero section displays name with gradient effect
- [ ] At least 4 project cards displayed
- [ ] Skills organized in category groups
- [ ] Experience timeline shows at least 2 entries
- [ ] Contact form has all required fields
- [ ] Responsive layout works on mobile/tablet/desktop

### Functional Checkpoints

- [ ] Navigation links scroll to correct sections
- [ ] Mobile menu opens and closes properly
- [ ] Scroll animations trigger on viewport entry
- [ ] Project links open in new tabs
- [ ] Contact form validates required fields
- [ ] All external fonts load correctly

### Technical Checkpoints

- [ ] No console errors
- [ ] All images have alt text
- [ ] Proper semantic HTML structure
- [ ] CSS variables used for theming
- [ ] Smooth 60fps animations
