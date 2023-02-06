<script lang="ts" setup>
import { MaButton, MaMenu, MaMenuItem } from "manci-ui";

const buttonRef = ref();

function handleClick() {
  console.log("hi", buttonRef.value);
}
</script>

<template>
  <div>
    <MaButton @click="handleClick"> 默认按钮</MaButton>
    <MaButton type="primary" @click="handleClick">主要按钮</MaButton>
    <MaButton type="success" @click="handleClick">成功按钮</MaButton>
    <MaButton type="danger" @click="handleClick">危险按钮</MaButton>
  </div>
  <div>
    <MaButton @click="handleClick" round>默认按钮</MaButton>
    <MaButton type="primary" @click="handleClick" round>主要按钮</MaButton>
    <MaButton type="success" @click="handleClick" round>成功按钮</MaButton>
    <MaButton type="danger" @click="handleClick" round>危险按钮</MaButton>
  </div>
  <div>
    <MaButton @click="handleClick" disabled>默认按钮</MaButton>
    <MaButton type="primary" @click="handleClick" disabled>主要按钮</MaButton>
    <MaButton type="success" @click="handleClick" disabled>成功按钮</MaButton>
    <MaButton type="danger" @click="handleClick" disabled>危险按钮</MaButton>
  </div>
  <div>
    <MaButton type="default" @click="handleClick" size="small">
      默认按钮
    </MaButton>
    <MaButton type="primary" @click="handleClick" size="small">
      主要按钮
    </MaButton>
    <MaButton type="success" @click="handleClick" size="default"
      >成功按钮</MaButton
    >
    <MaButton type="danger" @click="handleClick" size="large">
      危险按钮
    </MaButton>
  </div>
  <div>
    <MaButton type="default" @click="handleClick" plain> 默认按钮 </MaButton>
    <MaButton type="primary" @click="handleClick" plain> 主要按钮 </MaButton>
    <MaButton type="success" @click="handleClick" plain>成功按钮</MaButton>
    <MaButton type="danger" @click="handleClick" plain> 危险按钮 </MaButton>
  </div>
  <div>
    <MaButton type="default" @click="handleClick" plain>
      <template #before-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
      </template>
      图标按钮
    </MaButton>
    <MaButton type="primary" @click="handleClick" plain>
      <template #before-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
      </template>
      图标按钮
      <template #after-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
      </template>
    </MaButton>
    <MaButton type="success" @click="handleClick" plain>
      <template #before-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
      </template>
      图标按钮
      <template #after-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
      </template>
    </MaButton>
    <MaButton type="danger" @click="handleClick" plain>
      <template #after-icon>
        <div class="i-ic-baseline-insert-emoticon"></div>
      </template>
      图标按钮
    </MaButton>
  </div>
  <MaMenu>
    <MaMenuItem>1</MaMenuItem>
    <MaMenuItem>2</MaMenuItem>
  </MaMenu>
</template>

<style lang="less" scoped></style>
