import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'

export const menuItemProps = {
  index: {
    type: String,
  },
  subMenu: {
    type: Boolean,
  },
}

export const menuItemGroupProps = {
  title: {
    type: String,
  },
}

export type MenuItemProps = ReadonlyExtractPropTypes<typeof menuItemProps>

export type MenuItemGroupProps = ReadonlyExtractPropTypes<typeof menuItemGroupProps>
