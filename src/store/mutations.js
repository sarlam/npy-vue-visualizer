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

  /**
   * hold the setInterval return in the store.
   *
   * @param state
   * @param {String} on - the axis you want the auto-play to go with.
   * @param {Number} timer - reference to a #setIntervalID
   * @constructor
   */
  SET_NEW_TIMER: (state, { on, timer }) => {
    state.autoplay[on] = timer
  },

  /**
   * reset the timer setInterval stored to null.
   *
   * @param state
   * @param {String} on - the axis you want the auto-play to go with.
   * @constructor
   */
  STOP_TIMER (state, on) {
    console.log('stopping timer on ', on)
    state.autoplay[on] = null
  }
}
