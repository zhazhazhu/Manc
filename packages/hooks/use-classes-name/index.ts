const namespaced = ref('mc')

const isPrefix = ref('is-')

export function useClassesName(block: string) {
  const s = () => `${namespaced.value}-${block}`

  const m = (modifier?: string) => (modifier ? `${s()}--${modifier}` : '')

  const e = (element?: string) => (element ? `${s()}__${element}` : '')

  const is = (name: string, state?: boolean) =>
    state ? `${isPrefix.value}${name}` : ''

  return { s, m, e, is }
}
