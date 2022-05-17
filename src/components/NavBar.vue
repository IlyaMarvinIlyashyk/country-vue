<template>
  <nav>
    <a href="/" rel="noopener noreferrer">
      <span>{{ navTitle }}<br>{{ navSubTitle }}</span>
    </a>
  </nav>
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
  position: static;
  top: 0;
  left: 0;
  width: 100vw;
  background: #111e07;
}

a {
  display: inline-block;
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
