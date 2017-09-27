<template>
    <!-- 全部列表-->
  <div class="carousel">
      <!-- 使用公共列表 -->
      <common-list ></common-list>
      <common-list ></common-list>
      <common-list ></common-list>

  </div>
</template>

<script>
import CommonList from '../CommonList/CommonList';//引入公共列表

export default {
  name: 'carousel',
  data () {
        return {
        }
    },
    components:{
        CommonList,//注册公共列表
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/z.less';

.carousel{
    h2{
        font-size: 50px;
    }

}


</style>
