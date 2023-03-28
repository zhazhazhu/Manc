import { withInstall } from '@manc-ui/utils'
import Tabs from './src/tabs.vue'
import Tab from './src/tab.vue'
import type { UseTabChildrenReturn } from './src/tabs'

export const McTabs = withInstall(Tabs, {
  Tab,
})
export const McTab = withInstall(Tab)

export default McTabs

export type {
  UseTabChildrenReturn,
}
