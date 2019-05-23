<template>
  <div class="personalComfire-container">
    <div class="personalComfire-box">
      <div class="personalComfire-box-wrap">
        <div class="personalComfire-box-wrap-top">
          <span>姓名</span>
          <span>类型</span>
          <span>性别</span>
          <span>手机号码</span>
          <span>联系地址</span>
          <span>审核状态</span>
          <span>操作</span>
        </div>
        <div class="personalComfire-box-wrap-middle">
          <div v-for="(v,k) in dataList">
            <div class="personalComfire-box-wrap-middle-div1">{{v.chinese_name}}</div>
            <div class="personalComfire-box-wrap-middle-div2">{{types[v.type]}}</div>
            <div class="personalComfire-box-wrap-middle-div3">{{v.sex ==  1 ?"男":"女"}}</div>
            <div class="personalComfire-box-wrap-middle-div4">{{v.mobile}}</div>
            <div class="personalComfire-box-wrap-middle-div5">{{v.contact_address+v.contact_address_pro+v.contact_address_city+v.contact_address_area}}</div>
            <div class="personalComfire-box-wrap-middle-div6">{{status[v.status]}}</div>
            <div class="personalComfire-box-wrap-middle-div7"  v-if="v.status == '1' || v.status == '3'">
              <span>修改</span><span @click="delauther(v.id)" >/删除</span>
            </div>
             <div class="personalComfire-box-wrap-middle-div7"  v-if="v.status == '2'">
              <span>查看</span>
            </div>
          </div>
        </div>
        <div class="personalComfire-box-wrap-block">
          <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-size="pageSize"
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
        <div class="personalComfire-box-wrap-img">
          <img @click="identapply" src="/static/images/apply.png" alt="">
        </div>
      </div>
    </div>
    <div style="clear:both;"></div>
    
  </div>
  
</template>

<script>
export default {
  name: 'personalComfire',
   data() {
      return {
        total:0,
        currentPage1: 1,
        pageSize: 5,
        pageNum:1,
        id:'',
        dataList:[],
        types:{
          '0': '国内个人',
          '1': '港澳个人',
          '2': '台湾个人',
          '3': '国外个人'
        },
        status:{
          '1': '未审核',
          '2': '已审核',
          '3': '驳回'
        },
      }
    },
  components: {
  },
  methods:{
    identapply(){
     this.$router.push('/personal/personalComfire/personalForm')
    },
    getList(){
      this.$http.get("/api/authentication",{params:{
        user_id:this.$cookie.getCookie('u_id'),
        page:this.pageNum
      }}).then(res=>{
        if(res.data.code == "1"){
          this.total = res.data.others;
          this.dataList = res.data.data;
        }
      })
    },
    handleSizeChange(val) {
              this.pageSize = val;
              this.getList();
            },
            
        handleCurrentChange(val) {
            this.pageNum = val;
            this.getList();
        },
        delauther(e){
          this.$http.get("/api/authentication/delauth",{params:{
            id:e
          }}).then(res=>{
            if(res.data.code == "1"){
              this.$router.go(0)
            }
          })
        },
        pageChange (pageNum) {
          this.currentPage1 = pageNum;
      }
  },
    created() {
        this.pageNum = Number(localStorage.getItem('pagination')) || 1;
        this.pageChange(this.pageNum);
        this.getList();
      },
      beforeUpdate () {
          localStorage.setItem('pagination', this.pageNum);
      },
      beforeDestroy () {
          localStorage.setItem('pagination', '1');
      }

}

</script>

<style scoped>
  @font-face {
    font-family: 'personalcomfirefont'; 
    src: url('/static/PingFang/PingFangSC-Medium.ttf');
  }
  @font-face {
    font-family: 'namefont'; 
    src: url('/static/PingFang/PingFangSC-Thin.ttf');
  }
  @font-face {
    font-family: 'formfont'; 
    src: url('/static/PingFang/PingFangSC-Regular.ttf');
  }
  .personalComfire-box{
    width: 900px;
    float: left;
    margin: 117px 0 0 50px;
    border-top:1px solid #d8d8d8;
  }
  .personalComfire-box-wrap{
    margin-left: 109px;
  }
  .personalComfire-box-wrap-top{
    width: 770px;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid #d8d8d8;
  }
  .personalComfire-box-wrap-top>span{
    font-family: personalcomfirefont;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    margin-right: 55px;
  }
  .personalComfire-box-wrap-top>span:nth-of-type(1){
    margin-left: 8px;
  }
  .personalComfire-box-wrap-top>span:nth-of-type(7){
    margin-right: 0;
  }
  .personalComfire-box-wrap-middle{
    margin: 12px 0 24px 0;
    height: 257px;
  }
  .personalComfire-box-wrap-middle>div{
    position: relative;
    height: 25px;
    margin-bottom: 24px;
  }
  .personalComfire-box-wrap-middle>div>div{
    font-family: namefont;
    font-size: 18px;
    font-weight: 100;
    color: #333333;
    position: absolute;
    
  }
  .personalComfire-box-wrap-middle-div1{
    left:0;
  }
  .personalComfire-box-wrap-middle-div2{
   left: 85px;
  }
  .personalComfire-box-wrap-middle-div3{
    left: 205px;
  }
  .personalComfire-box-wrap-middle-div4{
    left: 266px;
  }
  .personalComfire-box-wrap-middle-div5{
    width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    left: 419px;
  }
  .personalComfire-box-wrap-middle-div6{
    left: 570px;
    width: 54px;
    text-align: center;
  }
  .personalComfire-box-wrap-middle-div7{
    width: 100px;
    text-align: center;
    left: 660px;
  }
  .personalComfire-box-wrap-block{
    width: 700px;
    text-align: center;
    margin: 36px auto 64px;
  }
  .personalComfire-box-wrap-img{
    width: 136px;
    margin: 0 auto;
  }
</style>



