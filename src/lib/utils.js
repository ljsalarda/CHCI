// src/lib/utils.js
import { clsx } from "clsx";

/**
 * Utility function for merging class names.
 * Works like ShadCN expects.
 */
export function cn(...args) {
  return clsx(...args);
}
