import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'
import { isObject } from '@vueuse/core'
import type { PropType } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { EventName } from './event'

export const menuItemProps = {
  index: {
    type: String,
  },
  route: {
    type: Object as PropType<RouteLocationNormalizedLoaded>,
  },
}

export const menuItemGroupProps = {
  title: {
    type: String,
  },
}

export type MenuItemProps = ReadonlyExtractPropTypes<typeof menuItemProps>

export type MenuItemGroupProps = ReadonlyExtractPropTypes<typeof menuItemGroupProps>

export interface MenuItemType {
  index?: string
  route?: RouteLocationNormalizedLoaded
  active?: boolean
}

export const menuItemEmits = {
  [EventName.CLICK]: (item: MenuItemType) => isObject(item),
}
