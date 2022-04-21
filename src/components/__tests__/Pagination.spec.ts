import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Pagination from '@/components/Pagination.vue'

describe('Pagination', () => {
  const wrapper = mount(Pagination, {
    props: {
      activePage: 0,
      totalPages: 10,
    },
  })

  it('should render component', () => {
    expect(wrapper.find('.pagination__page').exists()).toBeTruthy()
  })

  const leftNav = wrapper.find('.pagination__nav--left')
  const rightNav = wrapper.find('.pagination__nav--right')

  it('left navigation should be disabled', () => {
    expect(leftNav.classes()).toContain('pagination__nav--disabled')
  })

  it('left navigation should not emit event when clicked', () => {
    leftNav.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('update')
  })

  it('right navigation should be active', () => {
    expect(rightNav.classes()).not.toContain('pagination__nav--disabled')
  })

  it('right navigation should emit event when clicked', () => {
    rightNav.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update')
  })

  it('short page should have right and left navs able when activePage is 1', async () => {
    await wrapper.setProps({
      activePage: 1,
      totalPages: 3,
    })
    expect(leftNav.classes()).not.toContain('pagination__nav--disabled')
    expect(rightNav.classes()).not.toContain('pagination__nav--disabled')
  })
})
