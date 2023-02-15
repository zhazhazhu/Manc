<script lang="ts" setup>
import { useClassesName } from "@manc-ui/hooks";
import { POPPER_INJECTION_KEY } from "@manc-ui/token";

const cs = useClassesName("popper");

const { arrowStyle } = inject(POPPER_INJECTION_KEY)!;
</script>

<template>
  <span :class="[cs.e('arrow')]" data-popper-arrow :style="arrowStyle"></span>
</template>

<style lang="less" scoped></style>
