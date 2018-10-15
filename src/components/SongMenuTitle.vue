<template>
    <div class="song-menu-title">
        <div class="t-l">
            <p class="title">{{title}}</p>
            <div class="tags">
                <span>华语</span>
                <span class="line">|</span>
                <span>华语</span>
                <span class="line">|</span>
                <span>华语</span>
                <span class="line">|</span>
                <span>华语</span>
                <span class="line">|</span>
                <span>华语</span>
            </div>
        </div>
        <p class="t-r">
            <span>更多</span> 
            <span class="iconfont icon-jiantou1"></span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'SongMenuTitle',
    props: {
        title: {
            type: String,
            default: '热门推荐',
        }
    }
}
</script>

<style lang="scss" scoped>
.song-menu-title {
    display: flex;
    align-items: center;
    height: 34px;
    border-bottom: 2px solid #C20C0C;
    &::before {
        content: '';
        display: block;
        width: 13px;
        height: 13px;
        border-radius: 100%;
        border: 4px solid #C20C0C;
        box-sizing: border-box;
        margin-right: 10px;
    }
    .t-l {
      flex: 1; 
      display: flex;
      align-items: flex-end;
      .title {
        font-size: 20px;
      }
      .tags {
        padding-left: 20px;
        font-size: 12px;
        color: rgb(102, 102, 102);
        & > span:not(.line) {
            cursor: pointer;
        }
        .line {
            padding: 10px;
            height: 5px;
        }
      }
    }
    .t-r {
        display: flex;
        font-size: 12px;
        color: rgb(102, 102, 102);
        align-items: center;
        cursor: pointer;
        .iconfont {
            padding-left: 5px;
            color: #C20C0C;
        }
    }
}
</style>


