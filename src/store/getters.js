import { isEmpty } from 'lodash'

export default {
  isLoaded: (state) => {
    return !(isEmpty(state.npyFile) && isEmpty(state.raw.shape) && isEmpty(state.raw.stride))
  },

  maxTime: (state, getters) => {
    if (!getters.isLoaded) return 0

    return state.raw.stride[0]
  },

  maxZ: (state, getters) => {
    if (!getters.isLoaded) return 0

    return state.raw.stride[1]
  }
}
