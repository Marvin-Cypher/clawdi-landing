# Clawdi.ai — UI Design System & Art Direction

## Design Philosophy: Accessible Power

Clawdi bridges the gap between OpenClaw's raw, developer-focused power and the polished simplicity of modern SaaS. The visual language should feel **premium, trustworthy, and effortlessly simple**—communicating that we've tamed the complexity so users don't have to.

**Visual Inspiration:**
- **OpenClaw's aesthetic:** Dark, terminal-inspired, technical
- **Clawi.ai's polish:** Clean mockups, organized dashboards
- **Aight's confidence:** Bold typography, clear hierarchy
- **Modern dev tools:** Linear, Vercel, Raycast—dark, focused, professional

---

## Color System

### Dark Theme Foundation

A dark theme is essential for resonating with the power-user audience while reducing eye strain and making key elements pop.

| Color Role | Hex Code | Usage |
|------------|----------|-------|
| **Primary Background** | `#0D1117` | Main page background (GitHub-inspired dark) |
| **Secondary Background** | `#161B22` | Cards, panels, feature sections |
| **Tertiary Background** | `#21262D` | Hover states, elevated elements |
| **Primary Text** | `#F0F6FC` | Headlines, important copy |
| **Secondary Text** | `#C9D1D9` | Body text, descriptions |
| **Muted Text** | `#8B949E` | Supporting text, captions |
| **Border Color** | `#30363D` | Dividers, card borders |

### Accent Colors

| Color Role | Hex Code | Usage |
|------------|----------|-------|
| **Clawdi Blue (Primary)** | `#388BFF` | Headlines, links, icons, brand elements |
| **Electric Blue (Bright)** | `#58A6FF` | Hover states, active elements |
| **CTA Orange** | `#FF6B35` | Primary action buttons, urgent CTAs |
| **Success Green** | `#3FB950` | Confirmations, success states |
| **Warning Amber** | `#D29922` | Alerts, important notices |

### Usage Guidelines

**Background Gradient (Hero Section):**
```css
background: linear-gradient(135deg, #0D1117 0%, #1C2128 100%);
```

**Subtle Noise Texture:** Add a very faint noise overlay (opacity: 0.02) to prevent flat backgrounds from feeling lifeless.

**Glow Effects:** Use sparingly for emphasis. Example: Blue glow on the OpenClaw logo or key statistics.
```css
box-shadow: 0 0 40px rgba(56, 139, 255, 0.3);
```

---

## Typography System

### Font Stack

