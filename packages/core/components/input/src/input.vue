<script lang='ts' setup>
import { useClassesName } from '@manc-ui/hooks'
import { EventName } from '../../../enum/event'
import { inputEmits, inputProps } from './input'
import PhEyeDuotone from '~icons/ph/eye-duotone'
import PhEyeSlashDuotone from '~icons/ph/eye-slash-duotone'

type InputTarget = HTMLInputElement | HTMLTextAreaElement

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const inputRef = ref<InputTarget>()
const input = computed(() => props.modelValue)
const passwordVisible = ref(false)
const focused = ref(false)

const [i_cs, t_cs] = [useClassesName('input'), useClassesName('textarea')]

const containerClasses = computed(() => [
  props.type !== 'textarea' ? i_cs.s() : t_cs.s(),
  props.type !== 'textarea' && i_cs.m(props.size),
  props.type !== 'textarea' ? i_cs.is('focus', focused.value) : t_cs.is('focus', focused.value),
  props.type !== 'textarea' ? i_cs.is('disabled', props.disabled) : t_cs.is('disabled', props.disabled),
])

function handleInput(event: Event) {
  let { value } = (event.target as InputTarget)

  if (props.parser)
    value = props.parser(value)

  if (props.formatter)
    value = props.formatter(value) as string

  emit('input', value)
}

watch(input, (value) => {
  if (!inputRef.value)
    return
  inputRef.value.value! = value as string
})

const focus = () => inputRef.value?.focus()

function handleShowPsd() {
  passwordVisible.value = !passwordVisible.value
  focus()
}

function handleFocus(event: Event) {
  focused.value = true
  emit('focus', event)
}

function handleBlur(event: Event) {
  focused.value = false
  emit('blur', event)
  emit(EventName.UPDATE_MODEL_VALUE, (event.target as InputTarget)?.value)
}
</script>

<template>
  <div :class="containerClasses">
    <template v-if="type !== 'textarea'">
      <span :class="[i_cs.m('prefix')]">
        <slot name="prefix" />
      </span>

      <input
        ref="inputRef"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :class="[i_cs.e('inner')]"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keyup.enter="handleBlur"
      >

      <span :class="[i_cs.m('suffix')]" @click.stop="handleShowPsd">
        <slot name="suffix" />
        <template v-if="type === 'password' && showPassword">
          <PhEyeDuotone v-if="!passwordVisible" />
          <PhEyeSlashDuotone v-else />
        </template>
      </span>
    </template>
    <template v-else>
      <textarea
        ref="inputRef"
        :class="[t_cs.e('inner'), t_cs.is('disabled', disabled)]"
        :placeholder="placeholder"
        :rows="rows"
        :disabled="disabled"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keyup.enter="handleBlur"
      />
    </template>
  </div>
</template>

<style lang="less" scoped>

</style>
