<template>
  <div class="companyForm-container">
    <div class="companyComfire-box-form">

      <div id="companyComfire-box-form-type">
          <img src="/static/images/star.png" alt="">
          <span>企业类型</span>
          <el-select @change="choseCompany" v-model="serial" class="companyComfire-box-form-type-select">
            <el-option
              v-for="item in companytype"
              :key="item.serial"
              :label="item.difftype"
              :value="item.serial">
            </el-option>
          </el-select>
        </div>

        <div class="companyComfire-box-form-wrap">
          <div class="companyComfire-box-form-wrap-representative" v-show="companyType1">
            <img src="/static/images/star.png" alt="">
            <span>法定代表人</span>
            <input v-model="representative" type="text">
            <div class="company-msg">{{representativeTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-linkname" v-show="companyType3">
            <img src="/static/images/star.png" alt="">
            <span>联系人姓名</span>
            <input v-model="name" type="text">
            <div class="company-msg">{{nameTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-nation">
            <img src="/static/images/star.png" alt="">
            <span>国籍</span>
            <input v-model="nation" type="text" placeholder="中国">
            <div class="company-msg">{{nationTip}}</div>
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

          <div class="companyComfire-box-form-wrap-chineseCompanyname">
            <img src="/static/images/star.png" alt="">
            <span>公司全称(中文)</span>
            <input v-model="companychineseName" type="text">
            <div class="company-msg">{{companychineseNameTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-englishCompanyname" v-show="companyType4">
            <img src="/static/images/star.png" alt="">
            <span>公司全称(英文)</span>
            <input v-model="companyenglishName" type="text">
            <div class="company-msg">{{companyenglishNameTip}}</div>
          </div>

          <div id="companyComfire-box-form-wrap-companyCode" v-show="companyType3">
            <img src="/static/images/star.png" alt="">
            <span>统一社会信用码/营业执照注册号</span>
            <input v-model="companyCode" type="text">
            <span>不是三证合一,请填写营业执照注册号！</span>
            <div class="company-msg2">{{companyCodeTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-mobile">
            <img src="/static/images/star.png" alt="">
            <span>手机号码</span>
            <input maxlength="11" v-model="mobile" type="text">
            <div class="company-msg">{{mobileTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-fixPhone" v-show="companyType3">
            <img src="/static/images/star.png" alt="">
            <span>公司座机</span>
            <input maxlength="15" v-model="fixPhone" type="text">
            <div class="company-msg">{{fixPhoneTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-registeraddress" v-show="companyType6">
            <img src="/static/images/star.png" alt="">
            <span>注册地址</span>
            <el-select v-model="regsheng" @change="choseregProvince" placeholder="省级地区" class="companyComfire-box-form-type-select">
            <el-option
              v-for="item in regprovince"
              :key="item.id"
              :label="item.value"
              :value="item.id">
            </el-option>
          </el-select>
          </div>

          <div class="companyComfire-box-form-wrap-registeraddress" v-show="companyType6">
            <el-select v-model="regshi" @change="choseregCity" placeholder="市级地区" class="companyComfire-box-form-type-selectaddress">
            <el-option
              v-for="item in regshi1"
              :key="item.id"
              :label="item.value"
              :value="item.id">
            </el-option>
          </el-select>
          </div>

          <div v-show="companyType6">
            <el-select v-model="regqu" @change="choseregBlock" placeholder="区级地区" class="companyComfire-box-form-type-selectaddress">
              <el-option
                v-for="item in regqu1"
                :key="item.id"
                :label="item.value"
                :value="item.id">
              </el-option>
            </el-select>
            <div class="company-msg">{{registeraddressTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-registerchineseAddress" v-show="companyType3">
            <img src="/static/images/star.png" alt="">
            <span>注册地址(中文)</span>
            <input v-model="registerchineseAddress" type="text">
            <div class="company-msg">{{registerchineseAddressTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-registerenglishAddress" v-show="companyType4">
            <img src="/static/images/star.png" alt="">
            <span>注册地址(英文)</span>
            <input v-model="registerenglishAddress" type="text">
            <div class="company-msg">{{registerenglishAddressTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-postcode" v-show="companyType2">
            <span>注册地址邮编</span>
            <input v-model="registerpostCode" type="text">
          </div>

          <div class="companyComfire-box-form-wrap-linkaddress" v-show="companyType2">
            <img src="/static/images/star.png" alt="">
            <span>联系地址</span>
            <el-select v-model="sheng" @change="choseProvince" placeholder="省级地区" class="companyComfire-box-form-type-select">
            <el-option
              v-for="item in province"
              :key="item.id"
              :label="item.value"
              :value="item.id">
            </el-option>
          </el-select>
          </div>

          <div class="companyComfire-box-form-wrap-linkaddress" v-show="companyType2">
            <el-select v-model="shi" @change="choseCity" placeholder="市级地区" class="companyComfire-box-form-type-selectaddress">
            <el-option
              v-for="item in shi1"
              :key="item.id"
              :label="item.value"
              :value="item.id">
            </el-option>
          </el-select>
          </div>

          <div class="companyComfire-box-form-wrap-linkaddress" v-show="companyType2">
            <el-select v-model="qu" @change="choseBlock" placeholder="区级地区" class="companyComfire-box-form-type-selectaddress">
              <el-option
                v-for="item in qu1"
                :key="item.id"
                :label="item.value"
                :value="item.id">
              </el-option>
            </el-select>
          </div>

          <div class="companyComfire-box-form-wrap-detailaddress">
            <input v-model="linkDetail" type="text" placeholder="请输入详细联系地址">
            <div class="company-msg">{{linkDetailTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-idnumber" v-show="companyType1">
            <img src="/static/images/star.png" alt="">
            <span>身份证号码</span>
            <input maxlength="18" v-model="idnum" type="text">
            <div class="company-msg">{{idnumTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-idaddress" v-show="companyType1">
            <span>身份证地址</span>
            <input v-model="idAddress" type="text">
          </div>

          <div class="companyComfire-box-form-wrap-receive" v-show="companyType5">
            <span>国内接收人姓名</span>
            <input v-model="receiveName" type="text">
          </div>
          
          <div class="companyComfire-box-form-wrap-receive" v-show="companyType5">
            <span>国内接收人电话</span>
            <input v-model="receivePhone" type="text">
          </div>
          <div class="companyComfire-box-form-wrap-receive" v-show="companyType5">
            <span>国内接收人地址</span>
            <input v-model="receiveAddress" type="text">
          </div>
          <div class="companyComfire-box-form-wrap-receive" v-show="companyType5">
            <span>国内接收人邮编</span>
            <input v-model="receivepostCode"  type="text">
          </div>

          <div class="companyComfire-box-form-wrap-uploadimg" v-show="companyType1"> 
            <img src="/static/images/star.png" alt="">
            <span>上传法人身份证照片</span>
            <div class="companyComfire-box-form-wrap-uploadimg-div">
              <div>
                <el-upload
                  accept="image/*"
                  :http-request="uploadid1"
                  :show-file-list="false"
                  action="">
                  <img class="idimg" :src="idimg1?idimg1:'/static/images/zheng.png'" alt="">
                </el-upload>
              </div>
              <div>
                <el-upload
                  accept="image/*"
                  :http-request="uploadid2"
                  :show-file-list="false"
                  action="">
                  <img class="idimg" :src="idimg2?idimg2:'/static/images/fan.png'" alt="">
                </el-upload>
              </div>
            </div>
            <div class="company-msg">{{idimgTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-uploadsellimg">
            <img src="/static/images/star.png" alt="">
            <span>上传营业执照照片</span>
            <div class="companyComfire-box-form-wrap-uploadsellimgdiv">
                <el-upload
                  accept="image/*"
                  :http-request="uploadid3"
                  :show-file-list="false"
                  action="">
                  <img class="idimg" :src="idimg3?idimg3:'/static/images/please.png'" alt="">
                </el-upload>
            </div>
            <div class="company-msg">{{licenseimgTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-uploadsellimg" v-show="companyType4">
            <img src="/static/images/star.png" alt="">
            <span>上传营业执照中英文翻译件</span>
            <div class="companyComfire-box-form-wrap-uploadsellimgdiv">
              <el-upload
                  accept="image/*"
                  :http-request="uploadid4"
                  :show-file-list="false"
                  action="">
                  <img class="idimg" :src="idimg4?idimg4:'/static/images/please.png'" alt="">
                </el-upload>
            </div>
            <div class="company-msg">{{licenseenglishimgTip}}</div>
          </div>

          <div class="companyComfire-box-form-wrap-submit" v-show="status1">
            <img @click="companysend" src="/static/images/submit.png" alt="">
            <img @click="companyquit1" src="/static/images/quit.png" alt="">
          </div>
          <div class="companyComfire-box-form-wrap-submit" v-show="status2">
          <img @click="companyedit" class="personalComfire-box-form-type-submit-img" src="/static/images/edit.png" alt="">
          <img @click="companyquit2" src="/static/images/quit.png" alt="">
        </div>
        </div>
    </div>
    <div style="clear:both;"></div>
  </div>
  
</template>

<script>
export default {
  name: 'companyForm',
  data(){
      return{
          companytype:[{
          serial: '1',
          difftype: '国内个体'
        }, {
          serial: '2',
          difftype: '国内企业'
        }, {
          serial: '3',
          difftype: '港澳企业'
        }, {
          serial: '4',
          difftype: '台湾企业'
        }, {
          serial: '5',
          difftype: '国外企业'
        }],
        sexy:[{
          sequence: '1',
          sex: '男'
        },
        {
          sequence: '2',
          sex: '女'
        }],
        none:'',
        sequence: '1',
        serial:'1',

        // 根据下拉显示不同的表格
        companyType1:true,
        companyType2:true,
        companyType3:false,
        companyType4:false,
        companyType5:false,
        companyType6:false,
        // 三级联动联系地址
        mapJson:'../../../static/json/map.json',
        province:'',
        sheng: '',
        shi: '',
        shi1: [],
        qu: '',
        qu1: [],
        city:'',
        block:'',
        a:'',
        b:'',
        c:'',
        // 三级联动注册地址
        regprovince:'',
        regsheng: '',
        regshi: '',
        regshi1: [],
        regqu: '',
        regqu1: [],
        regcity:'',
        regblock:'',
        rega:'',
        regb:'',
        regc:'',
        // 上传图片加域名
        idimg1:'',
        idimg2:'',
        idimg3:'',
        idimg4:'',
        // 上传图片不加域名
        idimg_ming1:'',
        idimg_ming2:'',
        idimg_ming3:'',
        idimg_ming4:'',
        // 表单
        representative:'',
        representativeTip:'',
        name:'',
        nameTip:'',
        nation:'',
        nationTip:'',
        companychineseName:'',
        companychineseNameTip:'',
        companyenglishName:'',
        companyenglishNameTip:'',
        companyCode:'',
        companyCodeTip:'',
        mobile:'',
        mobileTip:'',
        fixPhone:'',
        fixPhoneTip:'',
        registeraddressTip:'',
        registerchineseAddress:'',
        registerchineseAddressTip:'',
        registerenglishAddress:'',
        registerenglishAddressTip:'',
        registerpostCode:'',
        linkDetail:'',
        linkDetailTip:'',
        idnum:'',
        idnumTip:'',
        idAddress:'',
        receiveName:'',
        receivePhone:'',
        receiveAddress:'',
        receivepostCode:'',
        idimgTip:'',
        licenseimgTip:'',
        licenseenglishimgTip:'',
        // 根据状态显示不同的操作
        status1:true,
        status2:false
      }
  },
  watch:{
    'representative'(newValue){
          if(newValue == ""){
              return this.representativeTip='请输入法定代表人姓名';
          }
          this.representativeTip= ""
      },
      'name'(newValue){
          if(newValue == ""){
              return this.nameTip='请输入联系人姓名';
          }
          this.nameTip= ""
      },
      'nation'(newValue){
          if(newValue == ""){
              return this.nationTip='请输入国籍';
          }
          this.nationTip= ""
      },
      'companychineseName'(newValue){
          if(newValue == ""){
              return this.companychineseNameTip='请输入公司中文全称';
          }
          this.companychineseNameTip= ""
      },
      'companyenglishName'(newValue){
          if(newValue == ""){
              return this.companyenglishNameTip='请输入公司英文全称';
          }
          this.companyenglishNameTip= ""
      },
      'companyCode'(newValue){
          if(newValue == ""){
              return this.companyCodeTip='请输入公司统一社会信用码或营业执照注册号';
          }
          this.companyCodeTip= ""
      },
      "mobile"(newValue){
          let reg=/^[1][3,4,5,7,8][0-9]{9}$/;
          if(newValue ==''){
              return this.mobileTip='请输入手机号码';
          }
          if(newValue.length!=11||!reg.test(newValue)){
              return this.mobileTip='手机号格式不正确';
          }
          return this.mobileTip='';
      },
      "fixPhone"(newValue){
          let reg=/0\d{2,3}-\d{7,8}/;
          if(newValue ==''){
              return this.fixPhoneTip='请填写公司座机电话';
          }
          if(!reg.test(newValue)){
              return this.fixPhoneTip='座机电话格式不正确';
          }
          return this.fixPhoneTip='';
      },
      'registerchineseAddress'(newValue){
          if(newValue == ""){
              return this.registerchineseAddressTip='请输入公司注册地址中文';
          }
          this.registerchineseAddressTip= ""
      },
      'registerenglishAddress'(newValue){
          if(newValue == ""){
              return this.registerenglishAddressTip='请输入公司注册地址英文';
          }
          this.registerenglishAddressTip= ""
      },
      'rega'(newValue){
          if(newValue == ""){
              return this.registeraddressTip='请输入注册地址城市';
          }
          this.registeraddressTip= ""
      },
      'a'(newValue){
          if(newValue == ""){
              return this.linkDetailTip='请输入联系地址城市';
          }
          this.linkDetailTip= ""
      },
      'linkDetail'(newValue){
          if(newValue == ""){
              return this.linkDetailTip='请输入详细联系地址';
          }
          this.linkDetailTip= ""
      },
      "idnum"(newValue){
            let reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if(newValue ==''){
                return this.idnumTip='请输入身份证号码';
            }
            if(!reg.test(newValue)){
                return this.idnumTip='身份证号码格式不正确';
            }
            return this.idnumTip='';
        },
        'idimg1'(newValue){
            if(newValue == ""){
                return this.idimgTip='请上传身份证正面照片';
            }
            this.idimgTip= ""
        },
        'idimg2'(newValue){
            if(newValue == ""){
                return this.idimgTip='请上传身份证反面照片';
            }
            this.idimgTip= ""
        },
        'idimg3'(newValue){
            if(newValue == ""){
                return this.licenseimgTip='请上传营业执照照片';
            }
            this.licenseimgTip= ""
        },
        'idimg4'(newValue){
            if(newValue == ""){
                return this.licenseenglishimgTip='请上传营业执照中英文翻译件照片';
            }
            this.licenseenglishimgTip= ""
        },
  },
  methods:{
    tip(type,msg){
          return this.$message({
              type:type,
              message:msg,
              showClose:true,
              duration:1500
          })
      },
      companyquit1(){
          this.$router.push('/personal/companyComfire')
      },
      companyquit2(){
          this.$router.push('/personal/companyComfire')
      },
      choseCompany(){
        if(this.serial == "1"){
          this.companyType1=true;
          this.companyType2=true;
          this.companyType3=false;
          this.companyType4=false;
          this.companyType5=false;
          this.companyType6=false;
        }if(this.serial == "2"){
          this.companyType1=false;
          this.companyType2=true;
          this.companyType3=true;
          this.companyType4=false;
          this.companyType5=false;
          this.companyType6=true;
        }if(this.serial == "3"){
          this.companyType1=false;
          this.companyType2=false;
          this.companyType3=true;
          this.companyType4=true;
          this.companyType5=true;
          this.companyType6=false;
        }if(this.serial == "4"){
          this.companyType1=false;
          this.companyType2=false;
          this.companyType3=true;
          this.companyType4=false;
          this.companyType5=true;
          this.companyType6=false;
        }if(this.serial == "5"){
          this.companyType1=false;
          this.companyType2=false;
          this.companyType3=true;
          this.companyType4=true;
          this.companyType5=true;
          this.companyType6=false;
        }
      },
      getCityData:function(){
        var that = this
        that.$http.get(this.mapJson).then(function(response){
          if (response.status==200) {
            var data = response.data
            that.province = []
            that.city = []
            that.block = []
            // 省市区数据分类
            for (var item in data) {
              if (item.match(/0000$/)) {//省
                that.province.push({id: item, value: data[item], children: []})
              } else if (item.match(/00$/)) {//市
                that.city.push({id: item, value: data[item], children: []})
              } else {//区
                that.block.push({id: item, value: data[item]})
              }
            }
            // 分类市级
            for (var index in that.province) {
              for (var index1 in that.city) {
                if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                  that.province[index].children.push(that.city[index1])
                }
              }
            }
            // 分类区级
            for(var item1 in that.city) {
              for(var item2 in that.block) {
                if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                  that.city[item1].children.push(that.block[item2])
                }
              }
            }
          }
          else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },
      // 选省
      choseProvince:function(e) {
        for (var index2 in this.province) {
          if (e === this.province[index2].id) {
            this.shi1 = this.province[index2].children
            this.shi = this.province[index2].children[0].value
            this.qu1 =this.province[index2].children[0].children
            this.qu = this.province[index2].children[0].children[0].value
            this.E = this.qu1[0].id
            // console.log(this.province[index2].value);
           this.a =  this.province[index2].value
          }
        }
      },
      // 选市
      choseCity:function(e) {
        for (var index3 in this.city) {
          if (e === this.city[index3].id) {
            this.qu1 = this.city[index3].children
            this.qu = this.city[index3].children[0].value
            this.E = this.qu1[0].id
            // console.log(this.city[index3].value);
            this.b = this.city[index3].value
          }
        }
      },
      // 选区
      choseBlock:function(e) {
        this.E=e;
        for(var index4 in this.qu1){
          if(e === this.qu1[index4].id){
            // console.log(this.qu1[index4].value)
            this.c =this.qu1[index4].value
          }
        }
      },
      // 获取注册地址三级联动
      getregCityData:function(){
        var that = this
        that.$http.get(this.mapJson).then(function(response){
          if (response.status==200) {
            var data = response.data
            that.regprovince = []
            that.regcity = []
            that.regblock = []
            // 省市区数据分类
            for (var item in data) {
              if (item.match(/0000$/)) {//省
                that.regprovince.push({id: item, value: data[item], children: []})
              } else if (item.match(/00$/)) {//市
                that.regcity.push({id: item, value: data[item], children: []})
              } else {//区
                that.regblock.push({id: item, value: data[item]})
              }
            }
            // 分类市级
            for (var index in that.regprovince) {
              for (var index1 in that.regcity) {
                if (that.regprovince[index].id.slice(0, 2) === that.regcity[index1].id.slice(0, 2)) {
                  that.regprovince[index].children.push(that.regcity[index1])
                }
              }
            }
            // 分类区级
            for(var item1 in that.regcity) {
              for(var item2 in that.regblock) {
                if (that.regblock[item2].id.slice(0, 4) === that.regcity[item1].id.slice(0, 4)) {
                  that.regcity[item1].children.push(that.regblock[item2])
                }
              }
            }
          }
          else{
            console.log(response.status)
          }
        }).catch(function(error){console.log(typeof+ error)})
      },
      choseregProvince:function(e) {
        for (var index2 in this.regprovince) {
          if (e === this.regprovince[index2].id) {
            this.regshi1 = this.regprovince[index2].children
            this.regshi = this.regprovince[index2].children[0].value
            this.regqu1 =this.regprovince[index2].children[0].children
            this.regqu = this.regprovince[index2].children[0].children[0].value
            this.E = this.regqu1[0].id
            // console.log(this.province[index2].value);
           this.rega =  this.regprovince[index2].value
          }
        }
      },
      choseregCity:function(e) {
        for (var index3 in this.regcity) {
          if (e === this.regcity[index3].id) {
            this.regqu1 = this.regcity[index3].children
            this.regqu = this.regcity[index3].children[0].value
            this.E = this.regqu1[0].id
            // console.log(this.city[index3].value);
            this.regb = this.regcity[index3].value
          }
        }
      },
      choseregBlock:function(e) {
        this.E=e;
        for(var index4 in this.regqu1){
          if(e === this.regqu1[index4].id){
            // console.log(this.qu1[index4].value)
            this.regc =this.regqu1[index4].value
          }
        }
      },
      uploadid1(img){
        let formData=new FormData();
            formData.append('pic',img.file);
            this.$http.post(this.GLOBAL.base_url+'/authentication/upload_card',formData).then(res=>{
              if(res.data.code == "1"){
                this.idimg_ming1 = res.data.data;
                this.idimg1 = 'http://51guolao.yiqibnb.com'+ res.data.data;
              }
            });
      },
      uploadid2(img){
        let formData=new FormData();
            formData.append('pic',img.file);
            this.$http.post(this.GLOBAL.base_url+'/authentication/upload_card',formData).then(res=>{
              if(res.data.code == "1"){
                this.idimg_ming2 = res.data.data;
                this.idimg2 ='http://51guolao.yiqibnb.com'+ res.data.data;
              }
            });
      },
      uploadid3(img){
        let formData=new FormData();
            formData.append('pic',img.file);
            this.$http.post(this.GLOBAL.base_url+'/authentication/upload_card',formData).then(res=>{
              if(res.data.code == "1"){
                this.idimg_ming3 = res.data.data;
                this.idimg3 = 'http://51guolao.yiqibnb.com'+ res.data.data;
              }
            });
      },
      uploadid4(img){
        let formData=new FormData();
            formData.append('pic',img.file);
            this.$http.post(this.GLOBAL.base_url+'/authentication/upload_card',formData).then(res=>{
              if(res.data.code == "1"){
                this.idimg_ming4 = res.data.data;
                this.idimg4 = 'http://51guolao.yiqibnb.com'+ res.data.data;
              }
            });
      },
      companysend(){
        // 判断当联系地址选择省的时候 市和区是否默认的第一个
        if(this.b == ''){
          var shi = this.shi;
        }else{
           var shi = this.b;
        }
        if(this.c == ''){
          var qu = this.qu;
        }else{
           var qu = this.c;
        }
        
       // 判断当注册地址选择省的时候 市和区是否默认的第一个
        if(this.regb == ''){
          var shi2 = this.regshi;
        }else{
           var shi2 = this.regb;
        }
        if(this.regc == ''){
          var qu2 = this.regqu;
        }else{
           var qu2 = this.regc;
        }

        if(this.serial == "1"){
          if(this.representative == ''){
            this.representativeTip = "请输入法定代表人姓名"
          }else if(this.nation == ''){
            this.nationTip = "请输入国籍"
          }else if(this.companychineseName == ''){
            this.companychineseNameTip = "请输入公司中文全称"
          }else if(this.mobile==''){
              this.mobileTip = "请输入手机号码"
          }else if(this.a == ''){
            this.linkDetailTip = "请输入联系地址城市"
          }else if(this.linkDetail == ''){
            this.linkDetailTip = "请输入详细联系地址"
          }else if(this.idnum == ''){
            this.idnumTip = "请输入身份证号码"
          }else if(this.idimg1 == ''){
            this.idimgTip = "请上传法人身份证照片正面"
          }else if(this.idimg2 == ''){
            this.idimgTip = "请上传法人身份证照片反面"
          }else if(this.idimg3 == ''){
            this.licenseimgTip = "请上传营业执照照片"
          }else{
            this.$http.post(this.GLOBAL.base_url+'/authentication/addbusiness',{
                type:this.serial,
                user_id:this.$cookie.getCookie('u_id'),
                referee:this.representative,
                nationality:this.nation,
                sex:this.sequence,
                idcard_num:this.idnum,
                mobile:this.mobile,
                company_name:this.companychineseName,
                zip_code:this.registerpostCode,
                card_address:this.idAddress,
                contact_address:"中国",
                contact_address_pro:this.a,
                contact_address_city:shi,
                contact_address_area:qu,
                detail_address:this.linkDetail,
                pic:this.idimg_ming1,
                pic_reverse:this.idimg_ming2,
                business_license:this.idimg_ming3
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/companyComfire');
                }
              })
          }
        }
        if(this.serial=="2"){
          if(this.name == ''){
            this.nameTip = "请输入联系人姓名"
          }else if(this.nation == ''){
            this.nationTip = "请输入国籍"
          }else if(this.companychineseName == ''){
            this.companychineseNameTip = "请输入公司中文全称"
          }else if(this.companyCode == ''){
            this.companyCodeTip = "请输入统一社会信用码或营业执照注册号"
          }else if(this.mobile == ''){
            this.mobileTip = "请输入手机号码"
          }else if(this.fixPhone == ''){
            this.fixPhoneTip = "请输入公司座机号码"
          }else if(this.rega == ''){
            this.registeraddressTip = "请输入公司注册地址城市"
          }else if(this.registerchineseAddress == ''){
            this.registerchineseAddressTip = "请输入公司注册地址中文"
          }else if(this.a == ''){
            this.linkDetailTip = "请输入联系地址城市"
          }else if(this.linkDetail == ''){
            this.linkDetailTip = "请输入详细联系地址"
          }else if(this.idimg3 == ''){
            this.licenseimgTip = "上传营业执照照片"
          }else{
            this.$http.post(this.GLOBAL.base_url+'/authentication/addbusiness',{
                type:this.serial,
                user_id:this.$cookie.getCookie('u_id'),
                referee:this.name,
                nationality:this.nation,
                sex:this.sequence,
                company_name:this.companychineseName,
                mobile:this.mobile,
                license_num:this.companyCode,
                landline:this.fixPhone,
                zip_code:this.registerpostCode,
                register_pro:this.rega,
                register_city:shi2,
                register_area:qu2,
                card_address:this.registerchineseAddress,
                contact_address:"中国",
                detail_address:this.linkDetail,
                contact_address_pro:this.a,
                contact_address_city:shi,
                contact_address_area:qu,
                business_license:this.idimg_ming3
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/companyComfire');
                }
              })
          }
        }
        if(this.serial == "3"){
          if(this.name == ''){
            this.nameTip = "请输入联系人姓名"
          }else if(this.nation == ''){
            this.nationTip = "请输入国籍"
          }else if(this.companychineseName == ''){
            this.companychineseNameTip = "请输入公司中文全称"
          }else if(this.companyenglishName == ''){
            this.companyenglishNameTip = "请输入公司英文全称"
          }else if(this.companyCode == ''){
            this.companyCodeTip = "请输入统一社会信用码或营业执照注册号"
          }else if(this.mobile == ''){
            this.mobileTip = "请输入手机号码"
          }else if(this.fixPhone == ''){
            this.fixPhoneTip = "请输入公司座机号码"
          }else if(this.registerchineseAddress == ''){
            this.registerchineseAddressTip = "请输入公司注册地址中文"
          }else if(this.registerenglishAddress == ''){
            this.registerenglishAddressTip = "请输入公司注册地址英文"
          }else if(this.idimg3 == ''){
            this.licenseimgTip = "上传营业执照照片"
          }else if(this.idimg4 == ''){
            this.licenseenglishimgTip = "请上传营业执照中英文翻译件照片"
          }else{
            this.$http.post(this.GLOBAL.base_url+'/authentication/addbusiness',{
                type:this.serial,
                user_id:this.$cookie.getCookie('u_id'),
                referee:this.name,
                nationality:this.nation,
                sex:this.sequence,
                company_name:this.companychineseName,
                company_english:this.companyenglishName,
                mobile:this.mobile,
                license_num:this.companyCode,
                landline:this.fixPhone,
                card_address:this.registerchineseAddress,
                english_address:this.registerenglishAddress,
                detail_address:this.linkDetail,
                business_license:this.idimg_ming3,
                english_license:this.idimg_ming4,
                receive_name:this.receiveName,
                receive_mobile:this.receivePhone,
                receive_address:this.receiveAddress,
                receive_code:this.receivepostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/companyComfire');
                }
              })
          }
        }
        if(this.serial == "4"){
          if(this.name == ''){
            this.nameTip = "请输入联系人姓名"
          }else if(this.nation == ''){
            this.nationTip = "请输入国籍"
          }else if(this.companychineseName == ''){
            this.companychineseNameTip = "请输入公司中文全称"
          }else if(this.companyCode == ''){
            this.companyCodeTip = "请输入统一社会信用码或营业执照注册号"
          }else if(this.mobile == ''){
            this.mobileTip = "请输入手机号码"
          }else if(this.fixPhone == ''){
            this.fixPhoneTip = "请输入公司座机号码"
          }else if(this.registerchineseAddress == ''){
            this.registerchineseAddressTip = "请输入公司注册地址中文"
          }else if(this.idimg3 == ''){
            this.licenseimgTip = "上传营业执照照片"
          }else{
            this.$http.post(this.GLOBAL.base_url+'/authentication/addbusiness',{
                type:this.serial,
                user_id:this.$cookie.getCookie('u_id'),
                referee:this.name,
                nationality:this.nation,
                sex:this.sequence,
                company_name:this.companychineseName,
                mobile:this.mobile,
                license_num:this.companyCode,
                landline:this.fixPhone,
                card_address:this.registerchineseAddress,
                detail_address:this.linkDetail,
                business_license:this.idimg_ming3,
                receive_name:this.receiveName,
                receive_mobile:this.receivePhone,
                receive_address:this.receiveAddress,
                receive_code:this.receivepostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/companyComfire');
                }
              })
          }
        }
        if(this.serial == "5"){
          if(this.name == ''){
            this.nameTip = "请输入联系人姓名"
          }else if(this.nation == ''){
            this.nationTip = "请输入国籍"
          }else if(this.companychineseName == ''){
            this.companychineseNameTip = "请输入公司中文全称"
          }else if(this.companyenglishName == ''){
            this.companyenglishNameTip = "请输入公司英文全称"
          }else if(this.companyCode == ''){
            this.companyCodeTip = "请输入统一社会信用码或营业执照注册号"
          }else if(this.mobile == ''){
            this.mobileTip = "请输入手机号码"
          }else if(this.fixPhone == ''){
            this.fixPhoneTip = "请输入公司座机号码"
          }else if(this.registerchineseAddress == ''){
            this.registerchineseAddressTip = "请输入公司注册地址中文"
          }else if(this.registerenglishAddress == ''){
            this.registerenglishAddressTip = "请输入公司注册地址英文"
          }else if(this.idimg3 == ''){
            this.licenseimgTip = "上传营业执照照片"
          }else if(this.idimg4 == ''){
            this.licenseenglishimgTip = "请上传营业执照中英文翻译件照片"
          }else{
            this.$http.post(this.GLOBAL.base_url+'/authentication/addbusiness',{
                type:this.serial,
                user_id:this.$cookie.getCookie('u_id'),
                referee:this.name,
                nationality:this.nation,
                sex:this.sequence,
                company_name:this.companychineseName,
                company_english:this.companyenglishName,
                mobile:this.mobile,
                license_num:this.companyCode,
                landline:this.fixPhone,
                card_address:this.registerchineseAddress,
                english_address:this.registerenglishAddress,
                detail_address:this.linkDetail,
                business_license:this.idimg_ming3,
                english_license:this.idimg_ming4,
                receive_name:this.receiveName,
                receive_mobile:this.receivePhone,
                receive_address:this.receiveAddress,
                receive_code:this.receivepostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/companyComfire');
                }
              })
          }
        }
      },
      getData(){
        this.$http.get(this.GLOBAL.base_url+'/authentication/editbusiness',{params:{
          id:this.$route.query.id
        }}).then(res=>{
          if(res.data.code=="1"){
            this.serial = String(res.data.data.type);
            this.nation = res.data.data.nationality;
            this.sequence = String(res.data.data.sex);
            this.mobile=res.data.data.mobile;
            if(this.serial == "1"){
              this.companyType1=true;
              this.companyType2=true;
              this.companyType3=false;
              this.companyType4=false;
              this.companyType5=false;
              this.companyType6=false;
              this.representative = res.data.data.referee;
              this.registerpostCode = res.data.data.zip_code;
              this.companychineseName = res.data.data.company_name;
              this.sheng=res.data.data.contact_address_pro;
              this.a = res.data.data.contact_address_pro;
              this.shi=res.data.data.contact_address_city;
              this.qu=res.data.data.contact_address_area;
              this.linkDetail = res.data.data.detail_address;
              this.idnum=res.data.data.idcard_num;
              this.idAddress = res.data.data.card_address;
              this.idimg_ming1 = res.data.data.pic;
              this.idimg_ming2 = res.data.data.pic_reverse;
              this.idimg1 = 'http://51guolao.yiqibnb.com'+res.data.data.pic;
              this.idimg2 = 'http://51guolao.yiqibnb.com'+res.data.data.pic_reverse;
              this.idimg_ming3 = res.data.data.business_license;
              this.idimg3 = 'http://51guolao.yiqibnb.com'+res.data.data.business_license;
            }else if(this.serial == "2"){
              this.companyType1=false;
              this.companyType2=true;
              this.companyType3=true;
              this.companyType4=false;
              this.companyType5=false;
              this.companyType6=true;
              this.name=res.data.data.referee;
              this.companychineseName=res.data.data.company_name;
              this.companyCode=res.data.data.license_num;
              this.fixPhone=res.data.data.landline;
              this.registerpostCode=res.data.data.zip_code;
              this.rega=res.data.data.register_pro;
              this.regsheng=res.data.data.register_pro;
              this.regshi=res.data.data.register_city;
              this.regqu=res.data.data.register_area;
              this.registerchineseAddress=res.data.data.card_address;
              this.linkDetail=res.data.data.detail_address;
              this.sheng=res.data.data.contact_address_pro;
              this.a=res.data.data.contact_address_pro;
              this.shi=res.data.data.contact_address_city;
              this.qu=res.data.data.contact_address_area;
              this.idimg_ming3=res.data.data.business_license;
              this.idimg3='http://51guolao.yiqibnb.com'+res.data.data.business_license;
            }else if(this.serial == "3"){
              this.companyType1=false;
              this.companyType2=false;
              this.companyType3=true;
              this.companyType4=true;
              this.companyType5=true;
              this.companyType6=false;
              this.name=res.data.data.referee;
              this.companychineseName=res.data.data.company_name;
              this.companyenglishName=res.data.data.company_english;
              this.companyCode=res.data.data.license_num;
              this.fixPhone=res.data.data.landline;
              this.registerchineseAddress=res.data.data.card_address;
              this.registerenglishAddress=res.data.data.english_address;
              this.linkDetail=res.data.data.detail_address;
              this.idimg_ming3=res.data.data.business_license;
              this.idimg3='http://51guolao.yiqibnb.com'+res.data.data.business_license;
              this.idimg_ming4=res.data.data.english_license;
              this.idimg4='http://51guolao.yiqibnb.com'+res.data.data.english_license;
              this.receiveName=res.data.data.receive_name;
              this.receivePhone=res.data.data.receive_mobile;
              this.receiveAddress=res.data.data.receive_address;
              this.receivepostCode=res.data.data.receive_code;
            }else if(this.serial == "4"){
              this.companyType1=false;
              this.companyType2=false;
              this.companyType3=true;
              this.companyType4=false;
              this.companyType5=true;
              this.companyType6=false;
              this.name=res.data.data.referee;
              this.companychineseName=res.data.data.company_name;
              this.companyCode=res.data.data.license_num;
              this.fixPhone=res.data.data.landline;
              this.registerchineseAddress=res.data.data.card_address;
              this.linkDetail=res.data.data.detail_address;
              this.idimg_ming3=res.data.data.business_license;
               this.idimg3='http://51guolao.yiqibnb.com'+res.data.data.business_license;
              this.receiveName=res.data.data.receive_name;
              this.receivePhone=res.data.data.receive_mobile;
              this.receiveAddress=res.data.data.receive_address;
              this.receivepostCode=res.data.data.receive_code;
            }else if(this.serial == "5"){
              this.companyType1=false;
              this.companyType2=false;
              this.companyType3=true;
              this.companyType4=true;
              this.companyType5=true;
              this.companyType6=false;
              this.name=res.data.data.referee;
              this.companychineseName=res.data.data.company_name;
              this.companyenglishName=res.data.data.company_english;
              this.companyCode=res.data.data.license_num;
              this.fixPhone=res.data.data.landline;
              this.registerchineseAddress=res.data.data.card_address;
              this.registerenglishAddress=res.data.data.english_address;
              this.linkDetail=res.data.data.detail_address;
              this.idimg_ming3=res.data.data.business_license;
              this.idimg3='http://51guolao.yiqibnb.com'+res.data.data.business_license;
              this.idimg_ming4=res.data.data.english_license;
              this.idimg4='http://51guolao.yiqibnb.com'+res.data.data.english_license;
              this.receiveName=res.data.data.receive_name;
              this.receivePhone=res.data.data.receive_mobile;
              this.receiveAddress=res.data.data.receive_address;
              this.receivepostCode=res.data.data.receive_code;
            }
            if(res.data.data.status == 1 || res.data.data.status == 3){
              this.status1 = false;
              this.status2 = true;
            }else{
              this.status1 = false;
              this.status2 = false;
            }
          }
        })
      },
      companyedit(){
        // 判断当联系地址选择省的时候 市和区是否默认的第一个
        if(this.b == ''){
          var shi = this.shi;
        }else{
           var shi = this.b;
        }
        if(this.c == ''){
          var qu = this.qu;
        }else{
           var qu = this.c;
        }
        
       // 判断当注册地址选择省的时候 市和区是否默认的第一个
        if(this.regb == ''){
          var shi2 = this.regshi;
        }else{
           var shi2 = this.regb;
        }
        if(this.regc == ''){
          var qu2 = this.regqu;
        }else{
           var qu2 = this.regc;
        }
        if(this.serial == "1"){
          if(this.representative == ''){
            this.representativeTip = "请输入法定代表人姓名"
          }else if(this.nation == ''){
            this.nationTip = "请输入国籍"
          }else if(this.companychineseName == ''){
            this.companychineseNameTip = "请输入公司中文全称"
          }else if(this.mobile==''){
              this.mobileTip = "请输入手机号码"
          }else if(this.a == ''){
            this.linkDetailTip = "请输入联系地址城市"
          }else if(this.linkDetail == ''){
            this.linkDetailTip = "请输入详细联系地址"
          }else if(this.idnum == ''){
            this.idnumTip = "请输入身份证号码"
          }else if(this.idimg1 == ''){
            this.idimgTip = "请上传法人身份证照片正面"
          }else if(this.idimg2 == ''){
            this.idimgTip = "请上传法人身份证照片反面"
          }else if(this.idimg3 == ''){
            this.licenseimgTip = "请上传营业执照照片"
          }else{
            this.$http.post(this.GLOBAL.base_url+'/authentication/updatebusiness',{
                id:this.$route.query.id,
                type:this.serial,
                referee:this.representative,
                nationality:this.nation,
                sex:this.sequence,
                idcard_num:this.idnum,
                mobile:this.mobile,
                company_name:this.companychineseName,
                zip_code:this.registerpostCode,
                card_address:this.idAddress,
                contact_address:"中国",
                contact_address_pro:this.a,
                contact_address_city:shi,
                contact_address_area:qu,
                detail_address:this.linkDetail,
                pic:this.idimg_ming1,
                pic_reverse:this.idimg_ming2,
                business_license:this.idimg_ming3
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/companyComfire');
                }
              })
          }
        }
        if(this.serial=="2"){
          if(this.name == ''){
            this.nameTip = "请输入联系人姓名"
          }else if(this.nation == ''){
            this.nationTip = "请输入国籍"
          }else if(this.companychineseName == ''){
            this.companychineseNameTip = "请输入公司中文全称"
          }else if(this.companyCode == ''){
            this.companyCodeTip = "请输入统一社会信用码或营业执照注册号"
          }else if(this.mobile == ''){
            this.mobileTip = "请输入手机号码"
          }else if(this.fixPhone == ''){
            this.fixPhoneTip = "请输入公司座机号码"
          }else if(this.rega == ''){
            this.registeraddressTip = "请输入公司注册地址城市"
          }else if(this.registerchineseAddress == ''){
            this.registerchineseAddressTip = "请输入公司注册地址中文"
          }else if(this.a == ''){
            this.linkDetailTip = "请输入联系地址城市"
          }else if(this.linkDetail == ''){
            this.linkDetailTip = "请输入详细联系地址"
          }else if(this.idimg3 == ''){
            this.licenseimgTip = "上传营业执照照片"
          }else{
            this.$http.post(this.GLOBAL.base_url+'/authentication/updatebusiness',{
                type:this.serial,
                id:this.$route.query.id,
                referee:this.name,
                nationality:this.nation,
                sex:this.sequence,
                company_name:this.companychineseName,
                mobile:this.mobile,
                license_num:this.companyCode,
                landline:this.fixPhone,
                zip_code:this.registerpostCode,
                register_pro:this.rega,
                register_city:shi2,
                register_area:qu2,
                card_address:this.registerchineseAddress,
                contact_address:"中国",
                detail_address:this.linkDetail,
                contact_address_pro:this.a,
                contact_address_city:shi,
                contact_address_area:qu,
                business_license:this.idimg_ming3
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/companyComfire');
                }
              })
          }
        }
        if(this.serial == "3"){
          if(this.name == ''){
            this.nameTip = "请输入联系人姓名"
          }else if(this.nation == ''){
            this.nationTip = "请输入国籍"
          }else if(this.companychineseName == ''){
            this.companychineseNameTip = "请输入公司中文全称"
          }else if(this.companyenglishName == ''){
            this.companyenglishNameTip = "请输入公司英文全称"
          }else if(this.companyCode == ''){
            this.companyCodeTip = "请输入统一社会信用码或营业执照注册号"
          }else if(this.mobile == ''){
            this.mobileTip = "请输入手机号码"
          }else if(this.fixPhone == ''){
            this.fixPhoneTip = "请输入公司座机号码"
          }else if(this.registerchineseAddress == ''){
            this.registerchineseAddressTip = "请输入公司注册地址中文"
          }else if(this.registerenglishAddress == ''){
            this.registerenglishAddressTip = "请输入公司注册地址英文"
          }else if(this.idimg3 == ''){
            this.licenseimgTip = "上传营业执照照片"
          }else if(this.idimg4 == ''){
            this.licenseenglishimgTip = "请上传营业执照中英文翻译件照片"
          }else{
            this.$http.post(this.GLOBAL.base_url+'/authentication/updatebusiness',{
                id:this.$route.query.id,
                type:this.serial,
                referee:this.name,
                nationality:this.nation,
                sex:this.sequence,
                company_name:this.companychineseName,
                company_english:this.companyenglishName,
                mobile:this.mobile,
                license_num:this.companyCode,
                landline:this.fixPhone,
                card_address:this.registerchineseAddress,
                english_address:this.registerenglishAddress,
                detail_address:this.linkDetail,
                business_license:this.idimg_ming3,
                english_license:this.idimg_ming4,
                receive_name:this.receiveName,
                receive_mobile:this.receivePhone,
                receive_address:this.receiveAddress,
                receive_code:this.receivepostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/companyComfire');
                }
              })
          }
        }
        if(this.serial == "4"){
          if(this.name == ''){
            this.nameTip = "请输入联系人姓名"
          }else if(this.nation == ''){
            this.nationTip = "请输入国籍"
          }else if(this.companychineseName == ''){
            this.companychineseNameTip = "请输入公司中文全称"
          }else if(this.companyCode == ''){
            this.companyCodeTip = "请输入统一社会信用码或营业执照注册号"
          }else if(this.mobile == ''){
            this.mobileTip = "请输入手机号码"
          }else if(this.fixPhone == ''){
            this.fixPhoneTip = "请输入公司座机号码"
          }else if(this.registerchineseAddress == ''){
            this.registerchineseAddressTip = "请输入公司注册地址中文"
          }else if(this.idimg3 == ''){
            this.licenseimgTip = "上传营业执照照片"
          }else{
            this.$http.post(this.GLOBAL.base_url+'/authentication/updatebusiness',{
                type:this.serial,
                id:this.$route.query.id,
                referee:this.name,
                nationality:this.nation,
                sex:this.sequence,
                company_name:this.companychineseName,
                mobile:this.mobile,
                license_num:this.companyCode,
                landline:this.fixPhone,
                card_address:this.registerchineseAddress,
                detail_address:this.linkDetail,
                business_license:this.idimg_ming3,
                receive_name:this.receiveName,
                receive_mobile:this.receivePhone,
                receive_address:this.receiveAddress,
                receive_code:this.receivepostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/companyComfire');
                }
              })
          }
        }
        if(this.serial == "5"){
          if(this.name == ''){
            this.nameTip = "请输入联系人姓名"
          }else if(this.nation == ''){
            this.nationTip = "请输入国籍"
          }else if(this.companychineseName == ''){
            this.companychineseNameTip = "请输入公司中文全称"
          }else if(this.companyenglishName == ''){
            this.companyenglishNameTip = "请输入公司英文全称"
          }else if(this.companyCode == ''){
            this.companyCodeTip = "请输入统一社会信用码或营业执照注册号"
          }else if(this.mobile == ''){
            this.mobileTip = "请输入手机号码"
          }else if(this.fixPhone == ''){
            this.fixPhoneTip = "请输入公司座机号码"
          }else if(this.registerchineseAddress == ''){
            this.registerchineseAddressTip = "请输入公司注册地址中文"
          }else if(this.registerenglishAddress == ''){
            this.registerenglishAddressTip = "请输入公司注册地址英文"
          }else if(this.idimg3 == ''){
            this.licenseimgTip = "上传营业执照照片"
          }else if(this.idimg4 == ''){
            this.licenseenglishimgTip = "请上传营业执照中英文翻译件照片"
          }else{
            this.$http.post(this.GLOBAL.base_url+'/authentication/updatebusiness',{
                type:this.serial,
                id:this.$route.query.id,
                referee:this.name,
                nationality:this.nation,
                sex:this.sequence,
                company_name:this.companychineseName,
                company_english:this.companyenglishName,
                mobile:this.mobile,
                license_num:this.companyCode,
                landline:this.fixPhone,
                card_address:this.registerchineseAddress,
                english_address:this.registerenglishAddress,
                detail_address:this.linkDetail,
                business_license:this.idimg_ming3,
                english_license:this.idimg_ming4,
                receive_name:this.receiveName,
                receive_mobile:this.receivePhone,
                receive_address:this.receiveAddress,
                receive_code:this.receivepostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/companyComfire');
                }
              })
          }
        }
      }
  },
  // 获取三级联动的数据
  created:function(){
      this.getCityData();
      this.getregCityData();
    },
    mounted:function(){
      if(this.$route.query.id){
        this.getData();
      }
    },
  components: {
  }
}

</script>

<style scoped>
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
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    font-size: 18px;
    color: #333333;
    margin-right: 16px;
  }
  .company-msg{
    height: 32px;
    color: red;
    font-size: 12px;
    line-height: 32px;
    margin-left: 165px;
  }
  .company-msg2{
    height: 32px;
    color: red;
    font-size: 12px;
    line-height: 32px;
    margin-left: 305px;
  }
  .companyComfire-box-form-wrap>div>input{
    width: 285px;
    height: 40px;
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    font-size: 14px;
    padding-left: 15px;
    outline: none;
    border-radius: 4px;
    border: solid 1px #d6d6d6;
  }
  .companyComfire-box-form-wrap>div>span{
    vertical-align: middle;
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    font-size: 18px;
    color: #333333;
  }
  .companyComfire-box-form-wrap>div>img{
    vertical-align: middle;
  }
  #companyComfire-box-form-wrap-companyCode>input{
    width: 240px;
  }
  #companyComfire-box-form-wrap-companyCode>span:nth-of-type(2){
    font-size: 12px;
    color: red;
    vertical-align: middle;
    font-family: "PingFangSC-Regular","Microsoft YaHei";
  }
  .companyComfire-box-form-type-select{
    vertical-align: middle;
    width: 300px;
    height: 40px;
  }
  .companyComfire-box-form-wrap-registeraddress{
    margin-bottom: 32px;
  }
  .companyComfire-box-form-wrap-representative>span,.companyComfire-box-form-wrap-linkname>span{
    margin: 0 16px 0 14px;
  }
  .companyComfire-box-form-wrap-nation>span{
    margin: 0 16px 0 68px;
  }
  .companyComfire-box-form-wrap-postcode>span{
    margin: 0 16px 0 20px;
  }
  .companyComfire-box-form-wrap-sex,.companyComfire-box-form-wrap-linkaddress,
  .companyComfire-box-form-wrap-postcode,.companyComfire-box-form-wrap-idaddress,
  .companyComfire-box-form-wrap-receive{
    margin-bottom: 32px;
  }
  .companyComfire-box-form-wrap-sex>span{
    margin: 0 16px 0 68px;
  }
  .companyComfire-box-form-wrap-mobile>span{
    margin: 0 16px 0 32px;
  }
  .companyComfire-box-form-wrap-linkaddress>span,.companyComfire-box-form-wrap-registeraddress>span,.companyComfire-box-form-wrap-fixPhone>span{
    margin: 0 16px 0 32px;
  }
  .companyComfire-box-form-wrap-receive>span{
    margin-right: 18px;
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
    margin: 0 16px 0 38px;
  }
  .companyComfire-box-form-wrap-uploadimg{
    margin-top: 40px;
  }
  .companyComfire-box-form-wrap-uploadimg>span{
    margin-left: 14px;
  }
  .companyComfire-box-form-wrap-uploadimg-div{
    height: 162px;
    margin: 20px 0 0 34px;
  }
  .companyComfire-box-form-wrap-uploadimg-div>div{
    float: left;
    width: 160px;
    height: 160px;
  }
  .companyComfire-box-form-wrap-uploadimg-div>div:nth-of-type(1){
    margin-right: 86px;
  }
  .companyComfire-box-form-wrap-uploadsellimg>span{
    margin-left: 14px;
  }
  .idimg{
    width: 160px;
    height: 160px;
  }
  .companyComfire-box-form-wrap-uploadsellimgdiv{
    margin: 20px 0 0 34px;
    width: 160px;
    height: 160px;
  }
  .companyComfire-box-form-wrap-submit{
    margin: 64px 0 0 86px;
  }
  .companyComfire-box-form-wrap-submit>img{
    cursor: pointer;
  }
  .companyComfire-box-form-wrap-submit>img:nth-of-type(1){
    margin-right: 36px;
  }
</style>
