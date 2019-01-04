<template>
  <div id="wrapper">
    <main>
      <section>
        <div>
          <nv-image class="nv-image"/>
        </div>
        <div class="info">
          <nv-infos></nv-infos>
          <button @click="unload">Unload</button>
        </div>
      </section>
      <aside>
        <nv-slider class="slider"
                   vertical
                   label="z"
                   v-model="z"
                   :max="maxZ"/>
      </aside>
    </main>
    <footer>
      <nv-slider class="slider"
                 label="time"
                 v-model="time"
                 :max="maxTime"/>
    </footer>
  </div>
</template>

<script>
import { toNumber, debounce } from 'lodash'
import { mapGetters, mapActions } from 'vuex'

import NvImage from '@/components/Image.vue'
import NvSlider from '@/components/Slider.vue'
import NvInfos from '@/components/Infos.vue'

const DEBOUNCE_TIMER = 60

export default {
  name: 'nv-visualizer',
  components: {
    NvImage,
    NvSlider,
    NvInfos
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
      set: debounce(function (newVal) {
        this.selectTime(toNumber(newVal))
      }, DEBOUNCE_TIMER)
    },
    z: {
      get () {
        return this.$store.state.selected.z
      },
      set: debounce(function (newVal) {
        this.selectZ(toNumber(newVal))
      }, DEBOUNCE_TIMER)
    }
  },
  methods: {
    ...mapActions(['selectTime', 'selectZ', 'reset']),
    unload () {
      this.reset()
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="less" scoped>
  #wrapper {
    width: 100%;
    height: 100%;
    border: 0;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    main {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      section {
        flex: 1;
      }

      aside {
        flex: 0;
      }
    }

    footer {
      flex: 0;

    }
  }
</style>
