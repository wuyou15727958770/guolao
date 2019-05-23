<template>
  <div class="personal-container">
    <Top></Top>
    <div class="personal-container-top">
      <div class="personal-container-top-box">
        <p class="personal-container-top-box-p">Hi Allen</p>
        <div class="personal-container-top-box-div">退出</div>
      </div>
    </div>
    <div class="personal-container-middle">
      <div class="personal-container-middle-box">
        <div class="personal-container-middle-box-center">用户中心</div>
        <div class="personal-container-middle-box-upload">
          <div>
              <el-upload
                  class="upload-demo"
                  accept="image/*"
                  :http-request="uploadImg"
                  :show-file-list="false"
                  action="">
                  <img class="headimg" :src="headImage" alt="">
              </el-upload>
            <p class="upload-name">Allen</p>
            <div style="clear:both;"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="personal-center">
      <div class="personal-container-middle-box-collapse">
        <div class="personal-container-middle-box-collapse-center">用户中心</div>
        <el-collapse>
            <el-collapse-item>
              <template slot="title">
                <img class="personal-container-middle-box-collapse-img" src="/static/images/system.png" alt="">
                <span class="personal-container-middle-box-collapse-span">账户设置</span>
              </template>
              <router-link class="personal-container-middle-box-collapse-personal" tag="div" to="/personal/personalInformation/personalInformation">个人资料</router-link>
              <router-link class="personal-container-middle-box-collapse-safe" tag="div" to="/personal/safeCenter/safeCenter">安全中心</router-link>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <img class="personal-container-middle-box-collapse-img" src="/static/images/tes.png" alt="">
                <span class="personal-container-middle-box-collapse-span">认证中心</span>
              </template>
              <router-link class="personal-container-middle-box-collapse-personal" tag="div" to="/personal/personalComfire/personalComfire">个人认证</router-link>
              <router-link id="personal-container-middle-box-collapse-safe2" tag="div" to="/personal/companyComfire/companyComfire">企业/国内个体认证</router-link>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <img class="personal-container-middle-box-collapse-img" src="/static/images/order.png" alt="">
                <span class="personal-container-middle-box-collapse-span">订单管理</span>
              </template>
              <router-link class="personal-container-middle-box-collapse-personal" tag="div" to="/personal">订单管理</router-link>
              <router-link class="personal-container-middle-box-collapse-safe" tag="div" to="/personal">订单管理</router-link>
            </el-collapse-item>
            <div class="personal-container-middle-box-collapse-juan">
              <img src="/static/images/juan.png" alt="">
              <router-link tag="span" to="/personal/coupon/coupon">我的优惠券</router-link>
            </div>
            <el-collapse-item>
              <template slot="title">
                <img class="personal-container-middle-box-collapse-img" src="/static/images/invoice.png" alt="">
                <span class="personal-container-middle-box-collapse-span">我的发票</span>
              </template>
              <router-link class="personal-container-middle-box-collapse-personal" tag="div" to="/personal/invoiceRecoring/invoiceRecoring">开票记录</router-link>
              <router-link id="personal-container-middle-box-collapse-manage" tag="div" to="/personal/safeCenter/safeCenter">开票信息管理</router-link>
            </el-collapse-item>
            <div class="personal-container-middle-box-collapse-news">
                <img src="/static/images/message.png" alt="">
                <router-link tag="span" to="/personal/message/message">我的消息</router-link>
            </div>
          </el-collapse>
      </div>
    </div>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Top from '../../ui/top.vue';
import Foot from '../../ui/foot.vue';
export default {
  name: 'persoanl',
  components: {
    Top,
    Foot
  },
  data() {
      return {
        headImage: ''
      };
    },
    methods: {
       uploadImg(img){
                let formData=new FormData();
                formData.append('pic',img.file);
                formData.append('user_id',this.$cookie.getCookie('u_id'));
                this.$http.post('/api/usercenter/upload_head',formData).then(res=>{
                  if(res.data.code == "1"){
                    this.headImage = 'http://51guolao.yiqibnb.com'+ res.data.data.head_img;
                  }  
                });
            }
  },
  mounted(){
    this.$http.get('/api/usercenter',{params:{
      user_id:this.$cookie.getCookie('u_id')
    }
    }).then(res=>{
     if(res.data.data.head_img == null){
       this.headImage = '/static/images/head.png';
     }else{
       this.headImage = 'http://51guolao.yiqibnb.com'+ res.data.data.head_img;
     }
    })
  }
}

