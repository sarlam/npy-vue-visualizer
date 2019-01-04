export default {
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
  },

  /**
   * set selected time
   *
   * @param {Object} state - VueX state
   * @param {Number} time - the selected time
   * @constructor
   */
  SELECT_TIME: (state, time) => {
    state.selected.time = time
  },

  /**
   * set selected z
   *
   * @param {Object} state - VueX state
   * @param {Number} z - the selected time
   * @constructor
   */
  SELECT_Z: (state, z) => {
    state.selected.z = z
  },

  SET_NEW_TIMER: (state, { on, timer }) => {
    state.autoplay[on] = timer
  },

  STOP_TIMER (state, on) {
    console.log('stopping timer on ', on)
    state.autoplay[on] = null
  }
}
