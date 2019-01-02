<template>
  <div>
    <input type="file"
           data-cy="file-upload-input"
           :disabled="isLoading"
           @change="uploadFile"
           ref="fileInput"/>

    <p v-if="isLoading">
      Loading...
    </p>

    <p v-if="typeError"
       data-cy="file-upload-type-error">
      FileType Error, expect npy file
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'nv-file-loader',
  data () {
    return {
      filePath: '',
      typeError: false
    }
  },
  computed: {
    ...mapGetters(['isLoaded', 'isLoading'])
  },
  methods: {
    ...mapActions(['loadFile']),

    /**
       * test the uploaded file and load it the store if everything goes fine
       */
    uploadFile () {
      // TODO error should be stored !
      this.typeError = false
      const selectedFile = this.$refs.fileInput.files[0]
      const ext = selectedFile.name.split('.').pop()

      if (ext !== 'npy') {
        this.typeError = true
      } else {
        this.loadFile(selectedFile)
      }
    }
  }
}
</script>
