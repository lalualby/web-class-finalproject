---
name: X RPL B Studio Hub
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
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#005b7c'
  on-tertiary: '#ffffff'
  tertiary-container: '#00759f'
  on-tertiary-container: '#e1f2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '800'
    lineHeight: 4rem
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.125rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an energetic, precise, and forward-looking academic ecosystem for the **X RPL B** software engineering cohort. The interface communicates a duality: the analytical discipline of emerging developers paired with the expressive, vibrant spirit of high school students actively building digital artifacts.

### Visual Style
- **Tech-Forward Glass Minimalism**: Crisp geometric architecture, generous negative space, soft ambient glows, and restrained translucent glass layers (`backdrop-blur-md`).
- **Disciplined Tactility**: Clear borders (`1px` hairpins), micro-accent indicators mimicking modern developer toolkits (IDE status pins, terminal badges), and luminous focal highlights.
- **Atmosphere**: Inspiring, focused, uncluttered, and collaborative. It strips away academic bureaucracy in favor of an elite production dashboard feel.

## Colors

The palette leverages high-vibrancy blues anchored by an architectural slate-and-cool-gray foundation to create a pristine, daylight-tuned development environment.

- **Primary (`#2563EB` / `#1E40AF`)**: Represents technical logic and command. Applied to dominant interactive states, primary actions, and hero tags.
- **Secondary (`#0284C7`)**: Connects flow states, navigational tracking, and active tabs.
- **Tertiary (`#38BDF8`)**: Radiant sky-blue highlight reserved for live status chips, pipeline pings, focus indicators, and subtle glass ambient tints.
- **Neutral Surface Palette**:
  - Base canvas: `#F8FAFC` (Slate 50)
  - Card & Container layer: `#FFFFFF` with glass variants at `rgba(255, 255, 255, 0.82)`
  - Subsurface / Inset fills: `#F1F5F9` (Slate 100)
  - Structural dividers & borders: `#E2E8F0` (Slate 200)
  - Secondary typography & metadata: `#64748B` (Slate 500)
  - Deep typography & headers: `#0F172A` (Slate 900)

## Typography

The type system pairs the humanized geometric curves of **Plus Jakarta Sans** with the programmatic precision of **JetBrains Mono**.

- **Plus Jakarta Sans** provides friendly legibility across large desktop dashboards, schedules, and lesson assignments.
- **JetBrains Mono** reinforces the Software Engineering (RPL) identity. It is used strictly for technical indicators: class IDs, sprint tags, commit hashes, code timestamps, status markers, and metric scores.
- Numerical data within tables and rosters should use tabular figures (`font-variant-numeric: tabular-nums`).

## Layout & Spacing

The layout is built for wide, high-resolution desktop viewports typical of software engineering labs (1440px+ targets), scaling down to responsive single-column layouts for mobile access.

### Grid & Density
- **Wide Desktop (1440px+)**: 12-column fluid grid, max container width `1600px`, `2rem` gutters, and `3.5rem` outer canvas margin. Accommodates side navigation, dual-column workspace/editor views, and dynamic sidebars.
- **Tablet (768px – 1024px)**: 8-column layout, `1.5rem` gutters, collapsible side navigation into an overlay drawer.
- **Mobile (< 768px)**: 4-column layout, `1rem` margin, stacked single-column feeds.

### Spacing Principles
- Maintain vertical cadence using multiples of `8px` (`0.5rem`).
- Internal card padding defaults to `space-lg` (`1.5rem`) on desktop and compresses to `space-md` (`1rem`) on mobile.

## Elevation & Depth

Visual hierarchy uses frosted glassmorphic planes, soft cool-gray borders, and luminous ambient diffusion rather than deep murky drop-shadows.

### Tier 0 (Canvas Base)
- Color: `#F8FAFC`
- Completely flat, serving as the backdrop for all modules.

### Tier 1 (Standard Card & Surface)
- Background: `#FFFFFF`
- Border: `1px solid #E2E8F0`
- Shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`

### Tier 2 (Floating Modals, Glass Overlays, Nav Bars)
- Background: `rgba(255, 255, 255, 0.85)`
- Backdrop Filter: `blur(12px) saturate(180%)`
- Border: `1px solid rgba(255, 255, 255, 0.7)` with an outer contour of `1px solid rgba(226, 232, 240, 0.8)`
- Shadow: `0 12px 32px -4px rgba(37, 99, 235, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03)`

### Tier 3 (Focus States & Interactive Accents)
- Dynamic edge glow: `0 0 0 3px rgba(56, 189, 248, 0.35)`

## Shapes

The design uses a clean, unified rounded aesthetic (`roundedness: 2`).

- **Default Elements (`0.5rem` / `8px`)**: Buttons, text inputs, segment pickers, and monospaced badges.
- **Containers & Cards (`rounded-lg: 1rem` / `16px`)**: Course modules, project trackers, timetable panels, and modal containers.
- **Large Hero & Dashboard Panes (`rounded-xl: 1.5rem` / `24px`)**: Featured announcements, code sandbox containers, and header spotlight banners.
- **Full Radius (`9999px`)**: Student avatar frames, active presence tags, and pill chips.

## Components

### Buttons
- **Primary**: Solid `#2563EB` fill, white text, smooth transition to `#1E40AF` on hover. Active scale down: `scale(0.98)`.
- **Secondary (Glass)**: `rgba(255, 255, 255, 0.9)` with `1px solid #E2E8F0`, `#0F172A` text, hovering to `background: #F1F5F9`.
- **Accent/Ghost**: Transparent surface with `#2563EB` text; background transforms to `rgba(37, 99, 235, 0.08)` on hover.

### Cards & Panels
- White background (`#FFFFFF`) or frosted glass (`rgba(255, 255, 255, 0.85)`).
- Hairline border (`1px solid #E2E8F0`).
- Card headers feature subtle border separations with monospaced sprint tags (`label-sm`) pinned to the top-right.

### Chips & Badges
- **Status Chips**: JetBrains Mono font (`label-sm`).
- **Active / Compiling**: Light sky tint (`rgba(56, 189, 248, 0.15)`) with `#0284C7` text and a pulsing green dot indicator.
- **Git Branch / Tag Badges**: Cool gray background (`#F1F5F9`) with border `#E2E8F0` and `#64748B` text.

### Form Inputs & Search
- Surface: `#FFFFFF` or `#F8FAFC`.
- Border: `1px solid #E2E8F0`, transitioning seamlessly to `#2563EB` on focus, paired with a subtle `#38BDF8` diffusion ring.
- Placeholder text: `#94A3B8`.

### Lists & Tables (Student Roster, Task Backlog)
- Alternating subtle rows (`#FFFFFF` to `#F8FAFC`).
- Hover state: Row gains a primary indicator bar on the left edge (`2px solid #2563EB`) and shifts to `#F1F5F9`.
- Checkboxes: `rounded` (`4px`), border `#CBD5E1`, filling to `#2563EB` with an animated check stroke.

### Student Dev Toolkit Additions
- **Terminal Snippet Box**: Dark contrast container (`#0F172A`) embedded into cards for assignments, displaying sample test cases or terminal outputs in JetBrains Mono.
- **Project Progress Meter**: Minimalist segmented progress bar with `#2563EB` fill and `#E2E8F0` empty track.