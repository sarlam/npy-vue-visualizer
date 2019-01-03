<template>
  <div class="wrapper"
       :class="{vertical: vertical}">
    <label for="rangeInput">
      {{label}}
    </label>
    <input type="range"
           id="rangeInput"
           class="input-range"
           :class="{vertical: vertical}"
           :min="min"
           :max="max"
           :value="value"
           @input="updateValue"/>
    <div class="value">
      {{value}}
    </div>
  </div>
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
    },
    label: {
      type: String,
      default: ''
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>

  .wrapper {
    display: flex;
    justify-content: space-between;

    &.vertical {
      flex-direction: column;
      height: 100%;
    }

    .input-range {
      &:not(.vertical) {
        width: 80vw;
      }
      &.vertical {
        writing-mode: bt-lr; /* IE */
        -webkit-appearance: slider-vertical; /* WebKit */
        width: 8px;
        height: 80vh;
        padding: 0 5px;
      }
    }
  }
</style>
