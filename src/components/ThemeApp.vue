<template lang="pug">
label.btn.theme_app(for="theme_app" :class="{ 'active' : isTheme}")
  button.icon#openTheme(@click="openThemeApp" role="button" type="button" :aria-label="$t('aria-label.theme')")
    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.953 54.953" width="29" height="29" fill="#fff")
      circle(cx="45.021" cy="25.976" r="1")
      circle(cx="9.021" cy="25.976" r="1")
      circle(cx="12.021" cy="28.976" r="1")
      circle(cx="18.021" cy="28.976" r="1")
      circle(cx="15.021" cy="31.976" r="1")
      circle(cx="21.021" cy="31.976" r="1")
      circle(cx="24.021" cy="34.976" r="1")
      circle(cx="30.021" cy="34.976" r="1")
      circle(cx="33.021" cy="31.976" r="1")
      circle(cx="27.021" cy="37.976" r="1")
      circle(cx="36.021" cy="28.976" r="1")
      circle(cx="42.021" cy="28.976" r="1")
      circle(cx="39.021" cy="31.976" r="1")
      path(d="M45.559 32.796l9.394-5.367-9.656-5.483 9.656-5.517L27.477.826 0 16.429l9.656 5.517L0 27.429l9.656 5.517L0 38.429l27.477 15.698 27.477-15.698-9.656-5.483.071-.041c.07-.026.128-.068.19-.109zM27.477 3.125l23.436 13.309-7.637 4.364-15.798 9.026-23.437-13.39L27.477 3.125zM11.129 23.409a.993.993 0 0 0 .892.567c.27 0 .512-.109.692-.283l2.262 1.292a.995.995 0 0 0 .046 1.991 1 1 0 0 0 1-1 .974.974 0 0 0-.132-.469l10.33 5.902a.973.973 0 0 0-.198.567 1 1 0 0 0 2 0c0-.051-.021-.094-.029-.143l10.052-5.743a.988.988 0 0 0 .977.885 1 1 0 0 0 1-1 .98.98 0 0 0-.406-.783l2.202-1.258c.068.015.132.041.204.041a.989.989 0 0 0 .938-.694l.32-.183 7.634 4.335-1.983 1.133a.998.998 0 0 0-1.908.409c0 .216.083.405.199.568l-3.945 2.254-6.388 3.65a.973.973 0 0 0 .134-.472 1 1 0 0 0-2 0c0 .537.426.967.957.991l-2.263 1.293a.995.995 0 0 0-.694-.284 1 1 0 0 0-1 1c0 .08.028.151.046.226l-4.59 2.622-5.517-3.152a.989.989 0 0 0-.939-.696c-.073 0-.138.027-.206.042l-2.201-1.257a.982.982 0 0 0 .407-.784 1 1 0 0 0-1-1 .99.99 0 0 0-.977.887L6.991 29.12c.007-.049.029-.093.029-.144a1 1 0 0 0-1-1 .979.979 0 0 0-.621.235l-1.359-.776 7.089-4.026zm39.783 15.025l-23.436 13.39-23.435-13.39 7.633-4.335 15.803 9.028 15.802-9.028 7.633 4.335z")
  transition(name="fade")
    el-select#theme_app(v-model="selectedTheme" @change="updateThemeApp($event)" v-if="isTheme" :popper-append-to-body="false")
      el-option(value="default" :label="$t('themes.default')") {{ $t('themes.default') }}
      el-option(value="classic" :label="$t('themes.classic')") {{ $t('themes.classic') }}
      el-option(value="full" :label="$t('themes.full')") {{ $t('themes.full') }}
      el-option(value="gold" :label="$t('themes.gold')") {{ $t('themes.gold') }}
      el-option(value="grey" :label="$t('themes.grey')") {{ $t('themes.grey') }}
      el-option(value="jungle" :label="$t('themes.jungle')") {{ $t('themes.jungle') }}
      el-option(value="rose" :label="$t('themes.rose')") {{ $t('themes.rose') }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'theme-app',
  created () { this.setThemeApp() },
  computed: mapState({ theme_app: state => state.theme_app }),
  data () {
    return {
      isTheme: false,
      selectedTheme: 'default'
    }
  },
  methods: {
    openThemeApp () { this.isTheme = !this.isTheme },
    clearBody () { document.querySelector('body').classList = "" },
    updateThemeApp (value) {
      this.clearBody()
      localStorage.setItem('theme_app', JSON.stringify(value))
      document.querySelector('body').classList.add(value)
      this.$store.commit("updateTheme", value)
    },
    setThemeApp () {
      let theme = localStorage.getItem('theme_app')
      let temaUrl = window.location.search

      if(/tema/.test(temaUrl)) {
        let temaRegex = temaUrl.match(/(tema=)([\w._-]+)?/ig)
        let temaValor = temaRegex[0].split('=')
        this.$store.commit("updateTheme", temaValor[1])
        this.selectedTheme = temaValor[1]
        document.querySelector('body').classList.add(temaValor[1])
        localStorage.setItem('theme_app', temaValor[1])
      }

      if(!theme) {
        this.clearBody()
        this.$store.commit("updateTheme", 'default')
        this.selectedTheme = 'default'
        document.querySelector('body').classList.add('default')
        localStorage.setItem('theme_app', 'default')
      } else {
        this.clearBody()
        theme = theme.replace(/"/g, "")
        this.$store.commit("updateTheme", theme)
        this.selectedTheme = theme
        document.querySelector('body').classList.add(theme)
      }
    }
  }
}
</script>

<style lang="stylus">
.theme_app
  border-radius 6px
  display block
  pointer-events all
  position absolute
  left 20px
  bottom -75px
  z-index 99
  .el-select
    max-width 130px
  +tablet()
    position fixed
    bottom 20px
+htmlDir()
  .theme_app .el-input
    transform translateX(-10px)
    .el-input__suffix
      right -8px
</style>
