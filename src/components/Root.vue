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
    <div class="container text-center my-auto">
      <img class="rounded-circle" src="/static/TakumaOsada.jpg" alt="Generic placeholder image" width="140" height="140">
      <br>
      <br>
      <h3 class="mb-1 text-muted">Takuma Osada</h3>
      <h5 class="mb-5 text-secondary">
        <em class="license">{{ msg }}</em>
      </h5>
      <div class="footer text-center p-0">
        <div class="container">
          <ul class="list-inline mb-5">
            <li class="list-inline-item">
              <a class="social-link rounded-circle text-white mr-3" href="https://www.facebook.com/takuma.osada.10?ref=bookmarks">
                <i class="icon-social-facebook"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link rounded-circle text-white mr-3" href="https://twitter.com/ostk0069">
                <i class="icon-social-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link rounded-circle text-white" href="https://github.com/takumaosada">
                <i class="icon-social-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay"></div>
    <ul>
    </ul>
    <main class="main">
      <h3>経歴</h3>
      <section class="timeline">
        <ul>
          <li v-for="(info, index) in timeline_data" v-bind:key="index">
            <span></span>
            <div>{{ info.title }}</div>
            <div>{{ info.description }}</div>
            <div>{{ info.url }}</div>
            <div class="year">
              <span>{{ info.yearEnd }}</span>
              <span>{{ info.yearStart }}</span>
            </div>
          </li>
        </ul>
      </section>
    </main>
    <div class="license mb-5">Icons made by <a href="https://www.freepik.com/">Freepik</a> from <a href="https://www.flaticon.com/">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/">CC 3.0 BY</a></div>
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
      msg: 'Rails & Swift Engineer',
      timeline_data: [
        {
          'title': 'JX通信社でiOSインターン',
          'description': ' News系アプリの開発',
          'url': '',
          'yearStart': '`19/02',
          'yearEnd': ''
        },
        {
          'title': '株式会社Freneticで受託開発',
          'description': '学生のみでの起業を経験。エンジニアリング領域以外にも触れる。',
          'url': '',
          'yearStart': '`18/08',
          'yearEnd': ''
        },
        {
          'title': 'BLAMハッカソン',
          'description': '"ダサい大学生をコーディネート"するサービスを発表し審査員賞を２つ獲得',
          'url': '',
          'yearStart': '`18/11',
          'yearEnd': '`18/11'
        },
        {
          'title': 'ZENS株式会社でRailsインターン',
          'description': '外国人だけの開発チームでインターン',
          'url': '',
          'yearStart': '`17/10',
          'yearEnd': '`18/07'
        },
        {
          'title': '学生団体UNITUSに所属する',
          'description': 'プログラミングに触れる。プロジェクトの立ち上げ、組織運用を経験',
          'url': '',
          'yearStart': '`17/04',
          'yearEnd': '`18/07'
        },
        {
          'title': '東京理科大学経営学部ビジネスエコノミクス学科に入学',
          'description': '',
          'url': '',
          'yearStart': '`17/04',
          'yearEnd': ''
        },
        {
          'title': '静岡県私立加藤学園暁秀高等学校特進科に入学',
          'description': '',
          'url': '',
          'yearStart': '`14/04',
          'yearEnd': '`17/03'
        }
      ]
    }
  }
}
</script>

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
