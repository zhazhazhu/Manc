<script lang="ts" setup>
import { useClassesName } from "@manc-ui/hooks";
import { POPPER_INJECTION_KEY } from "@manc-ui/token";
import { McArrow } from "manci-ui";
import {
  createPopperContainer,
  popperEmits,
  popperProps,
  POPPER_CONTAINER_ID,
  useDelayedToggle,
  usePopper
} from "./popper";

const popperContainer = createPopperContainer();

const props = defineProps(popperProps);

const emit = defineEmits(popperEmits);

const {
  styles,
  control,
  triggerRef,
  contentRef,
  open,
  close,
} = usePopper(props);

const { onOpen, onClose } = useDelayedToggle({ props, open, close });

const [p_cs, t_cs] = [useClassesName("popper"), useClassesName("trigger")];

provide(POPPER_INJECTION_KEY, { styles });
</script>

<template>
  <div ref="triggerRef" @mouseover="onOpen($event, 'hover')" @mouseleave="onClose($event, 'hover')"
    @mousedown="onOpen($event, 'focus')" @blur="onClose($event, 'focus')" @click="onOpen($event, 'click')"
    @contextmenu="onOpen($event, 'contextmenu')" :class="[t_cs.s()]">
    <slot></slot>
  </div>

  <Teleport :to="`#${POPPER_CONTAINER_ID}`">
    <Transition name="mc" @mouseover="onOpen($event, 'hover')" @mouseleave="onClose($event, 'hover')">
      <div ref="contentRef" v-show="control" :class="[p_cs.s()]" :style="styles.content">
        <span>
          <slot name="content">{{ content }}</slot>
        </span>
        <McArrow v-show="showArrow" />
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="less" scoped></style>
