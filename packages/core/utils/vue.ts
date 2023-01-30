import {
  App,
  Component,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
  Plugin,
} from "vue";

export const withInstall = <T extends Component>(main: T) => {
  (main as Component & Plugin).install = (app: App): void => {
    app.component(main.name!, main);
  };
  return main;
};

export type ReadonlyExtractPropTypes<T = ComponentObjectPropsOptions> =
  Readonly<ExtractPropTypes<T>>;
