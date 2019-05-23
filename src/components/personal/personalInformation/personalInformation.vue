<template>
  <div class="personalInformation-container">
    <div class="personalInformation-container-box">
        <div class="personalInformation-container-box-top">个人资料</div>
        <div class="personalInformation-container-box-detail">
          <div class="personalInformation-container-box-name">
            <span>昵称</span>
            <input v-model="nickname" type="text">
          </div>
          <div class="personalInformation-container-box-phone">
            <span>手机号码</span>
            <span class="num">{{phone}}</span>
          </div>
          <div class="personalInformation-container-box-mail">
            <img src="/static/images/star.png" alt="">
            <span>邮箱</span>
            <input v-model="mail" type="text">
          </div>
          <div class="personal-msg">{{mailTip}}</div>
          <div class="personalInformation-container-box-qq">
            <span>QQ号码</span>
            <input v-model="qq" type="text">
          </div>
          <div class="personalInformation-container-box-fix">
            <img src="/static/images/star.png" alt="">
            <span>固定电话</span>
            <input v-model="fixphone" type="text">
          </div>
          <div class="personal-msg">{{fixphoneTip}}</div>
          <div class="personalInformation-container-box-fax">
            <span>传真号码</span>
            <input v-model="fax" type="text">
          </div>
        </div>
        <div @click="save" class="personalInformation-container-box-save">
        </div>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: 'personalInformation',
  data(){
    return{
      nickname:'',
      phone:'',
      mail:'',
      qq:'',
      fixphone:'',
      fax:'',
      mailTip:'',
      fixphoneTip:''
    }
  },
  watch:{
    "mail"(newValue){
                let reg=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
                if(newValue ==''){
                    return this.mailTip='请填写邮箱号';
                }
                if(!reg.test(newValue)){
                    return this.mailTip='邮箱格式不正确';
                }
                return this.mailTip='';
            },
    "fixphone"(newValue){
                let reg=/0\d{2,3}-\d{7,8}/;
                if(newValue ==''){
                    return this.fixphoneTip='请填写固定电话';
                }
                if(!reg.test(newValue)){
                    return this.fixphoneTip='固定电话格式不正确';
                }
                return this.fixphoneTip='';
            }
    
  },
  components: {
    
  },
  mounted(){
    this.$http.get('/api/usercenter',{params:{
      user_id:this.$cookie.getCookie('u_id')
      }
    }).then(res=>{
      this.nickname = res.data.data.name;
      this.phone = res.data.data.mobile;
      this.mail = res.data.data.email;
      this.qq = res.data.data.qq;
      this.fixphone = res.data.data.tel;
      this.fax = res.data.data.fax;
    })
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
    save(){
      if(this.mail == ''){
              return this.mailTip='请填写邮箱号';
          }else if(this.fixphone == ''){
              return this.fixphoneTip='请填写固定电话';
          }else{
            this.$http.post('/api/usercenter/changinfo',{
            user_id:this.$cookie.getCookie('u_id'),
            name:this.nickname,
            email:this.mail,
            qq:this.qq,
            tel:this.fixphone,
            fax:this.fax
          
          }).then(res=>{
            if(res.data.code == "1"){
              this.tip('success',"保存成功");
            }else if(res.data.code == "0"){
              this.tip('error',"保存失败");
            };
          })
      }
    }
  }
}

</script>

<style>
    @font-face {
      font-family: 'informationfont'; 
      src: url('/static/PingFang/PingFangSC-Thin.ttf');
    }
    @font-face {
      font-family: 'personalfont'; 
      src: url('/static/PingFang/PingFangSC-Regular.ttf');
    }
    .personalInformation-container-box{
        width: 800px;
        float: left;
        margin: 64px 0 0 50px;
    }
    .personalInformation-container-box-top{
      font-family: informationfont;
      font-size: 28px;
      font-weight: 100;
      color: #999999;
      margin: 0 0 14px 43px;
    }
    .personalInformation-container-box-detail{
      width: 800px;
      border-top:1px solid #d8d8d8;
      margin-bottom: 141px;
    }
    .personalInformation-container-box-detail>div>span{
      font-family: personalfont;
      font-size: 18px;
      color: #333333;
    }
    .personalInformation-container-box-detail>div>input{
      width: 288px;
      height: 25px;
      font-family: informationfont;
      font-size: 18px;
      outline: none;
      color: #333333;
      margin-left: 12px;
      border-radius: 4px;
      border: solid 1px #d6d6d6;
      padding: 7px 0 8px 12px;
    }
    .personalInformation-container-box-name{
      margin: 13px 0 40px 118px;
    }
    .personalInformation-container-box-phone{
      margin: 0 0 39px 82px;
    }
    .num{
      margin-left: 28px;
    }
    .personal-msg{
      height: 32px;
      line-height: 32px;
      color: red;
      font-size: 14px;
      margin-left: 185px;
    }
    .personalInformation-container-box-mail,.personalInformation-container-box-fix{
      margin-left: 30px;
    }
    .personalInformation-container-box-mail>img{
      margin: 10px 68px 0 0;
    }
    .personalInformation-container-box-fix>img{
      margin: 10px 34px 0 0;
    }
    .personalInformation-container-box-qq{
      margin: 0 0 32px  94px;
    }
    .personalInformation-container-box-fax{
      margin-left: 88px;
    }
    .personalInformation-container-box-save{
      margin-left: 202px;
      width: 136px;
      height: 60px;
      cursor: pointer;
      margin-bottom: 118px;
      background: url("/static/images/save.png") 100% no-repeat;
    }
</style>
