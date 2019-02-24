<template>
  <div id="app">
    <Slide>
      <router-link to="/">
        <span>Home</span>
      </router-link>
      <router-link to="/">
        <span>Timeline</span>
      </router-link>
      <router-link to="slide">
        <span>Slide</span>
      </router-link>
    </Slide>
    <img src="./assets/image/logo.png">
    <router-view/>
    <div class="license">Icons made by <a href="https://www.freepik.com/">Freepik</a> from <a href="https://www.flaticon.com/">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/">CC 3.0 BY</a></div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    Slide
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.license {
  color: black;
}
.license a {
  color: #2c3e50;
}
</style>
