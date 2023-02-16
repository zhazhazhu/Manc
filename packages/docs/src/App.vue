<script lang="ts" setup>
import { McButton, McPopper, McSwitch } from "manci-ui";
import Button from "./pages/Button.vue";
const check = ref(false);

function onchange(val: boolean) {
  console.log("hi switch", val);
}

const visible = ref(false);
const visible1 = ref(false);
</script>

<template>
  <Button></Button>

  <div style="margin-bottom: 10px">
    <McSwitch :model-value="check" size="small" @change="onchange"></McSwitch>
    <McSwitch v-model="check" size="default" disabled></McSwitch>
    <McSwitch v-model="check" size="large"></McSwitch>
    <McSwitch v-model="check" size="large"></McSwitch>
  </div>
  <div style="margin-bottom: 10px">
    <McPopper
      v-model:visible="visible"
      :disabled="true"
      :width="150"
      content="this is content, this is content, this is content"
    >
      <McButton @click="visible = !visible" style="margin: 10px"
        >Disabled Popper</McButton
      >
    </McPopper>
    <McPopper
      v-model:visible="visible1"
      :width="150"
      content="this is content, this is content, this is content"
    >
      <McButton @click="visible1 = !visible1" style="margin: 10px"
        >Visible Popper</McButton
      >
    </McPopper>
    <McPopper
      trigger="hover"
      content="this is content, this is content, this is content"
    >
      <McButton style="margin: 10px">Hover Popper</McButton>
    </McPopper>
    <McPopper
      :width="500"
      trigger="click"
      content="this is content, this is content, this is content"
    >
      <McButton style="margin: 10px">Click Popper</McButton>
    </McPopper>
    <McPopper
      trigger="focus"
      content="this is content, this is content, this is content"
    >
      <McButton style="margin: 10px">Focus Popper</McButton>
    </McPopper>
    <McPopper
      trigger="contextmenu"
      content="this is content, this is content, this is content"
    >
      <McButton style="margin: 10px">Contextmenu Popper</McButton>
    </McPopper>
  </div>
</template>

<style lang="less" scoped></style>
