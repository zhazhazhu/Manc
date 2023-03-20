<script lang="ts" setup>
import { McButton, McMenu, McMenuItem, McMenuItemGroup, McPopper, McSubMenu, McSwitch } from 'manci-ui'
import Button from './pages/Button.vue'
const check = ref(false)

function onchange(val: boolean) {
}
</script>

<template>
  <McMenu style="margin-bottom: 10px;">
    <McMenuItem>MI</McMenuItem>
    <McMenuItem>Manc UI</McMenuItem>
    <McMenuItem>File</McMenuItem>
    <McSubMenu>
      <template #title>
        Edit
      </template>
      <McMenuItem>Undo</McMenuItem>
      <McMenuItem>Redo</McMenuItem>
      <McMenuItem>Cut</McMenuItem>
      <McMenuItem>Copy</McMenuItem>
      <McMenuItem>Paste</McMenuItem>
      <McSubMenu>
        <template #title>
          Edit
        </template>
        <template #default>
          <McMenuItem>Cut</McMenuItem>
          <McMenuItem>Copy</McMenuItem>
        </template>
      </McSubMenu>
    </McSubMenu>
    <McSubMenu trigger="click">
      <template #title>
        Edit
      </template>
      <McMenuItemGroup title="title">
        <McMenuItem>Cut</McMenuItem>
        <McMenuItem>Copy</McMenuItem>
        <McSubMenu trigger="click">
          <template #title>
            Edit
          </template>
          <template #default>
            <McMenuItem>Cut</McMenuItem>
            <McMenuItem>Copy</McMenuItem>
            <McMenuItem>Copy</McMenuItem>
            <McMenuItem>Copy</McMenuItem>
          </template>
        </McSubMenu>
      </McMenuItemGroup>
    </McSubMenu>
  </McMenu>

  <Button />
  <McButton plain :border="false" color="rgb(51 65 85/1)" disabled>
    默认按钮
  </McButton>

  <div style="margin-bottom: 10px">
    <McSwitch :model-value="check" size="small" @change="onchange" />
    <McSwitch v-model="check" size="default" disabled />
    <McSwitch v-model="check" size="large" />
    <McSwitch v-model="check" size="large" />
  </div>
  <div style="margin-bottom: 10px">
    <McButton> 默认按钮</McButton>
    <McButton type="primary">
      主要按钮
    </McButton>
    <McButton type="success">
      成功按钮
    </McButton>
    <McButton type="danger">
      危险按钮
    </McButton>
    <McPopper content="Tooltip" placement="bottom" trigger="click">
      <McButton>
        Click Popper
      </McButton>
    </McPopper>
  </div>
</template>

<style lang="less" scoped></style>
