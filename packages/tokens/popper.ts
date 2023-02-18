import { ComputedRef, CSSProperties, InjectionKey } from "vue";

export type UseStylesReturn = {
  arrow: CSSProperties;
  content: CSSProperties;
};

interface InjectPopperContext {
  styles: ComputedRef<UseStylesReturn>;
}

export const POPPER_INJECTION_KEY: InjectionKey<InjectPopperContext> =
  Symbol("popper");
