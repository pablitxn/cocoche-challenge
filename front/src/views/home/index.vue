<template>
  <div class="home">
    <!-- <Loading v-if="loading" /> -->
    <HomeLayout v-if="cars" :cars="cars"/>
  </div>
</template>

<script>
import HomeLayout from "../../layouts/home";
import rentCarServices from "@/services/rent-car";
// import authServices from "@/services/auth";


export default {
  name: "HomeView",
  components: {
    HomeLayout
  },
  data () {
    return {
      loading: false,
      error: false,
      cars: null
    }
  },
  computed: {
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
  // mounted() {}
}
</script>

<style lang="scss" scoped>
/** */
</style>