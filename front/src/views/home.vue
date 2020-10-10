<template>
  <div class="home">
    <HomeLayout
      v-if="cars"
      :cars="cars"
      :alerts="alerts"
      :handleRegister="handleRegister"
      :handlePagination="handlePagination"
      :pagination="pagination"
      />
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
    /** State */
    const alerts = {
      modal: {
        modalOpen: false,
        register: false,
        login: false,
      },
      alert: {
        alertOpen: false,
        alertType: ""
      }
    };
    const pagination = {
      rowsPerPage: 0,
      currentPage: 1,
      totalItems: 0,
      totalPages: 0
    };

    return {
      loading: false,
      error: false,
      cars: null,
      alerts,
      pagination
    }
  },
  methods: {
    async handlePagination(page) {
      try {
          const data = await rentCarServices.getFordCars(page)
        } catch(err) {
          this.alerts.alert.alertOpen = true;
          this.alerts.alert.alertType = "error-fetch"
          console.log(err)
        }
    },
    async handleRegister(payload) {
      const { alerts, modal } = this;
      try {
        const newUser = await authServices.register(payload)
        if(newUser) {
          alerts.modal.modalOpen = false;
          alerts.alert.alertOpen = true;
          alerts.alert.alertType = "register-success";
          alerts.alert.message = "La cuenta fue creada. Revisá tu email para validarla.";
        } else {
          alerts.alert.alertOpen = true;
          alerts.alert.alertType = "email-used";
          alerts.alert.message =  "Este correo ya tiene una cuenta asociada, ¿Desea recuperar su contraseña?";
        }
        } catch(err) {
          alerts.alert.alertOpen = true;
          alerts.alert.alertType = "error-fetch";
          alerts.alert.message = "No se pudieron recuperar datos, por favor aguarde un momento.";
        console.log(err)
      }
    },
    async getCars () {
      try {
        const { data } = await rentCarServices.getFordCars();
        this.loading = false;
        this.error = false;
        this.cars = data.map(res => res.data)[0];
        this.pagination.totalPages = data[0].totalPages;
        this.pagination.currentPage = data[0].currentPage;
        this.pagination.totalItems = data[0].totalItems;
      } catch (err) {
        console.log(err)
        this.alerts.alert.alertOpen = true;
        this.alerts.alert.alertType = "error-fetch";
        this.loading = false;
        this.cars = null;
      }
    }
  },
  created () {
    this.loading = true;
    this.getCars();
  }
}
</script>
