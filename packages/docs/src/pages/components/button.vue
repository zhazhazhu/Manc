<script lang='ts' setup>
import { McButton, McTab, McTabs } from 'manci-ui'

const activeName = ref('Preview')
const input = ref('')
</script>

<template>
  <McTabs v-model="activeName">
    <McTab name="Preview" label="Preview">
      <p>Button</p>

      <section>
        <McButton>
          默认按钮
        </McButton>
        <McButton type="primary">
          主要按钮
        </McButton>
        <McButton type="success">
          成功按钮
        </McButton>
        <McButton type="danger">
          危险按钮
        </McButton>
      </section>
      <section>
        <McButton round>
          默认按钮
        </McButton>
        <McButton type="primary" round>
          主要按钮
        </McButton>
        <McButton type="success" round>
          成功按钮
        </McButton>
        <McButton type="danger" round>
          危险按钮
        </McButton>
      </section>
      <section>
        <McButton disabled>
          默认按钮
        </McButton>
        <McButton type="primary" disabled>
          主要按钮
        </McButton>
        <McButton type="success" disabled>
          成功按钮
        </McButton>
        <McButton type="danger" disabled>
          危险按钮
        </McButton>
      </section>
      <section>
        <McButton type="default" size="small">
          默认按钮
        </McButton>
        <McButton type="primary" size="small">
          主要按钮
        </McButton>
        <McButton type="success" size="default">
          成功按钮
        </McButton>
        <McButton type="danger" size="large">
          危险按钮
        </McButton>
      </section>
      <section>
        <McButton type="default" plain>
          默认按钮
        </McButton>
        <McButton type="primary" plain>
          主要按钮
        </McButton>
        <McButton type="success" plain>
          成功按钮
        </McButton>
        <McButton type="danger" plain>
          危险按钮
        </McButton>
      </section>
      <section>
        <McButton type="default" plain>
          <template #before-icon>
            <div class="i-ic-baseline-insert-emoticon" />
          </template>图标按钮
        </McButton>
        <McButton type="primary" plain>
          <template #before-icon>
            <div class="i-ic-baseline-insert-emoticon" />
          </template>图标按钮<template #after-icon>
            <div class="i-ic-baseline-insert-emoticon" />
          </template>
        </McButton>
        <McButton type="success" plain>
          <template #before-icon>
            <div class="i-ic-baseline-insert-emoticon" />
          </template>
          图标按钮
          <template #after-icon>
            <div class="i-ic-baseline-insert-emoticon" />
          </template>
        </McButton>
        <McButton type="danger" plain>
          <template #after-icon>
            <div class="i-ic-baseline-insert-emoticon" />
          </template>
          图标按钮
        </McButton>
      </section>
    </McTab>

    <McTab name="Code" label="Code">
      <p>Code</p>
    </McTab>
  </McTabs>
</template>

<style lang="less" scoped>
section {
  margin-bottom: 10px;
}
</style>
