          Imain, 
<template>
  <div class="ttt">
    这是尾部导航<br><br><br><br>
    {{msg}}

  </div>
</template>

<script>
export default {
  name: 'ifooter',
  data () {
    return {
      msg: 'Welcome to Your Vue',
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- scoped  是单页面使用样式 -->
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
