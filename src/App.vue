<template>
  <div id="app">
    <header-bar/>
    <router-view/>
    <footer-bar/>
    <play-bar/>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'
import PlayBar from './components/PlayBar'

export default {
  name: 'App',
  components: { HeaderBar, FooterBar, PlayBar }
}
</script>

