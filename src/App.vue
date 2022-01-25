<template>
  <div class="page">
    <knife-header></knife-header>
    <knife-preview></knife-preview>
  </div>
  <section class="hit">
    <div class="content-width">
      <h2 class="hit__title subtitle">Хиты продаж</h2>
      <slider-block :cards="hit"></slider-block>
    </div>
  </section>
  <section class="new-block">
    <div class="new-block__bg img-object-fit">
      <img src="@/assets/img/block-preview/bg.jpg" alt="лес" />
    </div>
    <div class="content-width">
      <h3 class="new-block__title subtitle subtitle--white">Новинки</h3>
      <div class="new-block__body">
        <div class="new-block__content">
          <div class="new-block__text">
            Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
            представлен наиболее широкий выбор Златоустовских ножей от
            Златоустовских Оружейных Фабрик и компаний, мы являемся официальными
            поставщиками.
          </div>
          <div class="new-block__more icon-font-arrow decor">
            Больше новинок
          </div>
        </div>
        <slider-block
          class="new-block__slider"
          :cards="newProduct"
          :newsBlock="true"
        ></slider-block>
      </div>
    </div>
  </section>
  <knife-demo></knife-demo>
  <knife-footer></knife-footer>
</template>

<script>
import "@/assets/scss/index.scss";
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
//import KnifeHeader from '@/components/main/header/KnifeHeader.vue';
//const KnifeHeader =()=>import('@/components/main/header/KnifeHeader.vue')
import SliderBlock from "@/components/main/SliderBlock.vue";
import KnifeDemo from "@/components/main/KnifeDemo.vue";

export default {
  name: "App",
  components: {
    KnifeHeader: defineAsyncComponent(() =>
      import("@/components/main/header/KnifeHeader.vue")
    ),
    KnifeFooter: defineAsyncComponent(() =>
      import("@/components/main/KnifeFooter.vue")
    ),
    KnifePreview: defineAsyncComponent(() =>
      import("@/components/main/KnifePreview.vue")
    ),
    SliderBlock,
    KnifeDemo,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж", "Новинки"],
        },
        {
          id: 2,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж", "Новинки"],
        },
        {
          id: 3,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж", "Новинки"],
        },
        {
          id: 4,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж", "Новинки"],
        },
        {
          id: 5,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж", "Новинки"],
        },
        {
          id: 6,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж", "Новинки"],
        },
        {
          id: 7,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж", "Новинки"],
        },
        {
          id: 8,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж", "Новинки"],
        },
        {
          id: 9,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж", "Новинки"],
        },
        {
          id: 10,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж"],
        },
        {
          id: 11,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж"],
        },
        {
          id: 12,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж"],
        },
        {
          id: 13,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж"],
        },
        {
          id: 14,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж"],
        },
        {
          id: 15,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж"],
        },
        {
          id: 16,
          name: "Нож Лиса",
          size: "95x18",
          material: "Орех, Аллюминий",
          rating: 5,
          price: 2719,
          img: require("@/assets/img/catalog/1.svg"),
          reviews: 12,
          tag: ["хит продаж"],
        },
      ],
    };
  },

  computed: {
    ...mapGetters("anyParams", { defaultWidthParams: "defaultWidthParams" }),
    hit() {
      return this.products
        .filter((item) => item.tag.includes("хит продаж"))
        .slice(0, 16);
    },
    newProduct() {
      return this.products
        .filter((item) => item.tag.includes("Новинки"))
        .slice(0, 9);
    },
  },
  methods: {
    ...mapActions("anyParams", { wathMediaQuery: "mediaQuery" }),
  },
  mounted() {
    const mediaValues = Object.values(this.defaultWidthParams);
    this.wathMediaQuery({
      array: mediaValues,
      op: "add",
      media: "min-width",
    });
  },
};
</script>

<style lang="scss">
.page {
}
.new-block {
  // .new-block__bg
  overflow: hidden;
  position: relative;
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
      background: rgba(0, 0, 0, 0.3);
      //z-index: 2;
    }
  }

  // .new-block__body

  &__body {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: calcSize(16, 18, $minWidth, $maxWidth);

    @media (min-width: $PCWidth + px) {
      font-size: 18px;
    }
    @media (min-width: $tabletWidth + px) {
      flex-direction: row;
    }
  }

  &__content {
    flex: 0 0 33.333%;
  }
  // .new-block__title
  &__title {
    position: relative;
  }

  // .new-block__text

  &__text {
    color: $cf-second;
    opacity: 0.7;
    line-height: calc(27 / 18);
    @media (min-width: $tabletWidth + px) {
      max-width: calcSize(265, 336, $minWidth, $maxWidth);
      margin: 0px 0px 60px 0px;
    }
    @media (min-width: $PCWidth + px) {
      max-width: 336px;
    }
  }

  // .new-block__more

  &__more {
    position: relative;
    font-weight: 600;
    color: $c-Light;
    display: inline-block;
    padding-right: 15px;
    &.decor::before {
      left: 100%;
      transform: translate(0, -50%);
    }
  }
  &__slider {
    position: relative;
    overflow: hidden;
    flex: 1 1 auto;
  }
}
.img-object-fit {
}
.content-width {
}
.icon-font-arrow {
}
.decor {
}
</style>
