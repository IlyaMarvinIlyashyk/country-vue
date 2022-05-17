<template>
  <div class="card">
    <img :src="{ image }" alt="" />
    <h3>{{ country }}</h3>
    <h4>{{ continents }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    country: String,
    continents: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: grid;
  grid-template-columns: 1fr 9fr;
  margin: 50vh 0 0 0;
}
</style>
