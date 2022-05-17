<template>
  <ul v-for="country in allCountries" v-bind:key="country.name">
    <li>
      <div class="card">
        <h3>{{ country.name.common }}</h3>
        <h4>{{ country.name.official }}</h4>
        <span>{{ country.flag }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      countryNames: [],
      allCountries: [],
    };
  },
  mounted() {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      this.countries = response.data;
      for (let i = 0; i < 10 && i < this.countries.length; i++) {
        this.allCountries.push(this.countries[i]);
        console.log(this.allCountries);
      }
    });
    return this.allCountries;
  },
};
</script>
