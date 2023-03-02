<script lang="ts" setup>
import { useClassesName } from '@manc-ui/hooks'
import { POPPER_INJECTION_KEY } from '@manc-ui/token'
import { EventName, McArrow } from 'manci-ui'
import {
  POPPER_CONTAINER_ID,
  createPopperContainer,
  popperEmits,
  popperProps,
  useDelayedToggle,
  usePopper,
} from './popper'

const props = defineProps(popperProps)

const emit = defineEmits(popperEmits)

const popperContainer = createPopperContainer()

const {
  styles,
  control,
  triggerRef,
  contentRef,
  open,
  close,
} = usePopper(props)

const { onOpen, onClose } = useDelayedToggle({ props, open, close })

const [p_cs, t_cs] = [useClassesName('popper'), useClassesName('trigger')]

watch(control, (value) => {
  emit(EventName.UPDATE_VISIBLE, value)
})

provide(POPPER_INJECTION_KEY, { styles })

defineExpose({
  triggerRef,
  contentRef,
})
</script>

<template>
  <div
    ref="triggerRef" :class="[t_cs.s()]" v-bind="$attrs"
    @mouseover="onOpen($event, 'hover')" @mouseleave="onClose($event, 'hover')" @mousedown="onOpen($event, 'focus')"
    @blur="onClose($event, 'focus')" @click="onOpen($event, 'click')" @contextmenu="onOpen($event, 'contextmenu')"
  >
    <slot />
  </div>

  <Teleport :to="`#${POPPER_CONTAINER_ID}`">
    <Transition name="mc" @mouseover="onOpen($event, 'hover')" @mouseleave="onClose($event, 'hover')">
      <div v-show="control" ref="contentRef" :class="[p_cs.s()]" :style="styles.content">
        <span>
          <slot name="content">{{ content }}</slot>
        </span>
        <McArrow v-show="showArrow" />
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="less" scoped></style>
