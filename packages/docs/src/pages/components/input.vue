<script lang='ts' setup>
import { McInput, McTab, McTabs } from 'manci-ui'

const activeName = ref('Preview')
const input = ref('')
</script>

<template>
  <McTabs v-model="activeName">
    <McTab name="Preview" label="Preview">
      <p>Input</p>

      <McInput v-model="input" size="large" />
      <McInput v-model="input" size="default" />
      <McInput v-model="input" size="small" />

      <p>Type Password</p>

      <McInput v-model="input" type="password" show-password />
    </McTab>

    <McTab name="Code" label="Code">
      <p>Code</p>
    </McTab>
  </McTabs>
</template>

<style lang="less" scoped>

</style>
