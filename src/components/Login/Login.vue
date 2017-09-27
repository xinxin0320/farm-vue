<template>
  <div class="login">
      <form action="">
          <ul>
              <li> <input type="tel" name="" id="" placeholder="请输入手机号"> </li>
              <li> <input type="tel" name="" id="" placeholder="请输入验证码"> </li>
          </ul>
          <p class="btn">登录</p>

      </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/z.less';
.login{
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    background-color: rgba(0,0,0,.5);
    form{
        ::-webkit-input-placeholder { /* WebKit browsers */
            color:    #fff;
        }
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
           color:    #fff;
        //    opacity:  1;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
           color:    #fff;
        //    opacity:  1;
        }
        :-ms-input-placeholder { /* Internet Explorer 10+ */
           color:    #fff;
        }
        .p(50,30,30,50);

        li{
            border-bottom: 1px solid #000;
            input{
                width:100%;
                outline: none;
                border:none;
                background: none;

            }


        }
        .btn{
            border:1px solid #fff;
            .w(300);
            .h(60);
            border-radius: 20px;
            .fs(30);
            text-align: center;
            line-height:30px;
            margin:30px auto;
        }
    }


}





</style>
