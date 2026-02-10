# Clawdi Design Tokens — Inspired by Clawi.ai Style

## Design Philosophy

Clawi.ai uses a **light, clean, sophisticated aesthetic** that feels modern, friendly, and premium. The key differentiator is the use of **3D elements, generous white space, and bold accent colors** on a light background. This is the opposite of the typical dark developer tool aesthetic, making it feel more accessible and consumer-friendly while still being professional.

---

## Color System

### Background Colors

| Token | Value | Usage |
|-------|-------|-------|
| `background.primary` | `#FAFAFA` | Main page background |
| `background.secondary` | `#FFFFFF` | Cards, panels, elevated surfaces |
| `background.tertiary` | `#F5F5F5` | Subtle backgrounds, hover states |

### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `text.primary` | `#1A1A1A` | Headlines, primary content |
| `text.secondary` | `#666666` | Body text, descriptions |
| `text.tertiary` | `#999999` | Captions, supporting text |
| `text.inverse` | `#FFFFFF` | Text on dark/colored backgrounds |

### Accent Colors

| Token | Value | Usage |
|-------|-------|-------|
| `accent.primary` | `#FF5C5C` | Primary brand color (coral/pink) |
| `accent.secondary` | `#E63946` | CTA buttons (red/scarlet) |
| `accent.success` | `#00FF00` | Success states, terminal [OK] |
| `accent.info` | `#4A90E2` | Info badges, links |
| `accent.warning` | `#FFA500` | Warnings, alerts |

### UI Element Colors

| Token | Value | Usage |
|-------|-------|-------|
| `border.default` | `#E0E0E0` | Default borders |
| `border.accent` | `#FF5C5C` | Accent borders, focus states |
| `border.dashed` | `#CCCCCC` | Dashed borders (decorative) |
| `shadow.sm` | `rgba(0,0,0,0.05)` | Small shadows |
| `shadow.md` | `rgba(0,0,0,0.1)` | Medium shadows |
| `shadow.lg` | `rgba(0,0,0,0.15)` | Large shadows, cards |

---

## Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `font.primary` | `'Inter', -apple-system, sans-serif` | All UI text |
| `font.display` | `'Inter', sans-serif` | Large headlines |
| `font.mono` | `'JetBrains Mono', 'Courier New', monospace` | Code, terminal text |

### Font Sizes

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text.hero` | `72px` | `1.1` | Hero wordmark (CLAWI) |
| `text.h1` | `48px` | `1.2` | Section headlines |
| `text.h2` | `36px` | `1.3` | Sub-section headlines |
| `text.h3` | `24px` | `1.4` | Card titles |
| `text.body-lg` | `20px` | `1.6` | Large body text |
| `text.body` | `16px` | `1.6` | Default body text |
| `text.body-sm` | `14px` | `1.5` | Small text, captions |
| `text.caption` | `12px` | `1.4` | Labels, badges |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `weight.regular` | `400` | Body text |
| `weight.medium` | `500` | Emphasized text |
| `weight.semibold` | `600` | Buttons, labels |
| `weight.bold` | `700` | Headlines |
| `weight.black` | `900` | Hero text, major emphasis |

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `tracking.tight` | `-0.02em` | Large headlines |
| `tracking.normal` | `0` | Body text |
| `tracking.wide` | `0.1em` | HERO WORDMARK (C L A W I) |
| `tracking.wider` | `0.2em` | Small caps, badges |

---

## Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space.xs` | `8px` | Tight spacing |
| `space.sm` | `16px` | Small gaps |
| `space.md` | `24px` | Medium gaps |
| `space.lg` | `32px` | Large gaps |
| `space.xl` | `48px` | Extra large gaps |
| `space.2xl` | `64px` | Section spacing |
| `space.3xl` | `96px` | Major section spacing |
| `space.4xl` | `128px` | Hero section spacing |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius.sm` | `4px` | Small elements |
| `radius.md` | `8px` | Buttons, inputs |
| `radius.lg` | `12px` | Cards |
| `radius.xl` | `16px` | Large cards |
| `radius.pill` | `999px` | Badges, pills |
| `radius.circle` | `50%` | Circular elements |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow.sm` | `0 1px 3px rgba(0,0,0,0.05)` | Subtle elevation |
| `shadow.md` | `0 4px 12px rgba(0,0,0,0.08)` | Cards, dropdowns |
| `shadow.lg` | `0 8px 24px rgba(0,0,0,0.12)` | Modals, popovers |
| `shadow.xl` | `0 16px 48px rgba(0,0,0,0.15)` | Major elevation |

---

## Component Tokens

### Buttons

**Primary Button (CTA)**
```css
background: #E63946; /* Red/scarlet */
color: #FFFFFF;
font-size: 16px;
font-weight: 600;
padding: 14px 32px;
border-radius: 8px;
border: none;
box-shadow: 0 4px 12px rgba(230, 57, 70, 0.25);
letter-spacing: 0.02em;
text-transform: uppercase;

/* Hover */
background: #D62839;
box-shadow: 0 6px 16px rgba(230, 57, 70, 0.35);
transform: translateY(-2px);
```

