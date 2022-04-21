import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchInput from '../SearchInput.vue'

describe('SearchInput', () => {
  const wrapper = mount(SearchInput)

  it('should render component', () => {
    expect(wrapper.html()).toContain('input')
  })

  it('should emit search when input is filled', async () => {
    const textInput = wrapper.find('.search-input__input')
    await textInput.setValue('some value')
    expect(wrapper.emitted()).toHaveProperty('search')
  })
})
