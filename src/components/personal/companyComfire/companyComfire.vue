<template>
  <div class="companyComfire-container">
      <div class="companyComfire-box"  v-show="identshow">
        <div class="companyComfire-box-wrap">
            <div class="companyComfire-box-wrap-top">
                <span>公司名称</span>
                <span>姓名</span>
                <span>性别</span>
                <span>类型</span>
                <span>手机号码</span>
                <span>审核状态</span>
            </div>
            <div class="companyComfire-box-wrap-middle">
                <span class="companyComfire-box-wrap-middle-span1">上海果老网络科技有限公司</span>
                <span class="companyComfire-box-wrap-middle-span2">戢俊龙</span>
                <span class="companyComfire-box-wrap-middle-span3">男</span>
                <span class="companyComfire-box-wrap-middle-span4">国内</span>
                <span class="companyComfire-box-wrap-middle-span5">18432154621</span>
                <span>已审核</span>
            </div>
            <div class="companyComfire-box-wrap-middle">
                <span class="companyComfire-box-wrap-middle-span1">上海果老网络科技有限公司</span>
                <span class="companyComfire-box-wrap-middle-span2">戢俊龙</span>
                <span class="companyComfire-box-wrap-middle-span3">男</span>
                <span class="companyComfire-box-wrap-middle-span4">国内</span>
                <span class="companyComfire-box-wrap-middle-span5">18432154621</span>
                <span>已审核</span>
            </div>
            <div class="companyComfire-box-wrap-middle">
                <span class="companyComfire-box-wrap-middle-span1">上海果老网络科技有限公司</span>
                <span class="companyComfire-box-wrap-middle-span2">戢俊龙</span>
                <span class="companyComfire-box-wrap-middle-span3">男</span>
                <span class="companyComfire-box-wrap-middle-span4">国内</span>
                <span class="companyComfire-box-wrap-middle-span5">18432154621</span>
                <span>已审核</span>
            </div>
            <div class="companyComfire-box-wrap-middle">
                <span class="companyComfire-box-wrap-middle-span1">上海果老网络科技有限公司</span>
                <span class="companyComfire-box-wrap-middle-span2">戢俊龙</span>
                <span class="companyComfire-box-wrap-middle-span3">男</span>
                <span class="companyComfire-box-wrap-middle-span4">国内</span>
                <span class="companyComfire-box-wrap-middle-span5">18432154621</span>
                <span>已审核</span>
            </div>
            <div class="companyComfire-box-wrap-middle">
                <span class="companyComfire-box-wrap-middle-span1">上海果老网络科技有限公司</span>
                <span class="companyComfire-box-wrap-middle-span2">戢俊龙</span>
                <span class="companyComfire-box-wrap-middle-span3">男</span>
                <span class="companyComfire-box-wrap-middle-span4">国内</span>
                <span class="companyComfire-box-wrap-middle-span5">18432154621</span>
                <span>已审核</span>
            </div>
            <div class="companyComfire-box-wrap-middle">
                <span class="companyComfire-box-wrap-middle-span1">上海果老网络科技有限公司</span>
                <span class="companyComfire-box-wrap-middle-span2">戢俊龙</span>
                <span class="companyComfire-box-wrap-middle-span3">男</span>
                <span class="companyComfire-box-wrap-middle-span4">国内</span>
                <span class="companyComfire-box-wrap-middle-span5">18432154621</span>
                <span>已审核</span>
            </div>
            <div class="companyComfire-box-wrap-block">
                <el-pagination
                    layout="prev, pager, next"
                    :total="50">
                </el-pagination>
            </div>
            <img @click="companyapply" class="companyComfire-box-wrap-img" src="/static/images/apply.png" alt="">
        </div>
    </div>
    <div class="companyComfire-box-form" v-show="!identshow">
      <div id="companyComfire-box-form-type">
          <img src="/static/images/star.png" alt="">
          <span>企业类型</span>
          <el-select v-model="serial" class="companyComfire-box-form-type-select">
            <el-option
              v-for="item in companytype"
              :key="item.serial"
              :label="item.difftype"
              :value="item.serial">
            </el-option>
          </el-select>
        </div>
        <div class="companyComfire-box-form-wrap">
          <div class="companyComfire-box-form-wrap-representative">
            <img src="/static/images/star.png" alt="">
            <span>法定代表人</span>
            <input type="text">
          </div>
          <div class="companyComfire-box-form-wrap-nation">
            <img src="/static/images/star.png" alt="">
            <span>国籍</span>
            <input type="text" placeholder="中国">
          </div>
          <div class="companyComfire-box-form-wrap-postcode">
            <span>注册地址邮编</span>
            <input type="text">
          </div>
          <div class="companyComfire-box-form-wrap-sex">
            <img src="/static/images/star.png" alt="">
            <span>性别</span>
            <el-select v-model="sequence" class="companyComfire-box-form-type-select">
              <el-option
                v-for="k in sexy"
                :key="k.sequence"
                :label="k.sex"
                :value="k.sequence">
              </el-option>
            </el-select>
          </div>
          <div class="companyComfire-box-form-wrap-linkaddress">
            <img src="/static/images/star.png" alt="">
            <span>联系地址</span>
            <el-select v-model="none" placeholder="请选择" class="companyComfire-box-form-type-select">
              <el-option
                v-for="item in companytype"
                :key="item.serial"
                :label="item.difftype"
                :value="item.serial">
              </el-option>
            </el-select>
          </div>
          <div>
            <el-select v-model="none" placeholder="请选择" class="companyComfire-box-form-type-selectaddress">
              <el-option
                v-for="item in companytype"
                :key="item.serial"
                :label="item.difftype"
                :value="item.serial">
              </el-option>
            </el-select>
          </div>
          <div>
            <el-select v-model="none" placeholder="请选择" class="companyComfire-box-form-type-selectaddress">
              <el-option
                v-for="item in companytype"
                :key="item.serial"
                :label="item.difftype"
                :value="item.serial">
              </el-option>
            </el-select>
          </div>
          <div class="companyComfire-box-form-wrap-detailaddress">
            <input type="text" placeholder="请输入详细联系地址">
          </div>
          <div class="companyComfire-box-form-wrap-idnumber">
            <img src="/static/images/star.png" alt="">
            <span>身份证号码</span>
            <input type="text">
          </div>
          <div class="companyComfire-box-form-wrap-idaddress">
            <span>身份证地址</span>
            <input type="text">
          </div>
          <div class="companyComfire-box-form-wrap-uploadimg"> 
            <img src="/static/images/star.png" alt="">
            <span>上传法人身份证照片</span>
            <div class="companyComfire-box-form-wrap-uploadimg-div">
              <div>+正面</div>
              <div>+反面</div>
            </div>
          </div>
          <div class="companyComfire-box-form-wrap-uploadsellimg">
            <img src="/static/images/star.png" alt="">
            <span>上传营业执照</span>
            <div class="companyComfire-box-form-wrap-uploadsellimgdiv">+请上传</div>
          </div>
          <div class="companyComfire-box-form-wrap-submit">
            <img src="/static/images/submit.png" alt="">
            <img @click="companyquit" src="/static/images/quit.png" alt="">
          </div>
        </div>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: 'companyComfire',
  data(){
    return{
      companytype:[{
          serial: '选项1',
          difftype: '国内个体'
        }, {
          serial: '选项2',
          difftype: '国内企业'
        }, {
          serial: '选项3',
          difftype: '港澳企业'
        }, {
          serial: '选项4',
          difftype: '台湾企业'
        }, {
          serial: '选项5',
          difftype: '国外企业'
        }],
        sexy:[{
          sequence: '第一',
          sex: '男'
        },
        {
          sequence: '第二',
          sex: '女'
        }],
        none:'',
        sequence: '第一',
        serial:'选项1',
        identshow:true
    }
  },
  components: {
  },
  methods:{
    companyapply(){
      this.identshow = !this.identshow;
    },
    companyquit(){
      this.identshow = !this.identshow;
    }
  }
}

