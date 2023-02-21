<script lang="ts" setup>
import { McButton } from 'manci-ui'

const buttonRef = ref()

function handleClick() {
}
</script>

<template>
  <section>
    <McButton @click="handleClick">
      默认按钮
    </McButton>
    <McButton type="primary" @click="handleClick">
      主要按钮
    </McButton>
    <McButton type="success" @click="handleClick">
      成功按钮
    </McButton>
    <McButton type="danger" @click="handleClick">
      危险按钮
    </McButton>
  </section>
  <section>
    <McButton round @click="handleClick">
      默认按钮
    </McButton>
    <McButton type="primary" round @click="handleClick">
      主要按钮
    </McButton>
    <McButton type="success" round @click="handleClick">
      成功按钮
    </McButton>
    <McButton type="danger" round @click="handleClick">
      危险按钮
    </McButton>
  </section>
  <section>
    <McButton disabled @click="handleClick">
      默认按钮
    </McButton>
    <McButton type="primary" disabled @click="handleClick">
      主要按钮
    </McButton>
    <McButton type="success" disabled @click="handleClick">
      成功按钮
    </McButton>
    <McButton type="danger" disabled @click="handleClick">
      危险按钮
    </McButton>
  </section>
  <section>
    <McButton type="default" size="small" @click="handleClick">
      默认按钮
    </McButton>
    <McButton type="primary" size="small" @click="handleClick">
      主要按钮
    </McButton>
    <McButton type="success" size="default" @click="handleClick">
      成功按钮
    </McButton>
    <McButton type="danger" size="large" @click="handleClick">
      危险按钮
    </McButton>
  </section>
  <section>
    <McButton type="default" plain @click="handleClick">
      默认按钮
    </McButton>
    <McButton type="primary" plain @click="handleClick">
      主要按钮
    </McButton>
    <McButton type="success" plain @click="handleClick">
      成功按钮
    </McButton>
    <McButton type="danger" plain @click="handleClick">
      危险按钮
    </McButton>
  </section>
  <section>
    <McButton type="default" plain @click="handleClick">
      <template #before-icon>
        <div class="i-ic-baseline-insert-emoticon" />
      </template>图标按钮
    </McButton>
    <McButton type="primary" plain @click="handleClick">
      <template #before-icon>
        <div class="i-ic-baseline-insert-emoticon" />
      </template>图标按钮<template #after-icon>
        <div class="i-ic-baseline-insert-emoticon" />
      </template>
    </McButton>
    <McButton type="success" plain @click="handleClick">
      <template #before-icon>
        <div class="i-ic-baseline-insert-emoticon" />
      </template>
      图标按钮
      <template #after-icon>
        <div class="i-ic-baseline-insert-emoticon" />
      </template>
    </McButton>
    <McButton type="danger" plain @click="handleClick">
      <template #after-icon>
        <div class="i-ic-baseline-insert-emoticon" />
      </template>
      图标按钮
    </McButton>
  </section>
</template>

<style lang="less" scoped>
section {
  margin-bottom: 10px;
}
</style>
