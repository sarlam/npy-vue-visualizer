<template>
  <input type="range"
         :min="min"
         :max="max"
         :value="value"
         @input="updateValue"/>
</template>

<script>
export default {
  name: 'nv-slider',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 50
    }
  },
  methods: {
    updateValue (e) {
      console.log(e.target.value)
      this.$emit('change', e.target.value)
    }
  }
}
</script>
