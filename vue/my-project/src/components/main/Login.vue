<!-- 登录页 -->
<template>
<div id="login">
	<div class="login-container">
		<div class="center">
			<h1>
				<i class="icon-leaf green"></i>
				<span class="red">Ace</span>
				<span class="white">Application</span>
			</h1>
			<h4 class="blue">&copy; Company Name</h4>
		</div>

		<div class="space-6"></div>

		<div class="position-relative">
			<div id="login-box" class="login-box visible widget-box no-border">
				<div class="widget-body">
					<div class="widget-main">
				<h4 class="header blue lighter bigger">
					<i class="icon-coffee green"></i>
					Please Enter Your Information
				</h4>

				<div class="space-6"></div>

				<form>
					<fieldset>
						<label class="block clearfix">
							<span class="block input-icon input-icon-right">
								<input type="text" class="form-control" placeholder="Username" name="l_name" v-model="admin.user_name"  ref="usr_name"/>
								<i class="icon-user"></i>
							</span>
						</label>

						<label class="block clearfix">
							<span class="block input-icon input-icon-right">
								<input type="password" class="form-control" placeholder="Password" v-model="admin.pwd" name="l_pwd" ref="pwd" />
								<i class="icon-lock"></i>
							</span>
						</label>

						<div class="space"></div>

						<div class="clearfix">
							<label class="inline">
								<input type="checkbox" class="ace" />
								<span class="lbl"> 记住我哦</span>
							</label>

							<button v-on:click="login(admin)" type="button" class="width-35 pull-right btn btn-sm btn-primary">
								<i class="icon-key"></i>
								登录
							</button>
						</div>

						<div class="space-4"></div>
					</fieldset>
				</form>

				<div class="social-or-login center">
					<span class="bigger-110"></span>
				</div>

				<div class="social-login center">
					<a class="btn btn-primary">
						<i class="icon-facebook"></i>
					</a>

					<a class="btn btn-info">
						<i class="icon-twitter"></i>
					</a>

					<a class="btn btn-danger">
						<i class="icon-google-plus"></i>
					</a>
				</div>
			</div><!-- /widget-main -->

			<div class="toolbar clearfix">
				<div>
					<a href="" onclick="show_box('forgot-box'); return false;" class="forgot-password-link">
						<i class="icon-arrow-left"></i>
						忘记密码
					</a>
				</div>

				<div>
					<a href="#/register" onclick="show_box('signup-box'); return false;" class="user-signup-link">
						我要注册
						<i class="icon-arrow-right"></i>
					</a>
				</div>
			</div>
		</div><!-- /widget-body -->
	</div><!-- /login-box -->
	</div><!-- /position-relative -->
	</div>

				
			

		
</div>
</template>


<script>
export default {
	name: '#login',
	data () {
		return {
			admin:[],
		}    
	},
	methods:{
			//登录
            login:function(admin){ 
            	// this.data.usr_name = this.usr_name
            

            	// 获取 name & pwd
            	this.$http.jsonp("http://localhost/php12/zhibo/zb/admin/yii2.0/frontend/web/index.php?r=login/index&user_name="+admin.user_name+"&pwd="+admin.pwd,{},{emulateJSON: true}) 
            	.then(function (res){ 
				 	alert(res.body.msg);

				 	if(res.body.status){
				 		location.href='http://localhost:8080/#/';
				 	}
				
				 }, function (a) { 
				 	alert('请求失败....');
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