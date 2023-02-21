<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks';
import { menuItemProps } from './menu-item';

const props = defineProps(menuItemProps)

const cs = useClassesName('menu-item')
</script>

<template>
  <li :class="[cs.s()]">
    <slot name="default"></slot>
  </li>
</template>

<style lang="less" scoped></style>
