<template>
  <div class="coupon-container">
      <div class="coupon-box">
          <div class="coupon-box-top">我的优惠券</div>
          <div class="coupon-box-top-detail">
              <div class="coupon-box-top-detail-wrap">
                <el-tabs v-model="use">
                    <el-tab-pane  label="未使用" name="first">
                        <div class="coupon-box-div">
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div id="cupon-box-juan-block">
                                <el-pagination
                                layout="prev, pager, next"
                                :total="50">
                                </el-pagination>
                            </div>
                        </div>
                        
                    </el-tab-pane>
                    <el-tab-pane label="历史红包" name="second"><div class="coupon-box-div">
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div class="cupon-box-juan">
                                <div class="cupon-box-juan-div1">
                                    <span>¥</span>300
                                </div>
                                <div class="cupon-box-juan-div2">
                                    <p>2019-04-20到期</p>
                                    <p>满199使用</p>
                                </div>
                            </div>
                            <div id="cupon-box-juan-block">
                                <el-pagination
                                layout="prev, pager, next"
                                :total="50">
                                </el-pagination>
                            </div>
                        </div>
                        
                        </el-tab-pane>
                </el-tabs>
              </div>
          </div>
      </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: 'coupon',
  data(){
      return{
          use:"first"
      }
  },
  components: {
  }
}

</script>

<style scoped>
    @font-face {
      font-family: 'couponfont'; 
      src: url('/static/PingFang/PingFangSC-Thin.ttf');
    }
    @font-face {
      font-family: 'couponfont2'; 
      src: url('/static/PingFang/PingFangSC-Regular.ttf');
    }
    @font-face {
      font-family: 'couponfont3'; 
      src: url('/static/PingFang/PingFangSC-Semibold.ttf');
    }
    .coupon-box{
        width: 800px;
        float: left;
        margin: 64px 0 0 50px;
    }
    .coupon-box-top{
      font-family: couponfont;
      font-size: 28px;
      font-weight: 100;
      color: #999999;
      margin: 0 0 14px 15px;
    }
    .coupon-box-top-detail{
      width: 800px;
      border-top:1px solid #d8d8d8;
    }
    .coupon-box-top-detail-wrap{
        width: 724px;
        margin-left: 30px;
    }
    .cupon-box-juan{
        width: 350px;
        height: 120px;
        background: url("/static/images/packet.png") 100% no-repeat;
    }
    .cupon-box-juan>div{
        float: left;
    }
    .coupon-box-div>div{
        float: left;
        margin: 0 24px 24px 0;
    }
    .coupon-box-div>div:nth-child(even){
        margin-right: 0;
    }
    .cupon-box-juan-div1{
        margin: 21px 10px 21px 16px;
        color: #e33233;
        font-size: 56px;
        font-weight: 600;
        letter-spacing: -2px;
       font-family: couponfont3;
    }
    .cupon-box-juan-div1>span{
        font-size: 24px;
        font-weight: normal;
        margin-right: 2px;
    }
    .cupon-box-juan-div2{
        margin: 24px 0 30px 0;
    }
    .cupon-box-juan-div2>p:nth-of-type(1){
        font-size: 12px;
        color: #999999;
        font-family: couponfont2;
        margin-bottom: 21px;
    }
    .cupon-box-juan-div2>p:nth-of-type(2){
        color: #666666;
        font-size: 20px;
        letter-spacing: -1px;
        text-align: center;
        font-family: couponfont2;
    }
    #cupon-box-juan-block{
        margin-left: 235px;
    }
</style>
<style>
    .el-tabs__nav{
         padding-left: 9px;
    }
    .el-tabs__active-bar{
        margin-left: 9px;
        background-color: #333333;
    }
    .el-tabs__item.is-active {
        color: #353535;
    }
    .el-tabs__item{
        height: 39px;
        font-size: 14px;
        color: #666666;
        font-family: couponfont2;
    }
    .el-tabs__item:hover{
        color:#666666;
    }
</style>

