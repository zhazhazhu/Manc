<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks'
import { MENU_INJECTION_KEY } from '@manc-ui/token'
import { menuProps } from './menu'

const props = defineProps(menuProps)

const cs = useClassesName('menu')

provide(MENU_INJECTION_KEY, { mode: props.mode })
</script>

<template>
  <ul :class="[cs.s(), cs.m(mode)]">
    <slot name="default" />
  </ul>
</template>

<style lang="less" scoped></style>
