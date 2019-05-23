<template>
  <div class="invoiceRecoring">
    <div class="invoiceRecoring-box" v-show="invoiceshow">
        <div class="invoiceRecoring-box-wrap">
            <div class="invoiceRecoring-box-wrap-top">
                <span class="invoiceRecoring-box-wrap-top-span1">公司名称</span>
                <span class="invoiceRecoring-box-wrap-top-span2">统一社会信用码</span>
                <span class="invoiceRecoring-box-wrap-top-span3">注册地址</span>
                <span class="invoiceRecoring-box-wrap-top-span4">注册电话</span>
                <span class="invoiceRecoring-box-wrap-top-span5">更新状态</span>
                <span class="invoiceRecoring-box-wrap-top-span6">状态</span>
                <span>操作</span>
            </div>
            <div class="invoiceRecoring-box-wrap-middle">
                <span class="invoiceRecoring-box-wrap-middle-span1">上海果老网络科技有限公司</span>
                <span>91370983760048007L</span>
                <span>上海市</span>
                <span>18256787654</span>
                <span>2016.09.21</span>
                <span>正常</span>
                <span id="invoiceRecoring-box-wrap-middle-span7">删除</span>
            </div>
            <div class="invoiceRecoring-box-wrap-middle">
                <span class="invoiceRecoring-box-wrap-middle-span1">上海果老网络科技有限公司</span>
                <span>91370983760048007L</span>
                <span>上海市</span>
                <span>18256787654</span>
                <span>2016.09.21</span>
                <span>正常</span>
                <span id="invoiceRecoring-box-wrap-middle-span7">删除</span>
            </div>
            <div class="invoiceRecoring-box-wrap-middle">
                <span class="invoiceRecoring-box-wrap-middle-span1">上海果老网络科技有限公司</span>
                <span>91370983760048007L</span>
                <span>上海市</span>
                <span>18256787654</span>
                <span>2016.09.21</span>
                <span>正常</span>
                <span id="invoiceRecoring-box-wrap-middle-span7">删除</span>
            </div>
            <div class="invoiceRecoring-box-wrap-middle">
                <span class="invoiceRecoring-box-wrap-middle-span1">上海果老网络科技有限公司</span>
                <span>91370983760048007L</span>
                <span>上海市</span>
                <span>18256787654</span>
                <span>2016.09.21</span>
                <span>正常</span>
                <span id="invoiceRecoring-box-wrap-middle-span7">删除</span>
            </div>
            <div class="invoiceRecoring-box-wrap-middle">
                <span class="invoiceRecoring-box-wrap-middle-span1">上海果老网络科技有限公司</span>
                <span>91370983760048007L</span>
                <span>上海市</span>
                <span>18256787654</span>
                <span>2016.09.21</span>
                <span>正常</span>
                <span id="invoiceRecoring-box-wrap-middle-span7">删除</span>
            </div>
            <div class="invoiceRecoring-box-wrap-block">
                <el-pagination
                    layout="prev, pager, next"
                    :total="50">
                </el-pagination>
            </div>
            <img @click="invoiceapply" class="invoiceRecoring-box-wrap-img" src="/static/images/build.png" alt="">
        </div>
    </div>
    <div class="invoiceRecoring-box-form" v-show="!invoiceshow">
        <div class="invoiceRedcring-box-form-top">新建发票</div>
        <div class="invoiceRecoring-box-form-wrap">
            <div>
                <img src="/static/images/star.png" alt="">
                <span class="invoiceRecoring-box-form-wrap-name">公司名称</span>
                <input type="text" placeholder="请输入">
                <input class="invoiceRecoring-box-form-wrap-checkbox" type="checkbox">
                <span id="invoiceRecoring-box-form-wrap-fit">验证是否与认证单位一致</span>
            </div>
            <div>
                <img src="/static/images/star.png" alt="">
                <span class="invoiceRecoring-box-form-wrap-code">统一社会信用码</span>
                <input type="text" placeholder="请输入">
            </div>
            <div>
                <img src="/static/images/star.png" alt="">
                <span class="invoiceRecoring-box-form-wrap-companyaddress">公司地址</span>
                <input type="text" placeholder="请输入">
            </div>
            <div>
                <img src="/static/images/star.png" alt="">
                <span class="invoiceRecoring-box-form-wrap-companyphone">公司电话</span>
                <input type="text" placeholder="如：0551-63668080">
            </div>
            <div id="invoiceRecoring-box-form-wrap-countbank">
                <span>开户银行</span>
                <input type="text" placeholder="请输入">
            </div>
            <div>
                <img src="/static/images/star.png" alt="">
                <span class="invoiceRecoring-box-form-wrap-bankcount">银行账户</span>
                <input type="text" placeholder="请输入">
            </div>
            <div>
                <img src="/static/images/star.png" alt="">
                <span class="invoiceRecoring-box-form-wrap-tickname">收票姓名</span>
                <input type="text" placeholder="请输入">
            </div>
            <div>
                <img src="/static/images/star.png" alt="">
                <span class="invoiceRecoring-box-form-wrap-ticknum">收票联系号码</span>
                <input type="text" placeholder="请输入">
            </div>
            <div>
                <img src="/static/images/star.png" alt="">
                <span class="invoiceRecoring-box-form-wrap-tickaddress">收票地址</span>
                <el-select v-model="value" class="invoiceRecoring-box-form-wrap-select1">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" class="invoiceRecoring-box-form-wrap-select2">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" class="invoiceRecoring-box-form-wrap-select3">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div>
                <img src="/static/images/star.png" alt="">
                <span class="invoiceRecoring-box-form-wrap-detailaddree">详细地址</span>
                <input type="text" placeholder="请输入">
            </div>
            <div>
                <img src="/static/images/star.png" alt="">
                <span class="invoiceRecoring-box-form-wrap-show">是否显示</span>
                <el-select v-model="value" class="invoiceRecoring-box-form-wrap-select4">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div id="invoiceRecoring-box-form-wrap-imgbox">
                <img class="invoiceRecoring-box-form-wrap-submit-img" src="/static/images/submit.png" alt="">
                <img @click="invoicequit" src="/static/images/quit.png" alt="">
            </div>
        </div>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: 'invoiceRecoring',
  data(){
      return{
          vaule:'',
          invoiceshow:true,
          options: [{
          value: '选项1',
          label: '国内个人'
        }, {
          value: '选项2',
          label: '港澳个人'
        }, {
          value: '选项3',
          label: '台湾个人'
        }, {
          value: '选项4',
          label: '国外个人'
        }],
        value: '选项1'
      }
  },
  components: {
  
  },
  methods:{
      invoiceapply(){
          this.invoiceshow = !this.invoiceshow;
      },
      invoicequit(){
          this.invoiceshow = !this.invoiceshow;
      }
  }
}

