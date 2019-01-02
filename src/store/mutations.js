export default {
  RESET: (state) => {

  },
  /**
   *
   * @param {Object} state - VueX state
   * @param {Object} ndArray - return from ndarray
   * @constructor
   */
  SET_RAW_DATA: (state, ndArray) => {
    state.raw = ndArray
  }
}
