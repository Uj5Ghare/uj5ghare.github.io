# Portfolio Design Spec — based on `large-thumbnail…ps3akg.mp4`

> Source: `800×600` motion sample (~7s, 15 frames) analyzed programmatically.
> This is the design language to apply to the portfolio (Next.js 14 + Tailwind).

---

## 1. Design Identity

A **modern SaaS-style portfolio** on a warm off-white canvas with a bold **indigo/violet** signature color. The film reads like a product landing page — clean white sections interrupted by a single **full-bleed indigo section** for emphasis. Composition is asymmetrical (content left, accent visuals right), everything is rounded, and motion is used to reveal layout blocks rather than to decorate.

**One-line brief:** *"Warm cream + bold indigo, soft blobs, rounded cards, and one deep-purple showcase section."*

---

## 2. Color Palette

### Backgrounds (warm whites / creams)
| Token | Hex | Use |
|---|---|---|
| `bg-canvas` | `#FAF0ED` | Page background (warm cream) |
| `bg-surface` | `#FCF6F3` | Slightly lighter warm surface |
| `bg-pure` | `#FFFFFF` | Cards / hero left side |

### Signature & accents
| Token | Hex | Use |
|---|---|---|
| `primary-indigo` | `#583ACB` | Primary brand purple (buttons, panels) |
| `primary-deep` | `#5939C6` | Full-bleed section background |
| `indigo-dark` | `#4539B5` / `#5134B5` | Pressed / gradient depth |
| `violet-bright` | `#7363F9` / `#4C40F8` | Bright accents, links, glows |
| `lavender` | `#A3A3EA` / `#B5B3E6` | Soft secondary fills, borders |

### Warm accents (sparse)
| Token | Hex | Use |
|---|---|---|
| `peach` | `#FCE3D5` | Background blob shapes, hover tints |
| `gold` | `#E7BF42` / `#F6D213` | Star/rating, tiny highlights only |

### Text
| Token | Hex | Use |
|---|---|---|
| `text-ink` | `#242D51` | Headings (deep navy-indigo) |
| `text-body` | `#5B5869` / `#807E8B` | Body / muted copy |

**Rules**
- Indigo is the hero. Peach and gold are used at ~5% coverage, never competing with indigo.
- Full-bleed sections flip to **white text on `#5939C6`**.
- Warm background tones keep the palette from feeling clinical.

---

## 3. Typography

- **Headings:** large display weight (extrabold/black), tight leading, `#242D51` (white on indigo sections).
- **Body:** medium weight, muted `#5B5869`, generous line-height.
- **Labels:** tiny, uppercase, letter-spaced eyebrow labels above headings.

---

## 4. Layout & Section Anatomy

### 4.1 Hero (frames 1–3)
- **Layout:** left-aligned headline + body + CTAs on white/cream; a **rounded indigo panel occupies the right ~40%** of the frame, full-height.
- The indigo panel contains a **lighter UI mockup card** (rounded white window with traffic-light dots) floating inside it — the portfolio analog: a mini project/terminal card.
- Soft **peach blob** sits behind content; subtle lavender `#A3A3EA` shapes accent the panel.

### 4.2 Content / About block (frames 4–6)
- Full-width cream background. Large dark headline block top-left with body text.
- One **rounded indigo pill/button** as the primary CTA.
- Content column is left-anchored; right side has a rounded illustration/card (the "blob" visual).

### 4.3 Three-card grid (frames 7–9)
- Three columns of **rounded cards** on white.
- Each card: small dark **rounded icon/emoji tile** at top, title, supporting text, action row.
- A **dark pill button** appears bottom-center as the section CTA.
- Center card gets indigo accent treatment to establish hierarchy.

### 4.4 Full-bleed indigo section (frames 10–13) — *the signature moment*
- Transition to solid `#5939C6`.
- A **top nav row of small pill dots/links** sits above the headline.
- Content: white headline + text left, **lighter UI mockup card** (window with dots) on the right, peach blob retained at low presence.
- This is the natural home for a "Projects / Featured Work" or "Awards" band.

