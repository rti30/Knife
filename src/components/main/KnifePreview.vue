<template>
  <section class="preview">
    <div class="preview__bg img-object-fit">
      <img src="@/assets/img/block-preview/bg.jpg" alt="лес" />
    </div>
    <div class="content-width">
      <div class="preview__content">
        <div class="preview__slider slider-preview">
          <Swiper
            class="slider-preview__swiper"
            effect="fade"
            grabCursor
            :pagination="{
              el: '.slider-preview__bullets',
            }"
            loop
            :autoplay="{ delay: 3000 }"
            :spaceBetween="20"
            :speed="700"
            @swiper="onSwiper"
            @realIndexChange="changeRealIndex()"
          >
            <swiper-slide>
              <h1 class="preview__title title">
                Интернет магазин сертифицированных
                <span>златоустовских ножей</span>
              </h1>
              <div class="preview__text">
                Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем
                магазине представлен наиболее широкий выбор Златоустовских ножей
                от Златоустовских Оружейных Фабрик и компаний, мы являемся
                официальными поставщиками.
              </div>
              <knife-button
                class="button--preview"
                :text="'Подробнее'"
              ></knife-button>
            </swiper-slide>
            <swiper-slide v-for="slide of slides" :key="slide.title">
              <div class="preview__title">
                {{ slide.title }}
              </div>
              <div class="preview__text">
                {{ slide.text }}
              </div>
              <knife-button
                class="preview__button button--preview"
                :text="'Подробнее'"
              ></knife-button>
            </swiper-slide>
          </Swiper>
          <div class="slider-preview__control">
            <div class="slider-preview__bullets slider-bullets"></div>
            <div class="slider-preview__fraction">
              <span class="slider-preview__index">{{ realIndex }}</span
              >/<span class="slider-preview__length">{{
                slides.length + 1
              }}</span>
            </div>
          </div>
        </div>
        <div class="preview__demo">
          <div class="preview__image">
            <img
              class="preview__img"
              src="@/assets/img/block-preview/1.png"
              alt=""
            />
            <div class="preview__tool-tip preview__tool-tip--1">
              <Popper content="This is the Popper content">
                <span>+</span>
              </Popper>
            </div>

            <div class="preview__tool-tip preview__tool-tip--2">
              <Popper content="This is the Popper content">
                <span>+</span>
              </Popper>
            </div>
            <div class="preview__tool-tip preview__tool-tip--3">
              <Popper content="This is the Popper content">
                <span>+</span>
              </Popper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import KnifeButton from "@/components/ui/buttons/KnifeButton";
