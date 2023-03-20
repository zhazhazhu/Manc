<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks'
import { Arrow } from 'manci-ui'
import { POPPER_INJECTION_KEY } from '@manc-ui/token'
import { POPPER_CONTAINER_ID, createPopperContainer, popperEmits, popperProps, useDelayedToggle, usePopper, usePopperDOM } from './popper'
import { EventName } from './events'

const props = defineProps(popperProps)

const emit = defineEmits(popperEmits)

createPopperContainer()

const { referenceRef, contentRef, arrowRef, control, state, open, close, update } = usePopper(props)

const { contentStyle, arrowStyle, attributes } = usePopperDOM(props, state)

const { onOpen, onClose } = useDelayedToggle({ props, open, close })

const [p_cs, t_cs] = [useClassesName('popper'), useClassesName('trigger')]

onMounted(() => {
  watch(control, (val) => {
    emit(EventName.UPDATE_VISIBLE, val)
    update()
  }, { immediate: true })
})

provide(POPPER_INJECTION_KEY, {
  contentStyle,
  arrowStyle,
  attributes,
})

defineExpose({
  referenceRef,
  contentRef,
})
</script>

<template>
  <div
    ref="referenceRef" :class="[t_cs.s()]" v-bind="$attrs" @mouseover="onOpen($event, 'hover')" @mouseleave="onClose($event, 'hover')" @mousedown="onOpen($event, 'focus')"
    @blur="onClose($event, 'focus')" @click="onOpen($event, 'click')" @contextmenu="onOpen($event, 'contextmenu')"
  >
    <slot />
  </div>

  <Teleport :to="`#${POPPER_CONTAINER_ID}`" :disabled="!appendBody">
    <Transition name="mc" @mouseover="onOpen($event, 'hover')" @mouseleave="onClose($event, 'hover')">
      <div v-show="control" ref="contentRef" :class="[p_cs.s()]" :style="contentStyle" v-bind="attributes">
        <span>
          <slot name="content">{{ content }}</slot>
        </span>
        <Arrow v-if="showArrow" ref="arrowRef" />
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="less" scoped>
</style>
