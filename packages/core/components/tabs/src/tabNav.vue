<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks'
import { TABS_INJECTION_KEY } from '@manc-ui/token'

const props = defineProps<{
  navs: { label: string; name: string | number }[]
}>()
const { activeName } = inject(TABS_INJECTION_KEY)!

defineOptions({
  name: 'McTabNav',
})

const cs = useClassesName('tab-nav')
</script>

<template>
  <div :class="[cs.m('container')]">
    <div
      v-for="item in navs" :key="item.name" :class="[cs.m('item'), cs.is('active', activeName === item.name)]"
      @click="activeName = item.name"
    >
      {{ item.label }}
    </div>
  </div>
</template>
