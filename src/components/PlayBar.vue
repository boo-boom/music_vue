<template>
    <div class="play-bar">
        <div class="wrap">
            <div class="play-btns">
                <span class="prev"></span>
                <span class="pause"></span>
                <span class="next"></span>
            </div>
            <div class="progress-wrap">
                <div class="pic">
                    <img src="./../assets/img/test.jpg" alt="">
                </div>
                <div class="progress">
                    <p class="name">
                        <span>阿珍爱上了阿强</span>
                        <span class="icon mv"></span>
                        <span class="icon author">五条人</span>
                        <span class="icon link"></span>
                    </p>
                    <div class="bar">
                        <div class="box">
                            <span class="btn"></span>
                            <span class="rdy"></span>
                            <span class="cur"></span>
                        </div>
                        <p class="time">00:00 / 00:00</p>
                    </div>
                </div>
                <div class="settings">
                    <span class="fav"></span>
                    <span class="share"></span>
                    <span class="line"></span>
                    <span class="sound"></span>
                    <span class="mode"></span>
                    <span class="list">99</span>
                </div>
            </div>
            <div class="m-vol" v-show="false">
                <div class="cur"></div>
                <div class="btn"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlayBar'
}
</script>

<style lang="scss" scoped>
.play-bar {
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 0;
    height: 53px;
    display: flex;
    align-items: center;
    background: url('./../assets/img/playbar.png') repeat-x;
    color: #fff;
    box-sizing: border-box;
    padding-top: 5px;
    .wrap {
        width: 980px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        position: relative;
        .play-btns {
            display: flex;
            align-items: center;
            margin-right: 30px;
            & > span {
                cursor: pointer;
                display: block;
                width: 28px;
                height: 28px;
                margin-right: 8px;
                background: url('./../assets/img/playbar.png') no-repeat;
            }
            .prev {
                background-position: 0 -130px;
            }
            .play {
                width: 36px;
                height: 36px;
                margin-top: 0;
                background-position: 0 -204px;
            }
            .pause {
                width: 36px;
                height: 36px;
                margin-top: 0;
                background-position: 0 -165px;
            }
            .next {
                background-position: -80px -130px;
            }
            .prev:hover {
                background-position: -30px -130px;
            }
            .next:hover {
                background-position: -110px -130px;
            }
            .play:hover {
                background-position: -40px -204px;
            }
            .pause:hover {
                background-position: -40px -165px;
            }
        }
        .progress-wrap {
            display: flex;
            align-items: center;
            .pic {
                width: 34px;
                height: 34px;
                position: relative;
                margin-right: 15px;
                & > img{
                    width: 100%;
                    height: 100%;
                    border-radius: 2px;
                }
                &:before {
                    content: '';
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background: url('./../assets/img/playbar.png') no-repeat;
                    background-position: 0 -80px;
                }
            }
            .progress {
                font-size: 12px;
                color: #e8e8e8;
                text-shadow: 0 1px 0 #171717;
                .name {
                    margin-bottom: 5px;
                    color: #e8e8e8;
                    display: flex;
                    align-items: center;
                    & > span {
                        cursor: pointer;
                    }
                    & > span:first-child:hover {
                        text-decoration: underline;
                    }
                    .icon {
                        display: block;
                        background: url('./../assets/img/playbar.png') no-repeat;
                    }
                    .mv {
                        width: 19px;
                        height: 17px;
                        margin-left: 3px;
                        background-position: 0 -57px;
                    }
                    .author {
                        background: none;
                        margin-left: 20px;
                        color: #9b9b9b;
                    }
                    .link {
                        width: 14px;
                        height: 15px;
                        margin-left: 10px;
                        background-position: -110px -102px;
                    }
                    .mv:hover {
                        background-position: -20px -57px;
                    }
                    .author:hover {
                        text-decoration: underline;
                    }
                    .link:hover {
                        background-position: -130px -102px;
                    }
                }
                .bar {
                    width: 610px;
                    display: flex;
                    align-items: center;
                    .box {
                        flex: 1;
                        width: 100%;
                        height: 9px;
                        background: url('./../assets/img/statbar.png') no-repeat 0 9999px;
                        background-position: right 0;
                        position: relative;
                        cursor: pointer;
                        & > span {
                            display: block;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 10%;
                            height: 9px;
                            background: url('./../assets/img/statbar.png') no-repeat 0 9999px;
                        }
                        .cur {
                            background-position: left -66px;
                        }
                        .rdy {
                            width: 20%;
                            background-position: right -30px;
                        }
                        .btn {
                            position: absolute;
                            z-index: 3;
                            top: -7px;
                            left: 10%;
                            width: 22px;
                            height: 24px;
                            margin-left: -11px;
                            background: url('./../assets/img/iconall.png') no-repeat;
                            background-position: 0 -250px;
                        }
                        .btn:hover {
                            background-position: 0 -280px;
                        }
                    }
                    .time {
                        height: 9px;
                        line-height: 9px;
                        font-size: 9px;
                        flex: 0 0 110px;
                        width: 110px;
                        padding-left: 10px;
                        box-sizing: border-box;
                        color: #a1a1a1;
                    }
                }
            }
            .settings {
                display: flex;
                align-items: center;
                & > span {
                    cursor: pointer;
                    display: block;
                    width: 25px;
                    height: 25px;
                    margin-right: 2px;
                    text-indent: -9999px;
                    background: url('./../assets/img/playbar.png') no-repeat 0 9999px;
                }
                .fav {
                    background-position: -88px -163px;
                }
                .share {
                    background-position: -114px -163px;
                }
                .line {
                    width: 10px;
                    background-position: -145px -248px;
                }
                .sound {
                    background-position: -2px -248px;
                }
                .mode {
                    background-position: -3px -344px;
                }
                .list {
                    font-size: 12px;
                    width: 38px;
                    padding-left: 21px;
                    background-position: -42px -68px;
                    line-height: 27px;
                    text-align: center;
                    color: #666;
                    text-shadow: 0 1px 0 #080707;
                    text-indent: 0;
                    text-decoration: none;
                }
                .fav:hover {
                    background-position: -88px -189px;  
                }
                .share:hover {
                    background-position: -114px -189px;
                }
                .sound:hover {
                    background-position: -31px -248px;
                }
                .mode:hover {
                    background-position: -33px -344px;
                }
                .list:hover {
                    background-position: -42px -98px;
                    text-decoration: none;
                }
            }
        }
        .m-vol {
            position: absolute;
            bottom: 40px;
            right: 142px;
            width: 32px;
            height: 113px;
            background: url('./../assets/img/playbar.png') no-repeat;
            background-position: 0 -503px;
            .btn {
                position: absolute;
                top: 40%;
                left: 7px;
                display: block;
                width: 18px;
                height: 20px;
                background: url('./../assets/img/iconall.png') no-repeat;
                background-position: -40px -250px;
                cursor: pointer;
            }
            .btn:hover {
                background-position: -40px -280px;
            }
            .cur {
                position: absolute;
                bottom: 9px;
                left: 14px;
                width: 4px;
                height: 40%;
                overflow: hidden;
                background: url('./../assets/img/playbar.png') no-repeat;
                background-position: -40px bottom;
            }
        }
    }
}
</style>