import Popper from "vue3-popper";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  // Navigation,
  Parallax,
  Pagination,
  Autoplay,
} from "swiper";
//SwiperCore.use([Navigation, Parallax, Pagination, Autoplay, EffectFade]);
SwiperCore.use([Parallax, Pagination, Autoplay]);
//let swiperInit = {};
export default {
  components: {
    KnifeButton,
    Swiper,
    SwiperSlide,
    Popper,
  },
  data() {
    return {
      slides: [
        {
          title: "2 Интернет магазин сертифицированных златоустовских ножей",
          text: "Добро пожаловать на официальный сайт ЗЛАТМАКС! В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками",
        },
        {
          title: "3 Интернет магазин сертифицированных златоустовских ножей",
          text: "Добро пожаловать на официальный сайт ЗЛАТМАКС! В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками",
        },
        {
          title: "4 Интернет магазин сертифицированных златоустовских ножей",
          text: "Добро пожаловать на официальный сайт ЗЛАТМАКС! В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками",
        },
      ],
      swiper: {},
      swiperIndex: 0,
    };
  },

  computed: {
    realIndex() {
      return this.swiperIndex > 10
        ? this.swiperIndex + 1
        : "0" + (this.swiperIndex + 1);
    },
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
      this.swiperIndex = swiper.realIndex;
    },
    changeRealIndex() {
      this.swiperIndex = this.swiper.realIndex;
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
@import "swiper/swiper.scss";
//@import "swiper/components/pagination/pagination.scss";
.preview {
  position: relative;
  overflow: hidden;
  color: $cf-second;
  &__content {
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    row-gap: 40px;
    align-items: center;
    @media (min-width: $tabletWidth + px) {
      grid-template-columns: 55% 45%;
    }
    @media (min-width: $PCWidth + px) {
      grid-template-columns: 65% 35%;
    }
  }

  // .preview__swiper
  &__swiper {
  }

  &__title {
    font-weight: 700;
    font-size: 18px;
    max-width: 100%;
    margin: 30px 0px 30px 0px;
    @media (min-width: $tabletWidth + px) {
      font-size: calcSize(18, 37, $minWidth, $maxWidth);
      max-width: 915px;
    }
    @media (min-width: $PCWidth + px) {
      font-size: 37px;
    }

    line-height: calc(46 / 37);
    span {
      font-weight: 500;
    }
  }

  // .preview__text

  &__text {
    font-size: 16px;
    padding-bottom: 8px;
    line-height: calc(30 / 20);
    @media (min-width: $tabletWidth + px) {
      font-size: calcSize(16, 20, $minWidth, $maxWidth);
      padding-bottom: calcSize(8, 60, $minWidth, $maxWidth);
    }
    @media (min-width: $PCWidth + px) {
      padding-bottom: 60px;
    }
  }

  // .preview__button
  &__button {
    margin: 0px 0px calcSize(20, 10, $minWidth, $maxWidth) 0px;
  }

  // .preview__demo

  &__demo {
    @media (min-width: $tabletWidth + px) {
      padding: 60px;
    }
  }

  // .preview__image

  &__image {
    //  text-align: center;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-align: start;

    @media (min-width: $tabletWidth + px) {
    }

    position: relative;
    //height: 450px;
    &::before {
      content: "";
      position: absolute;
      width: 96%;
      height: 96%;
      max-width: 260px;
      max-height: 260px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.5);
      left: 40%;
      bottom: 2%;

      @media (min-width: $tabletWidth + px) {
        text-align: start;
        left: 40%;
        bottom: 12%;
        padding-top: 96%;
        width: 96%;
        height: auto;
        max-width: none;
        max-height: none;
      }
    }
  }
  &__img {
    position: relative;
    z-index: 1;
    max-height: 260px;
    @media (min-width: $tabletWidth + px) {
      font-size: calcSize(16, 20, $minWidth, $maxWidth);
      padding-bottom: calcSize(8, 60, $minWidth, $maxWidth);
      max-height: none;
      height: 100%;
      width: 100%;
    }
    @media (min-width: $PCWidth + px) {
      padding-bottom: 60px;
    }
  }

  // .preview__tool-tip

  &__tool-tip {
    font-size: 20px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      border-radius: 50%;
      background-color: $c-Light;
    }
    &::after {
      width: 20px;
      height: 20px;
    }
    &::before {
      width: 30px;
      height: 30px;
      opacity: 0.5;
    }
    span {
      position: relative;
      z-index: 5;
    }
  }

  // .preview__tool-tip--1

  &__tool-tip--1 {
    top: 43%;
    left: 32.5%;
    @media (min-width: $tabletWidth + px) {
      top: 39%;
      left: 17%;
    }
  }

  // .preview__tool-tip--2

  &__tool-tip--2 {
    top: 0.4%;
    right: 25%;
    @media (min-width: $tabletWidth + px) {
      top: 9%;
      right: 0%;
    }
  }

  // .preview__tool-tip--3

  &__tool-tip--3 {
    bottom: 0.4%;
    right: 26%;
    @media (min-width: $tabletWidth + px) {
      bottom: 10%;
      right: 0%;
    }
  }
  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      //z-index: 2;
    }
  }
}

.slider-preview {
  // .slider-preview__swiper
  /*   margin: 0px -20px; //! чтобы не резало тень кнопки
  padding: 0px 20px; */

  .swiper-wrapper {
    // gap: 20px;
  }
  .swiper-slide {
    max-width: 100%; //!!!
    &:not(:last-child) {
      //margin-right: 100px;
    }
  }

  .swiper-container {
    margin-bottom: 6px;
    @media (min-width: $tabletWidth + px) {
      margin-bottom: calcSize(6, 60, $minWidth, $maxWidth);
    }
    @media (min-width: $PCWidth + px) {
      margin-bottom: 60px;
    }
  }
  // .slider-preview__bullets

  &__bullets {
    /*  @media (min-width: $PCWidth + px) {
      margin-bottom: 30px;
    }
    display: inline-grid;
    grid-auto-flow: column;
    gap: 20px;

    .swiper-pagination-bullet {
      cursor: pointer;
      height: 2px;
      width: 15px;
      background-color: $cf-second;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: $c-Light;
        opacity: 0;
      }
      &-active {
        background-color: $c-Light;
        position: relative;
        &::after {
          content: "";
          opacity: 1;
          left: 100%;
          transition: left 3s linear 0s;
        }
      }
    } */
  }
  &__control {
    display: inline-grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 20px;
  }
  // .slider-preview__fraction

  &__fraction {
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.1em;
    @media (min-width: $tabletWidth + px) {
      font-size: calcSize(14, 18, $minWidth, $maxWidth);
    }
    @media (min-width: $PCWidth + px) {
      font-size: 18px;
    }
  }
  &__index {
    font-weight: 600;
    color: $c-Light;
    font-size: 18px;
    letter-spacing: 0.1em;
    @media (min-width: $tabletWidth + px) {
      font-size: calcSize(18, 24, $minWidth, $maxWidth);
    }
    @media (min-width: $PCWidth + px) {
      font-size: 24px;
    }
  }
  &__length {
  }
}
.title {
}
.button--preview {
}
</style>
