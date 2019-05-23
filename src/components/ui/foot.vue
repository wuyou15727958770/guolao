<template>
  <div class="bottom-container">
      <div class="bottom-container-box">
          <div class="bottom-container-box-litter">
              <div class="middle-box">
                <div class="introduct">
                    <p id="p1">关于我们</p>
                    <p>公司介绍</p>
                    <p>联系我们</p>
                </div>
                <div class="help">
                    <p id="p2">帮助中心</p>
                    <p>新手帮助</p>
                    <p>交易流程</p>
                    <p>安全保障</p>
                    <p>注册协议</p>
                    <p>官费指导</p>
                </div>
                <div class="partner">
                    <p id="p3">合作伙伴</p>
                    <p>
                        <a href="">新浪网</a>
                    </p>
                    <p>
                        <a href="">阿里巴巴</a>
                    </p>
                    <p>
                        <a href="">腾讯</a>
                    </p>
                    <p>
                        <a href="">京东</a>
                    </p>
                    <p>
                        <a href="">百度</a>
                    </p>
                </div>
                <div class="int-img"></div>
                <div class="code">
                    <img class="code-img" src="/static/images/code.png" alt="">
                    <div class="code-p">
                        <p id="p4">扫描二维码</p>
                        <p>关注果老微信</p>
                        <p>创业一手掌握</p>
                    </div>
                    <div style="clear:both;"></div>   
                </div>
                <div style="clear:both;"></div>
            </div>
            <div class="complaint">
                <span class="time">投诉QQ (9:00-18:00)</span>
                <span>Emali: xxxxx@xx.com</span>
            </div>
            <div>
                <div class="cult">
                    <span>友情链接:创新创业中关村</span>
                    <span class="distance1">|</span>
                    <span>网络文化经营许可证</span>
                    <span class="distance2">|</span>
                    <span>北京ICP</span>
                </div>
                <div class="corp">
                    <span>copyright@2018-2019 Guolao corporation,All Right Reserved 沪ICP备16025245</span>
                    <span class="distance3">果老（上海）互联网技术有限公司 版权所有</span>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'foot',
  components: {
      
  }
}

</script>

<style scoped>
  .bottom-container-box{
      height: 314px;
      background-color:#f8f8f8;
      padding-top: 22px;
  }
  .bottom-container-box-litter{
      margin: 22px auto 0;
      width: 980px;
      height: 272px;
      border-top:1px solid #d8d8d8;
      padding-top: 18px;
  }
  .middle-box{
      width: 980px;
      height: 178px;
      border-bottom: 1px solid #d8d8d8;
  }
  .middle-box>div{
      float: left;
  }
  .introduct>p{
      font-family: PingFangSC;
      font-size: 12px;
      color: #555555;
      margin-top:10px;
  }
  #p1,#p2,#p3{
      font-weight: 600;
      color: #333333;
      margin-top:0;
  }
  .help{
      margin:0 148px;
  }
  .help>p{
      font-family: PingFangSC;
      font-size: 12px;
      color: #555555;
      margin-top:10px;
  }
  .partner>p{
      font-family: PingFangSC;
      font-size: 12px;
      margin-top:10px;
  }
  .partner>p>a{
      color: #555555;
      text-decoration: none;
  }
  .int-img{
      width: 86px;
      height: 80px;
      float: left;
      margin:0 107px 0 139px;
      background: url('/static/images/net.png') 100% no-repeat; 
  }
  .code-img,.code-p{
      float: left;
  }
  .code-p{
      margin-left: 8px;
  }
  .code-p>p{
      font-family: PingFangSC;
      font-size: 12px;
      margin-top: 8px;
      color: #999999;
  }
  .p4{
      margin-top: 0;
  }
  .complaint{
      width: 980px;
      height: 34px;
      line-height: 34px;
      border-bottom:1px solid #d8d8d8;
  }
  .complaint>span{
      font-family: PingFangSC;
      font-size: 12px;
      color: #8c8c8c;
  }
  .time{
      margin-right: 32px;
  }
  .cult{
      margin-top: 2px;
  }
  .cult>span{
      font-family: PingFangSC;
        font-size: 12px;
        color: #555555;
  }
  .corp>span{
    font-family: PingFangSC;
        font-size: 12px;
        color: #555555;  
  }
  .distance1{
      margin: 0 8px 0 54px;
  }
  .distance2{
      margin: 0 8px 0 45px;
  }
  .distance3{
      margin-left: 32px;
  }
</style>
