import type { MaybeRef } from '@vueuse/core'
import { isNumber, isString } from '@vueuse/core'

export const isStringNumber = (val: string): boolean => {
  if (!isString(val))
    return false

  return !Number.isNaN(Number(val))
}

export function useStyleUnit(
  value: MaybeRef<string | number>,
  unit = 'px',
) {
  return computed(() => {
    if (!resolveUnref(value))
      return ''
    if (
      isNumber(resolveUnref(value))
      || isStringNumber(resolveUnref(value) as string)
    )
      return `${resolveUnref(value)}${unit}`
    else if (isString(resolveUnref(value)))
      return resolveUnref(value)

    console.warn('binding value must be a string or number')
  })
}
