<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="mode === 'default'">
      <swiper-slide :style="{height}" v-for="(item,index) in 5" :key="item">{{item}}</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <swiper :options="swiperOption" v-if="mode === 'slidePer'" :class="{'slidePer': mode === 'slidePer'}">
      <swiper-slide :style="{height}" v-for="(item,index) in 10" :key="item">
        <div class="pic">
          <img src="./../assets/img/test.jpg" alt="">
        </div>
        <p class="name line-clamp1">Billboard Presents Electric Asia Vol. 2</p>
        <p class="desc line-clamp1">Billboard Presents Electric Asia Vol. 2</p>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperOption: {
      type: Object,
      default: function() {
        return {
          pagination: {
            el: ".swiper-pagination"
          },
        };
      }
    },
    height: String,
    mode: {
      type: String,
      default: "default"
    }
  }
};
</script>

<style lang="scss">
.swiper-slide {
  // height: 336px;
  background-color: #ccc;
}
.swiper-pagination-bullet-active {
  background: #c20c0c;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 10px;
}
.swiper-pagination-bullet {
  width: 6px;
  height: 6px;
}
.slidePer {
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 35px;
  .swiper-button-prev,
  .swiper-button-next {
    top: 52px;
    background-size: 10px auto;
    filter: grayscale(100%);
    filter: gray;
  }
  .swiper-slide {
    background: transparent;
    .pic {
      width: 112px;
      height: 100px;
      background: url("./../assets/img/album_cover_player.png") no-repeat center center / 100% 100%;
      & > img {
        width: 100px;
        height: 100%;
      }
    }
    & > p {
      line-height: 22px;
    }
    .name {
      font-size: 14px;
      color: #333;
    }
    .desc {
      font-size: 12px;
      line-height: 20px;
      color: #666;
    }
  }
}
</style>
