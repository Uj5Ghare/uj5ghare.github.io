import { Variants } from 'framer-motion';

/**
 * Reusable animation variants for Framer Motion
 */

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Fade in from top
export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

// Simple fade in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};

// Scale up animation
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Stagger container for children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Stagger container with faster animation
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

// Item in stagger container
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

// Hover scale animation
export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

// Hover lift animation (for cards)
export const hoverLift = {
  rest: { 
    y: 0,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
  },
  hover: { 
    y: -8,
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

// Button tap animation
export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1
  }
};

// Slide in from bottom (for modals/toasts)
export const slideInUp: Variants = {
  hidden: { 
    y: '100%',
    opacity: 0 
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300
    }
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

// Rotate animation (for icons)
export const rotateIn: Variants = {
  hidden: { 
    opacity: 0, 
    rotate: -180 
  },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

// Count up animation helper
export const countUpAnimation = {
  duration: 2,
  ease: 'easeOut'
};

// Page transition
export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

// Viewport options for scroll animations
export const scrollAnimationViewport = {
  once: true, // Animate only once
  amount: 0.3, // Trigger when 30% visible
  margin: '0px 0px -100px 0px' // Trigger slightly before element enters viewport
};

// Accessibility: Respect user's motion preferences
export const getMotionProps = () => {
  if (typeof window !== 'undefined') {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return prefersReducedMotion ? { initial: 'visible' } : {};
  }
  return {};
};

// ============================================================
// design.md §6.2 — Motion tokens
// ============================================================

// Entrance ease: easeOutQuint — fast start, soft settle
export const easeEntrance = [0.22, 1, 0.36, 1];

// ============================================================
// leoparpeix.com signature ease — cubic-bezier(.16,1,.1,1)
// Fast release, ultra-soft landing. Used for every reveal/hover.
// ============================================================
export const easeElegant = [0.16, 1, 0.1, 1] as [number, number, number, number];

export const durIn = 0.4;
export const durOut = 0.6;

// design.md §6.8 — Full-bleed indigo section fill sweep
export const fillSweep: Variants = {
  hidden: { scaleX: 0, transformOrigin: 'left' },
  visible: {
    scaleX: 1,
    transformOrigin: 'left',
    transition: { duration: 0.6, ease: easeEntrance },
  },
};

// Gentle drift for background blobs (static motion, never decorative spin)
export const blobDrift: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

// Card entrance with a subtle pop
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: durIn, ease: easeEntrance },
  },
};

// Spring-based panel entrance (mockup window)
export const panelSpring = {
  hidden: { opacity: 0, scale: 0.82, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 } as never,
  },
};

// ============================================================
// leoparpeix.com — masked line reveal system
// Every text line sits inside an overflow:hidden mask and
// slides up from translateY(100%), often with a tiny ±X drift
// so lines land with a staggered, hand-set feel.
// Wrap each line in <span className="line-mask"> and give the
// inner element these variants.
// ============================================================

// A single masked line: rises from below the mask, with drift
export const lineReveal = (offset: number = 0): Variants => ({
  hidden: { y: '100%', x: `${offset}%` },
  visible: {
    y: '0%',
    x: '0%',
    transition: { duration: 0.9, ease: easeElegant },
  },
});

// Container that staggers its masked lines
export const linesStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// Fade/slide for lines without a mask (small labels, meta)
export const labelRise: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeElegant },
  },
};

// Underline wipe (origin flips on hover, like leoparpeix links)
export const underlineWipe = {
  rest: {
    scaleX: 0,
    transformOrigin: 'right center',
    transition: { duration: 0.4, ease: easeElegant },
  },
  hover: {
    scaleX: 1,
    transformOrigin: 'left center',
    transition: { duration: 0.45, ease: easeElegant },
  },
};

// Sliding arrow: default slides out top-left, hover arrow slides in
export const arrowSwap = {
  rest: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: easeElegant },
  },
  hover: {
    x: '140%',
    y: '-140%',
    opacity: 0,
    transition: { duration: 0.35, ease: easeElegant },
  },
};

export const arrowSwapHover = {
  rest: {
    x: '-140%',
    y: '140%',
    opacity: 0,
    transition: { duration: 0.35, ease: easeElegant },
  },
  hover: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: easeElegant },
  },
};
