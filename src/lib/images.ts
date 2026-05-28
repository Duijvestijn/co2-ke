/**
 * Imagery for co2.ke
 * Source: Unsplash — Kenya-specific photography
 */

const UNS = "https://images.unsplash.com";

export const IMAGES = {
  /** Hero: Maasai Mara savanna at golden hour */
  hero: `${UNS}/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=2400&q=85`,

  /** Rift Valley forest */
  riftValley: `${UNS}/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=2400&q=85`,

  /** East African savanna landscape */
  savanna: `${UNS}/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2400&q=85`,

  /** Coastal mangroves */
  mangroves: `${UNS}/photo-1559827291-72f590e49386?auto=format&fit=crop&w=2400&q=85`,

  /** Afforestation / trees */
  afforestation: `${UNS}/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=2400&q=85`,
} as const;

export type ImageKey = keyof typeof IMAGES;

export const PROJECT_IMAGES = [
  IMAGES.riftValley,
  IMAGES.savanna,
  IMAGES.mangroves,
  IMAGES.afforestation,
];
