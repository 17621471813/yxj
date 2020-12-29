<template>
  <div class="homePage">
    <div class="homeNav">
      <dl>
        <dd
        :class="{color: isCor == index}"
          @click="onClick(index)"
          v-for="(item, index) in navList"
          :key="index"
        >
          {{ item }}
        </dd>
      </dl>
    </div>
    <dl class="cont">
      <dt>
        <span :class="{'fontCor': isIndex == index}" @click='tittleClick(index)' v-for="(item,index) in tittleList" :key='index'>{{ item }}</span>
        </dt>
      <dd v-for="(img, index) in imgList" :key='index'> <img :src=img.url alt=""></dd>
    </dl>
    <div @click='goTop' class="goTop">
      回到顶部
    </div>
   
  </div>
</template>
<script>
export default {
    data () {
        return {
             isCor: 3,
             isIndex: 0,
            tittleList: ['孟春档','熙春档','酣春档'],
            navList: ['首页','福利管理现状','产品手册','产品介绍'],
            imgList: [],
            imgList1: [
              {
               url: require('../assets/10.jpg'),
              },
                {
               url: require('../assets/11.jpg'),
              } ,
              {
               url: require('../assets/12.png'),
              },
                {
               url: require('../assets/13.jpg'),
              }
               ,
              {
               url: require('../assets/14.jpg'),
              },
                {
               url: require('../assets/16.jpg'),
              }
               ,
                {
               url: require('../assets/17.jpg'),
              }
               ,
              {
               url: require('../assets/18.jpg'),
              },
                {
               url: require('../assets/19.jpg'),
              },
              {
               url: require('../assets/20.jpg'),
              },
                {
               url: require('../assets/21.jpg'),
              } ,
              {
               url: require('../assets/22.jpg'),
              },
                {
               url: require('../assets/23.jpg'),
              }
               ,
              {
               url: require('../assets/24.jpg'),
              },
                {
               url: require('../assets/25.jpg'),
              }
               ,
              {
               url: require('../assets/26.jpg'),
              },
                {
               url: require('../assets/27.jpg'),
              }
               ,
              {
               url: require('../assets/28.jpg'),
              },
                {
               url: require('../assets/29.jpg'),
              },
              {
               url: require('../assets/30.jpg'),
              },
                {
               url: require('../assets/31.jpg'),
              }
               ,
              {
               url: require('../assets/32.jpg'),
              }

            ],
            imgList2: [
              {
                url: require('../assets/33.png'),
              },
              {
                url: require('../assets/34.png'),
              },
              {
                url: require('../assets/35.png'),
              },
              {
                url: require('../assets/36.png'),
              },
              {
                url: require('../assets/37.png'),
              },
              {
                url: require('../assets/38.png'),
              },
              {
                url: require('../assets/39.png'),
              },
              {
                url: require('../assets/40.png'),
              },
              {
                url: require('../assets/41.png'),
              },
              {
                url: require('../assets/42.png'),
              },
              {
                url: require('../assets/43.png'),
              },
              {
                url: require('../assets/44.png'),
              },
              {
                url: require('../assets/45.png'),
              },
              {
                url: require('../assets/46.png'),
              },
              {
                url: require('../assets/47.png'),
              },
              {
                url: require('../assets/48.png'),
              },
              {
                url: require('../assets/49.png'),
              },
              {
                url: require('../assets/50.png'),
              },
              {
                url: require('../assets/51.png'),
              },
              {
                url: require('../assets/52.png'),
              },
              {
                url: require('../assets/53.png'),
              },
              {
                url: require('../assets/54.png'),
              },
              {
                url: require('../assets/55.png'),
              },
              {
                url: require('../assets/56.png'),
              }
            ],
             imgList3: [
              {
                url: require('../assets/57.png'),
              },
              {
                url: require('../assets/58.png'),
              },
              {
                url: require('../assets/59.png'),
              },
              {
                url: require('../assets/60.png'),
              },
              {
                url: require('../assets/61.png'),
              },
              {
                url: require('../assets/62.png'),
              },
              {
                url: require('../assets/63.png'),
              },
              {
                url: require('../assets/64.png'),
              },
              {
                url: require('../assets/65.png'),
              },
              {
                url: require('../assets/66.png'),
              },
              {
                url: require('../assets/67.png'),
              },
              {
                url: require('../assets/68.png'),
              },
              {
                url: require('../assets/69.png'),
              },
              {
                url: require('../assets/70.png'),
              },
              {
                url: require('../assets/71.png'),
              },
              {
                url: require('../assets/72.png'),
              },
              {
                url: require('../assets/73.png'),
              },
              {
                url: require('../assets/74.png'),
              },
              {
                url: require('../assets/75.png'),
              },
              {
                url: require('../assets/76.png'),
              },
              {
                url: require('../assets/77.png'),
              },
              {
                url: require('../assets/78.png'),
              },
              {
                url: require('../assets/79.png'),
              },
              {
                url: require('../assets/80.png'),
              },
              {
                url: require('../assets/81.png'),
              },
              {
                url: require('../assets/82.png'),
              },
              {
                url: require('../assets/83.png'),
              },
              {
                url: require('../assets/84.png'),
              },
              {
                url: require('../assets/85.png'),
              },
              {
                url: require('../assets/86.png'),
              },
              {
                url: require('../assets/87.png'),
              },
            ]
        }
    },
    created () {
      this.imgList = this.imgList1;
    },
    methods: {
        onClick (index){
            console.log(index)
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
        },
        tittleClick (index) {
          this.isIndex = index;
          if( index == 0){
            this.imgList = this.imgList1;
          }else if(index == 1){
            this.imgList = this.imgList2;
          }else{
            this.imgList = this.imgList3;
          }
        },
        goTop () {
          document.documentElement.scrollTop =0;
        }
    }
}
</script>


<style lang="less" >
* {
  margin: 0;
  padding: 0;
}
.homePage {
  .homeNav {
    position: fixed;
    top: 0;
    width: 100vw;
    background: #000;
    dl {
      width: 70vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      dd {
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
   .cont{
      margin-top: 50px;
      dt{
         span{
           margin-left: 50px;
           font-size: 20px;
           font-weight: 700;
         }
         .fontCor{
           color: rgb(226, 39, 39);
         }
      }
      dd{
        margin-top: 25px;
        img{
          width: 100vw;
          border: 1px solid #999;
        }
      }
    }
    .goTop{
      position: fixed;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      z-index: 999;
      top: 80vh;
      right: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #999;
      color: #FFFFFF;
    }

}
</style>