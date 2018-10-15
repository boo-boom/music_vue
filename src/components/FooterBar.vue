<template>
    <div class="footer">
        <div class="main">
            <div class="left">
                <p class="p-1">关于网易 | 客户服务 | 服务条款 | 网站导航 | 意见反馈</p>
                <p class="p-2">网易公司版权所有©1997-2018杭州乐读科技有限公司运营：浙网文[2018]3506-263号</p>
                <p class="p-3">违法和不良信息举报电话：0571-89853516 举报邮箱：cloudmusicservice@163.com</p>
            </div>
            <div class="right">
                <div class="icon-list">
                    <a href="javascript:;"><span></span>独立音乐人</a>
                    <a href="javascript:;"><span></span>音乐专栏</a>
                    <a href="javascript:;"><span></span>自媒体</a>
                    <a href="javascript:;"><span></span>赞赏</a>
                    <a href="javascript:;"><span></span>视频奖励</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterBar'
}
</script>


<style lang="scss" scoped>
.footer {
    border-top: 1px solid #ddd;
    position: relative;
    top: -1px;
    background: #f5f5f5;
    .main {
        width: 1100px;
        margin: 0 auto;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        color: #666;
        line-height: 22px;
        .right {
            display: flex;
            align-items: center;
            .icon-list {
                display: flex;
                a {
                    width: 60px;
                    height: 70px;
                    margin-left: 30px;
                    text-align: center;
                    font-size: 11px;
                    color: #666;
                    text-decoration: none;
                    & > span {
                        display: block;
                        width: 44px;
                        height: 44px;
                        margin: 0 auto;
                        background: url('./../assets/img/foot_enter_new.png') no-repeat;
                        background-size: 110px 450px;
                    }
                    &:nth-child(2) > span {
                        background-position: -60px 0;
                    }
                    &:nth-child(3) > span {
                        background-position: 0 -50px;
                    }
                    &:nth-child(4) > span {
                        background-position: -60px -50px;
                    }
                    &:nth-child(5) > span {
                        background-position: 0 -100px;
                    }
                }
            }
        }
    }
}
</style>
