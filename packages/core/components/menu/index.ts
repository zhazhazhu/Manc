import { withInstall } from '@manc-ui/utils'
import MenuItem from './src/menu-item.vue'
import Menu from './src/menu.vue'
import SubMenu from './src/sub-menu.vue'
import MenuItemGroup from './src/menu-item-group.vue'

export const McMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu,
})

export const McMenuItem = withInstall(MenuItem)

export const McMenuItemGroup = withInstall(MenuItemGroup)

export const McSubMenu = withInstall(SubMenu)

export default McMenu