**Primary Font:** [Inter](https://fonts.google.com/specimen/Inter)
- Modern, highly readable, excellent at all sizes
- Use for headlines, body text, UI elements

**Monospace Font:** [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- Use for code snippets, technical terms, "OpenClaw" mentions
- Honors the product's technical roots

### Type Scale

| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---------|------|--------|------|-------------|----------------|
| **H1 (Hero)** | Inter | 800 (Extra Bold) | 56px | 1.1 | -0.02em |
| **H2 (Section)** | Inter | 700 (Bold) | 40px | 1.2 | -0.01em |
| **H3 (Subsection)** | Inter | 600 (Semi Bold) | 28px | 1.3 | 0 |
| **Body Large** | Inter | 400 (Regular) | 20px | 1.6 | 0 |
| **Body** | Inter | 400 (Regular) | 16px | 1.6 | 0 |
| **Caption** | Inter | 400 (Regular) | 14px | 1.5 | 0 |
| **Code/Technical** | JetBrains Mono | 500 (Medium) | 16px | 1.4 | 0 |

### Typography Examples

**Hero Headline:**
```
Font: Inter Extra Bold 56px
Color: #F0F6FC
The World's Most Powerful AI Assistant is Here. 99% Can't Use It.
```

**Section Headline:**
```
Font: Inter Bold 40px
Color: #388BFF (Clawdi Blue)
The Problem: The OpenClaw Barrier
```

**Body Text:**
```
Font: Inter Regular 18px
Color: #C9D1D9
Line Height: 1.6
OpenClaw isn't just another chatbot. It's a fully autonomous AI assistant...
```

**Technical Terms:**
```
Font: JetBrains Mono Medium 16px
Color: #58A6FF
Background: #161B22
Padding: 4px 8px
Border Radius: 4px
Example: OpenClaw, API keys, OAuth
```

---

## Layout & Spacing

### Grid System
- **Max Content Width:** 1200px (centered)
- **Section Padding:** 120px vertical, 80px horizontal (desktop)
- **Mobile Padding:** 80px vertical, 24px horizontal

### Spacing Scale
Use a consistent 8px base unit:
- **xs:** 8px
- **sm:** 16px
- **md:** 24px
- **lg:** 32px
- **xl:** 48px
- **2xl:** 64px
- **3xl:** 96px

---

## UI Components

### Buttons

**Primary CTA (Orange):**
```css
background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
color: #FFFFFF;
font: Inter Bold 16px;
padding: 16px 32px;
border-radius: 8px;
box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
transition: all 0.2s ease;

/* Hover */
transform: translateY(-2px);
box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
```

**Secondary CTA (Blue Outline):**
```css
background: transparent;
border: 2px solid #388BFF;
color: #388BFF;
font: Inter Semi Bold 16px;
padding: 14px 30px;
border-radius: 8px;
transition: all 0.2s ease;

/* Hover */
background: rgba(56, 139, 255, 0.1);
border-color: #58A6FF;
color: #58A6FF;
```

### Cards & Panels

**Feature Card:**
```css
background: #161B22;
border: 1px solid #30363D;
border-radius: 12px;
padding: 32px;
transition: all 0.3s ease;

/* Hover */
border-color: #388BFF;
box-shadow: 0 8px 24px rgba(56, 139, 255, 0.15);
transform: translateY(-4px);
```

### Icons

**Icon Style:** Use [Lucide Icons](https://lucide.dev/) or [Heroicons](https://heroicons.com/)
- Line-based, 2px stroke width
- Size: 24px standard, 32px for feature highlights
- Color: `#388BFF` for primary, `#8B949E` for secondary

---

## Section-Specific Design

### Hero Section

**Layout:**
- Full viewport height (100vh)
- Centered content with generous padding
- Background: Dark gradient with subtle animated particles or grid

**Visual Elements:**
- **Animated Background:** Subtle, slow-moving particles or a grid that suggests data/connectivity
- **OpenClaw Logo:** Display the iconic lobster in glowing blue (`#388BFF`) with a subtle pulsing animation
- **Statistics Banner:** Show "179K+ GitHub Stars" in a small, elegant badge

**Example Layout:**
```
[Animated Dark Background]
  
  [Small Badge: "Powered by OpenClaw • 179K+ GitHub Stars"]
  
  [H1: The World's Most Powerful AI Assistant...]
  [Sub-headline in lighter text]
  
  [Primary CTA Button] [Secondary CTA Button]
  
  [Social Proof Quote in italics]
```

### Problem Section

**Visual Treatment:**
- Dark panel (`#161B22`) with subtle border
- Each pain point gets an icon (red/orange warning icons)
- Final sentence highlighted in italic with accent color

**Diagram Idea:** Show a flowchart of the typical OpenClaw setup process with X marks and frustrated emoji, contrasted with Clawdi's simple 3-step flow.

### Solution Section (Three Pillars)

**Layout:** 3-column grid on desktop, stacked on mobile

**Each Pillar Card:**
- Icon at top (blue, 48px)
- Headline in bold
- Body text
- Hover effect: Card lifts and glows

**Icons:**
- **Zero-Config:** Puzzle pieces connecting
- **AI Models Included:** Sparkle/star icon
- **Privacy:** Shield with lock

### Pricing Section

**Comparison Table:**
- Dark background with alternating row colors
- Clawdi column highlighted with blue accent border
- Checkmarks in green, X marks in red
- Sticky header on scroll

**Pricing Card:**
```css
background: linear-gradient(135deg, #161B22 0%, #1C2128 100%);
border: 2px solid #388BFF;
border-radius: 16px;
padding: 48px;
box-shadow: 0 8px 32px rgba(56, 139, 255, 0.2);
```

---

## Animations & Interactions

### Micro-interactions
- **Button Hover:** Slight lift (translateY: -2px) + shadow increase
- **Card Hover:** Lift (translateY: -4px) + border glow
- **Link Hover:** Underline animation from left to right

### Page Load Animations
- **Hero:** Fade in + slide up (stagger headline, then CTA)
- **Sections:** Fade in on scroll (use Intersection Observer)
- **Statistics:** Count-up animation when visible

### Scroll Effects
- **Parallax:** Very subtle parallax on background elements
- **Sticky Nav:** Navigation bar becomes sticky with blur background after scrolling past hero

---

## Imagery & Graphics

### Mockups & Screenshots

**Dashboard Mockup (inspired by Clawi.ai):**
- Show a clean, organized interface
- Use actual OpenClaw terminal output styled in our design system
- Highlight key features: session management, token usage, app connections

**App Integration Visual:**
- Grid of popular app logos (Gmail, Slack, Notion, etc.)
- Connected by glowing blue lines to a central Clawdi logo
- Animation: Lines light up sequentially

### Diagrams

**Privacy Architecture Diagram:**
- Show user → encrypted connection → Phala secure enclave → apps
- Use blue for secure connections, gray for external services
- Lock icons and shield icons throughout

**Setup Process Flowchart:**
- 3 simple steps with large numbers
- Icons for each step
- Arrow connectors in blue

### OpenClaw Branding Integration

**Lobster Logo Treatment:**
- Use the OpenClaw lobster logo prominently
- Render in glowing blue outline style
- Subtle animation: gentle floating or pulsing glow

**"Powered by OpenClaw" Badge:**
```css
background: rgba(56, 139, 255, 0.1);
border: 1px solid #388BFF;
border-radius: 24px;
padding: 8px 16px;
font: Inter Medium 14px;
color: #58A6FF;
```

---

## Mobile Responsiveness

### Breakpoints
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px

### Mobile Adjustments
- **Typography:** Reduce H1 to 36px, H2 to 28px
- **Spacing:** Reduce section padding to 60px vertical
- **Cards:** Stack vertically with full width
- **Buttons:** Full width on mobile for better tap targets

---

## Code Snippets & Terminal Examples

**Terminal Window Styling:**
```css
background: #0D1117;
border: 1px solid #30363D;
border-radius: 8px;
padding: 16px;
font: JetBrains Mono 14px;
color: #58A6FF;
overflow-x: auto;

/* Add traffic light dots */
&::before {
  content: "● ● ●";
  color: #8B949E;
  display: block;
  margin-bottom: 12px;
}
```

**Example:**
```
$ npx clawhub@latest install gmail
✓ Installing OpenClaw Gmail skill...
✓ Connected to your account
✓ Ready to manage your inbox
```

---

## Final Touches

### Favicon & Logo
- Create a simplified "C" monogram in Clawdi Blue
- Or use a stylized lobster claw icon

### Loading States
- Use a pulsing blue dot or animated lobster icon
- Skeleton screens for content loading

### Error States
- Friendly, helpful error messages
- Use amber color for warnings
- Provide clear next steps

---

## Implementation Notes for Coding AI

**Recommended Tech Stack:**
- **Framework:** Next.js or Astro for performance
- **Styling:** Tailwind CSS (configure with our color system)
- **Animations:** Framer Motion for smooth interactions
- **Icons:** Lucide React or Heroicons

**Key Files to Create:**
1. `tailwind.config.js` — Custom color palette and spacing
2. `globals.css` — Typography, base styles
3. `components/Button.tsx` — Reusable button components
4. `components/Card.tsx` — Feature card component
5. `components/Hero.tsx` — Animated hero section

**Accessibility:**
- Ensure color contrast meets WCAG AA standards
- Add focus states for keyboard navigation
- Use semantic HTML (h1, h2, nav, main, etc.)
- Include alt text for all images

---

**End of UI Design System**
