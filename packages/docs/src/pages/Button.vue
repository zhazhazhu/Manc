<script lang="ts" setup>
import { McButton } from "manci-ui";

const buttonRef = ref();

function handleClick() {
  console.log("hi", buttonRef.value);
}
</script>

<template>
  <section>
    <McButton @click="handleClick"> 默认按钮</McButton>
    <McButton type="primary" @click="handleClick">主要按钮</McButton>
    <McButton type="success" @click="handleClick">成功按钮</McButton>
    <McButton type="danger" @click="handleClick">危险按钮</McButton>
  </section>
  <section>
    <McButton @click="handleClick" round>默认按钮</McButton>
    <McButton type="primary" @click="handleClick" round>主要按钮</McButton>
    <McButton type="success" @click="handleClick" round>成功按钮</McButton>
    <McButton type="danger" @click="handleClick" round>危险按钮</McButton>
  </section>
  <section>
    <McButton @click="handleClick" disabled>默认按钮</McButton>
    <McButton type="primary" @click="handleClick" disabled>主要按钮</McButton>
    <McButton type="success" @click="handleClick" disabled>成功按钮</McButton>
    <McButton type="danger" @click="handleClick" disabled>危险按钮</McButton>
  </section>
  <section>
    <McButton type="default" @click="handleClick" size="small">默认按钮</McButton>
    <McButton type="primary" @click="handleClick" size="small">主要按钮</McButton>
    <McButton type="success" @click="handleClick" size="default">成功按钮</McButton>
    <McButton type="danger" @click="handleClick" size="large">危险按钮</McButton>
  </section>
  <section>
    <McButton type="default" @click="handleClick" plain>默认按钮</McButton>
    <McButton type="primary" @click="handleClick" plain>主要按钮</McButton>
    <McButton type="success" @click="handleClick" plain>成功按钮</McButton>
    <McButton type="danger" @click="handleClick" plain>危险按钮</McButton>
  </section>
  <section>
    <McButton type="default" @click="handleClick" plain>
      <template #before-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
      </template>图标按钮
    </McButton>
    <McButton type="primary" @click="handleClick" plain>
      <template #before-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
      </template>图标按钮<template #after-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
      </template>
    </McButton>
    <McButton type="success" @click="handleClick" plain>
      <template #before-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
      </template>
      图标按钮
      <template #after-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
      </template>
    </McButton>
    <McButton type="danger" @click="handleClick" plain>
      <template #after-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
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
