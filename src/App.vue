<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted () {
    this.screenInit()
    this.$bus.$on('window-change-size', () => {
      console.log('我变化了')
    })
  },

  methods: {
    screenInit () {
      if (window.addEventListener) {
        window.addEventListener('resize', () => {
          this.$bus.$emit('window-change-size')
        })
      } else {
        window.attachEvent('onresize', () => {
          this.$bus.$emit('window-change-size')
        })
      }
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
