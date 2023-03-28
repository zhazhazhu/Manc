<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks'
import { tabsEmits, tabsProps, useTabs } from './tabs'
import TabNav from './tabNav.vue'
const props = defineProps(tabsProps)
const emit = defineEmits(tabsEmits)
defineOptions({
  name: 'McTabs',
})
const { navs } = useTabs(props, emit)
const cs = useClassesName('tabs')
</script>

<template>
  <div :class="[cs.s()]">
    <TabNav :navs="navs" />
    <div :class="[cs.m('content')]">
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>
