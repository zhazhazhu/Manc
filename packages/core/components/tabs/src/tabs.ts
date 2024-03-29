import type { ReadonlyExtractPropTypes } from '@manc-ui/utils'
import { TABS_INJECTION_KEY } from '@manc-ui/token'
import type { Component, ComponentInternalInstance, RendererElement, RendererNode, VNode, VNodeNormalizedChildren } from 'vue'
import { isVNode } from 'vue'
import { isNumber, isString } from '@vueuse/core'
import { EventName } from '../../../enum/event'
import type { TabChildrenProps } from './tab'

export const tabsProps = {
  modelValue: {
    type: [String, Number],
  },
}

export type TabsProps = ReadonlyExtractPropTypes<typeof tabsProps>

const isPaneName = (value: unknown): value is string | number =>
  isString(value) || isNumber(value)

export const tabsEmits = {
  [EventName.UPDATE_MODEL_VALUE]: (val: string | number) => isString(val),
  tabChange: (name: string | number) => isPaneName(name),
  tabClick: (tab: UseTabChildrenReturn, event: Event) => event instanceof Event,
}
export type TabsEmits = ((event: EventName.UPDATE_MODEL_VALUE, val: string | number) => void) & ((event: 'tabChange', name: string | number) => void)

export type NavsLabel = string | {
  label: string | VNode<RendererNode, RendererElement, {
    [key: string]: any
  }>[]
  name: string | number
}

export interface Navs {
  label: NavsLabel
  name: string | number
}

export function useTabs(props: TabsProps, emit: TabsEmits) {
  const instance = getCurrentInstance()!
  const activeName = useVModel(props, 'modelValue', emit)
  const tabPanes = useTabChild(instance, 'McTab')

  const navs = computed(() => tabPanes.children.value.map((item, index) => ({
    label: item.slots.label?.() || (item.props as TabChildrenProps).label,
    name: (item.props as TabChildrenProps).name || index,
  }) as Navs))

  watch(activeName, (value) => {
    emit('tabChange', value!)
  })

  provide(TABS_INJECTION_KEY, {
    ...tabPanes,
    activeName,
  })

  return {
    navs,
  }
}

export type UseTabChildrenReturn = ReturnType<typeof useTabChild>

export function useTabChild(vm: ComponentInternalInstance, name: string) {
  const children = ref<ComponentInternalInstance[]>([])

  function registerChild(child: ComponentInternalInstance) {
    const childComponents = getChildrenComponents(vm, name)

    const _uidList = childComponents
      .map((e) => {
        return e.component ? e.component.uid : null
      })
      .filter(Boolean) as number[]

    _uidList.forEach((uid) => {
      if (uid === child.uid)
        children.value.push(child)
    })
  }
  function unRegisterChild(child: ComponentInternalInstance) {
    children.value = children.value.filter(item => item.uid !== child.uid)
  }
  return {
    children,
    registerChild,
    unRegisterChild,
  } as const
}

export function getChildrenComponents(vm: ComponentInternalInstance, name: string) {
  if (!vm.subTree)
    return []
  const { children } = vm.subTree
  // 扁平化子节点
  const vNodes = flattedVNode(children)

  // 过滤子节点
  return vNodes.filter(vNode => (vNode.type as Component).name === name)
}

export function flattedVNode(children: VNodeNormalizedChildren | VNode) {
  const vNodes = Array.isArray(children) ? children : [children]
  const result: VNode[] = []

  vNodes.forEach((vNode) => {
    if (isVNode(vNode) && vNode.children && Array.isArray(vNode.children)) {
      result.push(...flattedVNode(vNode?.children))
    }
    else {
      if (isVNode(vNode) && vNode.component)
        result.push(vNode)
    }
    return result
  })

  return result
}
