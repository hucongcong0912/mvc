<!-- 注册页 -->
<template>
<div>
	<div class="login-container">
		<div class="center">
			<h1>
				<i class="icon-leaf green"></i>
				<span class="red">Ace</span>
				<span class="white">Application</span>
			</h1>
			<h4 class="blue">&copy; Tiger live</h4>
		</div>

		<div class="space-6"></div>

		<div class="position-relative">
			<div id="login-box" class="login-box visible widget-box no-border">
				<div class="widget-body">
					<div class="widget-main">
				<h4 class="header blue lighter bigger">
					
					<i class="icon-coffee green"></i>
					虎牙欢迎你！
				</h4>

				<div class="space-6"></div>

				<form>
					<fieldset>
						<label class="block clearfix">
							<span class="block input-icon input-icon-right">
								<input type="text" class="form-control" placeholder="user_name" />
								<i class="icon-user"></i>
							</span>
						</label>

						<label class="block clearfix">
							<span class="block input-icon input-icon-right">
								<input type="password" class="form-control" placeholder="pwd
								" />
								<i class="icon-lock"></i>
							</span>
						</label>

						<div class="space"></div>

						<div class="clearfix">
							
							<button type="button" class="width-30  btn btn-sm btn-primary">
								取消
							</button>
							

							<button type="button" class="width-30 pull-right btn btn-sm btn-primary">
								注册
							</button>
						</div>

						<div class="space-4"></div>
					</fieldset>
				</form>

				<div class="social-or-login center">
					<span class="bigger-110"></span>
				</div>

			</div><!-- /widget-main -->
		</div><!-- /widget-body -->
	</div><!-- /login-box -->
	</div><!-- /position-relative -->
	</div>

				
			

		
</div>
</template>

<script>
export default {
	name: 'ilogin',
	data () {
		return {
		message: ''
		}    
	},
	methods:{
			//注册
            login:function(){ 
            	//获取 name & pwd
            	var user_name = '';
            	var pwd = '';

                 $.ajax({
                    type : "POST",
                    url : "http://xx.com/api/user/register", // yii后台登录接口
                    data : {
                        user_name : user_name,
                        pwd : pwd,
                    },
                    success : function(data) {
　　　　　　　　　　　　　　 var message = $.parseJSON(data);//后台返回的json数据需要转为对象
                         vue.selectById=message;//把后台返回的JSON数据赋给selectById
                    },
                    error : function(){
                        alert("错误");
                    }

                });
            },

            
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style type="text/css">
	#navbar,#sidebar{
		display:none;
	}
</style>