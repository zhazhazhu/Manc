import { isBoolean } from '@vueuse/core'
import type { Size } from '@manc-ui/types'
import type { PropType } from 'vue'
import { EventName } from '../../../enum/event'

export const switchProps = {
  modelValue: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String as PropType<Size>,
    default: 'small',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}

export const switchEmits = {
  [EventName.UPDATE_MODEL_VALUE]: (val: boolean) => isBoolean(val),
  [EventName.CHANGE]: (val: boolean) => isBoolean(val),
}
