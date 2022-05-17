<template>
  <input type="text" name="search" id="search" ref="input" @input="search" />
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
  props: {
    navTitle: String,
    navSubTitle: String,
  },
  data() {
    return {
      allCountries: null,
      countries: [],
      loading: false,
    };
  },
  beforeMount() {
    this.loading = true;
    this.search(true);
  },
  methods: {
    searchResults(searchString) {
      axios.get(searchString).then((response) => {
        this.countries = response.data;
        this.allCountries = [];
        for (let i = 0; i < 10 && i < this.countries.length; i++) {
          this.allCountries.push(this.countries[i]);
        }
      });
      return this.allCountries;
    },
    search() {
      if (this.loading === true || this.$refs.input.value == "") {
        this.searchResults(`https://restcountries.com/v3.1/all`);
        this.loading = false;
      } else {
        this.searchResults(
          `https://restcountries.com/v3.1/name/${this.$refs.input.value}`
        );
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background: #081101;
}

a {
  display: flex;
  align-self: flex-start;
  text-decoration: none;
  text-align: left;
}

a > span {
  color: #aceca1;
  font-size: 1.35rem;
  font-weight: 600;
  padding: 0.85rem;
}
</style>
