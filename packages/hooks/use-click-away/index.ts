import { isBrowser } from "@manc-ui/utils";
import { MaybeRef, resolveUnref, useEventListener } from "@vueuse/core";

export type UseClickAwayOptions = {
  eventName?: string;
};

export function useClickAway(
  target: MaybeRef<Element | undefined>,
  listener: EventListener,
  options: UseClickAwayOptions = {}
) {
  if (!isBrowser) {
    return;
  }

  const { eventName = "click" } = options;

  const onClick = (event: Event) => {
    const element = resolveUnref(target);
    if (element && !element.contains(event.target as Node)) {
      listener(event);
    }
  };

  return useEventListener(document, eventName, onClick);
}
