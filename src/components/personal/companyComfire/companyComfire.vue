<template>
  <div class="companyComfire-container">
      <div class="companyComfire-box">
        <div class="companyComfire-box-wrap">
            <div class="companyComfire-box-wrap-top">
                <span>公司名称</span>
                <span>姓名</span>
                <span>性别</span>
                <span>类型</span>
                <span>手机号码</span>
                <span>审核状态</span>
                <span>操作</span>
            </div>
            <div class="companyComfire-box-wrap-middle">
              <div v-for="(v,k) in dataList">
                <div class="companyComfire-box-wrap-middle-div1">{{v.company_name}}</div>
                <div class="companyComfire-box-wrap-middle-div2">{{v.referee}}</div>
                <div class="companyComfire-box-wrap-middle-div3">{{v.sex ==  1 ?"男":"女"}}</div>
                <div class="companyComfire-box-wrap-middle-div4">{{types[v.type]}}</div>
                <div class="companyComfire-box-wrap-middle-div5">{{v.mobile}}</div>
                <div class="companyComfire-box-wrap-middle-div6">{{status[v.status]}}</div>
                <div class="companyComfire-box-wrap-middle-div7" v-if="v.status == '1' || v.status == '3'">
                    <span @click="companylook(v.id)">修改</span><span @click="delcompanyauther(v.id)">/删除</span>
                </div>
                <div class="companyComfire-box-wrap-middle-div7" v-if="v.status == '2'">
                    <span @click="companylook(v.id)">查看</span>
                </div>
              </div>  
            </div>
            <div class="companyComfire-box-wrap-block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage1"
                  :page-size="pageSize"
                  layout="prev, pager, next"
                  :total="total">
                </el-pagination>
            </div>
            <div class="companyComfire-box-wrap-img">
              <img @click="companyapply" src="/static/images/apply.png" alt="">
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
      total:0,
      currentPage1: 1,
      pageSize: 5,
      id:'',
      dataList:[],
      types:{
        '1': '国内个体',
        '2': '国内企业',
        '3': '港澳企业',
        '4': '台湾企业',
        '5': '国外企业'
      },
      status:{
        '1': '未审核',
        '2': '已审核',
        '3': '驳回'
      }
    }
  },
  components: {
  },
  methods:{
    companyapply(){
      this.$router.push('/personal/companyForm')
    },
    getcompanyList(){
      this.$http.get(this.GLOBAL.base_url+"/authentication/business",{params:{
        user_id:this.$cookie.getCookie('u_id'),
        page:this.currentPage1
      }}).then(res=>{
        if(res.data.code == "1"){
          this.total = res.data.others;
          this.dataList = res.data.data;
        }
      })
    },
    handleSizeChange(val) {
        this.pageSize = val;
        this.getcompanyList();
      },
  
    handleCurrentChange(val) {
        this.currentPage1 = val;
        this.getcompanyList();
    },
        delcompanyauther(e){
          this.$http.get(this.GLOBAL.base_url+"/authentication/delbusiness",{params:{
            id:e
          }}).then(res=>{
            if(res.data.code == "1"){
              if(this.dataList.length>1){
                this.pageNum = Number(localStorage.getItem('companypagination')) || 1;
              }else{
                this.pageNum = Number(localStorage.getItem('companypagination'))-1 || 1;
              } 
              this.pageChange(this.pageNum);
              this.getcompanyList();
              this.$router.go(0);
            }
          })
        },
        pageChange (pageNum) {
          this.currentPage1 = pageNum;
      },
      companylook(id){
        this.$router.push({
          path: '/personal/companyForm',
          query:{
            id:id
          }
        })
      }
  },
  created() {
      this.currentPage1 = Number(localStorage.getItem('companypagination')) || 1;
      this.pageChange(this.currentPage1);
      this.getcompanyList();
    },
    beforeUpdate () {
          localStorage.setItem('companypagination', this.currentPage1);
      },
      beforeDestroy () {
          localStorage.setItem('companypagination', '1');
      }
}

</script>

<style scoped>
  .companyComfire-box{
    width: 900px;
    float: left;
    margin: 117px 0 0 50px;
    border-top:1px solid #d8d8d8;
  }
  .companyComfire-box-wrap{
    margin-left: 6px;
  }
  .companyComfire-box-wrap-top{
    width: 887px;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid #d8d8d8;
  }
  .companyComfire-box-wrap-top>span{
    font-family: "PingFangSC-Medium","Microsoft YaHei"; 
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
    height: 257px;
  }
  .companyComfire-box-wrap-middle>div{
    position: relative;
    height: 25px;
    margin-bottom: 24px;
  }
  .companyComfire-box-wrap-middle>div>div{
    font-family: "PingFangSC-Thin","Microsoft YaHei"; 
    font-size: 18px;
    font-weight: 100;
    color: #333333;
    position: absolute;
  }
  .companyComfire-box-wrap-middle-div1{
    width: 216px;
    text-align: center;
    left:0;
  }
  .companyComfire-box-wrap-middle-div2{
    width: 48px;
    text-align: center;
    left: 275px;
  }
  .companyComfire-box-wrap-middle-div3{
    left: 384px;
  }
  .companyComfire-box-wrap-middle-div4{
    left: 460px;
  }
  .companyComfire-box-wrap-middle-div5{
    left: 546px;
  }
  .companyComfire-box-wrap-middle-div6{
    width: 54px;
    text-align: center;
    left: 710px;
  }
  .companyComfire-box-wrap-middle-div7{
    width: 81px;
    text-align: center;
    left: 810px;
  }
  .companyComfire-box-wrap-middle-div7>span{
    cursor: pointer;
  }
  .companyComfire-box-wrap-block{
    width: 500px;
    margin: 36px auto 64px;
    text-align: center;
  }
  .companyComfire-box-wrap-img{
    width: 136px;
    margin:0 auto 256px ;
    cursor: pointer;
  }
  
</style>
