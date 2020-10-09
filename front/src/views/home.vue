<template>
  <div class="home">
    <!-- <Loading v-if="loading" /> -->
    <HomeLayout v-if="cars" :cars="cars" :handleRegister="handleRegister"/>
  </div>
</template>

<script>
import HomeLayout from "../layouts/home";
import rentCarServices from "@/services/rent-car";
import authServices from "../services/auth";

export default {
  name: "HomeView",
  components: {
    HomeLayout
  },
  data () {
    async function handleRegister (payload) {
      try {
        const newUser = await authServices.register(payload)
      } catch(err) {
        console.log(err)
      }
    }

    return {
      loading: false,
      error: false,
      cars: null,
      handleRegister: handleRegister
    }
  },
  created () {
    this.loading = true;

    const getCars = async () => {
      try {
        const { data } = await rentCarServices.getFordCars()
        this.loading = false;
        this.error = false;
        this.cars = data
      } catch (_err) {
        this.loading = false;
        this.error = true;
        this.cars = null;
      }
    }

    getCars();

  }
}
</script>

<style lang="scss">
/** */
</style>