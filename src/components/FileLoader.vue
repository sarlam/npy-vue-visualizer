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
export default {
  name: 'nv-file-loader',
  data () {
    return {
      filePath: '',
      typeError: false
    }
  },
  methods: {
    uploadFile () {
      this.typeError = false

      const selectedFile = this.$refs.fileInput.files[0]
      console.log('change file path by :', selectedFile)

      const ext = selectedFile.name.split('.').shift()

      if (ext !== 'npy') {
        this.typeError = true
      } else {
        // dispatch store action
        this.$router.push({ name: 'viz' })
      }
    }
  }
}
</script>
