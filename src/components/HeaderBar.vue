<template>
  <div id="headerWrap">
    <div id="headerBar">
      <a class="logo"></a>
      <ul class="h-nav">
        <li v-for="(item,index) in tabBar" :key="item.name" :class="index==0?'act':''">{{item.name}}</li>
      </ul>
      <div class="h-search">
        <span class="iconfont icon-chaxun"></span>
        <input type="text" class="srch" placeholder="音乐/视频/电台/用户" maxlength="50">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      tabBar: [
        { name: "推荐" },
        { name: "排行榜" },
        { name: "歌单" },
        { name: "主播电台" },
        { name: "歌手" },
        { name: "新碟上架" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#headerWrap {
  width: 100%;
  height: 70px;
  background: #242424;
  color: #ccc;
  line-height: 70px;
  border-bottom: 2px solid #c20c0c;
  #headerBar {
    display: flex;
    align-items: center;
    width: 1100px;
    margin: 0 auto;
    background: #242424;
    .logo {
      flex: 0 0 176px;
      width: 176px;
      height: 70px;
      background: url("./../assets/img/topbar.png") no-repeat top left;
    }
    .h-nav {
      flex: 1;
      display: flex;
      li {
        padding: 0 30px;
        text-align: center;
        font-size: 14px;
        line-height: 70px;
        color: #ccc;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          background: #000;
          color: #fff;
        }
      }
      .act {
        background: #000;
        color: #fff;
      }
    }
    .h-search {
      flex: 0 0 158px;
      display: flex;
      width: 158px;
      height: 32px;
      padding: 0 10px;
      box-sizing: border-box;
      background: #fff;
      border-radius: 16px;
      .iconfont {
        line-height: 32px;
        color: #242424;
        margin-right: 5px;
      }
      .srch {
        width: 110px;
        outline: none;
        border: none;
      }
    }
  }
}
</style>
