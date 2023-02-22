import { mount } from '@vue/test-utils'
import { McButton } from 'manci-ui'

describe('Button.vue', () => {
  it('mount', () => {
    const wrapper = mount(() => <McButton type='primary'></McButton>)

    const classes = wrapper.classes()

    expect(classes).toContain('mc-button')

    expect(classes).toContain('mc-button--primary')
  })

  it('type', () => {
    const wrapper = mount(() => <McButton type='danger'></McButton>)

    const classes = wrapper.classes()

    expect(classes).toContain('mc-button--danger')
  })

  it('link', () => {
    const wrapper = mount(() => <McButton type='primary' link></McButton>)

    const classes = wrapper.classes()

    expect(classes).toContain('is-link')
  })

  it('disabled', () => {
    const wrapper = mount(() => <McButton type='primary' disabled></McButton>)

    const classes = wrapper.classes()

    expect(classes).toContain('is-disabled')
  })

  it('plain', () => {
    const wrapper = mount(() => <McButton type='primary' plain></McButton>)

    const classes = wrapper.classes()

    expect(classes).toContain('is-plain')
  })
})
