<template>
  <div>
    <p>file: {{npyFile}}</p>
    <p>shape: {{raw.shape}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'nv-infos',
  computed: {
    ...mapState(['npyFile', 'raw'])
  }
}
</script>
