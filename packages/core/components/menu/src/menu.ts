import type { MenuModeType } from '@manc-ui/token'
import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'
import type { PropType } from 'vue'

export const menuProps = {
  mode: {
    type: String as PropType<MenuModeType>,
    default: 'vertical',
  },
  uniqueOpened: {
    type: Boolean,
    default: false,
  },
  router: {
    type: Boolean,
    default: false,
  },
  defaultActive: {
    type: String,
    default: '',
  },
}

export type MenuProps = ReadonlyExtractPropTypes<typeof menuProps>
