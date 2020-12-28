<template>
    <div class="manual">
         <div class="homeNav">
             <dl>
                 <dd  :class="{color: isCor == index}" @click='onClick(index)' v-for="(item,index) in navList" :key="index">{{item}}</dd>
             </dl>
         </div>
          <div class="img">
                 <img :src=url alt="">
             </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isCor: 2,
            navList: ['首页','福利管理现状','产品手册','产品介绍'],
            url: require('../assets/8.jpg'),
        }
    },
    methods: {
        onClick (index){
            if(index == 0){
                this.$router.push({
                    path:'/'
                });
                }else if( index == 1){
                this.$router.push({
                    path:'/welFare'
                });
             } else if( index == 2){
                this.$router.push({
                    path:'/manual'
                });
        }else {
                this.$router.push({
                    path:'/product'
                });
    }
}
    }
}
</script>


<style lang="less" >
    *{
        margin: 0 ;
        padding: 0;
    }
    .manual{
        .homeNav{
            position: fixed;
            top: 0;
            width: 100vw;
              background: #000;
            dl{
          width: 70vw;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          dd{
              color: #999;
          }
          .color{
              color: #fff;
          }
          dd:hover{
              color: #FFF;
          }
        }
        }
        img{
            margin-top: 25px;
            width: 100vw;
        }
     
    }
</style>