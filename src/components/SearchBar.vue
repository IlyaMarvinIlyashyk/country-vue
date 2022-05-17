<template>
  <div class="searchComponent">
    <input type="text" placeholder="search countries..." name="search" id="search" ref="input" @input="search" />
    <ul v-for="country in allCountries" v-bind:key="country.name">
      <li>
        <div class="card">
          <div>
            <h3>{{ country.name.common }}</h3>
            <h4>{{ country.name.official }}</h4>
          </div>
          <span>{{ country.flag }}</span>
        </div>
      </li>
    </ul>
  </div>
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
.searchComponent {
  padding: 10rem;
} 
.searchComponent > input {
  width: 100%;
  height: 3rem;
  padding: 16px
}

li {
  list-style: none;
  text-decoration: none;
  padding: 10px 0;
}



.card {
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-auto-rows: 7rem;
  vertical-align: centre;
  border: 3px solid #111e07;
}
.card > * {
  display: block;
  height: 100%;
  width: 100%;
}
.card > :nth-child(1) {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
}
.card > :nth-child(1) > * {
  padding: 8px;
}
.card > :nth-child(1) > :nth-child(1){
  font-size: 2.15rem;
  font-weight: 500;
}
.card > :nth-child(1) > :nth-child(1){
  font-size: 1.85rem;
  font-weight: 300;
}
.card > :nth-child(2) {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  font-size: 5rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -30%);
}
</style>
