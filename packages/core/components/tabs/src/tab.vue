<script lang='ts' setup>
import { TABS_INJECTION_KEY } from '@manc-ui/token'
import { tabChildrenProps } from './tab'

const props = defineProps(tabChildrenProps)
const instance = getCurrentInstance()!
const parentInject = inject(TABS_INJECTION_KEY)
const show = computed(() => parentInject?.activeName.value === props.name)

defineOptions({
  name: 'McTab',
})

onMounted(() => {
  parentInject && parentInject.registerChild(instance)
})
</script>

<template>
  <div v-show="show">
    <slot />
  </div>
</template>

<style lang="less" scoped>

</style>
