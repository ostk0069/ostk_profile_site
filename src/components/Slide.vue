<template>
  <div class="slide">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  data () {
    return {
      msg: 'this is /slide'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
