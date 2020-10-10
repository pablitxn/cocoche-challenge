<template>
  <div v-bind="handleAlert" v-if="handleAlert.alertOpen" class="paper-alert">
    <div class="alert" id="alert">
      <div class="alert__action">
        <span @click.prevent="closeAlert">X</span>
      </div>
      <div class="alert__content">
        <p>{{ handleAlert.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: ['handleAlert'],
  methods: {
    closeAlert: function() {
      this.handleAlert.alertOpen = false;
      this.handleAlert.alertType = "";
      return
    }
  }
}
</script>

<style lang="scss">
  .paper-alert {
    width: 100vw;
    height: 30vh;
    background-color: rgba($color: #000000, $alpha: 0);
    position: fixed;
    top:0;
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .alert {
    margin-top: 2rem;
    width: 480px;
    height: 130px;
    background-color: #a0d12e;

    &__action {
      display: flex;
      justify-content: flex-end;
      font-weight: 600;
      color: gray;
      margin: 0 2rem 0 0;
      padding: 0.5rem 0;

      & span{
        cursor: pointer;
      }
    }

    &__content {
      width: 100%;
      color: black;
      border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
      padding: 1rem 0;
    }
  }
</style>