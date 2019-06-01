<template>
    <div class="header">
        <div class="header-wrap">
            <div class="header-wrap-container">
                <img class="logo" src="/static/images/guolao.png" alt="">
                <div class="header-wrap-box">
                    <router-link id="firstpage" tag="div" to="/">首页</router-link>
                    <div class="trade">
                        <router-link  tag="div" to="/trade">商标服务</router-link>
                        <div class="div1">
                            <div v-for="(v,k,index) in myarr" class="div1-box">
                                <p> {{v.content}}</p>
                                <p class="div1-box-p" v-if="k==0">{{v.hot}}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="patent">
                        <router-link tag="div" to="/patent">专利服务</router-link>
                        <div class="div2">
                            <div v-for="(v,k,index) in copyarr" class="div2-box">
                                <p>{{v.content}}</p>
                                <p class="div2-box-p" v-if="k==0">{{v.hot}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="copyright">
                        <router-link tag="div" to="/copyright">版权服务</router-link>
                        <div class="div3">
                            <div v-for="(v,k,index) in arr" class="div3-box">
                                <p>{{v.content}}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="property">
                        <router-link tag="div" to="/custom">产权交易</router-link>
                        <div class="div4">
                            <div v-for="(v,k,index) in propertyarr" class="div4-box">
                                <p>{{v.content}}</p>
                            </div>
                        </div>
                    </div>
                    
                    <router-link tag="div" to="/custom">产权交易</router-link>
                    <router-link tag="div" to="/about">关于我们</router-link>

                    <div id="image_box">
                        <img class="buy" src="/static/images/mybuy.png" alt="">
                    </div>

                    <div v-show="myshow" id="header-wrap-box-login">
                        <router-link to="/login">登陆/</router-link><router-link to="/register">注册</router-link>
                    </div>
                    <div id="quit-div" v-show="!myshow">
                        <router-link style="float:left;" tag="div" to="/personal">个人中心|</router-link>
                        <div style="float:left;" @click="quit">退出</div>
                    </div>
                    
                </div>
                
            </div>
            
            
        </div>   
    </div>
</template>

<script>
    export default {
        name: "top",
        components:{

        },
        data(){
          return {
            myarr:[{content:"商标检索",hot:"hot"},{content:"商标转让/转移"},{content:"商标使用许可备案"},{content:"商标撤三答辩"},
            {content:"商标注册"},{content:"商标异议"},{content:"商标驳回复审"},{content:"商标无效宣告"},{content:"商标自助注册"},
            {content:"商标异议答辩"},{content:"补发商标注册证"},{content:"补发商标注册证"},{content:"商标设计"},{content:"商标续展"},
            {content:"商标撤三申请"},{content:"商标设计担保注册"},{content:"商标变更"}],

            arr:[{content:"软件著作权"},{content:"作品著作权"}],

            propertyarr:[{content:"商标交易"},{content:"专利交易"}],

            copyarr:[{content:"发明专利申请",hot:"hot"},{content:"专利驳回复审"},{content:"专利检索报告"},{content:"专利著录项变更"},
            {content:"实用新型专利申请"},{content:"专利许可备案"},{content:"专利评估报告"},{content:"外观专利申请"},{content:"专利无效宣告"},{content:"专利副本登记"},
            {content:"专利分析申请"},{content:"专利无效宣告答辩"},{content:"专利年费代缴"}],
             myshow:true
          }
         
        },
        mounted(){
          if(this.$cookie.getCookie('u_id')){
            this.myshow= false;
          }
        },
        methods:{
          quit(){
            this.$cookie.delCookie('username');
            this.$cookie.delCookie('u_id');
            this.$router.push({path:"/"});
            this.myshow= true;
          }
        }
    }
</script>

<style scoped>
    .header-wrap{
        width:100%;
        height: 54px;
        background-color: #2e2e34;
    }
    .header-wrap-container{
        width: 1160px;
        height: 54px;
        margin: 0 auto;
        line-height: 54px;
    }
    .logo{
        width: 127px;
        height: 26px;
        float: left;
        vertical-align: middle;
        margin: 14px 315px 0 0;
    }
    .header-wrap-box{
        width: 718px;
        height: 54px;
        float: left;
    }
    .header-wrap-box>a{
        text-decoration: none;
    }
    #header-wrap-box-login{
        width: 112px;
        height: 34px;
        border-radius: 4px;
        background-color: #ffffff;
        margin-right: 0;
        margin-top: 10px;
        line-height: 34px;
        text-align: center; 
    }
    #header-wrap-box-login>a{
        text-decoration: none;
        color: #f96006;
        font-size: 14px;
        font-family: "PingFangSC-Regular","Microsoft YaHei";
    }
    .header-wrap-box>div{
        font-family: "PingFangSC-Regular","Microsoft YaHei";
        float: left;
        color: #ffffff;
        font-size: 14px;
        cursor: pointer;
        margin-right: 26px;
    }
    #image_box{
        line-height: 54px;
        margin-right: 40px;
    }
    #quit-div{
        margin-right: 0;
    }
    .buy{
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
    .trade,.copyright,.patent,.property{
        position: relative;
    }
    .div1,.div2,.div3,.div4{
        position:absolute;
        background-color: rgba(51, 51, 51, 0.9);
        height: 0;
        transition: all 1s ease;
        opacity: 0;
        z-index: 3;
        overflow: hidden;
        padding-left: 64px;
    }
    .div1{
        width: 680px;
        left: -60px;
    }
    .div2{
        width: 598px;
        left: -60px;
    }
    .div3{
        width: 523px;
        left: -60px;
    }
    .div4{
        width: 434px;
        left: -60px;
    }
    .trade:hover .div1{
        height: 225px;
        opacity: 1;
    }
    .div1-box{
        float: left;
        height: 16px;
        line-height: normal;
        margin: 17px 0 16px 0;
        text-align: center;
        line-height: 16px;
    }
    .div1-box>p{
        font-size: 12px;
        float: left;
        font-family: "PingFangSC-Regular","Microsoft YaHei";
        font-size: 12px;
        color: #ffffff;
    }
    .div1-box-p{
        width: 27px;
        height: 12px;
        background-color: #d0021b;
        font-family: "PingFangSC-Regular","Microsoft YaHei";
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        color: #ffffff;
        margin:2px 0 0 10px;
    }
    .div1>div:nth-of-type(1){
        margin-right: 43px;
    }
    .div1>div:nth-of-type(2){
        margin-right: 49px;
    }
    .div1>div:nth-of-type(3){
        margin-right: 32px;
    }
    .div1>div:nth-of-type(4){
        margin-right: 223px;
    }
    .div1>div:nth-of-type(5){
        margin: 0 81px 0 0;
    }
    .div1>div:nth-of-type(6){
        margin: 0 80px 0 0;
    }
    .div1>div:nth-of-type(7){
        margin: 0 55px 0 0;
    }
    .div1>div:nth-of-type(8){
        margin: 0 223px 0 0;
    }
    .div1>div:nth-of-type(9){
        margin-right: 57px;
    }
    .div1>div:nth-of-type(10){
        margin-right: 56px;
    }
    .div1>div:nth-of-type(11){
        margin-right: 43px;
    }
    .div1>div:nth-of-type(12){
        margin-right: 199px;
    }
    .div1>div:nth-of-type(13){
        margin: 0 81px 0 0;
    }
    .div1>div:nth-of-type(14){
        margin: 0 80px 0 0;
    }
    .div1>div:nth-of-type(15){
        margin: 0 56px 0 0;
    }
    .div1>div:nth-of-type(16){
        margin: 0 199px 0 0;
    }
    .patent:hover .div2{
        height: 193px;
        opacity: 1;
    }
    .div2-box{
        float: left;
        height: 16px;
        line-height: normal;
        margin: 17px 0 16px 0;
        text-align: center;
        line-height: 16px;
    }
    .div2-box>p{
        font-size: 12px;
        float: left;
        font-family: "PingFangSC-Regular","Microsoft YaHei";
        font-size: 12px;
        color: #ffffff;
    }
    .div2-box-p{
        width: 27px;
        height: 12px;
        background-color: #d0021b;
        font-family: "PingFangSC-Regular","Microsoft YaHei";
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        color: #ffffff;
        margin:2px 0 0 10px;
    }
    .div2>div:nth-of-type(1){
        margin-right: 21px;
    }
    .div2>div:nth-of-type(2){
        margin-right: 57px;
    }
    .div2>div:nth-of-type(3){
        margin-right: 56px;
    }
    .div2>div:nth-of-type(4){
        margin-right: 117px;
    }
    .div2>div:nth-of-type(5){
        margin: 0 32px 0 0;
    }
    .div2>div:nth-of-type(6){
        margin: 0 56px 0 0;
    }
    .div2>div:nth-of-type(7){
        margin: 0 270px 0 0;
    }
    .div2>div:nth-of-type(8){
        margin-right: 56px;
    }
    .div2>div:nth-of-type(9){
        margin-right: 57px;
    }
    .div2>div:nth-of-type(10){
        margin-right: 269px;
    }
    .div2>div:nth-of-type(11){
        margin:0 56px 0 0;
    }
    .div2>div:nth-of-type(12){
        margin:0 30px 0 0;
    }
    .div2>div:nth-of-type(13){
        margin:0 56px 0 0;
    }
    .copyright:hover .div3{
        height: 129px;
        opacity: 1;
    }
    .div3-box{
        height: 16px;
        line-height: normal;
        margin: 17px 0 16px 0;
        text-align: center;
        line-height: 16px;
    }
    .div3-box>p{
        font-size: 12px;
        float: left;
        font-family: "PingFangSC-Regular","Microsoft YaHei";
        font-size: 12px;
        color: #ffffff;
    }
    .property:hover .div4{
        height: 129px;
        opacity: 1;
    }
    .div4-box{
        height: 16px;
        line-height: normal;
        margin: 17px 0 16px 0;
        text-align: center;
        line-height: 16px;
    }
    .div4-box>p{
        font-size: 12px;
        float: left;
        font-family: "PingFangSC-Regular","Microsoft YaHei";
        font-size: 12px;
        color: #ffffff;
    }
</style>
