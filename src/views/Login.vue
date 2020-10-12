<template>
  <v-layout row wrap class="d-flex justify-center align-center">
    <LoginForm />
  </v-layout>
</template>

<script>
import LoginForm from "../components/LoginPage/LoginForm";
export default {
  data: () => ({

  }),
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
</style>