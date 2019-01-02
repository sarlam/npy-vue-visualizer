<template>
  <input type="file" @change="uploadFile" ref="fileInput"/>
</template>

<script>
export default {
  name: 'nv-file-loader',
  data () {
    return {
      filePath: ''
    }
  },
  methods: {
    uploadFile (val) {
      console.log('change file path', val)
      console.log('change file path by :', this.$refs.fileInput.files)

      this.$router.push({ name: 'viz' })
    }
  }
}
</script>
