import { useClassesName } from '@manc-ui/hooks'
import { TABS_INJECTION_KEY } from '@manc-ui/token'
import type { PropType } from 'vue'
import type { Navs } from './tabs'

export default defineComponent({
  name: 'McTabNav',
  props: {
    navs: Array as PropType<Navs[]>,
  },
  setup(props) {
    const { activeName } = inject(TABS_INJECTION_KEY)!
    const cs = useClassesName('tab-nav')

    return () =>
      <div class={[cs.m('container')]}>
        {
          props.navs?.map(item => (
            <div
              class={[cs.m('item'), cs.is('active', activeName.value === item.name)]}
              onClick={() => activeName.value = item.name}
            >
              {item.label}
            </div>
          ))}
      </div>
  },
})
