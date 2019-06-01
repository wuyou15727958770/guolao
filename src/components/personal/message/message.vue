<template>
  <div class="message-container">
    <div class="message-box">
        <div class="message-box-top">我的消息</div>
        <div class="message-box-top-detail">
          <div class="message-box-top-detail-wrap">
              <el-tabs v-model="activeName">
                <el-tab-pane label="全部" name="first">
                  <div class="message-box-div">
                    <p @click="orderchange">订单状态变更</p>
                    <p>商标注册完成大概需要多少时间啊？是全部委托给你们就可以吗？价格还能再商量吗？
                      为什么商标注册完成大概需要多少时间啊？是全部委托给你们就可以吗？价格还能再商量吗？
                      价格还能再商量吗？为什么…</p>
                    <p>2016-10-22 12:00:00</p>
                  </div>
                  <div class="message-box-div">
                    <p>订单状态变更</p>
                    <p>商标注册完成大概需要多少时间啊？是全部委托给你们就可以吗？价格还能再商量吗？
                      为什么商标注册完成大概需要多少时间啊？是全部委托给你们就可以吗？价格还能再商量吗？
                      价格还能再商量吗？为什么…</p>
                    <p>2016-10-22 12:00:00</p>
                  </div>
                  <div class="message-box-div">
                    <p>订单状态变更</p>
                    <p>商标注册完成大概需要多少时间啊？是全部委托给你们就可以吗？价格还能再商量吗？
                      为什么商标注册完成大概需要多少时间啊？是全部委托给你们就可以吗？价格还能再商量吗？
                      价格还能再商量吗？为什么…</p>
                    <p>2016-10-22 12:00:00</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="已读" name="second"><div class="message-box-div">
                    <p @click="orderchange">订单状态变更</p>
                    <p>商标注册完成大概需要多少时间啊？是全部委托给你们就可以吗？价格还能再商量吗？
                      为什么商标注册完成大概需要多少时间啊？是全部委托给你们就可以吗？价格还能再商量吗？
                      价格还能再商量吗？为什么…</p>
                    <p>2016-10-22 12:00:00</p>
                  </div></el-tab-pane>
                <el-tab-pane label="未读" name="third">未读</el-tab-pane>
            </el-tabs>
          </div>
            
        </div>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data(){
    return{
      activeName:"first"
    }
  },
  components: {
  },
  methods:{
    orderchange(){
      this.$router.push('/personal/message/messageDetail')
    }
  }
}

</script>

<style scoped>
  .message-box{
        width: 800px;
        float: left;
        margin: 64px 0 0 50px;
    }
    .message-box-top{
      font-family: "PingFangSC-Thin","Microsoft YaHei";
      font-size: 28px;
      font-weight: 100;
      color: #999999;
      margin: 0 0 14px 43px;
    }
    .message-box-top-detail{
      width: 800px;
      border-top:1px solid #d8d8d8;
    }
    .message-box-top-detail-wrap{
      width: 724px;
      margin-left: 30px;
  }
  .message-box-div{
    margin: 0 0 35px 9px;
  }
  .message-box-div>p:nth-of-type(1){
    font-family: "PingFangSC-Semibold","Microsoft YaHei";
    font-size: 16px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 10px;
  }
  .message-box-div>p:nth-of-type(2){
    font-family: "PingFangSC-Regular","Microsoft YaHei";
    font-size: 16px;
    color: #333333;
    margin-bottom: 10px;
  }
  .message-box-div>p:nth-of-type(3){
    font-family: "PingFangSC-Thin","Microsoft YaHei";
    font-size: 12px;
  font-weight: 100;
    color: #999999;
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
        font-family: "PingFangSC-Regular","Microsoft YaHei";
    }
    .el-tabs__item:hover{
        color:#666666;
    }
</style>

