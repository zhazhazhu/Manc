<script lang='ts' setup>
import { McSwitch, McTab, McTabs } from 'manci-ui'

const activeName = ref('Preview')
const value = ref(false)
</script>

<template>
  <McTabs v-model="activeName">
    <McTab name="Preview" label="Preview">
      <p>Switch</p>

      <McSwitch v-model="value" size="large" />
      <McSwitch v-model="value" size="default" />
      <McSwitch v-model="value" size="small" />

      <p>Disabled</p>

      <McSwitch v-model="value" disabled />
    </McTab>

    <McTab name="Code" label="Code">
      <p>Code</p>
    </McTab>
  </McTabs>
</template>

<style lang="less" scoped>

</style>
