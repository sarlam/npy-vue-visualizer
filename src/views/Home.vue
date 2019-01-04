<template>
  <div class="home">
    <p>NPY Visualizer</p>
    <p>please upload a 4 dimension of squared images in npy format here</p>
    <nv-file-loader></nv-file-loader>
  </div>
</template>

<script>
import NvFileLoader from '../components/FileLoader'

export default {
  name: 'nv-home',
  components: { NvFileLoader }
}
</script>

<style lang="less" scoped>
  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
