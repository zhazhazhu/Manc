<script lang='ts' setup>
import { menuProps } from './menu';

const props = defineProps(menuProps)
</script>

<template>
  <ul class="ma-menu">
    <slot name="default"></slot>
  </ul>
</template>

<style lang="less" scoped>

</style>
