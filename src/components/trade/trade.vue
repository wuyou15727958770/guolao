<template>
  <div class="trade-container">
    <Top></Top>
    <div class="service">
      <div class="trade-pic">
        <!-- <div class="trade-des">
          <p>而另外方可五分裤五分裤我</p>
          <p>法兰克卡付款了</p>
        </div> -->
      </div>
    </div>
    <div class="bread-box">
      <div class="bread-card">
          <el-breadcrumb class="bread-card-crumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"><img src="/static/images/bread.png" alt=""></el-breadcrumb-item>
            <el-breadcrumb-item>商标服务</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="trade-goods">
          <div>
            <img src="/static/images/pen.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/trademark.png" alt="">
            <p>自助商标注册</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/tradereg.png" alt="">
            <p>商标注册</p>
            <p>288元</p>
          </div>
          <div id="search1">
            <img src="/static/images/tradesearch.png" alt="">
            <p>商标检索</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/tradechange.png" alt="">
            <p>商标变更</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/traderemove.png" alt="">
            <p>商标转让/移转</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/traderej.png" alt="">
            <p>商标驳回复审</p>
            <p>288元</p>
          </div>
          <div id="search1" >
            <img src="/static/images/tradeex.png" alt="">
            <p>商标续展</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/tradeag.png" alt="">
            <p>商标使用许可备案</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/tradebu.png" alt="">
            <p>补发商标注册证</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/tradeno.png" alt="">
            <p>商标异议</p>
            <p>288元</p>
          </div>
          <div id="search1">
            <img  src="/static/images/tradeobj.png" alt="">
            <p>商标异议答辩</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/tradere.png" alt="">
            <p>撤销三年不使用</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/tradean.png" alt="">
            <p>撤销三年不使用答辩</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/tradefu.png" alt="">
            <p>商标无效宣言</p>
            <p>288元</p>
          </div>
          <div id="search1">
            <img src="/static/images/tradecon.png" alt="">
            <p>商标无效宣言答辩</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/tradeun.png" alt="">
            <p>商标设计担保</p>
            <p>288元</p>
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
  name: 'trade',
  components: {
    Top,
    Foot
  }
}

</script>

<style scoped>
  @font-face {
    font-family: 'tradeFont'; 
    src: url('/static/PingFang/PingFangSC-Medium.ttf');
  }
  .service{
    width: 100%;
  }
  .service>div{
    width: 1180px;
    margin: 0 auto;
  }
  .trade-pic{
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
  .trade-goods{
    width: 1180px;
    margin: 0 auto;
    overflow: hidden;
  }
  .trade-goods>div{
    width: 280px;
    height: 207px;
    float: left;
    margin: 0 20px 20px 0;
    text-align: center;
    background-color: #ffffff;
  }
  .trade-goods>div>img{
    margin-top: 32px;
  }
  #search1{
    margin-right: 0px;
  }
  .trade-goods>div>p:nth-of-type(1){
    font-size: 24px;
    font-weight: 500;
    font-family: "PingFangSC-Medium","Microsoft YaHei";
    color: #333333;
    margin-top: 24px;
  }
  .trade-goods>div>p:nth-of-type(2){
     font-family: "PingFangSC-Medium","Microsoft YaHei";
     font-size: 16px;
     font-weight: 500;
     color: #333333;
  }
</style>
