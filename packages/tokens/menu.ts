import type { InjectionKey, Ref } from 'vue'

export type MenuModeType = 'horizontal' | 'vertical'

export interface InjectMenuContext {
  mode: MenuModeType
  uniqueOpened: boolean
  openMenus: Ref<Set<string>>
  router: Boolean
  defaultActive: String
}

export const MENU_INJECTION_KEY: InjectionKey<InjectMenuContext>
  = Symbol('menu')
