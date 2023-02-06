<script lang="ts" setup>
import { MaButton, MaMenu, MaMenuItem } from "manci-ui";

const buttonRef = ref();

function handleClick() {
  console.log("hi", buttonRef.value);
}
</script>

<template>
  <MaButton @click="handleClick">默认按钮</MaButton>
  <MaButton type="primary" @click="handleClick">主要按钮</MaButton>
  <MaButton type="success" @click="handleClick">成功按钮</MaButton>
  <MaButton type="danger" @click="handleClick">危险按钮</MaButton>
  <MaMenu>
    <MaMenuItem>1</MaMenuItem>
    <MaMenuItem>2</MaMenuItem>
  </MaMenu>
</template>

<style lang="less" scoped></style>
