import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Toast from '../Toast.vue'

const props = {
  text: 'hello toast',
  time: 2500
}

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('Toast.vue', () => {
  it('Toast组件设置Props', async () => {
    const wrapper = shallowMount(Toast, {
      propsData: props
    })

    expect(wrapper).toBeTruthy()

    expect(wrapper.findAll('div').length).toBe(0)

    // 判断是否有计数
    const init = vi.getTimerCount()
    expect(init).toBe(0)

    await wrapper.setProps({
      modelValue: true
    })
    const html = wrapper.html()

    expect(html).toContain(props.text)

    const count = vi.getTimerCount()
    expect(count).toBe(1)

    // 执行timers
    // vi.runAllTimers()

    // 指定执行多长时间
    vi.advanceTimersByTime(props.time - 1)
    expect(vi.getTimerCount()).not.toBe(0)

    vi.runAllTimers()
    expect(vi.getTimerCount()).toBe(0)

    await wrapper.setProps({
      modelValue: false
    })

    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)

    // @ts-ignore
    const value = wrapper.emitted('update:modelValue')[0]

    expect(value).toEqual([false])
  })
})
