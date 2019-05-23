<template>
  <div>
    <div class="box">
        <div class="box-wrap">
            <div class="box-wrap-top">
                <div class="login">登录</div>
                <div @click="toregister" class="register">注册</div>
            </div>
            <div class="errbox">
                <div v-show="err" class="input-box">
                    <img class="warn" src="/static/images/warning.png" alt="">
                    <p>手机号或者密码错误</p>
                </div>
            </div>
            <input v-model="loginData.phone" class="user-name" type="text" placeholder="手机号码">
            <div class="login-msg">{{loginData.phoneTip}}</div>
            <input v-model="loginData.password" class="password-name" type="password" placeholder="密码">
            <div class="login-msg">{{loginData.passwordTip}}</div>
            <div @click="login" class="land">登陆</div>
            <div class="land-box">
                <input v-model="checked" type="checkbox">
                <div class="auto">自动登陆</div>
                <div class="forget" @click="forgetPassword()">忘记密码</div>
            </div>
        </div>
        <div class="bottom">
        </div>
    </div>
    
  </div>
</template>

<script> 
export default {
  name: 'App',
  components: {
      
  },
  data(){
      return{
          loginData:{
              phone:'',
              phoneTip:'',
              password:'',
              passwordTip:''
          },
          type:"1",
          err:false,
          checked:false
      }
  },
  watch:{
      "loginData.phone"(newValue){
                let reg=/^[1][3,4,5,7,8][0-9]{9}$/;
                if(newValue ==''){
                    return this.loginData.phoneTip='请填写手机号码';
                }
                if(newValue.length!=11||!reg.test(newValue)){
                    return this.loginData.phoneTip='手机号格式不正确';
                }
                return this.loginData.phoneTip='';
            },
            "loginData.password"(newValue){
                if(newValue ==''){
                    return this.loginData.passwordTip='请填写密码';
                }
                return this.loginData.passwordTip='';
            },
  },
  methods:{
      tip(type,msg){
                return this.$message({
                    type:type,
                    message:msg,
                    showClose:true,
                    duration:1500
                })
            },
      toregister(){
          this.$router.push("/register")
      },
      forgetPassword(){
          this.$router.push("/forgetPassword")
      },
      login(){
          if(this.loginData.phone == ''){
              return this.loginData.phoneTip='请填写手机号码';
          }else if(this.loginData.password == ''){
              return this.loginData.passwordTip='请填写密码';
          }else{
              this.$http.post('/api/login',{
                  phone:this.loginData.phone,
                  password:this.loginData.password,
                  type:this.type
              }).then(res=>{
                  if(res.data.code == "1"){
                      if(this.checked == true){
                        this.$cookie.setCookie("username",this.loginData.phone,7);
                        this.$cookie.setCookie("u_id",res.data.data.user_id,7);
                      }else{
                        this.$cookie.setCookie("username",this.loginData.phone,1);
                        this.$cookie.setCookie("u_id",res.data.data.user_id,1);
                      }
                      this.tip('success',"登陆成功");
                      setTimeout(()=>{
                     this.$router.push("/")
                 },1000)
                  }else if(res.data.code == "0"){
                      this.tip('error',"手机号或者密码错误");
                  }
              })
          }
      }
  }
}

</script>

<style scoped>
  .box{
      width: 100%;
      height: 1080px;
      background: url("/static/images/background.png") no-repeat;
      background-size: cover;
      position: relative;
  }
   .box-wrap{
       position: absolute;
       width: 510px;
       height: 700px;
       left: 50%;
       top:50%;
       transform: translate(-50%,-50%);
       border-radius: 6px;
       background-color: #ffffff;
       padding-left: 50px;
   }
  .bottom{
      position: absolute;
      width:727px;
      height: 41px;
      background: url("/static/images/invalid-name.png") no-repeat;  
      background-size: cover;
      left: 50%;
      bottom:59px;
      transform: translate(-50%,0);
  }
  .box-wrap-top{
      width: 460px;
      height: 54px;
      border-bottom:solid 1px #f6f6f6;
      margin: 50px 0 12px;
  }
  .box-wrap-top>div{
      width: 56px;
      height: 52px;
      float: left;
      font-family: PingFangSC;
      font-size: 28px;
      font-weight: 500;
      color: #111111;
  }
  .login{
      border-bottom: 2px solid black;
  }
  .register{
      margin-left: 76px;
  }
  .errbox{
      height: 60px;
      margin-bottom: 12px;
  }
  .input-box{
      width: 460px;
      height: 60px;
      border-radius: 6px;
      border: solid 1px #ff4343;
      background-color: #ffe3e3;
  }
  .warn{
      float: left;
      margin:17px 12px 0 24px;
  }
  .input-box>p{
      font-family: PingFangSC;
      font-size: 24px;
      color: #111111;
      margin-top: 13px;
  }
  .user-name,.password-name{
      width: 436px;
      height: 60px;
      font-size: 24px;
      color: #333333;
      border-radius: 6px;
      border: solid 1px #d3d3d3;
      background-color: #f3f3f3;
      padding-left: 24px;
  }
  .user-name,.password-name::-webkit-input-placeholder { 
        color: #999999;
        font-size: 24px;
    }
    .login-msg{
        padding-left: 24px;
        line-height: 40px;
        height: 40px;
        font-size: 14px;
        color:red;
    }
    .land{
        width: 460px;
        height: 60px;
        border-radius: 6px;
        background-color: #f3f3f3;
        text-align: center;
        line-height: 60px;
        cursor: pointer;
        font-family: PingFangSC;
        font-size: 24px;
        color: #999999;
        margin-bottom: 30px;
    } 
    input[type=checkbox] {
        width: 19px;
        height: 19px;
        float: left;
        margin-top: 5px;
    }
    .land-box>div{
        float: left;
    }
    .auto{
        font-family: PingFangSC;
        font-size: 20px;
        color: #333333;
        margin-left: 12px;
    }
    .forget{
        font-family: PingFangSC;
        font-size: 20px;
        margin-left: 249px;
        color: #999999;
    }
</style>
