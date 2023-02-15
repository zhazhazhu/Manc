import { ReadonlyExtractPropTypes } from "@manc-ui/utils";
import { PropType } from "vue";
export type MenuModeType = "horizontal" | "vertical";

export const menuProps = {
  mode: {
    type: String as PropType<MenuModeType>,
    default: "vertical",
  },
};

export type MenuProps = ReadonlyExtractPropTypes<typeof menuProps>;
