import type { Fn, MaybeRef } from '@vueuse/core'
import { resolveUnref, useEventListener } from '@vueuse/core'

export interface UseClickAwayOptions {
  eventName?: string
  excepts?: Array<MaybeRef<Element | undefined>>
}

export function useClickAway(
  target: MaybeRef<Element | undefined>,
  options: UseClickAwayOptions = {},
) {
  let cleanupListener: Fn | undefined
  const { eventName = 'click', excepts = [] } = options

  const registerListener = (listener: EventListener) => {
    cleanupListener?.()

    const onClick = (event: Event) => {
      const element = resolveUnref(target)
      if (
        element
        && !element.contains(event.target as Node)
        && !excepts.some(el => resolveUnref(el)?.contains(event.target as Node))
      )
        listener(event)
    }

    cleanupListener = useEventListener(document, eventName, onClick)
  }

  return {
    registerListener,
    cleanupListener,
  } as const
}
