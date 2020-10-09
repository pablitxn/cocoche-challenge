<template>
  <div class="loading">
    <!-- <b-spinner class="spinner" label="Loading..." :type="type" :variant="variant"/> -->
    <h1>Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    variant: {
      required: false,
      type: String,
      default: 'info',
      validator: (value) => {
        return [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark'
        ].indexOf(value) !== -1
      }
    },
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        return ['border', 'grow'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="scss">
/** */
</style>