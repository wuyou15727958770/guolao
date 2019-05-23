<template>
  <div class="trade-container">
    <Top></Top>
    <div class="service">
      <div class="service-mid">
        <p>商标服务</p>
        <input type="text" placeholder="请输入商标名称"> 
        <i class="el-icon-error"/>
      </div>
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
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div id="search1">
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div id="search1" >
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div id="search1">
            <img  src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div id="search1">
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
            <p>288元</p>
          </div>
          <div>
            <img src="/static/images/design.png" alt="">
            <p>商标设计</p>
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
  .service{
    width: 100%;
  }
  .service>div{
    width: 1180px;
    margin: 0 auto;
  }
  .service-mid{
    height: 52px;
    line-height: 52px;
    position: relative;
  }
  .service-mid>p{
    float: left;
    margin: 0 666px  0 100px;
    font-family: PingFangSC;
    font-size: 20px;
    font-weight: 500;
    color: #111111;
  }
  .service-mid>input{
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
    height: 400px;
    float: left;
    margin: 0 20px 20px 0;
    text-align: center;
    background-color: #ffffff;
  }
  #search1{
    margin-right: 0px;
  }
  .trade-goods>div>p:nth-of-type(1){
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    color: #333333;
    margin-top: 10px;
  }
  .trade-goods>div>p:nth-of-type(2){
     font-family: PingFangSC;
     font-size: 16px;
     font-weight: 500;
     color: #333333;
  }
</style>
