<template>
  <div class="news-container">
    <Top></Top>
    <div class="news-container-top">
      <div class="news-mid">
        <p>新闻中心</p>
        <input type="text" placeholder="新闻搜索"> 
        <i class="el-icon-error"/>
      </div>
    </div>
    <img class="news-img" src="/static/images/news.png" alt="">
    <div class="news-bread">
      <div class="news-bread-con">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"><img src="/static/images/bread.png" alt=""></el-breadcrumb-item>
            <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="news-wrap">
      <div class="news-detail">
        <p class="news-p1">四月 2019</p>
        <p class="news-p2">2019年4月22日</p>
        <p class="news-p3">果老网今天发布小程序服务广大松江地区的集团企业团体及个人</p>
        <p class="news-p4">果老网于2019年4月20日发布小程序</p>
      </div>
      <div class="news-list">
        <img class="news-list-img" src="/static/images/computer.png" alt="">
        <div class="news-list-des">
          <p class="news-list-des-p1">2019年4月22日</p>
          <p class="news-list-des-p2">果老网于2019年4月20日发布小程序</p>
          <p @click="next" class="news-list-des-p3">果老网今天发布小程序服务广大松江地区的集团企业团体及个人。
            服务广大松江地区的集团企业团体及个人</p>
        </div>
        <div style="clear:both;"></div>
      </div>
      <div class="news-list">
        <img class="news-list-img" src="/static/images/computer.png" alt="">
        <div class="news-list-des">
          <p class="news-list-des-p1">2019年4月22日</p>
          <p class="news-list-des-p2">果老网于2019年4月20日发布小程序</p>
          <p class="news-list-des-p3">果老网今天发布小程序服务广大松江地区的集团企业团体及个人。
            服务广大松江地区的集团企业团体及个人</p>
        </div>
        <div style="clear:both;"></div>
      </div>
      <div class="news-list">
        <img class="news-list-img" src="/static/images/computer.png" alt="">
        <div class="news-list-des">
          <p class="news-list-des-p1">2019年4月22日</p>
          <p class="news-list-des-p2">果老网于2019年4月20日发布小程序</p>
          <p class="news-list-des-p3">果老网今天发布小程序服务广大松江地区的集团企业团体及个人。
            服务广大松江地区的集团企业团体及个人</p>
        </div>
        <div style="clear:both;"></div>
      </div>
      <div class="news-list">
        <img class="news-list-img" src="/static/images/computer.png" alt="">
        <div class="news-list-des">
          <p class="news-list-des-p1">2019年4月22日</p>
          <p class="news-list-des-p2">果老网于2019年4月20日发布小程序</p>
          <p class="news-list-des-p3">果老网今天发布小程序服务广大松江地区的集团企业团体及个人。
            服务广大松江地区的集团企业团体及个人</p>
        </div>
        <div style="clear:both;"></div>
      </div>
      <div class="news-list">
        <img class="news-list-img" src="/static/images/computer.png" alt="">
        <div class="news-list-des">
          <p class="news-list-des-p1">2019年4月22日</p>
          <p class="news-list-des-p2">果老网于2019年4月20日发布小程序</p>
          <p class="news-list-des-p3">果老网今天发布小程序服务广大松江地区的集团企业团体及个人。
            服务广大松江地区的集团企业团体及个人</p>
        </div>
        <div style="clear:both;"></div>
      </div>
      <div class="news-list">
        <img class="news-list-img" src="/static/images/computer.png" alt="">
        <div class="news-list-des">
          <p class="news-list-des-p1">2019年4月22日</p>
          <p class="news-list-des-p2">果老网于2019年4月20日发布小程序</p>
          <p class="news-list-des-p3">果老网今天发布小程序服务广大松江地区的集团企业团体及个人。
            服务广大松江地区的集团企业团体及个人</p>
        </div>
        <div style="clear:both;"></div>
      </div>
      <div class="news-list">
        <img class="news-list-img" src="/static/images/computer.png" alt="">
        <div class="news-list-des">
          <p class="news-list-des-p1">2019年4月22日</p>
          <p class="news-list-des-p2">果老网于2019年4月20日发布小程序</p>
          <p class="news-list-des-p3">果老网今天发布小程序服务广大松江地区的集团企业团体及个人。
            服务广大松江地区的集团企业团体及个人</p>
        </div>
        <div style="clear:both;"></div>
      </div>
    </div>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Top from '../ui/top.vue';
import Foot from '../ui/foot.vue';
export default {
  name: 'news',
  components: {
    Top,
    Foot
  },
  methods:{
    next(){
      this.$router.push('/news/newsdetail')
    }
  }
}

</script>

<style scoped>
  .news-container-top{
    width: 100%;
  }
  .news-container-top>div{
    width: 1180px;
    margin: 0 auto;
  }
  .news-mid{
    height: 52px;
    line-height: 52px;
    position: relative;
  }
  .news-mid>p{
    float: left;
    margin: 0 666px  0 100px;
    font-family: PingFangSC;
    font-size: 20px;
    font-weight: 500;
    color: #111111;
  }
  .news-mid>input{
    width: 234px;
    height: 20px;
    border: none;
    outline: none;
    border-bottom: 1px solid #888888;
  }
  .el-icon-error{
    width: 12px;
    height: 12px;
    position: absolute;
    top:18px;
    right: 105px;
  }
  .news-img{
    width: 100%;
    height: 100%;
  }
  .news-bread{
    width: 100%;
    height: 28px;
    padding-top:12px;
    background-color: #f8f8f8;
  }
  .news-bread-con{
    width: 980px;
    margin: 0 auto 100px;
  }
  .news-wrap>div{
    margin-left:23.2%;
    width: 50.3%;
  }
  .news-detail{
    padding: 30px 0 14px 28px;
    margin-top: 7px;
  }
  .news-p1{
    font-family: PingFangSC;
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 15px;
  }
  .news-p2{
    font-family: PingFangSC;
    font-size: 12px;
    color: #888888;
    margin-bottom: 1px;
  }
  .news-p3{
    font-family: PingFangSC;
    font-size: 18px;
    font-weight: 500;
    color: #111111;
    margin-bottom: 3px;
  }
  .news-p4{
    font-family: PingFangSC;
    font-size: 18px;
    margin-left: 3px;
    color: #434343;
  }
  .news-list{
    padding:38px 0 18px 28px;
  }
  .news-list-des{
    float: left;
    width: 576px;
  }
  .news-list-img{
    float: left;
    margin-right: 30px;
  }
  .news-list-des-p1{
    font-family: PingFangSC;
    font-size: 12px;
    color: #888888;
  }
  .news-list-des-p2{
    font-family: PingFangSC;
    font-size: 16px;
    font-weight: 600;
    color: #111111;
    margin-top: 1px;
  }
  .news-list-des-p3{
    font-family: PingFangSC;
    font-size: 16px;
    color: #333333;
    margin-top: 6px;
  }
  .block{
    text-align: center;
  }
</style>