</script>

<style>
@font-face {
    font-family: 'invoicefont'; 
    src: url('/static/PingFang/PingFangSC-Medium.ttf');
  }
  @font-face {
    font-family: 'invoicefont1'; 
    src: url('/static/PingFang/PingFangSC-Thin.ttf');
  }
   @font-face {
    font-family: 'invoicefont2'; 
    src: url('/static/PingFang/PingFangSC-Regular.ttf');
  }
  @font-face {
    font-family: 'invoicefont3'; 
    src: url('/static/PingFang/PingFangSC-Light.ttf');
  }
.invoiceRecoring-box{
    width: 800px;
    float: left;
    margin: 117px 0 250px 50px;
    border-top:1px solid #d8d8d8;
  }
  .invoiceRecoring-box-wrap{
    margin-left: 6px;
  }
  .invoiceRecoring-box-wrap-top{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #d8d8d8;
  }
  .invoiceRecoring-box-wrap-top>span{
    font-family: invoicefont;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    float: left;
  }
  .invoiceRecoring-box-wrap-top-span1{
      margin: 0 84px 0 22px;
  }
  .invoiceRecoring-box-wrap-top-span2{
      margin-right: 55px;
  }
  .invoiceRecoring-box-wrap-top-span3{
      margin-right: 39px;
  }
  .invoiceRecoring-box-wrap-top-span4{
      margin-right: 44px;
  }
  .invoiceRecoring-box-wrap-top-span5{
      margin-right: 36px;
  }
  .invoiceRecoring-box-wrap-top-span6{
      margin-right: 24px;
  }
  .invoiceRecoring-box-wrap-middle{
      margin: 12px 0 24px;
      height: 25px;
  }
  .invoiceRecoring-box-wrap-middle>span{
      float: left;
      font-family: invoicefont1;
      font-size: 18px;
      font-weight: 100;
      color: #333333;
      margin-right: 19px;
  }
  .invoiceRecoring-box-wrap-middle-span1{
      width: 131px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap; 
  }
  #invoiceRecoring-box-wrap-middle-span7{
      margin: 0;
      color: #f96006;
  }
  .invoiceRecoring-box-wrap-block{
      margin:0 0 64px 230px;
  }
  .invoiceRecoring-box-wrap-img{
      margin-left: 300px;
  }
  .invoiceRecoring-box-form{
      width: 800px;
      float: left;
      margin: 62px 0 128px 50px;
  }
  .invoiceRedcring-box-form-top{
      margin: 0 0 14px 43px;
      font-size: 28px;
      font-weight: 100;
      color: #999999;
      font-family: invoicefont1;
  }
  .invoiceRecoring-box-form-wrap{
      width: 770px;
      border-top:1px solid #d8d8d8;
      padding-left: 30px;
  }
  .invoiceRecoring-box-form-wrap>div{
      margin: 13px 0 32px;
  }
  .invoiceRecoring-box-form-wrap>div>input[type=text]{
      width: 353px;
      height: 40px;
      border-radius: 4px;
      border: solid 1px #d6d6d6;
      font-family: invoicefont2;
      font-size: 18px;
      color: #999999;
      outline: none;
      padding-left: 7px;
      margin-left: 16px;
  }
  .invoiceRecoring-box-form-wrap>div>span{
      font-size: 18px;
      font-family: invoicefont2;
      color: #333333;
      vertical-align: middle;
  }
  .invoiceRecoring-box-form-wrap>div>img{
      vertical-align: middle;
  }
  .invoiceRecoring-box-form-wrap-name,.invoiceRecoring-box-form-wrap-companyaddress
  ,.invoiceRecoring-box-form-wrap-companyphone,.invoiceRecoring-box-form-wrap-bankcount,
  .invoiceRecoring-box-form-wrap-tickname,.invoiceRecoring-box-form-wrap-tickaddress,
  .invoiceRecoring-box-form-wrap-detailaddree{
      margin-left: 70px;
  }
  .invoiceRecoring-box-form-wrap-checkbox{
      width: 16px;
      height: 16px;
      margin: 0 6px 0 32px;
      vertical-align: middle;
  }
  #invoiceRecoring-box-form-wrap-fit{
      font-family: invoicefont3;
      font-size: 12px;
      font-weight: 300;
      color: #de061c;
  }
  .invoiceRecoring-box-form-wrap-code{
      margin-left: 16px;
  }
  #invoiceRecoring-box-form-wrap-countbank{
      margin-left: 93px;
  }
  .invoiceRecoring-box-form-wrap-ticknum{
      margin-left: 34px;
  }
  .invoiceRecoring-box-form-wrap-select1{
      width: 108px;
      height: 40px;
      margin: 0 14px 0 16px;
  }
  .invoiceRecoring-box-form-wrap-select2{
      width: 108px;
      height: 40px;
      margin-right:14px;
  }
  .invoiceRecoring-box-form-wrap-select3{
       width: 108px;
      height: 40px;
  }
  .invoiceRecoring-box-form-wrap-show{
      margin: 0 16px 0 70px;
  }
  .invoiceRecoring-box-form-wrap-select4{
      width: 360px;
      height: 40px;
  }
  #invoiceRecoring-box-form-wrap-imgbox{
      margin-top: 64px;
  }
  .invoiceRecoring-box-form-wrap-submit-img{
    margin: 0 36px  0 90px;
  }
</style>
