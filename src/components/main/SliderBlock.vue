

<template>
  <div class="slider-block">
    <swiper
      :slidesPerView="getSlideView"
      :slidesPerGroup="getSlideView"
      :space-between="20"
      :autoplay="{ delay: 3000 }"
      :speed="700"
      grabCursor
      :pagination="{
        el: '.slider-block__bullets',
      }"
      class="swiper-block"
    >
      <swiper-slide
        class="swiper-block__slide"
        v-for="card in cards"
        :key="card.id"
      >
        <catalog-card :card="card"></catalog-card>
      </swiper-slide>
      <div class="slider-block__bullets slider-bullets"></div>
    </swiper>
  </div>
</template>
<script>
import CatalogCard from "@/components/parts/CatalogCard.vue";
import { mapGetters } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Parallax, Pagination, Autoplay } from "swiper";
SwiperCore.use([Parallax, Pagination, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    CatalogCard,
  },
  props: {
    cards: { default: [] },
    newsBlock: { type: Boolean, default: false },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("anyParams", {
      minWidthTablet: "minWidthTablet",
      minWidthPC: "minWidthPC",
      minWidthMobile: "minWidthMobile",
    }),
    getSlideView() {
      if (this.newsBlock) {
        return this.minWidthPC
          ? 3
          : this.minWidthTablet && this.minWidthMobile
          ? 2
          : 1;
      } else {
        return this.minWidthPC
          ? 4
          : this.minWidthTablet && this.minWidthMobile
          ? 3
          : 1;
      }
      /*     if (this.minWidthTablet) {
        return 4;
      } else {
        return 2;
      } */
    },
  },
  mounted() {},
};
</script>


<style lang="scss">
.slider-block {
  margin-bottom: calcSize(20, 100, $minWidth, $maxWidth);
  @media (min-width: $tabletWidth + px) {
    margin-bottom: 100px;
  }
  .swiper-wrapper {
    margin-bottom: calcSize(10, 40, $minWidth, $maxWidth);
    @media (min-width: $tabletWidth + px) {
      margin-bottom: 40px;
    }
  }
}
.slider-block__bullets {
  padding: 5px 0;
  display: grid;
  justify-content: center;
  .swiper-pagination-bullet {
    background-color: #898989;
  }
}
</style>