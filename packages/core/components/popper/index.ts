import { withInstall } from '@manc-ui/utils'
import Popper from './src/popper.vue'
import Arrow from './src/arrow.vue'
export * from './src/popper'

export const McPopper = withInstall(Popper, {
  Arrow,
})

export {
  Arrow,
}

export default McPopper
