<script lang='ts' setup>
import { McButton, McInput, McPopper, McTab, McTabs } from 'manci-ui'

const activeName = ref('Preview')
</script>

<template>
  <McTabs v-model="activeName">
    <McTab name="Preview" label="Preview">
      <p>Base Popper</p>

      <McPopper trigger="hover" placement="bottom-start" :width="200" content="This is Content This is Content This is Content">
        <template #default>
          <McButton>Hover</McButton>
        </template>
      </McPopper>

      <p>Custom Content</p>

      <McPopper trigger="hover" placement="bottom-start" :width="200">
        <template #default>
          <McButton>Hover</McButton>
        </template>

        <template #content>
          <p>
            This is Popper
          </p>
          <McInput />
        </template>
      </McPopper>
    </McTab>

    <McTab name="Code" label="Code">
      <p>Code</p>
    </McTab>
  </McTabs>
</template>

<style lang="less" scoped>

</style>