**Secondary Button**
```css
background: transparent;
color: #1A1A1A;
font-size: 16px;
font-weight: 500;
padding: 14px 32px;
border-radius: 8px;
border: 2px solid #E0E0E0;

/* Hover */
border-color: #FF5C5C;
color: #FF5C5C;
```

### Badges

**"Powered by OpenClaw" Badge**
```css
background: transparent;
color: #FF5C5C;
font-size: 12px;
font-weight: 600;
padding: 6px 16px;
border-radius: 999px;
border: 1.5px solid #FF5C5C;
letter-spacing: 0.1em;
text-transform: uppercase;
```

### Cards

**Feature Card / Dashboard Panel**
```css
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 12px;
padding: 32px;
box-shadow: 0 4px 12px rgba(0,0,0,0.06);

/* Hover */
box-shadow: 0 8px 24px rgba(0,0,0,0.10);
transform: translateY(-4px);
```

### Terminal/Code Block

```css
background: #F5F5F5;
border: 1px dashed #CCCCCC;
border-radius: 8px;
padding: 16px;
font-family: 'JetBrains Mono', monospace;
font-size: 14px;
color: #666666;

/* [OK] indicator */
color: #00FF00;
font-weight: 600;
```

---

## Layout Tokens

### Container Widths

| Token | Value | Usage |
|-------|-------|-------|
| `container.sm` | `640px` | Narrow content |
| `container.md` | `768px` | Standard content |
| `container.lg` | `1024px` | Wide content |
| `container.xl` | `1280px` | Full-width sections |
| `container.max` | `1440px` | Maximum page width |

### Grid

| Token | Value | Usage |
|-------|-------|-------|
| `grid.gap` | `24px` | Default grid gap |
| `grid.columns` | `12` | Standard 12-column grid |

---

## Special Effects

### Hero Wordmark Effect

The "CLAWI" wordmark has extreme letter spacing and a vertical accent bar:

```css
font-size: 72px;
font-weight: 900;
letter-spacing: 0.2em; /* VERY WIDE */
color: #1A1A1A;

/* Accent bar after last letter */
&::after {
  content: '';
  display: inline-block;
  width: 8px;
  height: 80px;
  background: #FF5C5C;
  margin-left: 24px;
  vertical-align: middle;
}
```

### 3D Lobster Illustration

Clawi uses a **photorealistic 3D rendered lobster** as a hero element:
- White/light gray coloring
- Positioned prominently in hero
- Adds premium, sophisticated feel
- Creates strong brand identity

**For Clawdi:** Consider commissioning a similar 3D asset (lobster claw or full lobster) in your brand colors.

---

## Animation Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `transition.fast` | `150ms ease` | Hover states |
| `transition.base` | `250ms ease` | Default transitions |
| `transition.slow` | `400ms ease` | Large movements |
| `easing.default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing |
| `easing.bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Playful bounce |

---

## Key Takeaways from Clawi.ai Style

### What Makes It Work:

1. **Light Background** - Feels friendly, accessible, premium (not dark/techy)
2. **Bold Accent Color** - Pink/coral creates personality and warmth
3. **3D Elements** - Sophisticated 3D lobster adds visual interest
4. **Generous Spacing** - Lots of white space makes it feel premium
5. **Extreme Letter Spacing** - Hero wordmark feels confident and modern
6. **Red CTA Buttons** - High contrast, impossible to miss
7. **Clean Typography** - Simple sans-serif, well-executed hierarchy
8. **Subtle Shadows** - Adds depth without being heavy

### How to Adapt for Clawdi:

**Option A: Light Theme (Like Clawi)**
- Use the light background approach
- Swap pink/coral for your blue (`#388BFF`)
- Keep the clean, airy feel
- Commission a 3D claw or lobster asset

**Option B: Dark Theme with Clawi Principles**
- Keep dark background but use Clawi's spacing/hierarchy
- Use the same generous white space
- Apply the extreme letter spacing to "CLAWDI" wordmark
- Add 3D elements but render them in glowing blue

**Recommended: Hybrid Approach**
- Use dark theme for technical credibility
- Adopt Clawi's generous spacing and clean hierarchy
- Use bold accent colors (blue + orange)
- Add 3D visual interest (glowing claw illustration)
- Keep the sophisticated, premium feel

---

## Implementation Example: Clawdi Hero (Clawi-Inspired)

```css
.hero {
  background: linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%);
  padding: 128px 64px;
  text-align: center;
}

.hero-badge {
  background: transparent;
  color: #388BFF;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1.5px solid #388BFF;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 32px;
}

.hero-wordmark {
  font-size: 72px;
  font-weight: 900;
  letter-spacing: 0.2em; /* C L A W D I */
  color: #1A1A1A;
  margin-bottom: 24px;
}

.hero-wordmark::after {
  content: '';
  display: inline-block;
  width: 8px;
  height: 80px;
  background: #FF6B35; /* Orange accent */
  margin-left: 24px;
  vertical-align: middle;
}

.hero-description {
  font-size: 20px;
  line-height: 1.6;
  color: #666666;
  max-width: 600px;
  margin: 0 auto 48px;
}

.hero-cta {
  background: #FF6B35;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 40px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: all 250ms ease;
}

.hero-cta:hover {
  background: #FF8C42;
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
  transform: translateY(-2px);
}
```

---

**End of Design Tokens**
