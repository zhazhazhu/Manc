import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'
import type { PropType } from 'vue'
import type { Trigger } from 'manci-ui'

export const submenuProps = {
  trigger: {
    type: String as PropType<Trigger>,
    default: 'hover',
  },
  index: {
    type: String,
    required: true,
    default: '',
  },
  teleported: {
    type: Boolean,
    default: true,
  },
  popperOffset: {
    type: Number,
    default: 10,
  },
}

export type SubmenuProps = ReadonlyExtractPropTypes<typeof submenuProps>

export function useSubmenu(props: SubmenuProps) {
  const instance = getCurrentInstance()!
  const submenuRef = ref<HTMLLIElement>()
  const popperRef = ref<HTMLLIElement>()
  const arrowDirections = ref(false)
  const control = ref(false)
  const isFirstLevel = computed(() => instance.parent?.type.__name === 'menu')

  const initMenu = () => {
    if (!props.index)
      console.warn('Missing required prop: "index"')
  }

  initMenu()

  return {
    submenuRef,
    popperRef,
    arrowDirections,
    isFirstLevel,
    control,
  }
}
