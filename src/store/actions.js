import toBuffer from 'blob-to-buffer'
import NumpyParser from 'numpy-parser'
import ndarray from 'ndarray'

export default {
  /**
   * load a npy file and convert it in a usable json.
   *
   * @param {Function} commit - store function
   * @param {File} file - file from input
   */
  loadFile ({ commit }, file) {
    commit('SET_FILE_NAME', file.name)

    toBuffer(file, (err, buffer) => {
      if (err) {
        console.log(err)
        commit('SET_FILE_NAME', '')
      }

      const aBuffer = new Uint8Array(buffer).buffer
      const typedArray = NumpyParser.fromArrayBuffer(aBuffer)
      const finalArray = ndarray(typedArray.data, typedArray.shape)

      commit('SET_RAW_DATA', finalArray)
    })
  },

  reset ({ commit }) {
    commit('SET_FILE_NAME', '')
    commit('SET_RAW_DATA', {
      data: new Uint8Array(0),
      stride: [],
      shape: [],
      offset: 0
    })
    commit('SELECT_TIME', 0)
    commit('SELECT_Z', 0)
  },

  /**
   *
   * @param commit
   * @param getters
   * @param {Number} time - selectedTime
   */
  selectTime ({ commit, getters }, time) {
    if (time < 0 || time > getters.maxTime) return
    commit('SELECT_TIME', time)
  },

  /**
   *
   * @param commit
   * @param getters
   * @param {Number} z - selected Z
   */
  selectZ ({ commit, getters }, z) {
    if (z < 0 || z > getters.maxZ) return
    commit('SELECT_Z', z)
  }
}
