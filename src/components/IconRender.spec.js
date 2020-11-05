import { shallowMount, createLocalVue } from '@vue/test-utils'

import { mutations } from '@/mutations'
import Vuex from 'vuex'
import IconRender from './IconRender.vue'
import { Switch } from 'element-ui'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Switch)

let store = new Vuex.Store({
  state: {
    icon_render: true
  },
  mutations: mutations
})

const wrapper = shallowMount(IconRender, { store, localVue })

describe('IconRender', () => {
  it('is IconRender a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
