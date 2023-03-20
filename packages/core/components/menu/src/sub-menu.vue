<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks'
import { McPopper } from 'manci-ui'
import { submenuProps, useSubmenu } from './sub-menu'

const props = defineProps(submenuProps)

const { arrowDirections, submenuRef, popperRef, isFirstLevel } = useSubmenu(props)

const cs = useClassesName('sub-menu')

defineExpose({
  submenuRef,
  popperRef,
})
</script>

<template>
  <li ref="submenuRef" :class="[cs.s()]">
    <McPopper
      ref="popperRef"
      :placement="isFirstLevel ? 'bottom-start' : 'right-start'"
      :class="[cs.m('popper')]"
      :trigger="trigger"
      :show-arrow="false"
      :offset="10"
      :width="150"
      :append-body="isFirstLevel"
      @update:visible="arrowDirections = !arrowDirections"
    >
      <template #default>
        <slot name="title" />
        <div :class="[cs.m('arrow')]">
          <div v-show="!arrowDirections" i-ic-baseline-keyboard-arrow-up />
          <div v-show="arrowDirections" i-ic-baseline-keyboard-arrow-down />
        </div>
      </template>

      <template #content>
        <div :class="[cs.m('content')]">
          <slot name="default" />
        </div>
      </template>
    </McPopper>
  </li>
</template>

<style lang="less" scoped></style>
