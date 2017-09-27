<template>
  <div class="carousel">
      <!-- 轮播图组件 -->
      <swiper :options="swiperOption"  ref="mySwiper">
            <!-- 这部分放你要渲染的那些内容 -->
            <swiper-slide v-for="(item,index) in banner" :key="index">
                <img :src="item.imageUrl" :alt="item.name" style="width:100%;height:210px;" @click="onclick()">

            </swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
import axios from 'axios';
import { swiper, swiperSlide } from 'vue-awesome-swiper'  ;
export default {
  name: 'carousel',
  created(){
      axios.get("http://m.maizuo.com/v4/api/billboard/home?__t=1506367095118")
              .then(response=>{
                //   this.banner = response.data.data.billboards;
                  this.banner = response.data.data.billboards;
                  console.log(response.data.data.billboards)

              })
              .catch(error=>{
                  console.log(error);
              })
  },
  data () {
    return {
        banner:[],
        show:false, //是否显示组件
        swiperOption: {
            notNextTick: true,
           autoplay: 3000,
           grabCursor : true,
           setWrapperSize :true,
           pagination : '.swiper-pagination',
           paginationClickable :true,
           prevButton:'.swiper-button-prev',
           nextButton:'.swiper-button-next',
           observeParents:true,
           loop:true,
           initialSlide: 1,
           //    effect:"coverflow",
        //    direction: 'horizontal',
           // if you need use plugins in the swiper, you can config in here like this
       // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
       // debugger: true,
       // swiper callbacks
       // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
       // onTransitionStart(swiper){
       //   console.log(swiper)
       // },
       // more Swiper configs and callbacks...
       // ...


      }

    }
},
components: {
           swiper,
           swiperSlide
       },

//定义这个sweiper对象
// 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {

        swiper() {
          return this.$refs.mySwiper.swiper;
        }
    },
    mounted () {
        //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
        // this.swiper.slideTo(3, 1000, false);
        console.log("每次切换都会触发我");
        console.log('this is current swiper instance object', this.swiper)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/z.less';
.carousel{

}


</style>
