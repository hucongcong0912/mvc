<template>


  <div class="iheader">
    <div id="navbar" class="navbar navbar-default">
    <div id="navbar-container" class="navbar-container">
        <div class="navbar-header pull-left">
          <a class="navbar-brand" href="#">
            <small>
              <i class="icon-leaf"></i>
              ACE后台管理系统
            </small>
          </a><!-- /.brand -->
        </div><!-- /.navbar-header -->

        <div role="navigation" class="navbar-header pull-right">
          <ul class="nav ace-nav">
            <li class="grey">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="icon-tasks"></i>
                <span class="badge badge-grey">4</span>
              </a>

              <ul class="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
                <li class="dropdown-header">
                  <i class="icon-ok"></i>
                  还有4个任务完成
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
                      <span class="pull-left">软件更新</span>
                      <span class="pull-right">65%</span>
                    </div>

                    <div class="progress progress-mini ">
                      <div class="progress-bar " style="width:65%"></div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
                      <span class="pull-left">硬件更新</span>
                      <span class="pull-right">35%</span>
                    </div>

                    <div class="progress progress-mini ">
                      <div class="progress-bar progress-bar-danger" style="width:35%"></div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
                      <span class="pull-left">单元测试</span>
                      <span class="pull-right">15%</span>
                    </div>

                    <div class="progress progress-mini ">
                      <div class="progress-bar progress-bar-warning" style="width:15%"></div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
                      <span class="pull-left">错误修复</span>
                      <span class="pull-right">90%</span>
                    </div>

                    <div class="progress progress-mini progress-striped active">
                      <div class="progress-bar progress-bar-success" style="width:90%"></div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    查看任务详情
                    <i class="icon-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </li>

            <li class="purple">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="icon-bell-alt icon-animated-bell"></i>
                <span class="badge badge-important">8</span>
              </a>

              <ul class="pull-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
                <li class="dropdown-header">
                  <i class="icon-warning-sign"></i>
                  8条通知
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
                      <span class="pull-left">
                        <i class="btn btn-xs no-hover btn-pink icon-comment"></i>
                        新闻评论
                      </span>
                      <span class="pull-right badge badge-info">+12</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i class="btn btn-xs btn-primary icon-user"></i>
                    切换为编辑登录..
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
                      <span class="pull-left">
                        <i class="btn btn-xs no-hover btn-success icon-shopping-cart"></i>
                        新订单
                      </span>
                      <span class="pull-right badge badge-success">+8</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="clearfix">
                      <span class="pull-left">
                        <i class="btn btn-xs no-hover btn-info icon-twitter"></i>
                        粉丝
                      </span>
                      <span class="pull-right badge badge-info">+11</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    查看所有通知
                    <i class="icon-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </li>

            <li class="green">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="icon-envelope icon-animated-vertical"></i>
                <span class="badge badge-success">5</span>
              </a>

              <ul class="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
                <li class="dropdown-header">
                  <i class="icon-envelope-alt"></i>
                  5条消息
                </li>

                <li>
                  <a href="#">
                    <img alt="Alex's Avatar" class="msg-photo" src="/static/assets/avatars/avatar.png">
                    <span class="msg-body">
                      <span class="msg-title">
                        <span class="blue">Alex:</span>
                        不知道写啥 ...
                      </span>

                      <span class="msg-time">
                        <i class="icon-time"></i>
                        <span>1分钟以前</span>
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <img alt="Susan's Avatar" class="msg-photo" src="/static/assets/avatars/avatar3.png">
                    <span class="msg-body">
                      <span class="msg-title">
                        <span class="blue">Susan:</span>
                        不知道翻译...
                      </span>

                      <span class="msg-time">
                        <i class="icon-time"></i>
                        <span>20分钟以前</span>
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <img alt="Bob's Avatar" class="msg-photo" src="/static/assets/avatars/avatar4.png">
                    <span class="msg-body">
                      <span class="msg-title">
                        <span class="blue">Bob:</span>
                        到底是不是英文 ...
                      </span>

                      <span class="msg-time">
                        <i class="icon-time"></i>
                        <span>下午3:15</span>
                      </span>
                    </span>
                  </a>
                </li>

                <li>
                  <a href="inbox.html">
                    查看所有消息
                    <i class="icon-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </li>

            <li class="light-blue">
              <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                <img alt="Jason's Photo" src="/static/assets/avatars/user.jpg" class="nav-user-photo">
                <span class="user-info">
                  <small>欢迎光临,</small>
                  Jason
                </span>

                <i class="icon-caret-down"></i>
              </a>

              <ul class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                <li>
                  <a href="#">
                    <i class="icon-cog"></i>
                    设置
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i class="icon-user"></i>
                    个人资料
                  </a>
                </li>

                <li class="divider"></li>

                <li>
                  <a href="#">
                    <i class="icon-off"></i>
                    退出
                  </a>
                </li>
              </ul>
            </li>
          </ul><!-- /.ace-nav -->
        </div><!-- /.navbar-header -->
      </div>


    </div>
  
   

   </div>
</template>

<script>

  
export default {
  name: 'iheader',
  data () {
    return {
   
    
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
