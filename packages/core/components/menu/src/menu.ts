import { ReadonlyExtractPropTypes } from "packages/core/utils/vue";
import { PropType } from "vue";
export type MenuModeType = "horizontal" | "vertical";

export const menuProps = {
  mode: {
    type: String as PropType<MenuModeType>,
    default: "vertical",
  },
};

export type MenuProps = ReadonlyExtractPropTypes<typeof menuProps>;
