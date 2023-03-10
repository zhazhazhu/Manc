import { useClassesName, useClickAway, useTimeout } from '@manc-ui/hooks'
import type { CSSProperties, PropType } from 'vue'
import type { Placement, UseFloatingOptions } from '@floating-ui/vue'
import {
  arrow, autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from '@floating-ui/vue'
import { isBoolean } from '@vueuse/core'
import type { Arrow } from 'manci-ui'
import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'
import { isUndefine } from '@manc-ui/utils'
import { EventName } from './events'

export type Trigger = 'click' | 'focus' | 'hover' | 'contextmenu'

const POPPER_CONTAINER_ID = useClassesName('popper').m('container')

const popperContainerEl = ref<HTMLDivElement>()

function createPopperContainer() {
  popperContainerEl.value = document.getElementById(
    POPPER_CONTAINER_ID,
  ) as HTMLDivElement

  if (!popperContainerEl.value) {
    popperContainerEl.value = document.createElement('div')
    popperContainerEl.value.style.zIndex = '2023'
    popperContainerEl.value.id = POPPER_CONTAINER_ID
    document.body.appendChild(popperContainerEl.value)
  }

  return popperContainerEl
}

const popperProps = {
  trigger: {
    type: String as PropType<Trigger>,
    default: 'hover',
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
  content: {
    type: String,
    default: '',
  },
  visible: {
    type: Boolean,
    default: undefined,
  },
  width: {
    type: Number,
    default: 200,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  showAfter: {
    type: Number,
    default: 20,
  },
  hideAfter: {
    type: Number,
    default: 20,
  },
  offset: {
    type: Number,
    default: 10,
  },
}

const popperEmits = {
  [EventName.UPDATE_VISIBLE]: (val: boolean) => isBoolean(val),
}

export type PopperProps = ReadonlyExtractPropTypes<typeof popperProps>

function usePopper(props: PopperProps) {
  const control = ref(false)
  const contentRef = ref<HTMLElement>()
  const referenceRef = ref<HTMLElement>()
  const arrowRef = ref<InstanceType<typeof Arrow>>()

  const FloatingOptions = reactive<UseFloatingOptions>({
    placement: props.placement,
    middleware: [offset(props.offset), flip(), arrow({
      element: arrowRef,
    }), shift()],
    whileElementsMounted: autoUpdate,
  })

  const { x, y, strategy, middlewareData, update, placement } = useFloating(referenceRef, contentRef, FloatingOptions)

  const state = computed(() => ({ x, y, strategy, placement, arrow: middlewareData.value.arrow }))

  const { registerListener, cleanupListener } = useClickAway(contentRef, {
    excepts: props.trigger === 'focus' ? [] : [referenceRef],
  })

  function open() {
    if (!isUndefine(props.visible).value)
      return
    registerListener(close)
    if (props.trigger === 'click')
      control.value = !control.value
    else control.value = true
  }
  function close() {
    if (!isUndefine(props.visible).value)
      return
    control.value = false
    cleanupListener?.()
  }

  if (!isUndefine(props.visible).value) {
    watch(
      () => props.visible,
      (val) => {
        if (props.disabled)
          return
        control.value = val!
      },
    )
  }

  return {
    control,
    contentRef,
    referenceRef,
    arrowRef,
    state,
    update,
    open,
    close,
  }
}

function usePopperDOM(props: PopperProps, state: ReturnType<typeof usePopper>['state']) {
  const { x, y, strategy, placement } = toRefs(state.value)

  const attributes = computed(() => ({
    'mc-popper-placement': placement.value,
  }))
  const contentStyle = computed<CSSProperties>(() => ({
    minWidth: props.width > 150 ? `${props.width}px` : '150px',
    position: strategy.value,
    top: `${y.value}px`,
    left: `${x.value}px`,
  }))
  const arrowStyle = computed<CSSProperties>(() => ({
    top: `${state.value.arrow?.y}px`,
    left: `${state.value.arrow?.x}px`,
  }))

  return { attributes, arrowStyle, contentStyle }
}

export interface UseDelayedToggleProps {
  props: PopperProps
  open: (event?: Event) => void
  close: (event?: Event) => void
}

export function useDelayedToggle({
  props,
  open,
  close,
}: UseDelayedToggleProps) {
  const { registerTimeout } = useTimeout()

  const onOpen = (event: Event, type: Trigger) => {
    if (props.disabled)
      return
    if (type === 'contextmenu')
      event.preventDefault?.()

    registerTimeout(() => {
      props.trigger === type && open()
    }, props.showAfter)
  }

  const onClose = (event: Event, type: Trigger) => {
    registerTimeout(() => {
      props.trigger === type && close()
    }, props.hideAfter)
  }

  return {
    onOpen,
    onClose,
  }
}

export {
  createPopperContainer,
  usePopper,
  usePopperDOM,
  POPPER_CONTAINER_ID,
  popperProps,
  popperEmits,
}
