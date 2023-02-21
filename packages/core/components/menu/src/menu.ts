import type { MenuModeType } from '@manc-ui/token'
import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'
import type { PropType } from 'vue'

export const menuProps = {
  mode: {
    type: String as PropType<MenuModeType>,
    default: 'vertical',
  },
  height: {
    type: [String, Number],
    default: 50,
  },
  index: {
    type: String,
  },
}

export type MenuProps = ReadonlyExtractPropTypes<typeof menuProps>
