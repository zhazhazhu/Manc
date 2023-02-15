<script lang="ts" setup>
import { McButton, McPopper, McSwitch } from "manci-ui";
import Button from "./pages/Button.vue";
const check = ref(false);

function onchange(val: boolean) {
  console.log("hi switch", val);
}

const visible = ref(false);
</script>

<template>
  <Button></Button>

  <McSwitch :model-value="check" size="small" @change="onchange"></McSwitch>
  <McSwitch v-model="check" size="default" disabled></McSwitch>
  <McSwitch v-model="check" size="large"></McSwitch>
  <McSwitch v-model="check" size="large"></McSwitch>

  <McPopper content="content1content1content1content1content1content1content1">
    <McButton @click="visible = !visible" style="margin-right: 10px"
      >Hover Popper</McButton
    >
  </McPopper>
  <McPopper
    trigger="click"
    content="content1content1content1content1content1content1content1"
  >
    <McButton>Hover Popper</McButton>
  </McPopper>
  <Button></Button>
</template>

<style lang="less" scoped></style>
