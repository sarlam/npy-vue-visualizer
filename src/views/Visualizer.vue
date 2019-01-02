<template>
  <div>
    <div id="canvas"></div>
    <nv-slider></nv-slider>
    <nv-slider></nv-slider>
  </div>
</template>

<script>
import NvSlider from '@/components/Slider.vue'

export default {
  name: 'nv-visualizer',
  components: {
    NvSlider
  }
}
</script>
