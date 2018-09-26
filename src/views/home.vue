<template>
    <div id="viewHome">
        <div class="swiper-wrap">
            <swiper-big />
        </div>
    </div>
</template>

<script>
import SwiperBig from "./../components/SwiperBig";
export default {
  name: "ViewHome",
  components: { SwiperBig }
};
</script>

<style lang="scss" scoped>
#viewHome {
    .swiper-wrap {
        width: 1100px;
        margin: 0 auto;
    }
}
</style>


