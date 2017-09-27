<template>
  <div id="app">
      <!-- 使用轮播组件 -->
    <carousel ></carousel>
    <!-- 导航 -->
    <ul class="nav">
        <li><router-link to='/'>全部</router-link></li>
        <li><router-link to='/farming'>农业</router-link></li>
        <li><router-link to='/others'>其他</router-link></li>
    </ul>
    <!-- 底部导航 -->
    <footer>
        <ul>
            <li><router-link to="/">主页</router-link></li>
            <!--  -->
            <li><router-link to="/user">我的</router-link></li>
        </ul>

    </footer>
    <router-view></router-view>



  </div>
</template>

<script>
import Carousel from "./components/Carousel/Carousel";//引入轮播组件

export default {
  name: 'app',
  data(){
      return {
          show:false,//是否显示组件
      }
  },
  components:{
      Carousel,//注册轮播组件
  },
  created(){
  }

}
</script>

<style scoped lang="less">
 @import './assets/less/z.less';

#app{
    a {
        .fs(25);
        display:block;
        text-decoration: none;

    }

    .nav{
        display: flex;
        justify-content: space-around;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgba(7,17,27,.1);

        a {
            color :#000;

            &.router-link-exact-active{
                color:green;
                border-bottom: 2px solid green;
            }
        }
    }
    footer{
        position:fixed;
        z-index:100;
        left:0;
        right:0;
        bottom:0;
        background-color: #fff;

        ul{
            width:100%;
            display: flex;
            justify-content: space-around;
            height: 40px;
            line-height: 40px;
            border-top: 1px solid rgba(7,17,27,.1);
            .fs(25);
            a {
                color:#999;

                &.router-link-exact-active{
                    color:#000;
                }

            }

        }
    }

}

</style>
