<script lang="ts" setup>
import { useClassesName } from '@manc-ui/hooks'
import { EventName } from '../../../enum/event'
import { switchEmits, switchProps } from './switch'

const props = defineProps(switchProps)

const emit = defineEmits(switchEmits)

const cs = useClassesName('switch')

const isControlled = ref(props.modelValue !== false)

const checked = computed(() => props.modelValue)

const onclickSwitch = () => {
  if (props.disabled)
    return
  isControlled.value = !isControlled.value
  emit(EventName.UPDATE_MODEL_VALUE, isControlled.value)
  emit(EventName.CHANGE, isControlled.value)
}
</script>

<template>
  <div
    :class="[
      cs.s(),
      cs.m(size),
      cs.is('checked', checked),
      cs.is('disabled', disabled),
    ]"
    @click="onclickSwitch"
  >
    <span :class="cs.e('core')">
      <span :class="[cs.e('action')]" />
    </span>
  </div>
</template>
