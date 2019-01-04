import { isEmpty, isNumber } from 'lodash'

export default {
  /**
   * is the npy being loading ?
   *
   * @param {Object} state - Store state
   * @return {boolean}
   */
  isLoading: (state) => {
    return !isEmpty(state.npyFile) && (isEmpty(state.raw.shape) && isEmpty(state.raw.stride))
  },

  /**
   * is the npy loaded ?
   *
   * @param {Object} state - Store state
   * @return {boolean}
   */
  isLoaded: (state) => {
    return !(isEmpty(state.npyFile) || isEmpty(state.raw.shape) || isEmpty(state.raw.stride))
  },

  /**
   * maximum time allowed by npy file
   *
   * @param {Object} state - Store state
   * @param {Object} getters - Store getters
   * @return {Number}
   */
  maxTime: (state, getters) => {
    if (!getters.isLoaded) return 0

    return state.raw.shape[0]
  },

  /**
   * maximum z allowed by npy file
   *
   * @param {Object} state - Store state
   * @param {Object} getters - Store getters
   * @return {Number}
   */
  maxZ: (state, getters) => {
    if (!getters.isLoaded) return 0

    return state.raw.shape[1]
  },

  /**
   *
   * @param state
   * @return {Array<Number>}
   */
  timeStack: (state) => {
    const t = state.selected.time
    const stride = state.raw.stride[0]
    return state.raw.data.slice(t * stride, (t + 1) * stride)
  },

  /**
   *
   * @param state
   * @param getters
   * @return {Array<Number>}
   */
  image: (state, getters) => {
    const z = state.selected.z
    const stride = state.raw.stride[1]
    return getters.timeStack.slice(z * stride, (z + 1) * stride)
  },

  imageSize: (state) => {
    return `${state.raw.stride[2]}px`
  },

  isAutoplay: (state) => on => {
    return isNumber(state.autoplay[on])
  }
}