</script>

<style scoped>
  @font-face {
    font-family: 'myFont'; 
    src: url('/static/PingFang/PingFangSC-Medium.ttf');
  }
  @font-face {
    font-family: 'font'; 
    src: url('/static/PingFang/PingFangSC-Thin.ttf');
  }
  @font-face {
    font-family: 'formfont'; 
    src: url('/static/PingFang/PingFangSC-Regular.ttf');
  }
  .companyComfire-box{
    width: 800px;
    float: left;
    margin: 117px 0 0 50px;
    border-top:1px solid #d8d8d8;
  }
  .companyComfire-box-wrap{
    margin-left: 6px;
  }
  .companyComfire-box-wrap-top{
    width: 787px;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid #d8d8d8;
  }
  .companyComfire-box-wrap-top>span{
    font-family: myFont; 
    font-size: 18px;
    font-weight: 500;
    color: #333333;
  }
  .companyComfire-box-wrap-top>span:nth-of-type(1){
      margin: 0 129px 0 78px;
  }
  .companyComfire-box-wrap-top>span{
      margin-right: 55px;
  }
  .companyComfire-box-wrap-middle{
    margin: 12px 0 24px 0;
  }
  .companyComfire-box-wrap-middle>span{
    font-family: font; 
    font-size: 18px;
    font-weight: 100;
    color: #333333;
  }
  .companyComfire-box-wrap-middle-span1{
    margin-right: 52px;
  }
  .companyComfire-box-wrap-middle-span2{
    margin-right: 56px;
  }
  .companyComfire-box-wrap-middle-span3{
    margin-right: 64px;
  }
  .companyComfire-box-wrap-middle-span4{
    margin-right: 39px;
  }
  .companyComfire-box-wrap-middle-span5{
    margin-right: 30px;
  }
  .companyComfire-box-wrap-block{
    margin: 36px 0 64px 200px;
  }
  .companyComfire-box-wrap-img{
    margin:0 0 256px 244px;
  }
  .companyComfire-box-form{
    width: 800px;
    float: left;
    margin: 117px 0 0 50px;
    border-top:1px solid #d8d8d8;
  }
  .companyComfire-box-form>div{
    margin:0 0 32px 34px;
  }
  #companyComfire-box-form-type{
    margin-top: 13px;
  }
  #companyComfire-box-form-type>img{
    margin-right: 32px;
    vertical-align: middle;
  }
  #companyComfire-box-form-type>span{
    vertical-align: middle;
    font-family: formfont;
    font-size: 18px;
    color: #333333;
    margin-right: 16px;
  }
  .companyComfire-box-form-wrap>div{
    margin-bottom: 32px;
  }
  .companyComfire-box-form-wrap>div>input{
    width: 285px;
    height: 40px;
    font-family: formfont;
    font-size: 14px;
    padding-left: 15px;
    outline: none;
    border-radius: 4px;
    border: solid 1px #d6d6d6;
  }
  .companyComfire-box-form-wrap>div>span{
    vertical-align: middle;
    font-family: formfont;
    font-size: 18px;
    color: #333333;
  }
  .companyComfire-box-form-wrap>div>img{
    vertical-align: middle;
  }
  .companyComfire-box-form-type-select{
    vertical-align: middle;
    width: 300px;
    height: 40px;
  }
  .companyComfire-box-form-wrap-representative>span{
    margin: 0 16px 0 14px;
  }
  .companyComfire-box-form-wrap-nation>span{
    margin: 0 16px 0 68px;
  }
  .companyComfire-box-form-wrap-postcode>span{
    margin: 0 16px 0 20px;
  }
  .companyComfire-box-form-wrap-sex>span{
    margin: 0 16px 0 68px;
  }
  .companyComfire-box-form-wrap-linkaddress>span{
    margin: 0 16px 0 32px;
  }
  .companyComfire-box-form-type-selectaddress{
    margin-left:150px;
    width: 300px;
    height: 40px;
  }
  .companyComfire-box-form-wrap-detailaddress>input{
    margin-left:150px;
  }
  .companyComfire-box-form-wrap-idnumber>span{
    margin: 0 16px 0 14px;
  }
  .companyComfire-box-form-wrap-idaddress>span{
    margin: 0 16px 0 34px;
  }
  .companyComfire-box-form-wrap-uploadimg{
    margin-top: 40px;
  }
  .companyComfire-box-form-wrap-uploadimg>span{
    margin-left: 14px;
  }
  .companyComfire-box-form-wrap-uploadimg-div{
    height: 160px;
    margin: 20px 0 32px 34px;
  }
  .companyComfire-box-form-wrap-uploadimg-div>div{
    float: left;
    width: 160px;
    height: 160px;
    border-radius: 4px;
    border: dotted 1px #d6d6d6;
    background-color: #ffffff;
    font-family: formfont;
    font-size: 20px;
    color: #999999;
    text-align: center;
    line-height: 160px;
  }
  .companyComfire-box-form-wrap-uploadimg-div>div:nth-of-type(1){
    margin-right: 86px;
  }
  .companyComfire-box-form-wrap-uploadsellimg>span{
    margin-left: 14px;
  }
  .companyComfire-box-form-wrap-uploadsellimgdiv{
    margin: 20px 0 32px 34px;
    width: 160px;
    height: 160px;
    border-radius: 4px;
    border: dotted 1px #d6d6d6;
    background-color: #ffffff;
    font-family: formfont;
    font-size: 20px;
    color: #999999;
    text-align: center;
    line-height: 160px;
  }
  .companyComfire-box-form-wrap-submit{
    margin: 64px 0 0 86px;
  }
  .companyComfire-box-form-wrap-submit>img:nth-of-type(1){
    margin-right: 36px;
  }
</style>