</script>

<style scoped>
 @font-face {
    font-family: 'centerfont'; 
    src: url('/static/PingFang/PingFangSC-Thin.ttf');
  }
  @font-face {
    font-family: 'setfont'; 
    src: url('/static/PingFang/PingFangSC-Regular.ttf');
  }
  .router-link-active{
    color: #f96006!important;
  }
  .personal-container-top{
    width: 100%;
    height: 188px;
    background: url("/static/images/personal-img.png") 100% no-repeat;
  }
  .personal-container-top-box{
    width: 980px;
    height: 188px;
    margin: 0 auto;
  }
  .personal-container-top-box-p{
    float: left;
    font-size: 36px;
    font-weight: 600;
    color: #ffffff;
    height: 50px;
    margin-top: 60px;
    text-decoration:underline;
  }
  .personal-container-top-box-div{
    margin-top: 60px;
    width: 56px;
    height: 32px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    float: right;
    font-size: 16px;
    text-align: center;
    line-height: 32px;
    color: #ffffff;
  }
  .personal-container-middle{
    width: 100%;
    height: 272px;
    background-color: #f8f8f8;
  }
  .personal-container-middle-box{
    width: 1060px;
    height: 272px;
    margin: 0 auto;
  }
  .personal-container-middle-box-center{
    height: 58px;
    border-bottom:1px solid #d8d8d8;
    font-size: 28px;
    line-height: 58px;
    font-weight: 100;
    color: #2f2f2f;
  }
  .personal-container-middle-box-upload{
    margin-top: 64px;
  }
  .upload-demo{
    float: left;
  }
  .headimg{
    width:100px;
    height:100px;
    border-radius:50%;
    border:1px solid #d8d8d8;
    }
  .upload-name{
    float: left;
    font-size: 32px;
    font-weight: 100;
    color: #333333;
    margin: 27px 0 0 36px;
    font-family: centerfont;
  }
  .personal-center{
    width: 1060px;
    margin: 0 auto;
  }
.personal-container-middle-box-collapse{
  width: 210px;
  margin: 64px 0 64px;
  float: left;
}
.personal-container-middle-box-collapse-center{
  font-size: 28px;
  font-weight: 100;
  font-family: centerfont;
  margin: 0 0 14px 65px;
  color: #999999;
}
.personal-container-middle-box-collapse-img{
  margin-right: 48px;
}
.personal-container-middle-box-collapse-span{
  font-family: setfont;
  font-size: 24px;
  color: #333333;
}
.personal-container-middle-box-collapse-personal{
  font-family: centerfont;
  font-size: 24px;
  font-weight: 100;
  margin: 16px 0 16px 80px;
  color: #666666;
}
.personal-container-middle-box-collapse-safe{
  font-family: centerfont;
  font-size: 24px;
  font-weight: 100;
  margin: 0 0 36px 80px;
  color: #666666;
}
#personal-container-middle-box-collapse-safe2{
  font-family: centerfont;
  font-size: 24px;
  font-weight: 100;
  margin-bottom: 36px;
  width: 210px;
  color: #666666;
}
.personal-container-middle-box-collapse-juan{
  height: 48px;
  line-height: 48px;
  border-bottom: 1px solid #EBEEF5
}
.personal-container-middle-box-collapse-juan>span{
  font-family: setfont;
  font-size: 24px;
  color: #333333;
  vertical-align: middle;
  margin-left: 23px;
}
.personal-container-middle-box-collapse-juan>img,.personal-container-middle-box-collapse-news>img{
  vertical-align: middle;
}
.personal-container-middle-box-collapse-news{
  height: 48px;
  line-height: 48px;
}
.personal-container-middle-box-collapse-news>span{
  font-family: setfont;
  font-size: 24px;
  color: #333333;
  vertical-align: middle;
  margin-left: 45px;
}
#personal-container-middle-box-collapse-manage{
  font-family: centerfont;
  font-size: 24px;
  font-weight: 100;
  margin-bottom: 36px;
  width: 144px;
  color: #666666;
  margin-left: 32px;
}
</style>
