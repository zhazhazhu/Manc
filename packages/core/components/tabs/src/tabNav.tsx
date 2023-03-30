import { useClassesName } from '@manc-ui/hooks'
import { TABS_INJECTION_KEY } from '@manc-ui/token'
import type { PropType } from 'vue'
import type { Navs } from './tabs'

export default defineComponent({
  name: 'McTabNav',
  props: {
    navs: Array as PropType<Navs[]>,
  },
  emits: {
    tabClick: (tab: Navs, tabName: string | number, ev: Event) =>
      ev instanceof Event,
  },
  setup(props, { emit }) {
    const { activeName } = inject(TABS_INJECTION_KEY)!
    const cs = useClassesName('tab-nav')

    function handleClick(item: Navs, event: Event) {
      activeName.value = item.name
      emit('tabClick', item, item.name, event)
    }

    return () =>
      <div class={[cs.m('container')]}>
        {
          props.navs?.map(item => (
            <div
              class={[cs.m('item'), cs.is('active', activeName.value === item.name)]}
              onClick={event => handleClick(item, event)}
            >
              {item.label}
            </div>
          ))}
      </div>
  },
})
