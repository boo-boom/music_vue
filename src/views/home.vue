<template>
  <div id="viewHome">
    <div class="swiper-wrap" :style="{backgroundImage:`url(${backgroundUrl})`}">
      <div class="center">
        <swiper :options="swiperBannerOpt" ref="swiperBanner">
          <swiper-slide style="height:336px;" v-for="(item,index) in banners" :key="item.picUrl">
            <img :src="item.picUrl" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="downloadApp"></div>
      </div>
    </div>
    <div class="container">
      <div class="c-l">
        <div class="song-menu">
          <song-menu-title/>
          <song-menus/>
        </div>
        <div class="song-menu">
          <song-menu-title/>
          <div class="swiper-per">
            <swiper class="slidePer" :options="swiperPerOpt">
              <swiper-slide style="height:140px;" v-for="(item,index) in 10" :key="item">
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
        </div>
        <div class="song-menu">
          <song-menu-title/>
          <div class="leaderboard">
            <div class="rank-list" v-for="item in 3">
              <div class="rank-title">云音乐飙升榜</div>
              <div class="iconfont icon-zanting"></div>
              <ul>
                <li v-for="(song,index) in 10">
                  <p>
                    <span class="idx" :class="{'red':index<3}">{{index + 1}}</span>一百万个可能
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="c-r">
        <div class="singers">
          <div class="singer-title">
            <p class="l">入驻歌手</p>
            <p class="r iconfont icon-jiantou1"></p>
          </div>
          <div class="list">
            <div class="item" v-for="item in 10">
              <div class="img">
                <img src="./../assets/img/test.jpg" alt="">
              </div>
              <div class="info">
                <p class="name line-clamp1">张惠妹张惠妹张惠妹张惠妹张惠妹</p>
                <p class="desc line-clamp1">张惠妹张惠妹张惠妹张惠妹</p>
              </div>
            </div>
          </div>
        </div>
        <div class="singers min-text">
          <div class="singer-title">
            <p class="l">热门主播</p>
          </div>
          <div class="list">
            <div class="item" v-for="item in 5">
              <div class="img">
                <img src="./../assets/img/test.jpg" alt="">
              </div>
              <div class="info">
                <p class="name line-clamp1">张惠妹</p>
                <p class="desc line-clamp1">张惠妹张惠妹张惠妹张惠妹</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import SongMenuTitle from "./../components/SongMenuTitle";
import SongMenus from "./../components/SongMenus";
export default {
  name: "ViewHome",
  components: { swiper, swiperSlide, SongMenuTitle, SongMenus },
  data() {
    const self = this
    return {
      swiperBannerOpt: {
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          slideChangeTransitionStart: function() {
            self.bannerIndex = this.activeIndex
          },
        }
      },
      swiperPerOpt: {
        slidesPerView: 4,
        spaceBetween: 38,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
      },
      banners: [],
      backgroundUrl: '',
      bannerIndex: 0,
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      this.$http.get("/api/banner").then(res => {
        if (res.data.code === 200) {
          this.banners = res.data.banners;
          this.backgroundUrl = this.banners[0].backgroundUrl
        }
      });
    },
  },
  computed: {
    swiper() {
      return this.$refs.swiperBanner.swiper
    }
  },
  watch: {
    bannerIndex(nVal, oVal) {
      this.backgroundUrl = this.banners[nVal].backgroundUrl
    }
  },
};
</script>

<style lang="scss" scoped>
#viewHome {
  background: #f5f5f5;
  .swiper-wrap {
    background-repeat: repeat-x;
    transition: all .3s;
    .center {
      height: 336px;
      width: 980px;
      margin: 0 auto;
      position: relative;
      .downloadApp {
        position: absolute;
        z-index: 9;
        background: url('./../assets/img/download.png') no-repeat right 0;
        top: 0;
        right: 0;
        width: 375px;
        height: 100%;
      }
    }
  }
  .container {
    width: 980px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    border: 1px solid #ddd;
    background: #fff;
    .c-l {
      width: 685px;
      flex: 0 0 685px;
      padding: 16px 20px 0;
      .swiper-per {
        padding: 30px 0 20px;
        margin: 20px 0;
        background: #f5f5f5;
        border: 1px solid #f2f2f2;
        box-sizing: border-box;
      }
      .leaderboard {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        .rank-list {
          padding: 30px 45px;
          box-sizing: border-box;
          border: 1px solid #f2f2f2;
          .rank-title {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
          }
          .iconfont {
            text-align: center;
            font-size: 40px;
            margin: 20px 0;
          }
          & > ul {
            li {
              line-height: 40px;
              font-size: 15px;
              cursor: pointer;
              .idx {
                display: inline-block;
                width: 30px;
                text-align: center;
                font-weight: bold;
              }
              .red {
                color: #c20c0c;
              }
            }
            li:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .c-r {
      width: 100%;
      border-left: 1px solid #ddd;
      .singers {
        box-sizing: border-box;
        padding: 10px 20px 20px;
        width: 100%;
        .singer-title {
          display: flex;
          justify-content: space-between;
          line-height: 40px;
          font-size: 13px;
          border-bottom: 1px solid #ddd;
          width: 100%;
          .iconfont {
            color: #c20c0c;
          }
        }
        .list {
          margin-top: 20px;
          .item {
            display: flex;
            margin-bottom: 16px;
            .img {
              width: 60px;
              height: 60px;
              flex: 0 0 60px;
              & > img {
                width: 100%;
                height: 100%;
              }
            }
            .info {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 10px;
              line-height: 18px;
              background: #f5f5f5;
              .name {
                font-size: 15px;
                margin-bottom: 4px;
              }
              .desc {
                font-size: 14px;
                color: #666;
              }
            }
          }
        }
        &.min-text {
          .list {
            .item {
              margin-bottom: 16px;
              .img {
                width: 40px;
                height: 40px;
                flex: 0 0 40px;
              }
              .info {
                padding: 0 10px;
                line-height: 16px;
                background: #fff;
                .name {
                  font-size: 12px;
                }
                .desc {
                  font-size: 12px;
                  color: #666;
                }
              }
            }
          }
        }
      }
    }
  }
  // swiper
  /deep/ .swiper-pagination-bullet-active {
    background: #c20c0c;
  }
  /deep/ .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 10px;
  }
  /deep/ .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
  }
  /deep/ .slidePer {
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
}
</style>


