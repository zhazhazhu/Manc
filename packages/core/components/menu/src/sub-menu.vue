<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks'
import { McPopper } from 'manci-ui'
import { submenuProps, useSubmenu } from './sub-menu'

const props = defineProps(submenuProps)

const { menuitemStyles, popperRef } = useSubmenu(props)

const cs = useClassesName('sub-menu')

const { isOutside } = useMouseInElement(popperRef)
</script>

<template>
  <li ref="popperRef" :class="[cs.s()]">
    <McPopper :class="[cs.m('popper')]" :trigger="trigger" :show-arrow="false" :offset="5" :width="150">
      <template #default>
        <slot name="title" />
        <div :class="[cs.m('arrow')]">
          <div v-show="!isOutside" i-ic-baseline-keyboard-arrow-up />
          <div v-show="isOutside" i-ic-baseline-keyboard-arrow-down />
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
