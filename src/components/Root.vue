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
      <div class="text-center">
        <div class="container">
          <ul class="list-inline mb-5">
            <li class="bg-dark rounded-circle p-3 mt-3">
              <a class="text-white" href="https://www.facebook.com/takuma.osada.10?ref=bookmarks">
                <custom-icon name="facebook" base-class="custom-icon"></custom-icon>
              </a>
            </li>
            <li class="bg-dark rounded-circle p-3 mt-3">
              <a class="text-white" href="https://twitter.com/ostk0069">
                <custom-icon name="twitter" base-class="custom-icon"></custom-icon>
              </a>
            </li>
            <li class="bg-dark rounded-circle p-3 mt-3">
              <a class="text-white" href="https://github.com/takumaosada">
                <custom-icon name="github" base-class="custom-icon"></custom-icon>
              </a>
            </li>
            <li class="bg-dark rounded-circle p-3 mt-3">
              <a class="text-white" href="https://www.wantedly.com/users/31623094">
                <custom-icon name="message-circle" base-class="custom-icon"></custom-icon>
              </a>
            </li>
            <li class="bg-dark rounded-circle p-3 mt-3">
              <a class="text-white" href="https://qiita.com/ostk0069">
                <custom-icon name="book-open" base-class="custom-icon"></custom-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <main class="main bg-info shadow-large rounded">
      <h3>PROFILE</h3>
      <div class="container-fluid py-3">
        <div class="row">
          <div class="col-12 col-sm-5">
            <img class="rounded img-fluid" src="/static/blamtaku.png">
          </div>
          <div class="col-12 col-sm-7">
            <div class="text-left pt-3 pt-sm-0">
              <p>
                #名前 長田 卓馬
                <br><br>
                #大学 東京理科大学経営学部ビジネスエコノミクス学科(２１年卒)
                <br><br>
                #研究 データ分析(仮)
                <br><br>
                #何してる Webサービス/アプリエンジニアになるため趣味で開発・インターンとかしてます
                <br><br>
                #最終的な理想のエンジニア像 経営面も考えられる・適切な技術選択ができる・チームをリードできるCTOになりたい
                <br><br>
                #今後やること アプリ開発
                <br><br>
                #好きなこと UIを見つめる 新しい言語に触れる 新規事業  Apple製品開封
                <br><br>
                #嫌いなこと 大人数の飲み会 インフラ 急なUIの変更
                <br><br>
                #趣味 ロボットが戦う映画・アニメ ゲーム(実況) 美味しいものを食べる
                <br><br>
                (＊2019/03時点)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main class="main bg-vue shadow-large rounded">
      <div class="container-fluid">
        <h3>LANGUAGES</h3>
        <div class="row">
          <div class="col-12 p-0 col-sm-7">
            <div class="py-2">
              <h5>MARK UP</h5>
              <ul class="mb-1">
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-html5-plain-wordmark lang-icon"></i>
                </li>
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-css3-plain-wordmark lang-icon"></i>
                </li>
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-bootstrap-plain-wordmark lang-icon"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 p-0 col-sm-5">
            <div class="py-2">
              <h5>BACK END</h5>
              <ul class="mb-1">
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-rails-plain-wordmark lang-icon"></i>
                </li>
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-ruby-plain-wordmark lang-icon"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 p-0 col-sm-7">
            <div class="py-2">
              <h5>FRONT END</h5>
              <ul class="mb-1">
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-vuejs-plain-wordmark lang-icon"></i>
                </li>
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-jquery-plain-wordmark lang-icon"></i>
                </li>
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-javascript-plain lang-icon"></i>
                </li>
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-coffeescript-original-wordmark lang-icon"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 p-0 col-sm-5">
            <div class="py-1">
              <h5>APP</h5>
              <ul class="mb-2">
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-swift-plain lang-icon"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 p-0 col-sm-7">
            <div class="py-1">
              <h5>INTERESETED IN</h5>
              <ul class="mb-2">
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-swift-plain lang-icon"></i>
                </li>
                <li class="rounded-circle px-3 pt-3">
                  firebase
                </li>
                <li class="rounded-circle px-3 pt-3">
                  flutter
                </li>
                <li class="rounded-circle px-3 pt-3">
                  <i class="devicon-android-plain-wordmark lang-icon"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main class="main">
      <h3>TIMELINE</h3>
      <section class="timeline">
        <ul>
          <li v-for="(info, index) in timeline_data" v-bind:key="index">
            <span></span>
            <div>{{ info.title }}</div>
            <div>{{ info.description }}</div>
            <div><a :href="info_path(info.url)">{{ info.url }}</a></div>
            <div class="year">
              <span>{{ info.yearEnd }}</span>
              <span>{{ info.yearStart }}</span>
            </div>
          </li>
        </ul>
      </section>
    </main>
    <div class="container mt-5">
      <ul class="list-inline mb-5">
        <li class="bg-dark rounded-circle p-3 mt-3">
          <a class="text-white" href="https://www.facebook.com/takuma.osada.10?ref=bookmarks">
            <custom-icon name="facebook" base-class="custom-icon"></custom-icon>
          </a>
        </li>
        <li class="bg-dark rounded-circle p-3 mt-3">
          <a class="text-white" href="https://twitter.com/ostk0069">
            <custom-icon name="twitter" base-class="custom-icon"></custom-icon>
          </a>
        </li>
        <li class="bg-dark rounded-circle p-3 mt-3">
          <a class="text-white" href="https://github.com/takumaosada">
            <custom-icon name="github" base-class="custom-icon"></custom-icon>
          </a>
        </li>
        <li class="bg-dark rounded-circle p-3 mt-3">
          <a class="text-white" href="https://www.wantedly.com/users/31623094">
            <custom-icon name="message-circle" base-class="custom-icon"></custom-icon>
          </a>
        </li>
        <li class="bg-dark rounded-circle p-3 mt-3">
          <a class="text-white" href="https://qiita.com/ostk0069">
            <custom-icon name="book-open" base-class="custom-icon"></custom-icon>
          </a>
        </li>
      </ul>
    </div>
    <div class="license mb-5">Icons made by <a href="https://www.freepik.com/">Freepik</a> from <a href="https://www.flaticon.com/">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/">CC 3.0 BY</a></div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
import customIcon from 'vue-icon/lib/vue-feather.esm'

export default {
  name: 'Root',
  components: {
    Slide,
    customIcon
  },
  data () {
    return {
      msg: 'Rails & Swift Engineer',
      baseClass: 'v-icon',
      timeline_data: [
        {
          'title': 'JX通信社でiOSインターン',
          'description': ' News系アプリの開発',
          'url': 'https://newsdigest.jp/',
          'yearStart': '`19/02',
          'yearEnd': ''
        },
        {
          'title': '株式会社Freneticで受託開発',
          'description': '学生のみでの起業を経験。エンジニアリング領域以外にも触れる。',
          'url': 'https://gamepatch.gg/submissions/recommend',
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
          'url': 'https://www.zens.tokyo/',
          'yearStart': '`17/10',
          'yearEnd': '`18/07'
        },
        {
          'title': '学生団体UNITUSに所属する',
          'description': 'プログラミングに触れる。プロジェクトの立ち上げ、組織運用を経験',
          'url': 'http://www.unitus.tech/topics/blogs/osada_interview',
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
  },
  methods: {
    info_path: function (url) {
      return url
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
.v-icon, .custom-icon {
  width: 24px;
}
.lang-icon {
  font-size: 4rem
}
.bg-vue {
  background-color:#42b983
}
</style>
