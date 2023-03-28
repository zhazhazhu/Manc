import type { InjectionKey, Ref } from 'vue'
import type { UseTabChildrenReturn } from 'manci-ui'

export interface InjectTabsContext extends UseTabChildrenReturn {
  activeName: Ref<string | number | undefined>
}

export const TABS_INJECTION_KEY: InjectionKey<InjectTabsContext>
  = Symbol('menu')
