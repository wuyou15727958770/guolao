<template>
  <div class="messageDetail-container">
    <div class="messageDetail-box">
      <div class="messageDetail-box-top">我的消息</div>
      <div class="messageDetail-box-top-detail"> 
        <div class="messageDetail-box-top-detail-div">
          <p class="messageDetail-box-top-detail-div-p1">订单状态变更</p>
          <p class="messageDetail-box-top-detail-div-p2">你好，商标注册完成大概需要一个月，资料齐全后全部委托给我们就可以了，
            价格不能再低了，邮费是我们把证书寄出时需要的快递费。我们业务比较繁忙，
            所以客服有时候来不及接电话，您可以直接向服务者咨询业务细节，期待您的来电！</p>
          <img src="/static/images/detailimg.png" alt="">
          <p class="messageDetail-box-top-detail-div-p3">你好，商标注册完成大概需要一个月，资料齐全后全部委托给我们就可以了，
            价格不能再低了，邮费是我们把证书寄出时需要的快递费。我们业务比较繁忙，
            所以客服有时候来不及接电话，您可以直接向服务者咨询业务细节，期待您的来电！</p>
          <p class="messageDetail-box-top-detail-div-p4">2019-04-01 11:58:09</p>
          <p @click="backup" class="messageDetail-box-top-detail-div-p5">返回上一页</p>
        </div>
      </div>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: 'messageDetail',
  components: {

  },
  methods:{
    backup(){
      this.$router.back();
    }
  }
}

</script>

<style scoped>
  @font-face {
      font-family: 'messageDetailfont1'; 
      src: url('/static/PingFang/PingFangSC-Thin.ttf');
    }
    @font-face {
      font-family: 'messageDetailfont2'; 
      src: url('/static/PingFang/PingFangSC-Regular.ttf');
    }
    @font-face {
      font-family: 'messageDetailfont3'; 
      src: url('/static/PingFang/PingFangSC-Semibold.ttf');
    }
  .messageDetail-box{
        width: 800px;
        float: left;
        margin: 64px 0 0 50px;
    }
    .messageDetail-box-top{
      font-family: messageDetailfont1;
      font-size: 28px;
      font-weight: 100;
      color: #999999;
      margin: 0 0 14px 43px;
    }
    .messageDetail-box-top-detail{
      width: 740px;
      padding:13px 30px 0 30px;
      border-top:1px solid #d8d8d8;
    }
    .messageDetail-box-top-detail-div-p1{
      font-family: messageDetailfont3;
      font-size: 28px;
      font-weight: 600;
      color: #333333;
      margin-bottom: 10px;
    }
    .messageDetail-box-top-detail-div-p2{
      font-family: messageDetailfont2;
      font-size: 16px;
      color: #333333;
      margin-bottom: 12px;
    }
    .messageDetail-box-top-detail-div-p3{
      font-family: messageDetailfont2;
      font-size: 12px;
      color: #666666;
      margin: 62px 0 10px;
    }
    .messageDetail-box-top-detail-div-p4{
      font-family: messageDetailfont1;
      font-size: 12px;
      font-weight: 100;
      color: #999999;
      margin-bottom: 24px;
    }
    .messageDetail-box-top-detail-div-p5{
      font-family: messageDetailfont2;
      font-size: 12px;
      color: #f96006;
      margin-bottom: 62px;
    }
</style>
