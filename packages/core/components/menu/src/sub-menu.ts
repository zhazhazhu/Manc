import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'
import type { PropType } from 'vue'
import type { Trigger } from 'manci-ui'

export const submenuProps = {
  trigger: {
    type: String as PropType<Trigger>,
    default: 'hover',
  },
}

export type SubmenuProps = ReadonlyExtractPropTypes<typeof submenuProps>

export function useSubmenu(props: SubmenuProps) {
  const instance = getCurrentInstance()!
  const submenuRef = ref<HTMLLIElement>()
  const popperRef = ref<HTMLLIElement>()
  const arrowDirections = ref(false)
  const isFirstLevel = computed(() => instance.parent?.type.__name === 'menu')

  return {
    submenuRef,
    popperRef,
    arrowDirections,
    isFirstLevel,
  }
}
