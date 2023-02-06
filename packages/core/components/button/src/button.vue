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
    :class="[cs.s(), cs.m(type), cs.m(size), cs.is('is-disabled', disabled)]"
    :style="buttonStyle"
    :disabled="disabled"
    ref="_ref"
  >
    <slot name="default"></slot>
  </button>
</template>