### 4.5 Outro (frames 14–15)
- Fade back to warm cream with indigo accents, echoing the hero.

---

## 5. Components

- **Rounded cards:** `rounded-2xl`, 1px hairline border (`#2a2a2a`-ish or `#EDE4E0` on light), subtle shadow.
- **Indigo panel:** large `rounded-3xl` block, `#583ACB→#5939C6` gradient feel, used as hero showcase + full-bleed section.
- **Pill buttons:** `rounded-full` — solid indigo primary, and outlined secondary.
- **Icon/emoji tiles:** small `rounded-xl` dark-navy tiles carrying an emoji/lucide icon.
- **Mockup window card:** white `rounded-2xl` card with 3 traffic-light dots top-left and content rows — reused to show projects, terminal snippets, or blog previews.
- **Background blobs:** soft `#FCE3D5` / `#A3A3EA` radial shapes, low-opacity, positioned off-center.

---

## 6. Motion & Interaction Notes

### 6.1 Motion principles (from the film)

- **Reveal = layout mapping:** sections appear as cards/slabs sliding or fading in, reinforcing the grid (matches the block-by-block reveal in frames). Each layout block reads as its own unit.
- **Full-bleed section:** enter as a solid color fill sweeping in from one edge (the frame 10→11 fill-in effect), not a crossfade.
- **No idle motion:** blobs stay static; animate content, not decor. Every animation *performs* (reveals structure or responds to input).
- **One current:** at any moment a single element is the "carrier" of the animation; others wait their turn via stagger.

### 6.2 Global timing & easing tokens

| Token | Value | Used for |
|---|---|---|
| `dur-in` | `0.4s` | Card/block entrance |
| `dur-out` | `0.5–0.6s` | Section-level reveals (hero, full-bleed) |
| `dur-hover` | `0.2–0.3s` | Hover lift, border tint |
| `dur-tap` | `0.1s` | Button press |
| `ease-entrance` | `cubic-bezier(0.22, 1, 0.36, 1)` ("easeOutQuint") | Entrances — start fast, settle smooth |
| `ease-default` | `easeOut` (`cubic-bezier(0, 0, 0.2, 1)`) | Existing `fadeInUp` etc. — keep |
| `ease-hover` | `easeInOut` | Hover states |
| `spring-panel` | `{ type: 'spring', damping: 25, stiffness: 300 }` | Mockup panel / window cards |
| `stagger-grid` | `0.06–0.1s` | Card grid cascades |
| `stagger-fast` | `0.05s` | Small clusters (tags, icons) |

### 6.3 Scroll-triggered reveals (per section)

Use `useScrollAnimation` (`triggerOnce: true`, `threshold: 0.1`, `rootMargin: '0px 0px -100px 0px'`) for all of these.

| Element | Variant | Duration | Ease | Delay |
|---|---|---|---|---|
| Eyebrow label | `fadeIn` | `0.4s` | `easeOut` | `0` |
| Section heading | `fadeInUp` | `0.5s` | `easeOut` | `0.05s` |
| Section sub-copy | `fadeInUp` | `0.5s` | `easeOut` | `0.1s` |
| Card grid (container) | `staggerContainer` | — | — | `staggerChildren: 0.08`, `delayChildren: 0.1` |
| Each card (child) | `staggerItem` (`y: 20`) | `0.4s` | `easeOut` | `inherit stagger` |
| Hero headline (left) | `fadeInLeft` | `0.6s` | `ease-entrance` | `0.05s` |
| Hero indigo panel (right) | `fadeInRight` | `0.6s` | `ease-entrance` | `0.15s` |
| Mockup window inside panel | `scaleIn` (`scale 0.8→1`) | `0.5s` | `spring-panel` | `0.3s` |
| CTA pill button | `fadeInUp` | `0.5s` | `easeOut` | `0.35s` |

### 6.4 Full-bleed indigo section entrance (signature moment)

