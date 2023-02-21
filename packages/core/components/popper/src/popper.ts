import {
  useClassesName,
  useClickAway,
  useStyleUnit,
  useTimeout,
} from "@manc-ui/hooks";
import type { UseStylesReturn } from "@manc-ui/token";
import { isUndefine, ReadonlyExtractPropTypes } from "@manc-ui/utils";
import { isBoolean } from "@vueuse/core";
import { PropType, Ref } from "vue";
import { EventName } from "./events";

const POPPER_CONTAINER_ID = useClassesName("popper").m("container");

const popperContainerEl = ref<HTMLDivElement>();

function createPopperContainer() {
  popperContainerEl.value = document.getElementById(
    POPPER_CONTAINER_ID
  ) as HTMLDivElement;

  if (!popperContainerEl.value) {
    popperContainerEl.value = document.createElement("div");
    popperContainerEl.value.style.zIndex = "2023";
    popperContainerEl.value.id = POPPER_CONTAINER_ID;
    document.body.appendChild(popperContainerEl.value);
  }

  return popperContainerEl;
}

export type Trigger = "click" | "focus" | "hover" | "contextmenu";

export type Placement = "top" | "bottom" | "left" | "right";

export const popperProps = {
  trigger: {
    type: String as PropType<Trigger>,
    default: "hover",
  },
  content: {
    type: String,
    default: "",
  },
  // placement: {
  //   type: String as PropType<Placement>,
  //   default: "bottom",
  // },
  visible: {
    type: Boolean,
    default: undefined,
  },
  width: {
    type: Number,
    default: 200,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  showAfter: {
    type: Number,
    default: 20,
  },
  hideAfter: {
    type: Number,
    default: 20,
  },
  offset: {
    type: Number,
    default: 0,
  },
};

export const popperEmits = {
  [EventName.UPDATE_VISIBLE]: (val: boolean) => isBoolean(val),
};

export type PopperProps = ReadonlyExtractPropTypes<typeof popperProps>;

export function usePopper(props: PopperProps) {
  const triggerRef = ref<HTMLDivElement>();
  const contentRef = ref<HTMLDivElement>();
  const control = ref(props.visible || false);
  const styles = useStyles(triggerRef, contentRef, props);
  const { trigger } = toRefs(props);

  const { registerListener, cleanupListener } = useClickAway(contentRef, {
    excepts: props.trigger === "focus" ? [] : [triggerRef],
  });

  function open() {
    if (!isUndefine(props.visible).value) return;
    registerListener(close);
    if (trigger.value === "click") control.value = !control.value;
    else control.value = true;
  }
  function close() {
    if (!isUndefine(props.visible).value) return;
    control.value = false;
    cleanupListener?.();
  }

  if (!isUndefine(props.visible).value) {
    watch(
      () => props.visible,
      (val) => {
        if (props.disabled) return;
        control.value = val!;
      }
    );
  }

  return {
    triggerRef,
    contentRef,
    open,
    close,
    control,
    styles,
  };
}

export type UseDelayedToggleProps = {
  props: PopperProps;
  open: (event?: Event) => void;
  close: (event?: Event) => void;
};

export function useDelayedToggle({
  props,
  open,
  close,
}: UseDelayedToggleProps) {
  const { registerTimeout } = useTimeout();

  const onOpen = (event: Event, type: Trigger) => {
    if (props.disabled) return;
    if (type === "contextmenu") {
      event.preventDefault?.();
    }
    registerTimeout(() => {
      props.trigger === type && open();
    }, props.showAfter);
  };

  const onClose = (event: Event, type: Trigger) => {
    registerTimeout(() => {
      props.trigger === type && close();
    }, props.hideAfter);
  };

  return {
    onOpen,
    onClose,
  };
}

function useStyles(
  triggerRef: Ref<HTMLDivElement | undefined>,
  contentRef: Ref<HTMLDivElement | undefined>,
  props: PopperProps
) {
  const windowSize = useWindowSize();
  const { left, top, width, height } = useElementBounding(triggerRef);
  const styles = reactive<UseStylesReturn>({
    arrow: {},
    content: {},
  });

  function arrowEffect(contentLeft: number) {
    styles.arrow = {
      transform: `translate(${
        left.value - contentLeft + width.value / 2 - 5
      }px, 0px)`,
      top: "-6px",
    };
  }

  function contentEffect(contentLeft: number) {
    const contentTop = top.value + height.value + props.offset || 0;
    styles.content = {
      transform: `translate(${contentLeft}px, ${contentTop}px)`,
      minWidth: useStyleUnit(props.width).value,
      zIndex: 2023,
      inset: "0 auto auto 0",
    };
  }

  watch(
    [triggerRef, windowSize.width, windowSize.height],
    () => {
      if (!triggerRef.value) return;
      let contentLeft = left.value + width.value / 2 - props.width / 2;
      contentLeft =
        contentLeft < 0
          ? 0
          : contentLeft + props.width > windowSize.width.value
          ? windowSize.width.value - props.width
          : contentLeft || 0;
      arrowEffect(contentLeft);
      contentEffect(contentLeft);
    },
    {
      deep: true,
      immediate: true,
    }
  );

  return computed(() => styles);
}

export { POPPER_CONTAINER_ID, createPopperContainer };
