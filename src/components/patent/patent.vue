<template>
  <div class="patent-container">
    <Top></Top>
    <div class="service">
      <div class="patent-pic">
        <!-- <div class="patent-des">
          <p>而另外方可五分裤五分裤我</p>
          <p>法兰克卡付款了</p>
        </div> -->
      </div>
    </div>
    <div class="bread-box">
      <div class="bread-card">
          <el-breadcrumb class="bread-card-crumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"><img src="/static/images/bread.png" alt=""></el-breadcrumb-item>
            <el-breadcrumb-item>专利服务</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="patent-goods">
          <div>
            <img src="/static/images/patentsha.png" alt="">
            <p>发明专利申请</p>
            <p>588元</p>
          </div>
          <div>
            <img src="/static/images/patentxin.png" alt="">
            <p>实用专利新型申请</p>
            <p>588元</p>
          </div>
          <div>
            <img src="/static/images/patentmao.png" alt="">
            <p>外观专利申请</p>
            <p>588元</p>
          </div>
          <div id="search1">
            <img src="/static/images/patentcha.png" alt="">
            <p>专利著录项变更</p>
            <p>588元</p>
          </div>
          <div>
            <img src="/static/images/patentda.png" alt="">
            <p>专利年费代缴</p>
            <p>588元</p>
          </div>
          <div>
            <img src="/static/images/patentno.png" alt="">
            <p>专利驳回复审</p>
            <p>588元</p>
          </div>
          <div>
            <img src="/static/images/patentre.png" alt="">
            <p>专利评估报告</p>
            <p>588元</p>
          </div>
          <div id="search1" >
            <img src="/static/images/patentshou.png" alt="">
            <p>专利许可备案</p>
            <p>588元</p>
          </div>
          <div>
            <img src="/static/images/patentbook.png" alt="">
            <p>专利登记副本</p>
            <p>588元</p>
          </div>
          <div>
            <img src="/static/images/patentlock.png" alt="">
            <p>专利检索报告</p>
            <p>588元</p>
          </div>
          <div>
            <img src="/static/images/patentshashou.png" alt="">
            <p>专利无效报告</p>
            <p>588元</p>
          </div>
          <div id="search1">
            <img  src="/static/images/patentstar.png" alt="">
            <p>专利无效宣告答辩</p>
            <p>588元</p>
          </div>
          <div>
            <img src="/static/images/patentzhu.png" alt="">
            <p>专利分析申请</p>
            <p>588元</p>
          </div>
        </div>
    </div>
      <Foot></Foot>
  </div>
</template>

<script>
import Top from '../ui/top.vue';
import Foot from '../ui/foot.vue';
export default {
  name: 'patent',
  components: {
    Top,
    Foot
  }
}

</script>

<style scoped>
  .service{
    width: 100%;
  }
  .service>div{
    width: 1180px;
    margin: 0 auto;
  }
  .patent-pic{
    width: 1180px;
    height: 512px;
    background: url("/static/images/bitmap.png") 100% no-repeat;
  }
  .bread-box{
    width: 100%;
    background-color: #f8f8f8;
  }
  .bread-card{
    width: 1080px;
    height: 28px;
    margin: 0 auto;
    padding:12px 0 0 100px;
  }
  .patent-goods{
    width: 1180px;
    margin: 0 auto;
    overflow: hidden;
  }
  .patent-goods>div{
    width: 280px;
    height: 207px;
    float: left;
    margin: 0 20px 20px 0;
    text-align: center;
    background-color: #ffffff;
  }
  .patent-goods>div>img{
    margin-top: 32px;
  }
  #search1{
    margin-right: 0px;
  }
  .patent-goods>div>p:nth-of-type(1){
    font-size: 24px;
    font-weight: 500;
    font-family: "PingFangSC-Medium","Microsoft YaHei";
    color: #333333;
    margin-top: 24px;
  }
  .patent-goods>div>p:nth-of-type(2){
     font-family: "PingFangSC-Medium","Microsoft YaHei";
     font-size: 16px;
     font-weight: 500;
     color: #333333;
  }
</style>
