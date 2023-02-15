import { useClassesName, useClickAway, useTimeout } from "@manc-ui/hooks";
import { isUndefine, ReadonlyExtractPropTypes } from "@manc-ui/utils";
import { Fn, isBoolean } from "@vueuse/core";
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
};

export const popperEmits = {
  [EventName.UPDATE_VISIBLE]: (val: boolean) => isBoolean(val),
};

export type PopperProps = ReadonlyExtractPropTypes<typeof popperProps>;

export function usePopper(props: PopperProps) {
  let cleanup: Fn | undefined;
  const triggerRef = ref<HTMLDivElement>();
  const { trigger, width } = toRefs(props);

  const control = ref(props.visible || false);

  function open() {
    if (!isUndefine(props.visible).value) return;
    cleanup = useClickAway(triggerRef, close);
    if (trigger.value === "click") control.value = !control.value;
    else control.value = true;
  }
  function close() {
    if (!isUndefine(props.visible).value) return;
    control.value = false;
    cleanup?.();
  }
  const position = usePosition(triggerRef, props);

  const arrowStyle = ref<CSSProperties>({
    transform: `translate(${width.value / 2 - 15}px, 0px)`,
    top: "-6px",
  });

  if (!isUndefine(props.visible).value) {
    watch(
      () => props.visible,
      (val) => {
        control.value = val!;
      }
    );
  }

  return { triggerRef, open, close, control, position, arrowStyle };
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

  const onOpen = (type: Trigger) => {
    registerTimeout(() => {
      props.trigger === type && open();
    }, 50);
  };

  const onClose = (type: Trigger) => {
    registerTimeout(() => {
      props.trigger === type && close();
    }, 50);
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

  onMounted(() => {
    if (_ref.value) {
      position.top = _ref.value.offsetTop + _ref.value?.clientHeight + 10 || 0;
      position.left =
        _ref.value.offsetLeft + _ref.value.clientWidth / 2 - props.width / 2 ||
        0;
    }
  });
  return position;
}

export { POPPER_CONTAINER_ID, createPopperContainer };
