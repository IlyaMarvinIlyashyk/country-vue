<template>
  <div class="card">
      
  </div>
</template>

<script>
export default {
  props: {
    navTitle: String,
    navSubTitle: String,
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
