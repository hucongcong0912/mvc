<template>
  <div id="app">
    <iheader></iheader>
    <imenu></imenu>
    <router-view></router-view>
    <!-- <ifooter></ifooter> -->
  </div>
</template>
<script>
//引入组件
import Iheader from './components/Header'
import Imenu from './components/Menu'
import Ifooter from './components/Footer'
export default {
  name: 'app',
  //组件
  components: {
          Iheader,
          Imenu,
          Ifooter,
        }
  
}

</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
