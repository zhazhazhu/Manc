import type { CSSProperties, ComputedRef, InjectionKey } from 'vue'

export type PopperStyles = Record<'contentStyle' | 'arrowStyle', CSSProperties>

interface InjectPopperContext {
  contentStyle: ComputedRef<PopperStyles['contentStyle']>
  arrowStyle: ComputedRef<PopperStyles['arrowStyle']>
  attributes: ComputedRef<Record<string, string | boolean>>
}

export const POPPER_INJECTION_KEY: InjectionKey<InjectPopperContext>
  = Symbol('popper')
