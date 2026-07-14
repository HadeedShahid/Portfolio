"use client";

import { useDraftingIntro } from "@/hooks/useDraftingIntro";

/**
 * Thin client enhancer that plays the one-shot drafting intro on mount.
 * Renders nothing — it animates the server-rendered markup in place.
 */
export default function DraftingIntro() {
  useDraftingIntro();
  return null;
}
