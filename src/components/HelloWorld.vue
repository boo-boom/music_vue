<template>
  <div class="hello">
    <span class="iconfont icon-add"></span>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld'
    }
  }
}
</script>

<style lang="scss" scoped>
$red: red;
h1, h2 {
  color: $red;
  font-weight: normal;
}
</style>
