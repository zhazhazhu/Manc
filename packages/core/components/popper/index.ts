import { withInstall } from '@manc-ui/utils'
import Arrow from './src/arrow.vue'
import Popper from './src/popper.vue'
export * from './src/events'
export * from './src/popper'

export const McPopper = withInstall(Popper)
export const McArrow = withInstall(Arrow)

export default McPopper
