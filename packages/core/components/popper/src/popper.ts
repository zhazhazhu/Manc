import {
  useClassesName,
  useClickAway,
  useStyleUnit,
  useTimeout,
} from "@manc-ui/hooks";
import { isUndefine, ReadonlyExtractPropTypes } from "@manc-ui/utils";
import { isBoolean } from "@vueuse/core";
import { CSSProperties, PropType, Ref } from "vue";
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
  placement: {
    type: String as PropType<Placement>,
    default: "bottom",
  },
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
    default: 10,
  },
  hideAfter: {
    type: Number,
    default: 10,
  },
  offset: {
    type: Number,
    default: 10,
  },
};

export const popperEmits = {
  [EventName.UPDATE_VISIBLE]: (val: boolean) => isBoolean(val),
};

export type PopperProps = ReadonlyExtractPropTypes<typeof popperProps>;

export function usePopper(props: PopperProps) {
  const triggerRef = ref<HTMLDivElement>();
  const contentRef = ref<HTMLDivElement>();
  const { trigger, width } = toRefs(props);
  const control = ref(props.visible || false);
  const position = usePosition(triggerRef, props);

  const arrowStyle = computed<CSSProperties>(() => {
    if (!triggerRef.value) return {};
    return {
      transform: `translate(${width.value / 2 - 15}px, 0px)`,
      top: "-6px",
    };
  });

  const contentStyle = computed<CSSProperties>(() => {
    return {
      transform: `translate(${position.left}px, ${position.top}px)`,
      width: useStyleUnit(width).value,
      zIndex: 2023,
      inset: "0 auto auto 0",
    };
  });

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
    position,
    arrowStyle,
    contentStyle,
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

function usePosition(
  _ref: Ref<HTMLDivElement | undefined>,
  props: PopperProps
) {
  const position = reactive({
    top: 0,
    left: 0,
  });

  const { left, top, width, height } = useElementBounding(_ref);

  watch([left, top, width, height], ([left, top, width, height]) => {
    if (_ref.value) {
      position.top = top + height + 10 || 0;
      position.left =
        left + width / 2 - props.width / 2 < 0
          ? 0
          : left + width / 2 - props.width / 2 || 0;
    }
  });
  return position;
}

export { POPPER_CONTAINER_ID, createPopperContainer };
