import { mount } from '@vue/test-utils'
import { McButton } from 'manci-ui'

describe('Button.vue', () => {
  it('mount', () => {
    const wrapper = mount(() => <McButton type='primary'></McButton>)

    const classes = wrapper.classes()

    expect(classes).toContain('mc-button')

    expect(classes).toContain('mc-button--primary')
  })
})
