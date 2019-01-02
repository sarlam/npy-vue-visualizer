import { isEmpty } from 'lodash'

export default {
  isLoading: (state) => {
    return !isEmpty(state.npyFile) && (isEmpty(state.raw.shape) && isEmpty(state.raw.stride))
  },

  isLoaded: (state) => {
    return !(isEmpty(state.npyFile) || isEmpty(state.raw.shape) || isEmpty(state.raw.stride))
  },

  maxTime: (state, getters) => {
    if (!getters.isLoaded) return 0

    return state.raw.shape[0]
  },

  maxZ: (state, getters) => {
    if (!getters.isLoaded) return 0

    return state.raw.shape[1]
  }
}
