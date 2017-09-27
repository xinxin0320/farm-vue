<template>
    <!-- 用户中心 -->
    
  <div class="usercenter">
      <user-center></user-center>




  </div>
</template>

<script>
import UserCenter from '../UserCenter/UserCenter';

export default {
  name: 'usercenter',
  data () {
    return {
    }
},
components:{
    UserCenter
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/z.less';
.usercenter{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:50px;
    z-index:999;
    background-color: #fff;

}




</style>
