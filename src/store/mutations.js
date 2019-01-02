export default {
  RESET: (state) => {

  },

  /**
   * setCurrent loaded file name
   *
   * @param state
   * @param {String} fileName - from `file.name`
   * @constructor
   */
  SET_FILE_NAME: (state, fileName) => {
    state.npyFile = fileName
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
