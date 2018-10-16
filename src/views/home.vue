<template>
    <div id="viewHome">
        <div class="swiper-wrap">
            <swiper height="336px"/>
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
                        <swiper :swiperOption="swiperOption" mode="slidePer" height="140px"/>
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
                                    <p><span class="idx" :class="{'red':index<3}">{{index + 1}}</span>一百万个可能</p>
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
import Swiper from "./../components/Swiper";
import SongMenuTitle from "./../components/SongMenuTitle";
import SongMenus from "./../components/SongMenus";
import { mapMutations } from 'vuex';
export default {
  name: "ViewHome",
  components: { Swiper, SongMenuTitle, SongMenus },
  data() {
      return {
          swiperOption: {
            slidesPerView: 5,
            spaceBetween: 38,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
          }
      }
  },
  mounted() {
      this.modTest(123111)
  },
  methods: {
      ...mapMutations(['modTest'])
  },
};
</script>

<style lang="scss" scoped>
#viewHome {
    background: #f5f5f5;
    .swiper-wrap {
        width: 1100px;
        margin: 0 auto;
    }
    .container {
        width: 1100px;
        margin: 0 auto;
        box-sizing: border-box;
        display: flex;
        border: 1px solid #ddd;
        background: #fff;
        .c-l {
            width: 800px;
            flex: 0 0 800px;
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
                    padding: 30px 50px;
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
                                color: #C20C0C;
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
                        color: #C20C0C;
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
}
</style>


