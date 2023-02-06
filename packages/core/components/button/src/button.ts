import { ReadonlyExtractPropTypes } from "packages/core/utils/vue";
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
    type: Object as PropType<ButtonSize>,
    default: "default",
  },
};

export type ButtonProps = ReadonlyExtractPropTypes<typeof buttonProps>;

export function useButton(props: ButtonProps) {
  const _ref = ref<HTMLButtonElement>();

  return { _ref };
}

export function useButtonCustomStyle(props: ButtonProps) {
  return computed(() => {
    return {} as CSSProperties;
  });
}
