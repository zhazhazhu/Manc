import { CSSProperties, InjectionKey, Ref } from "vue";

interface InjectPopperContext {
  arrowStyle: Ref<CSSProperties>;
}

export const POPPER_INJECTION_KEY: InjectionKey<InjectPopperContext> =
  Symbol("popper");
