<template>
  <div class="root">
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
            <div>{{ info.school }}</div>
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
  </div>
</template>

<script>
export default {
  name: 'Root',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      timeline_data: [
        {
          'school': 'Ateneo de Davao University',
          'address': 'Roxas Ave, Poblacion District, Davao City',
          'course': 'BS in Information Technology',
          'yearStart': '2009',
          'yearEnd': '2014'
        },
        {
          'school': 'St. Marys College',
          'address': 'Daang Maharlika Highway, Tagum City',
          'course': '',
          'yearStart': '2005',
          'yearEnd': '2009'
        },
        {
          'school': 'Magugpo Pilot Imelda Elementary School',
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
</style>
