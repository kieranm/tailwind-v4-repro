import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const twMerge = extendTailwindMerge<"theme" | "state">({
  // ↓ Override elements from the default config
  //   It has the same shape as the `extend` object, so we're going to skip it here.
  override: {
    classGroups: {
      "font-size": [{ text: ["label", "caption", "body", "heading"] }],
      "theme": ["neutral", "adaptive", "brand", "state"],
      "state": ["error", "info", "success", "warning"],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
