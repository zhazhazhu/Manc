import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'

export const tabChildrenProps = {
  name: {
    type: [String, Number],
  },
  label: {
    type: String,
    default: '',
  },
}

export type TabChildrenProps = ReadonlyExtractPropTypes<typeof tabChildrenProps>
