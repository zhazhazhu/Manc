import { withInstall } from "@manc-ui/utils";
import MenuItem from "./src/menu-item.vue";
import Menu from "./src/menu.vue";

export const MaMenu = withInstall(Menu);

export const MaMenuItem = withInstall(MenuItem);

export default MaMenu;
