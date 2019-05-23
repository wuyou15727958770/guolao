<template>
  <div class="newsdetail-container">
    <Top></Top>
    <div class="newsdetail-container-top">
      <div class="newsdetail-mid">
        <p>新闻中心</p>
        <input type="text" placeholder="新闻搜索"> 
        <i class="el-icon-error"/>
      </div>
    </div>
    <div class="newsdetail-bread">
      <div class="newsdetail-bread-con">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"><img src="/static/images/bread.png" alt=""></el-breadcrumb-item>
            <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
            <el-breadcrumb-item>果老网亮相G60科创走廊上海松江“双创周”活动</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="newsdetail-read">
        <p class="newsdetail-read-p1">浏览20次</p>
        <p class="newsdetail-read-p2">2017-09-18 14:09:56</p>
        <p class="newsdetail-read-p3">果老网亮相G60科创走廊上海松江“双创周”活动</p>
    </div>
    <div class="newdetail-des-box">
      <p class="newdetail-des-box-p1">正值2017年全国大众创业万众创新活动周，主会场活动在上海举办之际，9月15日由松江区政府主办的G60科创走廊
        上海松江2017年“全国双创周”活动，今天在松江大学城上海视觉艺术学院启动，活动将以“创新创业助力G60科创走廊建设”为主题，
        重点展现G60科创走廊科创双创成果，推进松江大学城双创集聚区建设。</p>
      <img src="/static/images/heart.png" alt="">
      <p class="newdetail-des-box-p2">此次活动围绕优秀创业小我私家、优秀创新企业、优秀科技成果等内容，重点展现G60科创走廊最新科技创新成果、
        进步前辈双创事迹、高校师生双创成效2017年“全国双创周”活动启动仪式暨松江大学城双创集聚区建设论坛在上海视觉
        艺术学院举行。果老网有幸在双创集聚走廊亮相，吸引了松江区领导到展位参观。</p>
      <img src="/static/images/some.png" alt="">
      <p class="newdetail-des-box-p3">上图（松江区委副书记、团委书记、其他领导）</p>
      <div class="newdetail-des-box-sign">
        <p>科创驱动“松江制造”</p>
        <p>迈向“松江创造”</p>
        <p>释放出强劲的新动能。</p>
        <p>果老网，一起来加油吧！</p>
      </div>
      <div class="newdetail-des-page">
        <div class="newdetail-des-page-last">上一篇</div>
        <div>下一篇</div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Top from '../ui/top.vue';
import Foot from '../ui/foot.vue';
export default {
  name: 'newsdetail',
  components: {
    Top,
    Foot
  }
}

</script>

<style scoped>
 .newsdetail-container-top{
    width: 100%;
  }
  .newsdetail-container-top>div{
    margin: 0 auto;
    width: 1180px;
  }
  .newsdetail-mid{
    height: 52px;
    line-height: 52px;
    position: relative;
  }
  .newsdetail-mid>p{
    float: left;
    margin: 0 666px  0 100px;
    font-family: PingFangSC;
    font-size: 20px;
    font-weight: 500;
    color: #111111;
  }
  .newsdetail-mid>input{
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
  .newsdetail-bread{
    width: 100%;
    height: 28px;
    padding-top:12px;
    background-color: #f8f8f8;
  }
  .newsdetail-bread-con{
    width: 980px;
    margin: 0 auto;
  }
  .newsdetail-read{
    padding: 64px 0 64px 121px;
    width: 839px;
    margin: 0 auto 34px;
    border-bottom: 1px solid #d6d6d6;
  }
  .newsdetail-read-p1{
    font-family: PingFangSC;
    font-size: 12px;
    font-weight: 600;
    color: #f96006;
  }
  .newsdetail-read-p2{
    font-family: PingFangSC;
    font-size: 12px;
    font-weight: 600;
    color: #888888;
  }
  .newsdetail-read-p3{
    width: 718px;
    font-family: PingFangSC;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    color: #111111;
  }
  .newdetail-des-box{
    width: 954px;
    margin: 0 auto;
  }
  .newdetail-des-box-p1{
    line-height: 2;
    font-family: PingFangSC;
    font-size: 18px;
    color: #424242;
    margin-bottom: 36px;
  }
  .newdetail-des-box-p2{
    font-family: PingFangSC;
    font-size: 18px;
    line-height: 2;
    margin: 64px 0;
    color: #424242;
  }
  .newdetail-des-box-p3{
    font-family: PingFangSC;
    font-size: 12px;
    margin: 16px 0 26px 0;
    color: #333333;
  }
  .newdetail-des-box-sign{
     margin-bottom: 36px;
  }
  .newdetail-des-box-sign>p{
    font-family: PingFangSC;
    font-size: 18px;
    color: #333333;
    margin-bottom: 15px;
  }
  .newdetail-des-page{
    margin: 0 auto 64px;
    width: 184px;
    height: 40px;
  }
  .newdetail-des-page>div{
    width: 78px;
    height: 40px;
    border-radius: 2px;
    float: left;
    border:1px solid #979797;
    text-align: center;
    line-height: 40px;
  }
  .newdetail-des-page-last{
    margin-right: 24px;
  }
</style>
