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
          <song-menu-title title="热门推荐" :tags="hotTags" @selectTagEmit="selectTag" />
          <song-menus :playlist="hotRecommend" />
        </div>
        <div class="song-menu">
          <song-menu-title title="新碟上架" />
          <div class="swiper-per">
            <swiper class="slidePer" :options="swiperPerOpt">
              <swiper-slide style="height:140px;" v-for="(item,index) in newCD" :key="item.id">
                <div class="pic">
                  <img :src="item.picUrl" alt="">
                </div>
                <p class="name line-clamp1">{{item.name}}</p>
                <p class="desc line-clamp1">{{item.artist.name}}</p>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
        </div>
        <div class="song-menu">
          <song-menu-title title="榜单" />
          <div class="leaderboard">
            <div class="rank-list" v-for="item in leaderboard">
              <div class="rank-title">{{item[0].idxName}}</div>
              <div class="iconfont icon-zanting"></div>
              <ul>
                <li v-for="(song,index) in item">
                  <p class="line-clamp1">
                    <span class="idx" :class="{'red':index<3}">{{index + 1}}</span>{{song.name}}
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
            <div class="item" v-for="item in artists" :key="item.id">
              <div class="img">
                <img :src="item.picUrl" alt="">
              </div>
              <div class="info">
                <p class="name line-clamp1">{{item.name}}</p>
                <p class="desc line-clamp1">{{item.briefDesc}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="singers min-text">
          <div class="singer-title">
            <p class="l">推荐电台</p>
          </div>
          <div class="list">
            <div class="item" v-for="item in djprogram">
              <div class="img">
                <img :src="item.picUrl" alt="">
              </div>
              <div class="info">
                <p class="name line-clamp1">{{item.name}}</p>
                <p class="desc line-clamp1">{{item.copywriter}}</p>
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
    const self = this;
    return {
      swiperBannerOpt: {
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          slideChangeTransitionStart: function() {
            self.bannerIndex = this.activeIndex;
          }
        }
      },
      swiperPerOpt: {
        slidesPerView: 4,
        spaceBetween: 38,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      banners: [],
      backgroundUrl: "",
      bannerIndex: 0,
      hotTags: [],
      hotRecommend: [],
      newCD: [],
      leaderboard: [],
      artists: [],
      djprogram: [],
    };
  },
  created() {
    this.getBanner();
    this.getHotTags();
    this.getPlaylist();
    this.getNewCD();
    this.getLeaderboard(3);
    this.getLeaderboard(0);
    this.getLeaderboard(2);
    this.getArtists(5001);
    this.getDjprogram();
  },
  methods: {
    getBanner() {
      this.$http.get("/api/banner").then(res => {
        if (res.data.code === 200) {
          this.banners = res.data.banners;
          this.backgroundUrl = this.banners[0].backgroundUrl;
        }
      });
    },
    getHotTags() {
      this.$http.get("/api/playlist/hot").then(res => {
        if (res.data.code === 200) {
          this.hotTags = res.data.tags
        }
      });
    },
    getPlaylist() {
      this.$http.get("/api/personalized", {
        params: {
          limit: 8,
          cat: 'hot',
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.hotRecommend = res.data.result
        }
      });
    },
    getNewCD() {
      this.$http.get("/api/top/album", {
        params: {
          offset: 0,
          limit: 10,
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.newCD = res.data.albums
        }
      });
    },
    getLeaderboard(idx) {
      this.$http.get("/api/top/list", {
        params: { idx }
      }).then(res => {
        if (res.data.code === 200) {
          const tracks = res.data.playlist.tracks.slice(0, 10)
          tracks[0].idxName = res.data.playlist.name
          this.leaderboard.push(tracks)
        }
      });
    },
    getArtists(cat) {
      this.$http.get("/api/artist/list", {
        params: { cat, limit: 10 }
      }).then(res => {
        if (res.data.code === 200) {
          this.artists = res.data.artists
          return res.data.artists
        }
      }).then(artists => {
        artists.forEach(item => {
          this.getArtistDesc(item);
        })
      });
    },
    getArtistDesc(item) {
      this.$http.get("/api/artist/desc", {
        params: { id: item.id }
      }).then(res => {
        if (res.data.code === 200) {
          item.briefDesc = res.data.briefDesc
        }
      })
    },
    getDjprogram() {
      this.$http.get("/api/personalized/djprogram").then(res => {
        if (res.data.code === 200) {
          this.djprogram = res.data.result
        }
      })
    },
    selectTag(tagId) {
      console.log(tagId)
    },
  },
  computed: {
    swiper() {
      return this.$refs.swiperBanner.swiper;
    }
  },
  watch: {
    bannerIndex(nVal, oVal) {
      this.backgroundUrl = this.banners[nVal].backgroundUrl;
    }
  }
};
</script>

<style lang="scss" scoped>
#viewHome {
  background: #f5f5f5;
  .swiper-wrap {
    background-repeat: repeat-x;
    transition: all 0.3s;
    .center {
      height: 336px;
      width: 980px;
      margin: 0 auto;
      position: relative;
      .downloadApp {
        position: absolute;
        z-index: 9;
        background: url("./../assets/img/download.png") no-repeat right 0;
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
          width: 212px;
          padding: 30px 20px;
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
        width: calc(100% - 25px);
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
            overflow: hidden;
            .img {
              width: 60px;
              height: 60px;
              flex: 0 0 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              & > img {
                width: auto;
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
              box-sizing: border-box;
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
  /deep/
    .swiper-container-horizontal
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
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
        background: url("./../assets/img/album_cover_player.png") no-repeat
          center center / 100% 100%;
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


