import { MaybeComputedRef, resolveUnref } from "@vueuse/core";
import { computed } from "vue";

export function isUndefine(v: MaybeComputedRef<unknown>) {
  return computed(() => resolveUnref(v) === undefined);
}

export const isBrowser = typeof window !== "undefined";