- **Stage 1 — Fill sweep:** a `#5939C6` overlay scales from `scaleX(0)` → `scaleX(1)` anchored to the left edge, `transformOrigin: 'left'`, `0.6s`, `ease-entrance`. This reproduces the frame 10→11 solid-fill takeover.
- **Stage 2 — Content:** after the fill completes (`delay: 0.6s`), headline slides up (`fadeInUp`, `0.5s`), then the mockup window springs in (`spring-panel`, `delay: 0.15s` after headline).
- **Stage 3 — Nav pills:** the top nav row fades in first at `0.45s` (before the fill finishes), so it feels like it rides in with the color.

### 6.5 Hover & interaction states

| Element | State | Transform | Duration | Ease |
|---|---|---|---|---|
| Card | hover | `y: -8` + shadow grow (use existing `hoverLift`) | `0.3s` | `easeOut` |
| Card | border tint | border → indigo `#583ACB` | `0.2s` | `easeInOut` |
| Icon/emoji tile | hover | `scale: 1.05` (existing `hoverScale`) | `0.2s` | `easeInOut` |
| CTA button | hover | bg `#583ACB` → `#5134B5` | `0.2s` | `easeInOut` |
| CTA button | tap | `scale: 0.95` (existing `buttonTap`) | `0.1s` | — |
| Links / nav pills | hover | color → `#7363F9` | `0.15s` | `easeOut` |

### 6.6 Stat / counter animation

- Use `useCountAnimation` (easeOutExpo, `2000ms`), triggered by `inView`.
- Numbers should land exactly on target (already implemented — keep `requestAnimationFrame` loop).

### 6.7 Accessibility

- Respect `prefers-reduced-motion: reduce` via `getMotionProps()` / `usePrefersReducedMotion()` — render elements at `initial: 'visible'` (content visible, no slide).
- All entrance durations ≥ `0.4s` and no infinite loops — no idle/breathing animation on page.

### 6.8 Implementation reference (framer-motion)

Reuse the existing variants in `src/lib/animations.ts` (`fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn`, `staggerContainer`, `staggerItem`, `hoverLift`, `hoverScale`, `buttonTap`) and hooks in `src/lib/hooks.ts` (`useScrollAnimation`, `useCountAnimation`, `usePrefersReducedMotion`).

The only **new** variant needed for this design is the full-bleed fill sweep:

```ts
export const fillSweep: Variants = {
  hidden: { scaleX: 0, transformOrigin: 'left' },
  visible: {
    scaleX: 1,
    transformOrigin: 'left',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};
```

---

## 7. Mapping to the Existing Portfolio

| Video element | Portfolio application |
|---|---|
| Hero indigo panel + mockup card | `Hero`/`HeroEnhanced` right-side visual (terminal/project card) |
| Headline + pill CTA blocks | `About`, `Projects` headers |
| 3-card grid | `Skills` / `Projects` grid cards |
| Full-bleed indigo section | Dedicated band (e.g. `Experience` timeline or `Achievements`) |
| Mockup window card | Reuse in `Projects` cards / blog previews |
| Peach + lavender blobs | `HeroEnhanced` background orbs — recolor to `#FCE3D5` / `#A3A3EA` |

---

## 8. Current-Gap Summary (what to change in `src/`)

1. **Warm the background:** `#060606`/`#111` dark sections → cream `#FAF0ED`; cards `#fff`.
2. **Recolor indigo:** existing `text-blue-400`/`bg-blue-600` → `#583ACB` family (`blue-400`≈`#60a5fa` is too sky; `#4C40F8`/`#7363F9` are the right violets).
3. **Ink color:** headings `text-white` → `#242D51`; body `#5B5869`.
4. **Rounded upgrade:** bump `rounded-lg` → `rounded-2xl` on cards/panels; buttons to `rounded-full`.
5. **Add the signature indigo section** (full-bleed `#5939C6`) as a break between light sections.
6. **Add peach `#FCE3D5` blobs** and lavender `#A3A3EA` accents as background motifs.

---

*Extracted from pixel/frame analysis of the reference motion sample; hex values derived from dominant-frame quantization.*
