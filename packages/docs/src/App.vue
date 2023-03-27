<script lang="ts" setup>
import { McButton, McInput, McMenu, McMenuItem, McPopper, McSelect, McSubMenu, McSwitch } from 'manci-ui'
import Button from './pages/Button.vue'
import PhMagnifyingGlassLight from '~icons/ph/magnifying-glass-light'

const check = ref(false)

const input = ref('')

function onchange(val: boolean) {
}
</script>

<template>
  <McMenu style="margin-bottom: 10px;" mode="vertical" unique-opened router>
    <McMenuItem index="1">
      MI
    </McMenuItem>
    <McMenuItem index="2">
      Manc UI
    </McMenuItem>
    <McMenuItem index="3">
      File
    </McMenuItem>
    <McSubMenu index="4">
      <template #title>
        Edit
      </template>
      <McMenuItem index="4-1">
        Undo
      </McMenuItem>
      <McMenuItem index="4-1">
        Redo
      </McMenuItem>
      <McMenuItem index="4-2">
        Cut
      </McMenuItem>
      <McMenuItem index="4-3">
        Copy
      </McMenuItem>
      <McMenuItem index="4-4">
        Paste
      </McMenuItem>
      <McSubMenu index="4-4-1">
        <template #title>
          Edit
        </template>
        <template #default>
          <McMenuItem index="4-4-1-1">
            Cut
          </McMenuItem>
          <McMenuItem index="4-4-1-2">
            Copy
          </McMenuItem>
        </template>
      </McSubMenu>
    </McSubMenu>
  </McMenu>

  <div>
    <McInput v-model="input" size="large" />
    <McInput v-model="input" />
    <McInput v-model="input" size="small" />
  </div>
  <div>
    <McInput v-model="input" size="large" disabled />
    <McInput v-model="input" disabled />
    <McInput v-model="input" size="small" disabled />
  </div>
  <div>
    <McInput v-model="input" type="password" show-password />
  </div>
  <div>
    <McInput v-model="input" placeholder="Please search">
      <template #prefix>
        <PhMagnifyingGlassLight />
      </template>
    </McInput>
  </div>
  <div>
    <McInput v-model="input" type="textarea" :rows="4" />
  </div>

  <McSelect />

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
