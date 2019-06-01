<template>
  <div class="container">
    <Top></Top>
    <div class="index-box">
      <div class="index-box-circle" ref="div">
      </div>
      <div class="index-box-robet">
        <div class="index-box-robet-box">人工智能</div>
      </div>
      <div class="index-box-heng"></div>
      <div class="index-box-kang">
        <div class="index-box-kang-div">Lorem ipsum dol amet, consectetur adipiscing elit. Aenean euismod 
          bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et 
          viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis 
          natoque penatibus et magnis dis parturient montes, nascetur 
          ridiculus mus. Nam fermentum, sed rhoncus pronin sapien nunc accuan eget.</div>
      </div>
    </div>
    <div class="index-search">
      <div class="index-search-box">
        <div class="index-search-box-div1">
          <div>业务办理</div>
          <div>商标查询</div>
          <div>专利查询</div>
          <div>版权查询</div>
        </div>
        <div class="index-search-box-div2">
          <input type="text" placeholder="请输入您要办理的业务"><img  src="/static/images/searchbutton.png" alt="">
        </div>
      </div>
    </div>
    <div class="index-middle">
      <div class="index-middle-div1">让人工智能为你取一个有意义的好名字</div>
      <div class="index-middle-div2"></div>
      <div class="index-middle-div3">
        <div class="index-middle-div3-box"></div>
        <div class="index-middle-div3-box-dec">人工智能+果老大数据库</div>
        <div class="index-middle-div3-box-wrap">
          <div>
            <img src="/static/images/shan.png" alt=""><span>快速</span><span>几分钟为你设计满意的名字</span>
          </div>
          <div>
            <img src="/static/images/dian.png" alt=""><span>方便</span><span>只需回答几个问题即可获得</span>
          </div>
          <div>
            <img src="/static/images/dui.png" alt=""><span>保障</span><span>人工智能为你保驾护航</span>
          </div>
        </div>
      </div>
    </div>
    <div class="index-container">
      <div class="index-container-div1">让人工智能为你量身打造专属商标</div>
      <div class="index-container-div2"></div>
      <div class="index-container-div3">
        <div class="index-container-div3-des">人工智能+果老大数据库</div>
        <div class="index-container-div3-wrap">
          <div>
            <img src="/static/images/shan.png" alt=""><span>快速</span><span>几分钟为你设计满意的名字</span>
          </div>
          <div>
            <img src="/static/images/dian.png" alt=""><span>方便</span><span>只需回答几个问题即可获得</span>
          </div>
          <div>
            <img src="/static/images/dui.png" alt=""><span>保障</span><span>人工智能为你保驾护航</span>
          </div>
        </div>
      </div>
    </div>
    <div class="index-bottom">
      <div class="index-bottom-div1">让人工智能为你撰写专利申请书</div>
      <div class="index-bottom-div2"></div>
      <div class="index-bottom-div3">
        <div class="index-bottom-div3-box">
          <div class="index-bottom-div3-box-des">人工智能+果老大数据库</div>
          <div class="index-bottom-div3-box-wrap">
            <div>
              <img src="/static/images/shan.png" alt=""><span>快速</span><span>几分钟为你设计满意的名字</span>
            </div>
            <div>
              <img src="/static/images/dian.png" alt=""><span>方便</span><span>只需回答几个问题即可获得</span>
            </div>
            <div>
              <img src="/static/images/dui.png" alt=""><span>保障</span><span>人工智能为你保驾护航</span>
            </div>
          </div>
        </div>
        <div class="index-bottom-div3-back"></div>
      </div>
    </div>
    <Foot></Foot>
  </div>
  
</template>

<script>
import Top from '../ui/top.vue';
import Foot from '../ui/foot.vue';
export default {
  name: 'index',
  components: {
    Top,
    Foot
  },
  data () {
    return {
    
    }
  },
  methods: {
        
  },
}
</script>

