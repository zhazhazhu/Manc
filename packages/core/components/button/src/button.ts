import { TinyColor } from "@ctrl/tinycolor";
import { ReadonlyExtractPropTypes } from "packages/core/utils/vue";
import { PropType, StyleValue } from "vue";

export type ButtonTypes =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "info"
  | "danger";

export enum ButtonSize {
  "large" = "large",
  "default" = "default",
  "small" = "small",
}

export const buttonProps = {
  type: {
    type: Object as PropType<ButtonTypes>,
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
    type: Object as PropType<keyof typeof ButtonSize>,
    default: "default",
  },
};

export type ButtonProps = ReadonlyExtractPropTypes<typeof buttonProps>;

export function useButton(props: ButtonProps) {
  const _ref = ref<HTMLButtonElement>();

  return { _ref };
}

export function useButtonCustomStyle(props: ButtonProps) {
  const color = computed(() => {
    const c: { [k in ButtonTypes]?: string } = {
      default: "#6865E9",
      primary: "#6865E9",
      success: "#55B3C0",
      danger: "#ee7070",
      warning: "#FE832E",
      info: "gray",
    };
    const bgColor = new TinyColor(c[props.type]);
    const activeBgColor = bgColor.lighten();
    return [bgColor.toString(), activeBgColor.toString()];
  });

  const style: StyleValue = {
    "--bg-color": props.color ? props.color : unref(color)[0],
    "--hover-bg-color": props.color
      ? new TinyColor(props.color).lighten().toString()
      : unref(color)[1],
    "--disabled-text-color": "#e3e6ec",
  };

  return style;
}
