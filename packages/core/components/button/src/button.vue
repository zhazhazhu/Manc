<script lang="ts" setup>
import { useClassesName } from "@manc-ui/hooks";
import { buttonProps, useButton, useButtonCustomStyle } from "./button";

const props = defineProps(buttonProps);

const buttonStyle = useButtonCustomStyle(props);

const cs = useClassesName("button");

const { _ref } = useButton(props);
</script>

<template>
  <button
    :class="[
      cs.s(),
      cs.m(type),
      cs.m(size),
      cs.is('disabled', disabled),
      cs.is('link', link),
      cs.is('plain', plain),
      cs.is('round', round),
    ]"
    :style="buttonStyle"
    :disabled="disabled"
    :autofocus="autofocus"
    type="button"
    ref="_ref"
  >
    <slot name="before-icon"> </slot>
    <slot name="default"></slot>
    <slot name="after-icon"></slot>
  </button>
</template>
