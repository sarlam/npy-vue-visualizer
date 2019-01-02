<template>
  <div>
    <div id="canvas"></div>
    <nv-slider></nv-slider>
    <nv-slider></nv-slider>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import NvSlider from '@/components/Slider.vue'

export default {
  name: 'nv-visualizer',
  created () {
    if (!this.isLoaded) this.$router.push({ name: 'home' })
  },
  computed: {
    ...mapGetters(['isLoaded'])
  },
  components: {
    NvSlider
  }
}
</script>
