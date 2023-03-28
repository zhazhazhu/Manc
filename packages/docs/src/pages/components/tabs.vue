<script lang='ts' setup>
import { McTab, McTabs } from 'manci-ui'

const activeName = ref('Preview')
const activeName1 = ref('Account')
</script>

<template>
  <McTabs v-model="activeName">
    <McTab name="Preview" label="Preview">
      <p>Tabs</p>

      <McTabs v-model="activeName1">
        <McTab name="Account" label="Account">
          <div>Make changes to your account here. Click save when you're done.</div>
        </McTab>
        <McTab name="Password" label="Password">
          <div>Change your password here. After saving, you'll be logged out.</div>
        </McTab>
      </McTabs>
    </McTab>

    <McTab name="Code" label="Code">
      <p>Code</p>
    </McTab>
  </McTabs>
</template>

<style lang="less" scoped>

</style>
