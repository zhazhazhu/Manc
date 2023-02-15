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
  usePopper,
} from "./popper";

const popperContainer = createPopperContainer();

const props = defineProps(popperProps);

const emit = defineEmits(popperEmits);

const { triggerRef, control, position, arrowStyle, open, close } =
  usePopper(props);

const { onOpen, onClose } = useDelayedToggle({ props, open, close });

const [p_cs, t_cs] = [useClassesName("popper"), useClassesName("trigger")];

provide(POPPER_INJECTION_KEY, { arrowStyle });
</script>

<template>
  <div
    ref="triggerRef"
    @mouseover="onOpen('hover')"
    @mouseleave="onClose('hover')"
    @click="onOpen('click')"
    :class="[t_cs.s()]"
  >
    <slot></slot>
  </div>
  <Teleport :to="`#${POPPER_CONTAINER_ID}`">
    <Transition
      name="mc"
      @mouseover="onOpen('hover')"
      @mouseleave="onClose('hover')"
    >
      <div
        v-show="control"
        :class="[p_cs.s()]"
        :style="{
          transform: `translate(${position.left}px, ${position.top}px)`,
          width: width + 'px',
          zIndex: 2023,
        }"
      >
        <slot name="content">{{ content }}</slot>
        <McArrow />
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="less" scoped></style>
