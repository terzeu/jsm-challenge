import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RoundedAvatar from '@/components/RoundedAvatar.vue'
import ESize from '@/types/ESize'

describe('RoundedAvatar', () => {
  const mockAlt = 'some alt'
  const mockPhoto = 'some photo'

  const wrapper = mount(RoundedAvatar, {
    props: {
      alt: mockAlt,
      photo: '',
    },
  })

  it('should render component', () => {
    expect(wrapper.html()).toContain('<svg')
    expect(wrapper.vm.$props.alt).toBe(mockAlt)
    expect(wrapper.vm.$props.photo).not.toBe(mockPhoto)
  })

  it('should have defaul size', async () => {
    await wrapper.setProps({ photo: mockPhoto })
    expect(wrapper.vm.$props.photo).toBe(mockPhoto)
    expect(wrapper.find('.rounded-avatar--md').exists()).toBeTruthy()
  })

  it('should change class modifier when size is changed', async () => {
    await wrapper.setProps({ size: ESize.LG })
    expect(wrapper.find('.rounded-avatar--lg').exists()).toBeTruthy()
  })
})
