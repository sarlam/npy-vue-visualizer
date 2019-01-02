<template>
  <div>
    <input type="file"
           data-cy="file-upload-input"
           @change="uploadFile"
           ref="fileInput"/>

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
    ...mapGetters(['isLoaded'])
  },
  methods: {
    ...mapActions(['loadFile']),

    /**
       * test the uploaded file and load it the store if everything goes fine
       */
    uploadFile () {
      this.typeError = false

      const selectedFile = this.$refs.fileInput.files[0]
      console.log('change file path by :', selectedFile)

      const ext = selectedFile.name.split('.').pop()

      console.log(ext)

      if (ext !== 'npy') {
        this.typeError = true
      } else {
        // dispatch store action
        this.loadFile(selectedFile)
      }
    }
  }
}
</script>
