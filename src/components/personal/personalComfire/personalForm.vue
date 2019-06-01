<template>
  <div class="personalComfire-container">
    <div class="personalComfire-box-form">
      <div>

      </div>
      <div id="personalComfire-box-form-type">
          <img src="/static/images/star.png" alt="">
          <span>个人类型</span>
          <el-select @change="choseType(value)" v-model="value" class="personalComfire-box-form-type-select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>

      <div class="personalComfire-box-form-wrap">
        <div class="personalComfire-box-form-name">
          <img src="/static/images/star.png" alt="">
          <span>中文姓名</span>
          <input v-model="chineseName" type="text">
          <div class="form-msg">{{chineseNameTip}}</div>
        </div>
        
        <div class="personalComfire-box-form-name" v-show="type3">
          <img src="/static/images/star.png" alt="">
          <span>英文姓名</span>
          <input v-model="englishName" type="text">
          <div class="form-msg">{{englishNameTip}}</div>
        </div>
        
        <div class="personalComfire-box-form-nationality"> 
          <img src="/static/images/star.png" alt="">
          <span>国籍</span>
          <input v-model="nation" type="text" placeholder="中国">
          <div class="form-msg">{{nationTip}}</div>
        </div>
        
        <div class="personalComfire-box-form-sex">
          <img src="/static/images/star.png" alt="">
          <span>性别</span>
          <el-select v-model="sequence" class="personalComfire-box-form-type-select">
            <el-option
              v-for="k in sexy"
              :key="k.sequence"
              :label="k.sex"
              :value="k.sequence">
            </el-option>
          </el-select>
        </div>
        <div class="personalComfire-box-form-mobile">
          <img src="/static/images/star.png" alt="">
          <span>手机号码</span>
          <input maxlength="11" v-model="mobile" type="text">
          <div class="form-msg">{{mobileTip}}</div>
        </div>
        
        <div class="link_address" v-show="type2"><input v-model="linkaddress" type="text" placeholder="联系地址"></div>

        <div class="personalComfire-box-form-linkaddress" v-show="type4">
          <img src="/static/images/star.png" alt="">
          <span>联系地址</span>
          <el-select v-model="sheng" @change="choseProvince" placeholder="省级地区" class="personalComfire-box-form-type-selectaddress">
            <el-option
              v-for="item in province"
              :key="item.id"
              :label="item.value"
              :value="item.id">
            </el-option>
          </el-select>
        </div>
        <div class="personalComfire-box-form-chose" v-show="type4">
          <el-select v-model="shi" @change="choseCity" placeholder="市级地区" class="personalComfire-box-form-type-selectaddress">
            <el-option
              v-for="item in shi1"
              :key="item.id"
              :label="item.value"
              :value="item.id">
            </el-option>
          </el-select>
        </div>
        <div class="personalComfire-box-form-chosequ" v-show="type4">
          <el-select v-model="qu" @change="choseBlock" placeholder="区级地区" class="personalComfire-box-form-type-selectaddress">
            <el-option
              v-for="item in qu1"
              :key="item.id"
              :label="item.value"
              :value="item.id">
            </el-option>
          </el-select>
        </div>
        <div class="personalComfire-box-form-type-input" v-show="type4">
          <input v-model="detailAddress" type="text" placeholder="请输入详细地址">
          <div class="form-msg">{{detailAddressTip}}</div>
        </div>
        
        <div class="personalComfire-box-form-type-number" v-show="type1">
          <img src="/static/images/star.png" alt="">
          <span>身份证号码</span>
          <input maxlength="18" v-model="idNum" type="text">
          <div class="form-msg">{{idNumTip}}</div>
        </div>
        
        <div id="personalComfire-box-form-type-idAddress" v-show="type1">
          <span>身份证地址</span>
          <input v-model="idAddress" type="text">
        </div>
        <div class="personalComfire-box-form-type-idimg" v-show="type1"> 
          <img src="/static/images/star.png" alt="">
          <span>上传身份证照片</span>
          <div class="personalComfire-box-form-type-idimg-div">
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
          <div class="form-msg">{{idimgTip}}</div>
        </div>
        
        <div class="personalComfire-box-form-type-passport" v-show="type2">
          <img src="/static/images/star.png" alt="">
          <span>护照号码</span>
          <input v-model="passportNum" type="text">
          <div class="form-msg">{{passportNumTip}}</div>
        </div>
        
        <div class="personalComfire-box-form-type-passport-address" v-show="type2">
          <img src="/static/images/star.png" alt="">
          <span>护照地址中文</span>
          <input v-model="passportchinaAddress" type="text">
          <div class="form-msg">{{passportchinaAddressTip}}</div>
        </div>
        
        <div class="personalComfire-box-form-type-passport-address" v-show="type3">
          <img src="/static/images/star.png" alt="">
          <span>护照地址英文</span>
          <input v-model="passportenglishAddress" type="text">
          <div class="form-msg">{{passportenglishAddressTip}}</div>
        </div>
        
        <div class="personalComfire-box-form-type-receive" v-show="type2">
          <span>国内接收人姓名</span>
          <input v-model="receviewName" type="text">
        </div>
        
        <div class="personalComfire-box-form-type-receive" v-show="type2">
          <span>国内接收人电话</span>
          <input v-model="receviewPhone" type="text">
        </div>
        <div class="personalComfire-box-form-type-receive" v-show="type2">
          <span>国内接收人地址</span>
          <input v-model="receviewAddress" type="text">
        </div>
        <div class="personalComfire-box-form-type-receive" v-show="type2">
          <span>国内接收人邮编</span>
          <input v-model="receviewpostCode" type="text">
        </div>
        
        <div class="personalComfire-box-form-type-idimg" v-show="type2">
          <img src="/static/images/star.png" alt="">
          <span>上传护照图片</span>
          <div class="personalComfire-box-form-type-idimg-div">
            <div>
                <el-upload
                  accept="image/*"
                  :http-request="uploadid3"
                  :show-file-list="false"
                  action="">
                  <img class="idimg" :src="idimg3?idimg3:'/static/images/zheng.png'" alt="">
                </el-upload>
              </div>
            <div>
                <el-upload
                  accept="image/*"
                  :http-request="uploadid4"
                  :show-file-list="false"
                  action="">
                  <img class="idimg" :src="idimg4?idimg4:'/static/images/fan.png'" alt="">
              </el-upload>
              </div>
          </div>
          <div class="form-msg">{{passportimgTip}}</div>
        </div>
        
        <div class="personalComfire-box-form-type-idimg" v-show="type2">
          <img src="/static/images/star.png" alt="">
          <span>上传护照英文翻译图片</span>
          <div class="personalComfire-box-form-type-idimg-div">
            <div>
                <el-upload
                  accept="image/*"
                  :http-request="uploadid5"
                  :show-file-list="false"
                  action="">
                  <img class="idimg" :src="idimg5?idimg5:'/static/images/please.png'" alt="">
                </el-upload>
              </div>
          </div>
          <div class="form-msg">{{passportenglishimgTip}}</div>
        </div>
        
        <div class="opeartor" v-show="status1">
          <img @click="send" class="personalComfire-box-form-type-submit-img" src="/static/images/submit.png" alt="">
          <img @click="identquit1" src="/static/images/quit.png" alt="">
        </div>
        <div class="opeartor" v-show="status2">
          <img @click="edit" class="personalComfire-box-form-type-submit-img" src="/static/images/edit.png" alt="">
          <img @click="identquit2" src="/static/images/quit.png" alt="">
        </div>
      </div>
    </div>
    <div style="clear:both;"></div>
    
  </div>
  
