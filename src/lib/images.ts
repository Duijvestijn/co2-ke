/**
 * Imagery for co2.ke
 * Source: Unsplash — Kenya-specific photography
 */

const HF = "https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD";
const UNS = "https://images.unsplash.com";

export const IMAGES = {
  /** Hero: Maasai Mara savanna — Higgsfield soul_location */
  hero: `${HF}/hf_20260528_230746_61fb214c-6736-4655-b5f7-8db5fb154c45.png`,

  /** Rift Valley forest */
  riftValley: `${UNS}/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1600&q=75&fm=webp`,

  /** East African savanna landscape */
  savanna: `${UNS}/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=75&fm=webp`,

  /** Coastal mangroves */
  mangroves: `${UNS}/photo-1559827291-72f590e49386?auto=format&fit=crop&w=1600&q=75&fm=webp`,

  /** Afforestation / trees */
  afforestation: `${UNS}/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1600&q=75&fm=webp`,
} as const;

export type ImageKey = keyof typeof IMAGES;

export const PROJECT_IMAGES = [
  IMAGES.riftValley,
  IMAGES.savanna,
  IMAGES.mangroves,
  IMAGES.afforestation,
];
