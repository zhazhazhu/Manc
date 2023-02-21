import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'

export const menuItemProps = {
  index: {
    type: String,
  },
  subMenu: {
    type: Boolean,
  },
}

export type MenuItemProps = ReadonlyExtractPropTypes<typeof menuItemProps>
