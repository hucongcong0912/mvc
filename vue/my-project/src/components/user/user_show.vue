<template>
  <div class="user_show">
    <h1>{{ msg }}</h1>
    <h1>{{ show }}</h1>
    <h1><input v-model="show"></h1>
    <div id="user_log" class="col-xs-12 col-sm-10 widget-container-span">
      <div class="widget-box">
        <div class="widget-header widget-header-large">
          <h5 class="bigger lighter">
            <i class="icon-table"></i>
            用户信息
          </h5>
          <div class="widget-toolbar">
            <a href="#" data-action="settings">
              <i class="icon-cog"></i>
            </a>
            <a href="#" data-action="reload">
              <i class="icon-refresh"></i>
            </a>
            <a href="#" data-action="collapse">
              <i class="icon-chevron-up"></i>
            </a>
            <a href="#" data-action="close">
              <i class="icon-remove"></i>
            </a>
          </div>
        </div>
        <div class="widget-body">
          <div class="widget-main no-padding">
            <table class="table table-striped table-bordered table-hover">
              <thead class="thin-border-bottom">
                <tr>
                  <th><i class="icon-user"></i>用户yy号</th>
                  <th><i class="icon-user"></i>用户账户名</th>
                  <th><i>@</i>用户密码</th>
                  <th class="hidden-480">用户详细信息</th>
                  <th class="hidden-480">用户关注</th>
                  <th class="hidden-480">用户观看历史</th>
                  <!-- <th class="hidden-480">邮箱</th>
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
                  <th class="hidden-480">财产</th> -->
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="">Alex</td>
                  <td>
                    <a href="#">alex@email.com</a>
                  </td>
                  <td class="">
                    <span class="label label-warning">密码</span>
                  </td>
                  <td class="">
                                  <span class="label label-info arrowed-in arrowed-in-right">详细信息</span>
                  </td>
                  <td class="">
                                  <span class="label label-success arrowed-in arrowed-in-right">关注主播</span>
                  </td>
                  <td class="">
                                  <span class="label label-inverse arrowed">观看历史</span>
                  </td>

                  <!-- 
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
                  -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <br>
    <!-- <div class="col-sm-5 widget-container-span">
                    <div class="widget-box">
                      <div class="widget-header">
                        <h5 class="smaller">Tabbed</h5>

                        <div class="widget-toolbar no-border">
                          <ul class="nav nav-tabs" id="myTab">
                            <li class="active">
                              <a data-toggle="tab" href="#home">Home</a>
                            </li>

                            <li>
                              <a data-toggle="tab" href="#profile">Profile</a>
                            </li>

                            <li>
                              <a data-toggle="tab" href="#info">Info</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="widget-body">
                        <div class="widget-main padding-6">
                          <div class="tab-content">
                            <div id="home" class="tab-pane in active">
                              <p>Raw denim you probably haven't heard of them jean shorts Austin.</p>
                            </div>

                            <div id="profile" class="tab-pane">
                              <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.</p>
                            </div>

                            <div id="info" class="tab-pane">
                              <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    </div>

    <div class="col-sm-5 widget-container-span">
                    <div class="widget-box">
                      <div class="widget-header widget-hea1der-small header-color-dark">
                        <h6>Scroll Content</h6>

                        <div class="widget-toolbar">
                          <a href="#" data-action="settings">
                            <i class="icon-cog"></i>
                          </a>

                          <a href="#" data-action="reload">
                            <i class="icon-refresh"></i>
                          </a>

                          <a href="#" data-action="collapse">
                            <i class="icon-chevron-up"></i>
                          </a>

                          <a href="#" data-action="close">
                            <i class="icon-remove"></i>
                          </a>
                        </div>
                      </div>

                      <div class="widget-body">
                        <div class="widget-main padding-4">
                          <div class="slim-scroll" data-height="125">
                            <div class="content">
                              <div class="alert alert-info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                              </div>
                              <div class="alert alert-danger">
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                              </div>
                              <div class="alert alert-success">
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                              </div>
                              <div class="alert">
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    </div>

    <br>

    <div class="col-xs-12 col-sm-10 widget-container-span">
      <div id="id-message-list-navbar" class="message-navbar align-center clearfix">
          <div class="message-infobar" id="id-message-infobar">
            <span class="blue bigger-150">用户观看历史</span>
          </div>
      </div>
      <div class="message-list-container">
        <div class="message-list" id="message-list">
          <div class="message-item message-unread">
            <label class="inline">
              <input type="checkbox" class="ace" />
              <span class="lbl"></span>
            </label>

            <i class="message-star icon-star orange2"></i>
            <span class="sender" title="Alex John Red Smith">Alex John Red Smith </span>
            <span class="time">1:33 pm</span>

            <span class="summary">
              <span class="text">
                Click to open this message
              </span>
            </span>
          </div>

          <div class="message-item message-unread">
            <label class="inline">
              <input type="checkbox" class="ace" />
              <span class="lbl"></span>
            </label>

            <i class="message-star icon-star-empty light-grey"></i>

            <span class="sender" title="John Doe">
              John Doe
              <span class="light-grey">(4)</span>
            </span>
            <span class="time">7:15 pm</span>

            <span class="attachment">
              <i class="icon-paper-clip"></i>
            </span>

            <span class="summary">
              <span class="badge badge-pink mail-tag"></span>
              <span class="text">
                Clik to open this message right here
              </span>
            </span>
          </div>

          <div class="message-item">
            <label class="inline">
              <input type="checkbox" class="ace" />
              <span class="lbl"></span>
            </label>

            <i class="message-star icon-star-empty light-grey"></i>
            <span class="sender" title="Philip Markov">Philip Markov </span>
            <span class="time">10:15 am</span>

            <span class="attachment">
              <i class="icon-paper-clip"></i>
            </span>

            <span class="summary">
              <span class="message-flags">
                <i class="icon-reply light-grey"></i>
              </span>
              <span class="text">
                Photo booth beard raw denim letterpress vegan
              </span>
            </span>
          </div>

          <div class="message-item">
            <label class="inline">
              <input type="checkbox" class="ace" />
              <span class="lbl"></span>
            </label>

            <i class="message-star icon-star orange2"></i>
            <span class="sender" title="Sabrina">Sabrina </span>
            <span class="time">Yesterday</span>

            <span class="summary">
              <span class="text">
                Nullam quis risus eget urna mollis ornare
              </span>
            </span>
          </div>

          <div class="message-item">
            <label class="inline">
              <input type="checkbox" class="ace" />
              <span class="lbl"></span>
            </label>

            <i class="message-star icon-star-empty light-grey"></i>
            <span class="sender" title="Philip Markov">Philip Markov </span>
            <span class="time">Yesterday</span>

            <span class="attachment">
              <i class="icon-paper-clip"></i>
            </span>

            <span class="summary">
              <span class="badge badge-success mail-tag"></span>
              <span class="text">
                Vestibulum id ligula porta felis euismod
              </span>
            </span>
          </div>

          <div class="message-item">
            <label class="inline">
              <input type="checkbox" class="ace" />
              <span class="lbl"></span>
            </label>

            <i class="message-star icon-star-empty light-grey"></i>
            <span class="sender" title="Doctor Gomenz">Doctor Gomenz </span>
            <span class="time">April 5</span>

            <span class="summary">
              <span class="text">
                Vim te vivendo convenire, summo fuisset
              </span>
            </span>
          </div>

          <div class="message-item">
            <label class="inline">
              <input type="checkbox" class="ace" />
              <span class="lbl"></span>
            </label>

            <i class="message-star icon-star-empty light-grey"></i>
            <span class="sender" title="Robin Hood">Robin Hood </span>
            <span class="time">April 4</span>

            <span class="summary">
              <span class="message-flags">
                <i class="icon-reply light-grey"></i>
              </span>
              <span class="text">
                No eos veniam equidem mentitum, his porro
              </span>
            </span>
          </div>

          <div class="message-item">
            <label class="inline">
              <input type="checkbox" class="ace" />
              <span class="lbl"></span>
            </label>

            <i class="message-star icon-star-empty light-grey"></i>
            <span class="sender" title="Google Inc">Google Inc </span>
            <span class="time">April 3</span>

            <span class="summary">
              <span class="badge badge-grey mail-tag"></span>
              <span class="text">
                Convallis facilisis euismod urna sodales
              </span>
            </span>
          </div>

          <div class="message-item">
            <label class="inline">
              <input type="checkbox" class="ace" />
              <span class="lbl"></span>
            </label>

            <i class="message-star icon-star-empty light-grey"></i>
            <span class="sender" title="Shrek">Shrek </span>
            <span class="time">March 28</span>

            <span class="attachment">
              <i class="icon-paper-clip"></i>
            </span>

            <span class="summary">
              <span class="message-flags">
                <i class="icon-flag icon-flip-horizontal light-grey"></i>
              </span>
              <span class="text">
                Photo booth beard raw denim letterpress vegan messenger
              </span>
            </span>
          </div>

          <div class="message-item">
            <label class="inline">
              <input type="checkbox" class="ace" />
              <span class="lbl"></span>
            </label>

            <i class="message-star icon-star-empty light-grey"></i>
            <span class="sender" title="Yahoo!">Yahoo! </span>
            <span class="time">March 27</span>

            <span class="summary">
              <span class="message-flags">
                <i class="icon-mail-forward light-grey"></i>
              </span>
              <span class="text">
                Tofu biodiesel williamsburg marfa, four loko mcsweeney
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="message-footer clearfix">
        <div class="pull-left"> 151 messages total </div>

        <div class="pull-right">
          <div class="inline middle"> page 1 of 16 </div>

          &nbsp; &nbsp;
          <ul class="pagination middle">
            <li class="disabled">
              <span>
                <i class="icon-step-backward middle"></i>
              </span>
            </li>

            <li class="disabled">
              <span>
                <i class="icon-caret-left bigger-140 middle"></i>
              </span>
            </li>

            <li>
              <span>
                <input value="1" maxlength="3" type="text" />
              </span>
            </li>

            <li>
              <a href="#">
                <i class="icon-caret-right bigger-140 middle"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="icon-step-forward middle"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> -->

<div class="row">
                  

                 
                </div>
  </div>
</template>

<script>
export default {
  name: 'user_show',
  data () {
    return {
      msg: '用户信息展示',
      show:'show'
    }
  },mounted:function(){
        var url="http://admin.zb.com/yii2.0/frontend/web/index.php?r=user/show&callback=jsonpCallback";
        // var url="json.jsp";

        var _self=this;
        _self.show = _self.show
        // alert($)
        $.ajax({
            type:"GET",
            url:url,
            dataType:'jsonp',
            success:function(msg){
              alert(msg.a)
            }
        });


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
</style>
