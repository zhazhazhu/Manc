const namespaced = "mc";

const isPrefix = "is-";

export function useClassesName(block: string) {
  const s = () => `${namespaced}-${block}`;

  const m = (modifier?: string) => `${s()}--${modifier}`;

  const is = (name: string, state?: boolean) =>
    state ? `${isPrefix}${name}` : "";

  return { s, m, is };
}
