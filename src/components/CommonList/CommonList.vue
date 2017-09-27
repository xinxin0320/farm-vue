<template>
    <!-- 公共列表页 -->
  <div class="list">
      <section class="list-item">
          <div class="item1">
              <span class="author">发起人 andy</span>
              <span class="tag">北京</span>
          </div>
          <div class="cover">
              <img class="cover-img" src="../../assets/logo.png" alt="">
              <label class="statu-tag">进行中</label>
          </div>
          <h5>1100家店一路升级，休闲养生的行业传奇</h5>


      </section>

  </div>

</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/z.less';
.list{
    width:100%;
    color: #999;
    font-size: 12px;
    .list-item{
        .p(20,20,20,20);
        .item1{
            display:flex;
            justify-content: space-between;
            color: #999;
            font-size: 12px;
            padding-bottom: 15px;

        }
    .cover{
        width:100%;
        position:relative;
        .cover-img{
            .h(500);
            width:100%;
        }
        .statu-tag{
            position:absolute;
            top:0;
        }
    }
    h5{
        color:#000;
        .fs(30);
        .mt(20);
    }
    }

}




</style>
