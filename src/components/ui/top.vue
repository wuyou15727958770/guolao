<template>
    <div class="header">
        <div class="header-wrap">
            <div class="header-wrap-container">
                <img class="logo" src="/static/images/logo.png" alt="">
                <div class="header-wrap-box">
                    <router-link id="firstpage" tag="div" to="/">首页</router-link>
                    <div class="trade">
                        <router-link  tag="div" to="/trade">商标服务</router-link>
                        <div class="div1">
                            <div v-for="(v,k,index) in myarr" class="div1-box">
                                <img :src="v.url" alt="">
                                <p> {{v.content}}</p>
                                <p v-if="index == 2">{{v.other}}</p>
                                <p v-else="index == 3">{{v.other}}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="copyright">
                        <router-link tag="div" to="/copyright">版权服务</router-link>
                        <div class="div2">
                            <div v-for="(v,k,index) in arr" class="div2-box">
                            <img :src="v.url" alt="">
                            <p>{{v.content}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="patent">
                        <router-link tag="div" to="/patent">专利服务</router-link>
                        <div class="div3">
                            <div v-for="(v,k,index) in copyarr" class="div3-box">
                            <img :src="v.url" alt="">
                            <p>{{v.content}}</p>
                            </div>
                        </div>
                    </div>
                    
                    <router-link tag="div" to="/custom">定制培训</router-link>
                    <router-link tag="div" to="/about">关于我们</router-link>
                    <router-link tag="div" to="/news/news">新闻中心</router-link>
                    <div v-show="myshow" id="header-wrap-box-login">
                        <router-link to="/login">登陆 |</router-link>
                        <router-link to="/register">注册</router-link>
                    </div>
                    <div id="quit-div" v-show="!myshow">
                        <router-link style="float:left;" tag="div" to="/personal/personal">个人中心|</router-link>
                        <div style="float:left;" @click="quit">退出</div>
                    </div>
                    
                </div>
                <div id="image_box">
                    <img class="buy" src="/static/images/mybuy.png" alt="">
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
            myarr:[{url:"/static/images/searchcode.png",content:"商标检索"},{url:"/static/images/link.png",content:"普通注册"}
            ,{url:"/static/images/quick.png",content:"快速注册"},{url:"/static/images/sea.png",content:"海外资质注册",other:"New"},
            {url:"/static/images/promise.png",content:"担保注册"},{url:"/static/images/pen.png",content:"商标设计"},{url:"/static/images/change.png",content:"商标变更"}
            ,{url:"/static/images/give.png",content:"商标转让/转移"},{url:"/static/images/continue.png",content:"商标续展"},{url:"/static/images/continue.png",content:"商标续展",other:"(宽展期)"},
            {url:"/static/images/reject.png",content:"商标驳回复审"},{url:"/static/images/ready.png",content:"使用许可备案"}
            ,{url:"/static/images/reissue.png",content:"补发商标注册证"},{url:"/static/images/objection.png",content:"商标异议"},
            {url:"/static/images/defense.png",content:"商标异议答辩"},{url:"/static/images/unuse.png",content:"撤销三年不使用"},
            {url:"/static/images/answer.png",content:"商标无效宣告"},{url:"/static/images/grievance.png",content:"商标无效宣告答辩"},
            {url:"/static/images/unbrella.png",content:"商标设计担保注册"}],
            arr:[{url:"/static/images/searchcode.png",content:"商标检索"},{url:"/static/images/link.png",content:"普通注册"}
            ,{url:"/static/images/quick.png",content:"快速注册"}],
            copyarr:[{url:"/static/images/searchcode.png",content:"商标检索"},{url:"/static/images/link.png",content:"普通注册"}
            ,{url:"/static/images/quick.png",content:"快速注册"},{url:"/static/images/sea.png",content:"海外资质注册"},
            {url:"/static/images/promise.png",content:"担保注册"},{url:"/static/images/pen.png",content:"商标设计"},{url:"/static/images/change.png",content:"商标变更"}
            ,{url:"/static/images/give.png",content:"商标转让/转移"},{url:"/static/images/continue.png",content:"商标续展"},{url:"/static/images/continue.png",content:"商标续展"},
            {url:"/static/images/reject.png",content:"商标驳回复审"},{url:"/static/images/ready.png",content:"使用许可备案"}
            ,{url:"/static/images/reissue.png",content:"补发商标注册证"},{url:"/static/images/objection.png",content:"商标异议"},
            {url:"/static/images/defense.png",content:"商标异议答辩"},{url:"/static/images/unuse.png",content:"撤销三年不使用"},
            {url:"/static/images/answer.png",content:"商标无效宣告"},{url:"/static/images/grievance.png",content:"商标无效宣告答辩"},
            {url:"/static/images/unbrella.png",content:"商标设计担保注册"},{url:"/static/images/searchcode.png",content:"商标检索"},{url:"/static/images/link.png",content:"普通注册"}
            ,{url:"/static/images/quick.png",content:"快速注册"},{url:"/static/images/sea.png",content:"海外资质注册"}],
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
        height: 44px;
        background:#323232;
    }
    .header-wrap-container{
        width: 1030px;
        height: 44px;
        line-height: 44px;
        margin: 0 auto;
    }
    .logo{
        float: left;
        margin: 10px 80px 0 0;
    }
    .header-wrap-box{
        float: left;
    }
    .header-wrap-box>a{
        text-decoration: none;
    }
    #header-wrap-box-login{
        margin-right: 0;
    }
    #header-wrap-box-login>a{
        text-decoration: none;
        color: #ffffff;
        font-size: 14px;
    }
    .header-wrap-box>div{
        font-family: MicrosoftYaHei;
        float: left;
        color: #ffffff;
        font-size: 14px;
        cursor: pointer;
        margin-right: 50px;
    }
    #image_box{
        float: left;
        width:38px;
        margin-left: 80px;
    }
    #quit-div{
        margin-right: 0;
    }
    .buy{
        width: 20px;
        height: 20px;
        margin-top: 12px;
    }
    .search{
        margin-left: 48px;
    }
    .trade,.copyright,.patent{
        position: relative;
    }
    .div1,.div2,.div3{
        position:absolute;
        background-color: #f6f6f6;
        width: 1200px;
        height: 0;
        transition: all 1s ease;
        opacity: 0;
        overflow: hidden;
        z-index: 2;
    }
    .div1{
        left: -263px;
    }
    .div2{
        left: -350px;
    }
    .div3{
        left: -480px;
    }
    .div1>div{
        width: 120px;
        height: 120px;
        float: left;
    }
    .div1>div:nth-of-type(4)>p:nth-of-type(2){
        color: red;
    }
    .div1>div:nth-of-type(10)>p:nth-of-type(2){
        color: #666666;
    }
    .trade:hover .div1{
        height: 272px;
        opacity: 1;
    }
    .div1-box{
        text-align: center;
    }
    .div1-box>img{
        margin: 32px 0 4px 0;
    }
    .div1-box>p{
        font-family: PingFangSC;
        font-size: 12px;
        font-weight: 500;
        color: #111111;
    }
    .copyright:hover .div2{
        height: 152px;
        opacity: 1;
    }
    .div2>div{
        width: 120px;
        height: 120px;
        float: left;
    }
    .div2-box{
        text-align: center;
    }
    .div2-box>img{
        margin: 32px 0 4px 0;
    }
    .div2-box>p{
        font-family: PingFangSC;
        font-size: 12px;
        font-weight: 500;
        color: #111111;
    }
    .patent:hover .div3{
        height: 392px;
        opacity: 1;
    }
    .div3>div{
        width: 120px;
        height: 120px;
        float: left;
    }
    .div3-box{
        text-align: center;
    }
    .div3-box>img{
        margin: 32px 0 4px 0;
    }
    .div3-box>p{
        font-family: PingFangSC;
        font-size: 12px;
        font-weight: 500;
        color: #111111;
    }
</style>
