<template>
  <div>
    <nv-image/>
    <nv-slider v-model="time" :max="maxTime"/>
    <nv-slider v-model="z" :max="maxZ"/>
  </div>
</template>

<script>
import { toNumber } from 'lodash'
import { mapGetters, mapActions } from 'vuex'

import NvImage from '@/components/Image.vue'
import NvSlider from '@/components/Slider.vue'

export default {
  name: 'nv-visualizer',
  components: {
    NvImage,
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
