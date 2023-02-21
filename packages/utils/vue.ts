import {
  App,
  Component,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
  Plugin,
} from "vue";

export const withInstall = <T extends Component>(
  main: T,
  extra?: Record<string, any>
) => {
  (main as Component & Plugin).install = (app: App): void => {
    app.component(main.name!, main);
  };

  if (extra) {
    Object.keys(extra).forEach((key) => {
      (extra[key] as Component & Plugin).install = (app: App): void => {
        app.component(key, extra[key]);
      };
    });
  }
  return main;
};

export type ReadonlyExtractPropTypes<T = ComponentObjectPropsOptions> =
  Readonly<ExtractPropTypes<T>>;
