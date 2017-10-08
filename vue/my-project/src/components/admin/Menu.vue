<template>
<!-- <div id="main-container" class="main-container"> -->

  <div class="main-container-inner">
    <a href="#" id="menu-toggler" class="menu-toggler">
          <span class="menu-text"></span>
        </a>

        <div id="sidebar" class="sidebar">
       

          <div id="sidebar-shortcuts" class="sidebar-shortcuts">
            <div id="sidebar-shortcuts-large" class="sidebar-shortcuts-large">
              <button class="btn btn-success">
                <i class="icon-signal"></i>
              </button>

              <button class="btn btn-info">
                <i class="icon-pencil"></i>
              </button>

              <button class="btn btn-warning">
                <i class="icon-group"></i>
              </button>

              <button class="btn btn-danger">
                <i class="icon-cogs"></i>
              </button>
            </div>

            <div id="sidebar-shortcuts-mini" class="sidebar-shortcuts-mini">
              <span class="btn btn-success"></span>

              <span class="btn btn-info"></span>

              <span class="btn btn-warning"></span>

              <span class="btn btn-danger"></span>
            </div>
          </div><!-- #sidebar-shortcuts -->

          <ul class="nav nav-list">
            <li class="active">
              <a href="index.html">
                <i class="icon-dashboard"></i>
                <span class="menu-text"> 控制台 </span>
              </a>
            </li>

            <li>
              <a href="typography.html">
                <i class="icon-text-width"></i>
                <span class="menu-text"> 文字排版 </span>
              </a>
            </li>

            <li class="">
              <a class="dropdown-toggle" href="#">
                <i class="icon-desktop"></i>
                <span class="menu-text"> UI 组件 </span>

                <b class="arrow icon-angle-down"></b>
              </a>

              <ul class="submenu" style="display: none;">
                <li>
                  <a href="elements.html">
                    <i class="icon-double-angle-right"></i>
                    组件
                  </a>
                </li>

                <li>
                  <a href="buttons.html">
                    <i class="icon-double-angle-right"></i>
                    按钮 &amp; 图表
                  </a>
                </li>

                <li>
                  <a href="treeview.html">
                    <i class="icon-double-angle-right"></i>
                    树菜单
                  </a>
                </li>

                <li>
                  <a href="jquery-ui.html">
                    <i class="icon-double-angle-right"></i>
                    jQuery UI
                  </a>
                </li>

                <li>
                  <a href="nestable-list.html">
                    <i class="icon-double-angle-right"></i>
                    可拖拽列表
                  </a>
                </li>

                <li>
                  <a class="dropdown-toggle" href="#">
                    <i class="icon-double-angle-right"></i>

                    三级菜单
                    <b class="arrow icon-angle-down"></b>
                  </a>

                  <ul class="submenu">
                    <li>
                      <a href="#">
                        <i class="icon-leaf"></i>
                        第一级
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-toggle" href="#">
                        <i class="icon-pencil"></i>

                        第四级
                        <b class="arrow icon-angle-down"></b>
                      </a>

                      <ul class="submenu">
                        <li>
                          <a href="#">
                            <i class="icon-plus"></i>
                            添加产品
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <i class="icon-eye-open"></i>
                            查看商品
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a class="dropdown-toggle" href="#">
                <i class="icon-list"></i>
                <span class="menu-text"> 表格 </span>

                <b class="arrow icon-angle-down"></b>
              </a>

              <ul class="submenu">
                <li>
                  <a href="tables.html">
                    <i class="icon-double-angle-right"></i>
                    简单 &amp; 动态
                  </a>
                </li>

                <li>
                  <a href="jqgrid.html">
                    <i class="icon-double-angle-right"></i>
                    jqGrid plugin
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a class="dropdown-toggle" href="#">
                <i class="icon-edit"></i>
                <span class="menu-text"> 表单 </span>

                <b class="arrow icon-angle-down"></b>
              </a>

              <ul class="submenu">
                <li>
                  <a href="form-elements.html">
                    <i class="icon-double-angle-right"></i>
                    表单组件
                  </a>
                </li>

                <li>
                  <a href="form-wizard.html">
                    <i class="icon-double-angle-right"></i>
                    向导提示 &amp; 验证
                  </a>
                </li>

                <li>
                  <a href="wysiwyg.html">
                    <i class="icon-double-angle-right"></i>
                    编辑器
                  </a>
                </li>

                <li>
                  <a href="dropzone.html">
                    <i class="icon-double-angle-right"></i>
                    文件上传
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="widgets.html">
                <i class="icon-list-alt"></i>
                <span class="menu-text"> 插件 </span>
              </a>
            </li>

            <li>
              <a href="calendar.html">
                <i class="icon-calendar"></i>

                <span class="menu-text">
                  日历
                  <span title="" class="badge badge-transparent tooltip-error" data-original-title="2&nbsp;Important&nbsp;Events">
                    <i class="icon-warning-sign red bigger-130"></i>
                  </span>
                </span>
              </a>
            </li>

            <li>
              <a href="gallery.html">
                <i class="icon-picture"></i>
                <span class="menu-text"> 相册 </span>
              </a>
            </li>

            <li class="">
              <a class="dropdown-toggle" href="#">
                <i class="icon-tag"></i>
                <span class="menu-text"> 更多页面 </span>

                <b class="arrow icon-angle-down"></b>
              </a>

              <ul class="submenu" style="display: none;">
                <li>
                  <a href="profile.html">
                    <i class="icon-double-angle-right"></i>
                    用户信息
                  </a>
                </li>

                <li>
                  <a href="inbox.html">
                    <i class="icon-double-angle-right"></i>
                    收件箱
                  </a>
                </li>

                <li>
                  <a href="pricing.html">
                    <i class="icon-double-angle-right"></i>
                    售价单
                  </a>
                </li>

                <li>
                  <a href="invoice.html">
                    <i class="icon-double-angle-right"></i>
                    购物车
                  </a>
                </li>

                <li>
                  <a href="timeline.html">
                    <i class="icon-double-angle-right"></i>
                    时间轴
                  </a>
                </li>

                <li>
                  <a href="login.html">
                    <i class="icon-double-angle-right"></i>
                    登录 &amp; 注册
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a class="dropdown-toggle" href="#">
                <i class="icon-file-alt"></i>

                <span class="menu-text">
                  其他页面
                  <span class="badge badge-primary ">5</span>
                </span>

                <b class="arrow icon-angle-down"></b>
              </a>

              <ul class="submenu">
                <li>
                  <a href="faq.html">
                    <i class="icon-double-angle-right"></i>
                    帮助
                  </a>
                </li>

                <li>
                  <a href="error-404.html">
                    <i class="icon-double-angle-right"></i>
                    404错误页面
                  </a>
                </li>

                <li>
                  <a href="error-500.html">
                    <i class="icon-double-angle-right"></i>
                    500错误页面
                  </a>
                </li>

                <li>
                  <a href="grid.html">
                    <i class="icon-double-angle-right"></i>
                    网格
                  </a>
                </li>

                <li>
                  <a href="blank.html">
                    <i class="icon-double-angle-right"></i>
                    空白页面
                  </a>
                </li>
              </ul>
            </li>
          </ul><!-- /.nav-list -->

          <div id="sidebar-collapse" class="sidebar-collapse">
            <i data-icon2="icon-double-angle-right" data-icon1="icon-double-angle-left" class="icon-double-angle-left"></i>
          </div>

         
        </div>

 <!--  </div> -->




</div>
</template>


<script>
export default {
  name: 'imenu',
  data () {
    return {
   
    
    }    
  }
}
</script>


<style>

</style>
