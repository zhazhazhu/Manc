import { TinyColor } from '@ctrl/tinycolor'
import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'
import type { CSSProperties, PropType } from 'vue'

export type ButtonTypes =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'

export type ButtonSize = 'large' | 'default' | 'small'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonTypes>,
    default: 'default',
  },
  link: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'small',
  },
  circle: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: true,
  },
}

export type ButtonProps = ReadonlyExtractPropTypes<typeof buttonProps>

export function useButton(props: ButtonProps) {
  const _ref = ref<HTMLButtonElement>()

  return { _ref }
}

export function useButtonCustomStyle(props: ButtonProps) {
  let styles: CSSProperties = {}
  const color = new TinyColor(props.color)
  const activeColor = color.mix('#141414', 20).lighten(5).toString()
  if (props.color) {
    if (props.plain) {
      styles = {
        '--button-background': activeColor,
        '--button-color': props.color,
        '--button-color-border': props.color,
      }
    }
    else {
      if (props.disabled) {
        styles = {
          '--button-background': activeColor,
          '--button-color-hover': activeColor,
          '--button-color-border': props.color,
        }
      }
      else {
        styles = {
          '--button-background': props.color,
          '--button-color-hover': activeColor,
          '--button-color-border': props.color,
        }
      }
    }
    if (props.disabled) {
      styles = {
        '--button-background': activeColor,
        '--button-color-hover': activeColor,
        '--button-color-border': props.color,
        '--button-color': 'white',
      }
    }
  }
  return styles
}
