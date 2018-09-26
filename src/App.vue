<template>
  <div id="app">
    <header-bar/>
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar'

export default {
  name: 'App',
  components: { HeaderBar }
}
</script>

