<template>
  <canvas id="plot"
          :width="imageSize"
          :height="imageSize"
  ></canvas>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'nv-image',
  computed: {
    ...mapGetters(['image', 'imageSize'])
  },
  mounted () {
    this.drawImage()
  },
  methods: {
    /**
     * draw image in the canvas
     *
     */
    drawImage () {
      const ctx = document.getElementById('plot').getContext('2d')
      const imgdata = ctx.getImageData(0, 0, 512, 512)
      const imgdatalen = imgdata.data.length

      for (let i = 0; i < imgdatalen / 4; i++) {
        imgdata.data[4 * i] = this.image[i]
        imgdata.data[4 * i + 1] = this.image[i]
        imgdata.data[4 * i + 2] = this.image[i]
        imgdata.data[4 * i + 3] = 255
      }

      ctx.putImageData(imgdata, 0, 0)
    }
  },
  watch: {
    image () {
      this.drawImage()
    }
  }
}
</script>