<style scope>
  .index-box{
    width: 100%;
    height: 720px;
    background: url('/static/images/firstpage.png') 100% no-repeat;
    position: relative;
  }
  .index-box-circle{
    position: absolute;
    top:83px;
    left: 346px;
    width: 520px;
    height: 520px;
    background: url('/static/images/yuan.png') 100% 100% no-repeat;
    background-size: cover;
    animation:changDeg 9s linear infinite;
    /* transform:rotate(359deg); */
    
  }
  @keyframes changDeg{
			to{
				transform: rotate(360deg);
			}
		}
  .index-box-robet{
    width: 268px;
    height: 268px;
    position: absolute;
    top:213px;
    left: 470px;
    background: url('/static/images/robet.png') 100% 100% no-repeat;
    background-size: cover;
  }
  .index-box-robet-box{
    width: 168px;
    height: 48px;
    border-radius: 24px;
    background-color: #ffffff;
    text-align: center;
    line-height: 48px;
    margin:110px 0 0 51px;
    font-family: "PingFangSC-Semibold","Microsoft YaHei";
    font-size: 22px;
    font-weight: 600;
    color: #f96006;
  }
  .index-box-heng{
    width: 105px;
    height: 10px;
    position: absolute;
    top:333px;
    left: 866px;
    background: url('/static/images/heng.png') 100% no-repeat;
    background-size: cover;
  }
  .index-box-kang{
    position: absolute;
    top:172px;
    left: 980px;
    width: 559px;
    height: 324px;
    background: url('/static/images/kang.png') 100% no-repeat;
    background-size: cover;
  }
  .index-box-kang-div{
    width: 403px;
    height: 154px;
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    font-size: 16px;
    color: #ffffff;
    margin: 66px 0 0 54px;
  }
  .index-search{
    width: 100%;
    height: 152px;
     padding-top:64px;
  }
  .index-search-box{
    width: 784px;
    margin: 0 auto;
  }
  .index-search-box-div1{
    height: 28px;
    margin-bottom: 16px;
  }
  .index-search-box-div1>div{
    float: left;
    font-family: "PingFangSC-Semibold","Microsoft YaHei";
    font-size: 20px;
    font-weight: 600;
    color: #666666;
    margin-right: 50px;
  }
  .index-search-box-div1>div:nth-of-type(1){
    margin-left: 36px;
    color: #f96006;
  }
  .index-search-box-div2>input{
    width: 620px;
    height: 42px;
    border: solid 1px #d7d8d9;
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    outline: none;
    padding-left: 18px;
    font-size: 16px;
    vertical-align: middle;
    color: #999999;
  }
  .index-search-box-div2>img{
    width: 144px;
    height: 44px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
  .index-middle{
    width: 100%;
    padding-top: 96px;
    height: 984px;
    background-color: #fafafa;
  }
  .index-middle-div1{
    width: 816px;
    height: 67px;
    font-family: "PingFangSC-Medium","Microsoft YaHei";
    font-size: 48px;
    font-weight: 500;
    color: #111111;
    margin: 0 auto 27px;
  }
  .index-middle-div2{
    width: 144px;
    height: 38px;
    background: url('/static/images/free.png') no-repeat;
    background-size: cover;
    margin: 0 auto 55px;
  }
  .index-middle-div3{
    width: 1200px;
    height: 558px;
    background-color: #ffffff;
    margin: 0 auto 157px;
    padding-top: 82px;
    position: relative;
  }
  .index-middle-div3-box{
    width: 707px;
    height: 558px;
    background: url('/static/images/think.png') no-repeat;
    background-size: cover;
    margin-left:104px;
  }
  .index-middle-div3-box-dec{
    position: absolute;
    font-family: "PingFangSC-Medium","Microsoft YaHei";
    font-size: 36px;
    font-weight: 500;
    color: #333333;
    top:79px;
    left:427px;
  }
  .index-middle-div3-box-wrap{
    position: absolute;
    top:416px;
    left: 698px;
  }
  .index-middle-div3-box-wrap>div{
     width: 360px;
    height: 38px;
    border-radius: 19px;
    background-color: #f96006;
    margin-bottom: 16px;
  }
  .index-middle-div3-box-wrap>div>img{
    width: 22px;
    height: 22px;
    margin:0 18px 0 25px;
    vertical-align: middle;
  }
  .index-middle-div3-box-wrap>div>span{
    font-family: "PingFangSC-Semibold","Microsoft YaHei";
    font-size: 18px;
    line-height: 38px;
    font-weight: 600;
    color: #ffffff;
  }
  .index-middle-div3-box-wrap>div>span:nth-of-type(1){
    margin-right: 18px;
  }
  .index-container{
    width: 100%;
    height: 704px;
    padding-top: 96px;
    background: url('/static/images/bigback.png') 100% no-repeat;
    background-size: cover;
  }
  .index-container-div1{
     width: 720px;
     height: 67px;
     font-family: "PingFangSC-Medium","Microsoft YaHei";
     font-size: 48px;
     font-weight: 500;
     color: #ffffff;
     margin: 0 auto 32px;
  }
  .index-container-div2{
    width: 144px;
    height: 38px;
    background: url('/static/images/free.png') no-repeat;
    background-size: cover;
    margin: 0 auto 267px;
  }
  .index-container-div3{
    width: 573px;
    height: 232px;
    padding-top: 36px;
    background-color: #ffffff;
    margin: 0 auto;
  }
  .index-container-div3-des{
    width: 390px;
    height: 50px;
    font-family: "PingFangSC-Medium","Microsoft YaHei";
    font-size: 36px;
    font-weight: 500;
    color: #111111;
    margin: 0 auto 41px;
  }
  .index-container-div3-wrap{
    width: 310px;
    margin: 0 auto;
  }
  .index-container-div3-wrap>div{
    height: 25px;
    line-height: 25px;
    margin-bottom: 14px;
  }
  .index-container-div3-wrap>div>img{
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }
  .index-container-div3-wrap>div>span{
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    font-size: 18px;
    color: #333333;
    vertical-align: middle;
  }
  .index-container-div3-wrap>div>span:nth-of-type(1){
    margin: 0 18px;
    color: #f96006;
  }
  .index-bottom{
    width: 100%;
    height: 874px;
    padding-top: 96px;
    background-color: #fafafa;
  }
  .index-bottom-div1{
    width: 672px;
    height: 67px;
    font-family: "PingFangSC-Medium","Microsoft YaHei";
    font-size: 48px;
    font-weight: 500;
    color: #111111;
    margin: 0 auto 27px;
  }
  .index-bottom-div2{
    width: 144px;
    height: 38px;
    background: url('/static/images/free.png') no-repeat;
    background-size: cover;
    margin: 0 auto 36px;
  }
  .index-bottom-div3{
    width: 1148px;
    height: 600px;
    background-color: #ffffff;
    margin: 0 auto;
    position: relative;
  }
  .index-bottom-div3-box{
    width: 510px;
    height: 358px;
    position: absolute;
    padding-top: 114px;
    top:53px;
    left: 58px;
  }
  .index-bottom-div3-box-des{
    width: 390px;
    height: 50px;
    font-family: "PingFangSC-Medium","Microsoft YaHei";
    color: #111111;
    margin: 0 auto 50px;
    font-size: 36px;
    font-weight: 500;
  }
  .index-bottom-div3-box-wrap{
    width: 310px;
    margin: 0 auto;
  }
  .index-bottom-div3-box-wrap>div{
    height: 25px;
    line-height: 25px;
    margin-bottom: 29px;
  }
  .index-bottom-div3-box-wrap>div>img{
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }
  .index-bottom-div3-box-wrap>div>span{
    font-family: "PingFangSC-Light","Microsoft YaHei";
    font-size: 18px;
    font-weight: 300;
    vertical-align: middle;
    color: #333333;
  }
  .index-bottom-div3-box-wrap>div>span:nth-of-type(1){
    margin: 0 18px;
    color: #f96006;
  }
  .index-bottom-div3-back{
    width: 587px;
    height: 530px;
    background: url('/static/images/shu.png') no-repeat;
    background-size: cover;
    position: absolute;
    top:45px;
    right: 89px;
  }
</style>
