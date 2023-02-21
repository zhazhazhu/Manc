import type { CSSProperties, ComputedRef, InjectionKey } from 'vue'

export interface UseStylesReturn {
  arrow: CSSProperties
  content: CSSProperties
}

interface InjectPopperContext {
  styles: ComputedRef<UseStylesReturn>
}

export const POPPER_INJECTION_KEY: InjectionKey<InjectPopperContext>
  = Symbol('popper')
