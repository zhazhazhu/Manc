<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks'
import { menuItemGroupProps } from './menu-item'

defineProps(menuItemGroupProps)

const cs = useClassesName('menu-item-group')
</script>

<template>
  <div :class="[cs.s()]">
    <div :class="[cs.m('title')]">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <ul :class="[cs.m('content')]">
      <slot />
    </ul>
  </div>
</template>

<style lang="less" scoped>

</style>
