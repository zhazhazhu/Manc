import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'
import type { PropType } from 'vue'
import { isString } from '@vueuse/core'
import type { Size } from '@manc-ui/types'
import { EventName } from '../../../enum/event'

export type InputType = 'text' | 'textarea'

export const inputProps = {
  modelValue: {
    type: [String, Number],
  },
  type: {
    type: String as PropType<InputType | string>,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'Please Input',
  },
  required: {
    type: Boolean,
    default: false,
  },
  formatter: {
    type: Function as PropType<(value: string | number) => string | number>,
  },
  parser: {
    type: Function as PropType<(value: string) => string>,
  },
  rows: {
    type: Number,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<Size>,
    default: 'default',
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
}

export type InputProps = ReadonlyExtractPropTypes<typeof inputProps>

export const inputEmits = {
  [EventName.UPDATE_MODEL_VALUE]: (val: string | number) => isString(val),
  input: (val: string | number) => isString(val),
  focus: (event: Event) => event instanceof FocusEvent,
  blur: (event: Event) => event instanceof FocusEvent,
}

export type InputEmits = typeof inputEmits
