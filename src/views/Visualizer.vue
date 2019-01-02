<template>
  <div>
    <div id="canvas"></div>
    <nv-slider v-model="time" :max="maxTime"></nv-slider>
    <nv-slider v-model="z" :max="maxZ"></nv-slider>
  </div>
</template>

<script>
import { toNumber } from 'lodash'
import { mapGetters, mapActions } from 'vuex'

import NvSlider from '@/components/Slider.vue'

export default {
  name: 'nv-visualizer',
  components: {
    NvSlider
  },
  created () {
    if (!this.isLoaded || this.isLoading) this.$router.push({ name: 'home' })
  },
  computed: {
    ...mapGetters(['isLoaded', 'isLoading', 'maxTime', 'maxZ']),
    time: {
      get () {
        return this.$store.state.selected.time
      },
      set (newVal) {
        // todo debounce
        this.selectTime(toNumber(newVal))
      }
    },
    z: {
      get () {
        return this.$store.state.selected.z
      },
      set (newVal) {
        this.selectZ(toNumber(newVal))
      }
    }
  },
  methods: {
    ...mapActions(['selectTime', 'selectZ'])
  }
}
</script>
