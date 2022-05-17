<template>
  <ul>
    <li @click="loopedData">click me</li>
  </ul>
</template>

<script>
import axios from "axios";
// import Vue from "vue";

export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      countries: null,
      loopedCountries: "",
    };
  },
  mounted() {
    axios.get("https://restcountries.com/v3.1/all").then((response) =>
      (this.countries = response.data).map((country) => {
        console.log(country);
      })
    );
  },
};
</script>
