import { ReadonlyExtractPropTypes } from "@manc-ui/utils";
import { Trigger } from "manci-ui";
import { CSSProperties, PropType } from "vue";

export const submenuProps = {
  trigger: {
    type: String as PropType<Trigger>,
    default: "hover",
  },
};

export type SubmenuProps = ReadonlyExtractPropTypes<typeof submenuProps>;

export function useSubmenu(props: SubmenuProps) {
  const submenuRef = ref<HTMLLIElement>();
  const popperRef = ref<HTMLLIElement>();

  const menuitemStyles = computed<CSSProperties>(() => ({}));

  return {
    submenuRef,
    popperRef,
    menuitemStyles,
  };
}
