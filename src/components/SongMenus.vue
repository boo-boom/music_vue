<template>
  <div class="song-menus">
    <div class="menu-item" v-for="item,index in 8">
      <div class="pic">
        <img src="../assets/img/test.jpg" alt="">
        <div class="info">
          <span class="iconfont icon-headset"></span>
          <span class="num">28万</span>
          <span class="iconfont icon-zanting"></span>
        </div>
      </div>
      <div class="desc line-clamp3">
        <span>电台节目</span>李安：我从不教孩子孝顺，我只教他如何去爱
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongMenus"
};
</script>

<style lang="scss" scoped>
.song-menus {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  .menu-item {
    flex: 0 0 140px;
    width: 140px;
    margin-bottom: 30px;
    .pic {
      width: 100%;
      height: 140px;
      position: relative;
      & > img {
        width: 100%;
        height: 100%;
      }
      .info {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 6px 10px;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
        .iconfont {
          font-size: 12px;
        }
        .icon-zanting {
          float: right;
        }
      }
    }
    .desc {
      width: 100%;
      height: 55px;
      font-size: 14px;
      line-height: 18px;
      margin: 8px 0 3px;
    }
  }
}
</style>

