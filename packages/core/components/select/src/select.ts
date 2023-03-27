import type { PropType } from 'vue'
import type { Size } from '@manc-ui/types'

export const selectProps = {
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
  },
  size: {
    type: String as PropType<Size>,
    default: 'default',
  },
}
