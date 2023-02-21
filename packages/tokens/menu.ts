import { InjectionKey } from "vue";

export type MenuModeType = "horizontal" | "vertical";

export interface InjectMenuContext {
  mode: MenuModeType;
}

export const MENU_INJECTION_KEY: InjectionKey<InjectMenuContext> =
  Symbol("menu");
