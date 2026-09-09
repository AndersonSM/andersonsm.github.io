---
name: Move & Settle Curated Garage
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#00190e'
  on-tertiary: '#ffffff'
  tertiary-container: '#00301f'
  on-tertiary-container: '#24a375'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  price-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.02em
  price-strikethrough:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 20px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-specs:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  grid-gutter-mobile: 1rem
  grid-gutter-desktop: 1.5rem
  container-max-width: 1200px
---

## Brand & Style

The design system establishes a premium, transparent, and trustworthy environment for moving sales and home liquidations. Instead of the chaotic, bargain-bin feel typical of classified marketplaces, this system delivers the calm editorial clarity of a curated design studio. 

The aesthetic is grounded in **Minimalism paired with Tactile Modernism**:
- **Tone & Personality:** Reliable, mature, transparent, pragmatic, and orderly.
- **Visual Feel:** Warm gray foundations, stone-inspired surfaces, structured grid cards, and tactile physical affordances.
- **Emotional Driver:** Reassurance of item quality, transparent condition disclosures, frictionless inquiry via WhatsApp, and immediate spatial visualization of second-hand furniture and appliances.

## Colors

The palette avoids clinical pure whites (#FFFFFF across the board) in favor of warm slate and zinc tones. Color roles are strictly functional:

- **Primary (`#1E293B` - Deep Slate):** Anchors high-priority typography, main CTA buttons, solid container headers, and structural borders.
- **Secondary (`#D97706` - Warm Amber):** Reserved for contextual states: reserved badges, price reductions, urgency notices, and energy voltage highlights (110V/220V).
- **Tertiary (`#059669` - Forest Sage):** Communicates affirmative conditions: "Disponível", "Estado de Novo/Excelente", and direct WhatsApp verification anchors.
- **Neutrals & Surfaces:**
  - Base Canvas: `#F8FAFC` to `#F1F5F9` subtle linear gradients (soft zinc-slate).
  - Surface Raised (Cards, Sheets): `#FFFFFF` with muted 1px borders in `#E2E8F0`.
  - Surface Sunken: `#F1F5F9` for technical attribute chips and specification tables.
  - Body Text: `#334155` (Slate-700) for comfortable reading contrast without stark black harshness.

## Typography

The type system relies on **Plus Jakarta Sans** across all roles to achieve a cohesive, contemporary, and approachable aesthetic.

- **Numerics & Prices:** Emphasize medium-to-bold weights with tight tracking (`-0.02em`) to convey substantial monetary clarity.
- **Specification Metadata:** Kept at 12–13px to allow high-density item descriptions (e.g., dimensions, voltage, usage time) without visual clutter.
- **Status Tags:** Set in small caps or strict tabular uppercase with positive letter spacing (`0.04em`) to ensure instant legibility over photography or card corners.

## Layout & Spacing

The layout is built on a responsive 12-column dynamic grid with structured gutters:

- **Desktop (>= 1024px):** Max container width `1200px` centered with 1.5rem (`24px`) gutters. Product listings render in a 3-column mosaic or dense 4-column item grid.
- **Tablet (768px - 1023px):** 8-column layout, 2-column cards, page padding `1.5rem`.
- **Mobile (< 768px):** Single-column layout with optional 2-column compact grid for smaller appliances. Gutters collapse to `1rem` (`16px`).

Vertical rhythm follows an 8px scale. Hero headers, filtering segments, and listing sections maintain a generous 3rem to 4.5rem separation to avoid cognitive overload.

## Elevation & Depth

This system rejects extreme elevation tiers in favor of soft, diffused ambient drop shadows tinted with slate (`#0F172A` at low opacities) and crisp 1px borders:

- **Base Layer (Canvas):** Flat soft slate/zinc gradient (`linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)`).
- **Level 1 (Listing Cards, Filter Bars):** Surface `#FFFFFF`, 1px solid border `#E2E8F0`, shadow `0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Card Hover, Dropdown Popovers):** Shadow `0 10px 20px -5px rgba(15, 23, 42, 0.07), 0 4px 6px -2px rgba(15, 23, 42, 0.03)`, subtle `-2px` transform on hover.
- **Level 3 (Product Detail Modals, Floating Bottom CTAs):** Shadow `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)`, with a backdrop blur `8px` overlaid on `rgba(15, 23, 42, 0.4)`.

## Shapes

The roundedness standard is set to **Level 2 (Rounded)**:
- Standard buttons, input fields, and tags utilize `0.5rem` (`8px`).
- Card containers and gallery preview frames utilize `1rem` (`16px`).
- Modals, large sheet panels, and notification banners utilize `1.5rem` (`24px`).
- Status pills and category filters utilize full radius (`9999px`) for quick gestural recognition.

## Components

### 1. Product Listing Card (Mosaic)
- **Container:** White background, 1px `#E2E8F0` border, `1rem` border-radius, `0.75rem` internal padding.
- **Image Showcase:** Aspect ratio 4:3 (appliances) or 16:10 (furniture). Object-fit cover with subtle border radius (`0.75rem`). Overlaid with badges at top corners:
  - Top Left: Availability Badge ("Disponível" in Sage, "Reservado" in Amber, "Vendido" in muted Slate).
  - Top Right: Technical Badge ("110V", "220V", "Bivolt", or "Madeira Maciça").
- **Content Hierarchy:**
  - Category / Room label in `11px` Slate-500 uppercase.
  - Item Title in `18px` Slate-800 semi-bold.
  - Bullet specifications (e.g., "Dimensões: 180x80cm • 8 meses de uso") in `13px` Slate-600.
  - Pricing Row: Original price strikethrough in `#94A3B8`, prominent current price in `#1E293B` bold.
- **Action Footers:** Primary direct button "Tenho Interesse" triggering WhatsApp deep link with pre-filled message mentioning the specific item name.

### 2. Status Badges & Chips
- **Condition Tags:**
  - *Excelente / Seminovo:* Background `#ECFDF5`, text `#065F46`, border `#A7F3D0`.
  - *Bom Estado / Marcas de Uso:* Background `#FFFBEB`, text `#92400E`, border `#FDE68A`.
  - *Retirada Imediata:* Background `#F1F5F9`, text `#334155`, border `#CBD5E1`.
- **Category Filter Chips:** Horizontal pill scroll with inactive state (`#FFFFFF` background, `#64748B` label, `#E2E8F0` border) and active state (`#1E293B` background, `#FFFFFF` text).

### 3. Buttons & CTAs
- **Primary WhatsApp CTA:** Solid slate-900 (`#1E293B`) or WhatsApp brand emerald (`#25D366` hover transition), bold text, icon-leading, soft shadow.
- **Secondary Action (Ver Detalhes / Medidas):** Neutral background `#F8FAFC`, border 1px `#E2E8F0`, slate-700 text.
- **Sticky Mobile Bar:** Pinned bottom bar displaying quick summary and 1-tap "Conversar sobre o Lote" for batch purchases.

### 4. Detail Modal & Lightbox
- Clean popover with large image gallery carousel, item condition checklist, pickup address zone/neighborhood disclosure, and instant reserve button.