<script lang="ts" setup>
import { buttonProps, useButton, useButtonCustomStyle } from './button';

const props = defineProps(buttonProps)

const style = useButtonCustomStyle(props)

const { _ref } = useButton(props)
</script>

<template>
  <button class="ma-button" :class="[type,link ? 'is-link' : '',disabled ? 'is-disabled' : '',size]" :style="style"
    :disabled="disabled" ref="_ref">
    <slot name="default"></slot>
  </button>
</template>

<style lang="less" scoped>
button {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  border-radius: .4rem;
  color: white;
  letter-spacing: .15rem;
}

.ma-button {
  background-color: var(--bg-color);
  cursor: pointer;

  &:hover {
    background-color: var(--hover-bg-color);
  }

  &.is-link {
    background-color: transparent;
    color: var(--bg-color);

    &:hover {
      color: var(--hover-bg-color)
    }
  }

  &.is-disabled {
    background-color: var(--hover-bg-color);
    color: var(--disabled-text-color);
    cursor: not-allowed;
  }
}

.ma-button {
  margin-right: 8px;

  &.default {
    padding: 8px 16px;
    font-size: .9rem;
  }

  &.large {
    padding: 10px 18px;
    font-size: 1rem;
  }

  &.small {
    padding: 6px 14px;
    font-size: .8rem;
  }
}
</style>
