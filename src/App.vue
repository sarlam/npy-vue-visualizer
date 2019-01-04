<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['isLoaded'])
  },
  watch: {
    isLoaded (itIs) {
      if (itIs) {
        this.$router.push({ name: 'viz' })
      } else {
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>

<style>
  html {
    width: 100vw;
    height: 100vh;
    border: 0;
    margin: 0;
    padding: 0;
  }
  body {
    width: 98vw;
    height: 98vh;
    border: 0;
    margin: 0;
    padding: 1vw 1vh;
    overflow: hidden;
  }

  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
