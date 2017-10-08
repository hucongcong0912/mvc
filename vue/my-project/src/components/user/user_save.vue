<template>
  <div class="user_save">
    <h1>{{ msg }}</h1>

    <div class="col-xs-12 col-sm-10 widget-container-span">
        <div class="widget-header header-color-blue">
          <h5 class="bigger lighter">
            <i class="icon-table"></i>
            用户信息
          </h5>
        </div>
        <div class="widget-main no-padding">
          <table class="table table-striped table-bordered table-hover">
            <thead class="thin-border-bottom">
              <tr>
                <th><i class="icon-user"></i>用户账户名</th>
                <th><i>@</i>用户密码</th>
                <th class="hidden-480">邮箱</th>
                <th class="hidden-480">性别</th>
                <th class="hidden-480">出生日期</th>
                <th class="hidden-480">地址</th>
                <th class="hidden-480">用户头像</th>
                <th class="hidden-480">手机号</th>
                <th class="hidden-480">昵称</th>
                <th class="hidden-480">个性签名</th>
                <th class="hidden-480">等级</th>
                <th class="hidden-480">经验</th>
                <th class="hidden-480">爵位</th>
                <th class="hidden-480">财产</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="">Alex</td>
                <td>
                  <a href="#">alex@email.com</a>
                </td>
                <td class="hidden-480">
                 baoyuyu7474741@qq.com
                </td>
                <td class="hidden-480">
                 男
                </td>
                <td class="hidden-480">
                 1996.08.31
                </td>
                <td class="hidden-480">
                 黑龙江
                </td>
                <td class="hidden-480">
                 嘿嘿嘿
                </td>
                <td class="hidden-480">
                 18245625700
                </td>
                <td class="hidden-480">
                 无敌
                </td>
                <td class="hidden-480">
                 无敌多么寂寞
                </td>
                <td class="hidden-480">
                 999
                </td>
                <td class="hidden-480">
                 max
                </td>
                <td class="hidden-480">
                 丐帮帮主
                </td>
                <td class="hidden-480">
                 就是这天下
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
   <div class="col-xs-12 col-sm-10 widget-container-span">
      <span class="label label-warning">Pending</span>
      <span class="label label-success arrowed-in arrowed-in-right">Approved</span>
      <span class="label label-inverse arrowed">Blocked</span>
      <span class="label label-info arrowed-in arrowed-in-right">Online</span>
   </div>
  </div>
</template>

<script>
export default {
  name: 'user_save',
  data () {
    return {
      msg: '用户信息修改'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
