<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks'
import { MENU_INJECTION_KEY } from '@manc-ui/token'
import { menuProps } from './menu'

const props = defineProps(menuProps)

const cs = useClassesName('menu')

const openMenus = ref<Set<string>>(new Set())

const activeIndex = ref(props.defaultActive)

provide(MENU_INJECTION_KEY, { mode: props.mode, uniqueOpened: props.uniqueOpened, openMenus, router: props.router, activeIndex })
</script>

<template>
  <ul ref="menuRef" :class="[cs.s(), cs.m(mode)]">
    <slot name="default" />
  </ul>
</template>

<style lang="less" scoped></style>
