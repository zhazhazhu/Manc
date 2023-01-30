<script lang='ts' setup>
import { MaButton } from "manci-ui";

const buttonRef = ref()

function handleClick() {
  console.log('hi', buttonRef.value)
}
</script>

<template>
  <MaButton type='primary' @click="handleClick" size="large">主要按钮</MaButton>
  <MaButton type='primary' @click="handleClick">主要按钮</MaButton>
  <MaButton type='primary' @click="handleClick" size='small'>主要按钮</MaButton>
</template>

<style lang="less" scoped>

</style>
