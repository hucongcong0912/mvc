<!-- 用户管理中心 -->
<template>
<div class="main-content">
  <div class="breadcrumbs" id="breadcrumbs">
    <ul class="breadcrumb">
      <li>
        <i class="icon-home home-icon"></i>
        <a href="#">Home</a>
      </li>
      <li class="active">礼物管理</li>
    </ul><!-- .breadcrumb -->

    <div class="nav-search" id="nav-search">
      <form class="form-search">
        <span class="input-icon">
          <input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
          <i class="icon-search nav-search-icon"></i>
        </span>
      </form>
    </div><!-- #nav-search -->
  </div>

<div class="page-content">
<div class="page-header">
  <h1>
    礼物管理
    <small>
      <i class="icon-double-angle-right"></i>
      礼物列表  
    </small>
  </h1>
</div><!-- /.page-header -->
<!-- 表单title -->
<table class="table table-striped table-bordered table-hover" id="sample-table-2">
  <thead>
    <tr>
      <th class="center">
        <label>
          <input class="ace" type="checkbox">
          <span class="lbl"></span>
        </label>
      </th>
      <th>礼物ID</th>
      <th>礼物名</th>
      <th class="hidden-480">面值</th>

      <th>
        <i class="icon-time bigger-110 hidden-480"></i>
        添加时间
      </th>
      <th>状态</th>
      
      <th>操作</th>
    </tr>
  </thead>
  <!-- 表单内容 -->
  <tbody>
    <tr>
      <td class="center">
        <label>
          <input class="ace" type="checkbox">
          <span class="lbl"></span>
        </label>
      </td>
      <td>1</td>
      <td>ert</td>
      <td>23</td>
      <td>12:00</td>
      <td>启用</td>
      <!-- 操作 -->
      <td>
        <div class="visible-md visible-lg hidden-sm hidden-xs action-buttons">
          <a class="blue" href="">
            <i class="icon-zoom-in bigger-130"></i>
          </a>

          <a class="green" href="">
            <i class="icon-pencil bigger-130"></i>
          </a>

          <a class="red" href="">
            <i class="icon-trash bigger-130"></i>
          </a>
        </div>
      </td>
    </tr>
  </tbody>
  </table>
  </div><!-- /.page-content -->
</div><!-- /.main-content -->


</template> 

<script>



export default {
  name: 'gift_show',
  data () {
    return {
      message: ''
    }    
  }
  // ,methods:{
  //   click:function(event){
  //     var url="http://admin.zb.com/yii2.0/frontend/web/index.php?r=login/login&callback=jsonpCallback";
  //     var _self=this;
  //     var user_name = _self.user_name;
  //     var pwd = _self.pwd;
  //     $.ajax({
  //       type:"POST",
  //       url:url,
  //       data:'pwd='+pwd+'&&user_name='+user_name,
  //       dataType:'jsonp',
  //       success:function(msg){
  //         // alert(user_name);
  //         alert(msg.return);
  //       }
  //     });  
  //   }
  }




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
