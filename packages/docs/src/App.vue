<script lang="ts" setup>
import { McButton, McMenu, McMenuItem, McPopper, McSubMenu, McSwitch } from "manci-ui";
import Button from "./pages/Button.vue";
const check = ref(false);

function onchange(val: boolean) {
  console.log("hi switch", val);
}
</script>

<template>
  <McMenu style="margin-bottom: 10px;">
    <McMenuItem>MI</McMenuItem>
    <McMenuItem>Manc UI</McMenuItem>
    <McMenuItem>File</McMenuItem>
    <McSubMenu>
      <template #title>
        Edit
      </template>
      <McMenuItem>Undo</McMenuItem>
      <McMenuItem>Redo</McMenuItem>
      <McMenuItem>Cut</McMenuItem>
      <McMenuItem>Copy</McMenuItem>
      <McMenuItem>Paste</McMenuItem>
    </McSubMenu>
  </McMenu>

  <Button></Button>
  <McButton plain :border="false" color="rgb(51 65 85/1)" disabled>默认按钮</McButton>

  <div style="margin-bottom: 10px">
    <McSwitch :model-value="check" size="small" @change="onchange"></McSwitch>
    <McSwitch v-model="check" size="default" disabled></McSwitch>
    <McSwitch v-model="check" size="large"></McSwitch>
    <McSwitch v-model="check" size="large"></McSwitch>
  </div>
  <div style="margin-bottom: 10px">
    <McButton> 默认按钮</McButton>
    <McButton type="primary">主要按钮</McButton>
    <McButton type="success">成功按钮</McButton>
    <McButton type="danger">危险按钮</McButton>
    <McPopper :width="500" trigger="click" content="this is content, this is content, this is content">
      <McButton style="margin: 10px">Click Popper</McButton>
    </McPopper>
  </div>
</template>

<style lang="less" scoped></style>
