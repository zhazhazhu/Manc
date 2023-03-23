<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks'
import { MENU_INJECTION_KEY } from '@manc-ui/token'
import type { Router } from 'vue-router'
import { menuItemEmits, menuItemProps } from './menu-item'
import { EventName } from './event'

const props = defineProps(menuItemProps)

const emit = defineEmits(menuItemEmits)

const cs = useClassesName('menu-item')

const { router, defaultActive } = inject(MENU_INJECTION_KEY)!

const instance = getCurrentInstance()!

const active = computed(() => props.index === defaultActive)

function handleClick() {
  const _router = instance.appContext.config.globalProperties.$router as Router
  if (router && _router)
    _router.push(props.route || props.index!)

  emit(EventName.CLICK, {
    index: props.index,
    route: props.route,
    active: active.value,
  })
}
</script>

<template>
  <li :class="[cs.s()]" @click="handleClick">
    <slot name="default" />
  </li>
</template>

<style lang="less" scoped></style>