</template>

<script>
export default {
  name: 'personalForm',
   data() {
      return {
        options: [{
          value: '0',
          label: '国内个人'
        }, {
          value: '1',
          label: '港澳个人'
        }, {
          value: '2',
          label: '台湾个人'
        }, {
          value: '3',
          label: '国外个人'
        }],
        sexy:[{
          sequence: '1',
          sex: '男'
        },
        {
          sequence: '2',
          sex: '女'
        }],
        value: '0',
        sequence: '1',
        // 三级联动
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
        // 不同表单数据不同显示隐藏
        type1:true,
        type2:false,
        type3:false,
        type4:true,
        // 上传图片加域名
        idimg1:'',
        idimg2:'',
        idimg3:'',
        idimg4:'',
        idimg5:'',
        // 上传图片不加域名
        idimg_ming1:'',
        idimg_ming2:'',
        idimg_ming3:'',
        idimg_ming4:'',
        idimg_ming5:'',
        // 表单数据
        chineseName:'',
        chineseNameTip:'',
        englishName:'',
        englishNameTip:'',
        nation:'',
        nationTip:'',
        mobile:'',
        mobileTip:'',
        detailAddress:'',
        detailAddressTip:'',
        idNum:'',
        idNumTip:'',
        idAddress:'',
        linkaddress:'',
        idimgTip:'',
        passportNum:'',
        passportNumTip:'',
        passportchinaAddress:'',
        passportchinaAddressTip:'',
        passportenglishAddress:'',
        passportenglishAddressTip:'',
        receviewName:'',
        receviewPhone:'',
        receviewAddress:'',
        receviewpostCode:'',
        passportimgTip:'',
        passportenglishimgTip:'',
        // 根据状态显示不同的操作
        status1:true,
        status2:false
      }
    },
  components: {
  },
  watch:{
    'chineseName'(newValue){
                if(newValue == ""){
                   return this.chineseNameTip='请输入中文姓名';
                }
                this.chineseNameTip= ""
            },
      'nation'(newValue){
          if(newValue == ""){
              return this.nationTip='请输入国籍';
          }
          this.nationTip= ""
      },
      'a'(newValue){
          if(newValue == ""){
              return this.detailAddressTip='请输入联系地址城市';
          }
          this.detailAddressTip= ""
      },
      'detailAddress'(newValue){
          if(newValue == ""){
              return this.detailAddressTip='请输入详细地址';
          }
          this.detailAddressTip= ""
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
        "idNum"(newValue){
            let reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if(newValue ==''){
                return this.idNumTip='请输入身份证号码';
            }
            if(!reg.test(newValue)){
                return this.idNumTip='身份证号码格式不正确';
            }
            return this.idNumTip='';
        },
      'englishName'(newValue){
          if(newValue == ""){
              return this.englishNameTip='请输入英文姓名';
          }
          this.englishNameTip= ""
      },
      'passportNum'(newValue){
            if(newValue == ""){
                return this.passportNumTip='请输入护照号码';
            }
            this.passportNumTip= ""
        },
        'passportchinaAddress'(newValue){
            if(newValue == ""){
                return this.passportchinaAddressTip='请输入护照地址中文';
            }
            this.passportchinaAddressTip= ""
        },
        'passportenglishAddress'(newValue){
            if(newValue == ""){
                return this.passportenglishAddressTip='请输入护照地址英文';
            }
            this.passportenglishAddressTip= ""
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
                return this.passportimgTip='请上传护照正面照片';
            }
            this.passportimgTip= ""
        },
        'idimg4'(newValue){
            if(newValue == ""){
                return this.passportimgTip='请上传护照反面照片';
            }
            this.passportimgTip= ""
        },
        'idimg5'(newValue){
            if(newValue == ""){
                return this.passportenglishimgTip='请上传护照英文翻译照片';
            }
            this.passportenglishimgTip= ""
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
    identquit1(){
      this.$router.push('/personal/personalComfire')
    },
    identquit2(){
      this.$router.push('/personal/personalComfire')
    },
    // 加载china地点数据，三级
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
      choseType(){
        if(this.value == "0"){
          this.type1 = true;
          this.type2 = false;
          this.type3 = false;
          this.type4 = true;
        }else if(this.value == "1"){
          this.type1 = false;
          this.type2 = true;
          this.type3 = true;
          this.type4 = false;
        }else if(this.value == "2"){
          this.type1 = false;
          this.type2 = true;
          this.type3 = false;
          this.type4 = false;
        }else if(this.value == "3"){
          this.type1 = false;
          this.type2 = true;
          this.type3 = true;
          this.type4 = false;
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
      uploadid5(img){
        let formData=new FormData();
            formData.append('pic',img.file);
            this.$http.post(this.GLOBAL.base_url+'/authentication/upload_card',formData).then(res=>{
              if(res.data.code == "1"){
                this.idimg_ming5 = res.data.data;
                this.idimg5 = 'http://51guolao.yiqibnb.com'+ res.data.data;
              }
            });
      },
      send(){
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
        if(this.value == "0"){
            if(this.chineseName == ''){
              this.chineseNameTip = "请输入中文姓名"
            }else if(this.nation==''){
              this.nationTip = "请输入国籍"
            }else if(this.mobile==''){
              this.mobileTip = "请输入手机号码"
            }else if(this.a==''){
              this.detailAddressTip = "请选择联系地址城市"
            }else if(this.detailAddress ==''){
              this.detailAddressTip = "请输入详细联系地址"
            }else if(this.idNum==''){
              this.idNumTip = "请输入身份证号码"
            }else if(this.idimg1 == ''){
              this.idimgTip = "请上传身份证正面照片"
            }else if(this.idimg2 == ''){
              this.idimgTip = "请上传身份证反面照片"
            }else{
              this.$http.post(this.GLOBAL.base_url+'/authentication/addauth',{
                type:this.value,
                user_id:this.$cookie.getCookie('u_id'),
                chinese_name:this.chineseName,
                nationality:this.nation,
                sex:this.sequence,
                car_num:this.idNum,
                mobile:this.mobile,
                card_address:this.idAddress,
                contact_address:"中国",
                contact_address_pro:this.a,
                contact_address_city:shi,
                contact_address_area:qu,
                contact_detail:this.detailAddress,
                idcard_img:this.idimg_ming1,
                idcard_img_reverse:this.idimg_ming2
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/personalComfire');
                }
              })
            }
        }
        if(this.value == "1"){
            if(this.chineseName == ''){
              this.chineseNameTip = "请输入中文姓名"
            }else if(this.englishName == ''){
              this.englishNameTip = "请输入英文姓名"
            }else if(this.nation==''){
              this.nationTip = "请输入国籍"
            }else if(this.mobile==''){
              this.mobileTip = "请输入手机号码"
            }else if(this.passportNum==''){
              this.passportNumTip = "请输入护照号码"
            }else if(this.passportchinaAddress==''){
              this.passportchinaAddressTip = "请输入护照地址中文"
            }else if(this.passportenglishAddress==''){
              this.passportenglishAddressTip = "请输入护照地址英文"
            }else if(this.idimg3 == ''){
              this.passportimgTip = "请上传护照正面照片"
            }else if(this.idimg4 == ''){
              this.passportimgTip = "请上传护照反面照片"
            }else if(this.idimg5 == ''){
              this.passportenglishimgTip = "请上传护照英文翻译照片"
            }else{
              this.$http.post(this.GLOBAL.base_url+'/authentication/addauth',{
                type:this.value,
                user_id:this.$cookie.getCookie('u_id'),
                chinese_name:this.chineseName,
                english_name:this.englishName,
                nationality:this.nation,
                sex:this.sequence,
                car_num:this.passportNum,
                mobile:this.mobile,
                contact_address:this.linkaddress,
                idcard_address:this.passportchinaAddress,
                english_address:this.passportenglishAddress,
                idcard_img:this.idimg_ming3,
                idcard_img_reverse:this.idimg_ming4,
                english_img:this.idimg_ming5,
                resive_name:this.receviewName,
                resive_mobile:this.receviewPhone,
                resive_address:this.receviewAddress,
                resive_pccode:this.receviewpostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/personalComfire');
                }
              })
            }
        }
        if(this.value == "2"){
            if(this.chineseName == ''){
              this.chineseNameTip = "请输入中文姓名"
            }else if(this.nation==''){
              this.nationTip = "请输入国籍"
            }else if(this.mobile==''){
              this.mobileTip = "请输入手机号码"
            }else if(this.passportNum==''){
              this.passportNumTip = "请输入护照号码"
            }else if(this.passportchinaAddress==''){
              this.passportchinaAddressTip = "请输入护照地址中文"
            }else if(this.idimg3 == ''){
              this.passportimgTip = "请上传护照正面照片"
            }else if(this.idimg4 == ''){
              this.passportimgTip = "请上传护照反面照片"
            }else if(this.idimg5 == ''){
              this.passportenglishimgTip = "请上传护照英文翻译照片"
            }else{
              this.$http.post(this.GLOBAL.base_url+'/authentication/addauth',{
                type:this.value,
                user_id:this.$cookie.getCookie('u_id'),
                chinese_name:this.chineseName,
                nationality:this.nation,
                sex:this.sequence,
                car_num:this.passportNum,
                mobile:this.mobile,
                contact_address:this.linkaddress,
                idcard_address:this.passportchinaAddress,
                idcard_img:this.idimg_ming3,
                idcard_img_reverse:this.idimg_ming4,
                english_img:this.idimg_ming5,
                resive_name:this.receviewName,
                resive_mobile:this.receviewPhone,
                resive_address:this.receviewAddress,
                resive_pccode:this.receviewpostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/personalComfire');
                }
              })
            }
        }
        if(this.value == "3"){
            if(this.chineseName == ''){
              this.chineseNameTip = "请输入中文姓名"
            }else if(this.englishName == ''){
              this.englishNameTip = "请输入英文姓名"
            }else if(this.nation==''){
              this.nationTip = "请输入国籍"
            }else if(this.mobile==''){
              this.mobileTip = "请输入手机号码"
            }else if(this.passportNum==''){
              this.passportNumTip = "请输入护照号码"
            }else if(this.passportchinaAddress==''){
              this.passportchinaAddressTip = "请输入护照地址中文"
            }else if(this.passportenglishAddress==''){
              this.passportenglishAddressTip = "请输入护照地址英文"
            }else if(this.idimg3 == ''){
              this.passportimgTip = "请上传护照正面照片"
            }else if(this.idimg4 == ''){
              this.passportimgTip = "请上传护照反面照片"
            }else if(this.idimg5 == ''){
              this.passportenglishimgTip = "请上传护照英文翻译照片"
            }else{
              this.$http.post(this.GLOBAL.base_url+'/authentication/addauth',{
                type:this.value,
                user_id:this.$cookie.getCookie('u_id'),
                chinese_name:this.chineseName,
                english_name:this.englishName,
                nationality:this.nation,
                sex:this.sequence,
                car_num:this.passportNum,
                mobile:this.mobile,
                contact_address:this.linkaddress,
                idcard_address:this.passportchinaAddress,
                english_address:this.passportenglishAddress,
                idcard_img:this.idimg_ming3,
                idcard_img_reverse:this.idimg_ming4,
                english_img:this.idimg_ming5,
                resive_name:this.receviewName,
                resive_mobile:this.receviewPhone,
                resive_address:this.receviewAddress,
                resive_pccode:this.receviewpostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/personalComfire');
                }
              })
            }
        }
      },
      getData(){
        this.$http.get(this.GLOBAL.base_url+'/authentication/editauth',{params:{
          id:this.$route.query.id
        }}).then(res=>{
          if(res.data.code == "1"){
            this.value = String(res.data.data.type);
            this.chineseName = res.data.data.chinese_name;
            this.englishName = res.data.data.english_name;
            this.nation = res.data.data.nationality;
            this.sequence = String(res.data.data.sex);
            this.mobile=res.data.data.mobile
            if(this.value == "0"){
              this.type1 = true;
              this.type2 = false;
              this.type3 = false;
              this.type4 = true;
              this.idNum=res.data.data.car_num;
              this.idAddress=res.data.data.card_address;
              this.sheng=res.data.data.contact_address_pro;
              this.a = res.data.data.contact_address_pro;
              this.shi=res.data.data.contact_address_city;
              this.qu=res.data.data.contact_address_area;
              this.detailAddress=res.data.data.contact_detail;
              this.idimg_ming1 = res.data.data.idcard_img;
              this.idimg_ming2 = res.data.data.idcard_img_reverse;
              this.idimg1= 'http://51guolao.yiqibnb.com'+ res.data.data.idcard_img;
              this.idimg2= 'http://51guolao.yiqibnb.com'+ res.data.data.idcard_img_reverse;
            }else if(this.value == "1"){
              this.type1 = false;
              this.type2 = true;
              this.type3 = true;
              this.type4 = false;
              this.passportNum= res.data.data.car_num;
              this.linkaddress= res.data.data.contact_address;
              this.passportchinaAddress= res.data.data.idcard_address;
              this.passportenglishAddress= res.data.data.english_address;
              this.idimg_ming3 = res.data.data.idcard_img;
              this.idimg_ming4 = res.data.data.idcard_img_reverse;
              this.idimg_ming5 = res.data.data.english_img;
              this.idimg3= 'http://51guolao.yiqibnb.com'+ res.data.data.idcard_img;
              this.idimg4= 'http://51guolao.yiqibnb.com'+ res.data.data.idcard_img_reverse;
              this.idimg5= 'http://51guolao.yiqibnb.com'+ res.data.data.english_img;
              this.receviewName= res.data.data.resive_name;
              this.receviewPhone= res.data.data.resive_mobile;
              this.receviewAddress= res.data.data.resive_address;
              this.receviewpostCode= res.data.data.resive_pccode;
            }else if(this.value == "2"){
              this.type1 = false;
              this.type2 = true;
              this.type3 = false;
              this.type4 = false;
              this.passportNum= res.data.data.car_num;
              this.linkaddress= res.data.data.contact_address;
              this.passportchinaAddress= res.data.data.idcard_address;
              this.idimg_ming3 = res.data.data.idcard_img;
              this.idimg_ming4 = res.data.data.idcard_img_reverse;
              this.idimg_ming5 = res.data.data.english_img;
              this.idimg3= 'http://51guolao.yiqibnb.com'+res.data.data.idcard_img;
              this.idimg4= 'http://51guolao.yiqibnb.com'+res.data.data.idcard_img_reverse;
              this.idimg5= 'http://51guolao.yiqibnb.com'+res.data.data.english_img;
              this.receviewName= res.data.data.resive_name;
              this.receviewPhone= res.data.data.resive_mobile;
              this.receviewAddress= res.data.data.resive_address;
              this.receviewpostCode= res.data.data.resive_pccode;
            }else if(this.value == "3"){
              this.type1 = false;
              this.type2 = true;
              this.type3 = true;
              this.type4 = false;
              this.passportNum=res.data.data.car_num;
              this.linkaddress=res.data.data.contact_address;
              this.passportchinaAddress=res.data.data.idcard_address;
              this.passportenglishAddress=res.data.data.english_address;
              this.idimg_ming3 = res.data.data.idcard_img;
              this.idimg_ming4 = res.data.data.idcard_img_reverse;
              this.idimg_ming5 = res.data.data.english_img;
              this.idimg3= 'http://51guolao.yiqibnb.com'+res.data.data.idcard_img;
              this.idimg4= 'http://51guolao.yiqibnb.com'+res.data.data.idcard_img_reverse;
              this.idimg5= 'http://51guolao.yiqibnb.com'+res.data.data.english_img;
              this.receviewName=res.data.data.resive_name;
              this.receviewPhone=res.data.data.resive_mobile;
              this.receviewAddress=res.data.data.resive_address;
              this.receviewpostCode=res.data.data.resive_pccode;
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
      edit(){
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
        if(this.value == "0"){
            if(this.chineseName == ''){
              this.chineseNameTip = "请输入中文姓名"
            }else if(this.nation==''){
              this.nationTip = "请输入国籍"
            }else if(this.mobile==''){
              this.mobileTip = "请输入手机号码"
            }else if(this.a==''){
              this.detailAddressTip = "请选择联系地址城市"
            }else if(this.detailAddress ==''){
              this.detailAddressTip = "请输入详细联系地址"
            }else if(this.idNum==''){
              this.idNumTip = "请输入身份证号码"
            }else if(this.idimg1 == ''){
              this.idimgTip = "请上传身份证正面照片"
            }else if(this.idimg2 == ''){
              this.idimgTip = "请上传身份证反面照片"
            }else{
              this.$http.post(this.GLOBAL.base_url+'/authentication/updateauth',{
                id:this.$route.query.id,
                type:this.value,
                chinese_name:this.chineseName,
                nationality:this.nation,
                sex:this.sequence,
                car_num:this.idNum,
                mobile:this.mobile,
                card_address:this.idAddress,
                contact_address:"中国",
                contact_address_pro:this.a,
                contact_address_city:shi,
                contact_address_area:qu,
                contact_detail:this.detailAddress,
                idcard_img:this.idimg_ming1,
                idcard_img_reverse:this.idimg_ming2
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/personalComfire');
                }
              })
            }
        }
        if(this.value == "1"){
            if(this.chineseName == ''){
              this.chineseNameTip = "请输入中文姓名"
            }else if(this.englishName == null){
              this.englishNameTip = "请输入英文姓名"
            }else if(this.nation==''){
              this.nationTip = "请输入国籍"
            }else if(this.mobile==''){
              this.mobileTip = "请输入手机号码"
            }else if(this.passportNum==''){
              this.passportNumTip = "请输入护照号码"
            }else if(this.passportchinaAddress==''){
              this.passportchinaAddressTip = "请输入护照地址中文"
            }else if(this.passportenglishAddress==''){
              this.passportenglishAddressTip = "请输入护照地址英文"
            }else if(this.idimg3 == ''){
              this.passportimgTip = "请上传护照正面照片"
            }else if(this.idimg4 == ''){
              this.passportimgTip = "请上传护照反面照片"
            }else if(this.idimg5 == ''){
              this.passportenglishimgTip = "请上传护照英文翻译照片"
            }else{
              this.$http.post(this.GLOBAL.base_url+'/authentication/updateauth',{
                id:this.$route.query.id,
                type:this.value,
                chinese_name:this.chineseName,
                english_name:this.englishName,
                nationality:this.nation,
                sex:this.sequence,
                car_num:this.passportNum,
                mobile:this.mobile,
                contact_address:this.linkaddress,
                idcard_address:this.passportchinaAddress,
                english_address:this.passportenglishAddress,
                idcard_img:this.idimg_ming3,
                idcard_img_reverse:this.idimg_ming4,
                english_img:this.idimg_ming5,
                resive_name:this.receviewName,
                resive_mobile:this.receviewPhone,
                resive_address:this.receviewAddress,
                resive_pccode:this.receviewpostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/personalComfire');
                }
              })
            }
        }
        if(this.value == "2"){
            if(this.chineseName == ''){
              this.chineseNameTip = "请输入中文姓名"
            }else if(this.nation==''){
              this.nationTip = "请输入国籍"
            }else if(this.mobile==''){
              this.mobileTip = "请输入手机号码"
            }else if(this.passportNum==''){
              this.passportNumTip = "请输入护照号码"
            }else if(this.passportchinaAddress==''){
              this.passportchinaAddressTip = "请输入护照地址中文"
            }else if(this.idimg3 == ''){
              this.passportimgTip = "请上传护照正面照片"
            }else if(this.idimg4 == ''){
              this.passportimgTip = "请上传护照反面照片"
            }else if(this.idimg5 == ''){
              this.passportenglishimgTip = "请上传护照英文翻译照片"
            }else{
              this.$http.post(this.GLOBAL.base_url+'/authentication/updateauth',{
                id:this.$route.query.id,
                type:this.value,
                chinese_name:this.chineseName,
                nationality:this.nation,
                sex:this.sequence,
                car_num:this.passportNum,
                mobile:this.mobile,
                contact_address:this.linkaddress,
                idcard_address:this.passportchinaAddress,
                idcard_img:this.idimg_ming3,
                idcard_img_reverse:this.idimg_ming4,
                english_img:this.idimg_ming5,
                resive_name:this.receviewName,
                resive_mobile:this.receviewPhone,
                resive_address:this.receviewAddress,
                resive_pccode:this.receviewpostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/personalComfire');
                }
              })
            }
        }
        if(this.value == "3"){
            if(this.chineseName == ''){
              this.chineseNameTip = "请输入中文姓名"
            }else if(this.englishName == null){
              this.englishNameTip = "请输入英文姓名"
            }else if(this.nation==''){
              this.nationTip = "请输入国籍"
            }else if(this.mobile==''){
              this.mobileTip = "请输入手机号码"
            }else if(this.passportNum==''){
              this.passportNumTip = "请输入护照号码"
            }else if(this.passportchinaAddress==''){
              this.passportchinaAddressTip = "请输入护照地址中文"
            }else if(this.passportenglishAddress==''){
              this.passportenglishAddressTip = "请输入护照地址英文"
            }else if(this.idimg3 == ''){
              this.passportimgTip = "请上传护照正面照片"
            }else if(this.idimg4 == ''){
              this.passportimgTip = "请上传护照反面照片"
            }else if(this.idimg5 == ''){
              this.passportenglishimgTip = "请上传护照英文翻译照片"
            }else{
              this.$http.post(this.GLOBAL.base_url+'/authentication/updateauth',{
                id:this.$route.query.id,
                type:this.value,
                chinese_name:this.chineseName,
                english_name:this.englishName,
                nationality:this.nation,
                sex:this.sequence,
                car_num:this.passportNum,
                mobile:this.mobile,
                contact_address:this.linkaddress,
                idcard_address:this.passportchinaAddress,
                english_address:this.passportenglishAddress,
                idcard_img:this.idimg_ming3,
                idcard_img_reverse:this.idimg_ming4,
                english_img:this.idimg_ming5,
                resive_name:this.receviewName,
                resive_mobile:this.receviewPhone,
                resive_address:this.receviewAddress,
                resive_pccode:this.receviewpostCode
              }).then(res=>{
                if(res.data.code=="1"){
                  this.tip('success',res.data.msg);
                  this.$router.push('/personal/personalComfire');
                }
              })
            }
        }
      }
  },
  created:function(){
      this.getCityData()
    },
    mounted:function(){
      if(this.$route.query.id){
        this.getData();
      }
    }
}

</script>

<style scoped>
  .personalComfire-box-form{
    width: 800px;
    float: left;
    margin: 117px 0 0 50px;
    border-top:1px solid #d8d8d8;
  }
  .form-msg{
    height: 32px;
    line-height: 32px;
    margin-left: 165px;
    color: red;
    font-size: 14px;
  }
  .personalComfire-box-form-wrap{
    width: 453px;
    margin: 0 auto;
  }
  .personalComfire-box-form-wrap>div>input{
    width: 285px;
    height: 40px;
    font-size: 14px;
    padding-left: 15px;
    outline: none;
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    border-radius: 4px;
    border: solid 1px #d6d6d6;
  }
  #personalComfire-box-form-type{
    width: 453px;
    margin: 13px auto 32px;
  }
  #personalComfire-box-form-type>img,.personalComfire-box-form-linkaddress>img{
    margin-right: 32px;
    vertical-align: middle;
  }
  #personalComfire-box-form-type>span{
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    margin-right: 16px;
    font-size: 18px;
    vertical-align: middle;
    color: #333333;
  }
  .personalComfire-box-form-sex,.personalComfire-box-form-linkaddress,
  .personalComfire-box-form-chose,.personalComfire-box-form-chosequ,.personalComfire-box-form-type-receive{
    margin-bottom: 32px;
  }
  .personalComfire-box-form-name>img,.personalComfire-box-form-type-passport>img,.personalComfire-box-form-mobile>img{
    vertical-align: middle;
    margin-right: 32px;
  }
  .personalComfire-box-form-nationality>img,.personalComfire-box-form-sex>img{
    vertical-align: middle;
    margin-right: 68px;
  }
  .personalComfire-box-form-name>span,.personalComfire-box-form-nationality>span,.personalComfire-box-form-sex>span,
  .personalComfire-box-form-linkaddress>span,.personalComfire-box-form-type-number>span,
  .personalComfire-box-form-mobile>span,.personalComfire-box-form-type-passport>span{
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    font-size: 18px;
    vertical-align: middle;
    color: #333333;
    margin-right: 16px;
  }
  .link_address{
    margin:0 0 32px 150px;
  }
  .personalComfire-box-form-type-passport-address>img{
    vertical-align: middle;
  }
  .personalComfire-box-form-type-passport-address>span{
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    font-size: 18px;
    vertical-align: middle;
    color: #333333;
    margin-right: 12px;
  }
  .personalComfire-box-form-type-receive>span{
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    font-size: 18px;
    vertical-align: middle;
    color: #333333;
    margin: 0 10px 0 8px;
  }
  .personalComfire-box-form-type-selectaddress{
    width: 300px;
    height: 40px;
  }
  .personalComfire-box-form-chose,.personalComfire-box-form-chosequ{
    margin-left: 150px; 
  }
  .personalComfire-box-form-type-input>input{
    margin-left: 150px;
  }
  .personalComfire-box-form-type-idimg{
    margin-bottom: 65px;
  }
  .personalComfire-box-form-type-number>img,.personalComfire-box-form-type-idimg>img{
    vertical-align: middle;
    margin-right: 14px;
  }
  .idimg{
    width: 160px;
    height: 160px;
  }
  #personalComfire-box-form-type-idAddress{
    margin-bottom: 40px;
  }
  #personalComfire-box-form-type-idAddress>span{
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    font-size: 18px;
    vertical-align: middle;
    color: #333333;
    margin: 0 16px 0 38px;
  }
  .personalComfire-box-form-type-idimg>span{
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    font-size: 18px;
    vertical-align: middle;
    color: #333333;
  }
  .personalComfire-box-form-type-idimg-div{
    margin: 20px 0 0 34px;
    height: 160px;
  }
  .personalComfire-box-form-type-idimg-div>div{
    float: left;
    width: 160px;
    height: 160px;
  }
  .personalComfire-box-form-type-idimg-div>div:nth-of-type(1){
    margin-right: 86px;
  }
  .personalComfire-box-form-type-submit-img{
    margin: 0 36px  0 86px;
  }
  .opeartor{
    margin-bottom: 100px;
  }
  .opeartor>img{
    cursor: pointer;
  }
</style>
<style>
  .personalComfire-box-form-type-select{
    vertical-align: middle;
    width: 300px;
    height: 40px;
    border-color:none;
  }
</style>



