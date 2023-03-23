<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks'
import { McPopper } from 'manci-ui'
import { MENU_INJECTION_KEY } from '@manc-ui/token'
import { submenuProps, useSubmenu } from './sub-menu'

const props = defineProps(submenuProps)

const { arrowDirections, submenuRef, popperRef, isFirstLevel } = useSubmenu(props)

const { mode, uniqueOpened, openMenus } = inject(MENU_INJECTION_KEY)!

const cs = useClassesName('sub-menu')

function openMenu() {
  if (openMenus.value.has(props.index))
    return openMenus.value.delete(props.index)
  openMenus.value.add(props.index)
  if (uniqueOpened && isFirstLevel.value)
    openMenus.value = new Set(Array.from(openMenus.value).filter(menu => menu === props.index))
}

defineExpose({
  submenuRef,
  popperRef,
})
</script>

<template>
  <li ref="submenuRef" :class="[cs.s()]">
    <template v-if="mode === 'vertical'">
      <McPopper
        ref="popperRef"
        :width="150"
        :trigger="trigger"
        :show-arrow="false"
        :offset="popperOffset"
        :class="[cs.m('popper')]"
        :append-body="isFirstLevel"
        :placement="isFirstLevel ? 'bottom-start' : 'right-start'"
        @update:visible="arrowDirections = !arrowDirections"
      >
        <template #default>
          <slot name="title" />
          <div :class="[cs.m('arrow')]">
            <div v-show="!arrowDirections" i-ic-baseline-keyboard-arrow-up />
            <div v-show="arrowDirections" i-ic-baseline-keyboard-arrow-down />
          </div>
        </template>

        <template #content>
          <div :class="[cs.m('content')]">
            <slot name="default" />
          </div>
        </template>
      </McPopper>
    </template>

    <template v-else>
      <div :class="[cs.m('title')]" @click="openMenu">
        <slot name="title" />
        <div :class="[cs.m('arrow')]">
          <div v-show="!arrowDirections" i-ic-baseline-keyboard-arrow-up />
          <div v-show="arrowDirections" i-ic-baseline-keyboard-arrow-down />
        </div>
      </div>
      <ul v-show="openMenus.has(index)" :class="cs.m('content')">
        <slot name="default" />
      </ul>
    </template>
  </li>
</template>

<style lang="less" scoped></style>
