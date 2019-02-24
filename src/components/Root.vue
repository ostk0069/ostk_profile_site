<template>
  <div class="root">
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
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
    </ul>
    <main class="main">
      <h3>Timeline</h3>
      <section class="timeline">
        <ul>
          <li v-for="(info, index) in timeline_data" v-bind:key="index">
            <span></span>
            <div>{{ info.place }}</div>
            <div>{{ info.address }}</div>
            <div>{{ info.course }}</div>
            <div class="year">
              <span>{{ info.yearEnd }}</span>
              <span>{{ info.yearStart }}</span>
            </div>
          </li>
        </ul>
      </section>
    </main>
    <div class="license">Icons made by <a href="https://www.freepik.com/">Freepik</a> from <a href="https://www.flaticon.com/">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/">CC 3.0 BY</a></div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'Root',
  components: {
    Slide
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      timeline_data: [
        {
          'place': 'Ateneo de Davao University',
          'address': 'Roxas Ave, Poblacion District, Davao City',
          'course': 'BS in Information Technology',
          'yearStart': '2009',
          'yearEnd': '2014'
        },
        {
          'place': 'St. Marys College',
          'address': 'Daang Maharlika Highway, Tagum City',
          'course': '',
          'yearStart': '2005',
          'yearEnd': '2009'
        },
        {
          'place': 'Magugpo Pilot Imelda Elementary place',
          'address': 'Sobrecary St, Tagum City',
          'course': '',
          'yearStart': '1999',
          'yearEnd': '2005'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.license {
  color: black;
}
.license a {
  color: #2c3e50;
}
</style>
