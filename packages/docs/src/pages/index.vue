<script lang='ts' setup>
import { McButton } from 'manci-ui'
import { useRouter } from 'vue-router'

const router = useRouter()
function onGetting() {
  router.push('/components')
}
</script>

<template>
  <p>
    This is a beautiful ui based on vue3.
  </p>
  <McButton @click="onGetting">
    Getting Started
  </McButton>
</template>

<style lang="less" scoped>

</style>
