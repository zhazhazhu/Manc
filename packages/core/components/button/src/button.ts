import { ReadonlyExtractPropTypes } from "@manc-ui/utils";
import { CSSProperties, PropType } from "vue";

export type ButtonTypes =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "info"
  | "danger";

export type ButtonSize = "large" | "default" | "small";

export const buttonProps = {
  type: {
    type: String as PropType<ButtonTypes>,
    default: "default",
  },
  link: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "",
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: "small",
  },
  circle: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
};

export type ButtonProps = ReadonlyExtractPropTypes<typeof buttonProps>;

export function useButton(props: ButtonProps) {
  const _ref = ref<HTMLButtonElement>();

  return { _ref };
}

export function useButtonCustomStyle(props: ButtonProps) {
  return computed(() => {
    let style = {};
    if (props.color) {
      style = {
        "background-color": "",
      };
    }
    return style as CSSProperties;
  });
}
