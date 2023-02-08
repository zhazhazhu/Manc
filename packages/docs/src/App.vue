<script lang="ts" setup>
import { MaSwitch } from "manci-ui";
import Button from "./pages/Button.vue";
const check = ref(false);

function onchange(val: boolean) {
  console.log("hi switch", val);
}
</script>

<template>
  <Button></Button>
  <MaSwitch :model-value="check" size="small" @change="onchange"></MaSwitch>
  <MaSwitch v-model="check" size="default" disabled></MaSwitch>
  <MaSwitch v-model="check" size="large"></MaSwitch>
</template>

<style lang="less" scoped></style>
