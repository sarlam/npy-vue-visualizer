import toBuffer from 'blob-to-buffer'
import NumpyParser from 'numpy-parser'
import ndarray from 'ndarray'

export default {
  /**
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

      const aBuffer = new Uint8Array(buffer).buffer // only needed for node conversion
      const typedArray = NumpyParser.fromArrayBuffer(aBuffer)
      const finalArray = ndarray(typedArray.data, typedArray.shape)

      commit('SET_RAW_DATA', finalArray)
    })
  },

  selectTime ({ commit, getters }, time) {
    if (time < 0 || time > getters.maxTime) return
    commit('SELECT_TIME', time)
  },

  selectZ ({ commit, getters }, z) {
    if (z < 0 || z > getters.maxZ) return
    commit('SELECT_Z', z)
  }
}
