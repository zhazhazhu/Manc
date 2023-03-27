<script lang='ts' setup>
import { McInput, McPopper } from 'manci-ui'
import { selectProps } from './select'
import IcBaselineKeyboardArrowDown from '~icons/ic/baseline-keyboard-arrow-down'
import IcBaselineKeyboardArrowUp from '~icons/ic/baseline-keyboard-arrow-up'

const props = defineProps(selectProps)

const input = ref('')
const visible = ref(false)
</script>

<template>
  <div>
    <McPopper trigger="click" @update:visible="visible = !visible">
      <McInput v-model="input" readonly placeholder="Please select" :size="size">
        <template #suffix>
          <IcBaselineKeyboardArrowDown v-show="visible" />
          <IcBaselineKeyboardArrowUp v-show="!visible" />
        </template>
      </McInput>
      <template #content>
        TODO
      </template>
    </McPopper>
  </div>
</template>

<style lang="less" scoped>

</style>
