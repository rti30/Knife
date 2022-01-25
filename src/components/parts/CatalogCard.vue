<template>
  <div class="catalog-card">
    <div class="catalog-card__image">
      <img :src="card.img" :alt="card.name" />
    </div>
    <div class="catalog-card__info">
      <div class="catalog-card__title">{{ card.name }}</div>
      <div class="catalog-card__row">
        <div class="catalog-card__size">{{ card.size }}</div>
        <div class="catalog-card__material">{{ card.material }}</div>
      </div>
      <div class="catalog-card__row">
        <div class="catalog-card__rating">
          <star-rating
            :rating="card.rating"
            :read-only="true"
            :increment="0.01"
            :show-rating="false"
            :star-size="20"
          ></star-rating>
        </div>
        <div class="catalog-card__reviews">{{ card.reviews }} отзывов</div>
      </div>
    </div>
    <div class="catalog-card__footer">
      <div class="catalog-card__row">
        <div class="catalog-card__price">{{ card.price }} &#8381;</div>
        <div class="catalog-card__controll">
          <span class="catalog-card__like icon-font icon-font-like"></span>
          <span
            class="catalog-card__compare icon-font icon-font-compare"
          ></span>
        </div>
      </div>
      <knife-button
        class="catalog-card__button"
        :classIcon="'icon-font-cart'"
        :text="'В корзину'"
      ></knife-button>
    </div>
  </div>
</template>
<script>
import KnifeButton from "@/components/ui/buttons/KnifeButton";
import StarRating from "vue-star-rating";
export default {
  components: {
    KnifeButton,
    StarRating,
  },
  props: {
    card: {
      default: {
        id: 1,
        name: "Нож Лиса",
        size: "95x18",
        material: "Орех, Аллюминий",
        rating: 5,
        price: 2719,
        img: require("@/assets/img/catalog/1.svg"),
        reviews: 12,
      },
    },
  },
};
</script>
<style lang="scss">
.catalog-card {
  // .catalog-card__image
  background-color: #fefefe;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 0px 0px 20px 0px;

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 20px 0px 20px;

    img {
      width: 100%;
      height: 100%;
      height: calcSize(186.25, 239.93, $minWidth, $maxWidth);
      width: calcSize(210.18, 269.84, $minWidth, $maxWidth);
      @media (min-width: $tabletWidth + px) {
        height: 239.93px;
        width: 210.18px;
      }
    }
  }

  // .catalog-card__info

  &__info {
    padding: 0px 20px 20px 20px;
    border-bottom: 1px solid rgba(20, 20, 20, 0.5);
    margin: 0px 0px 20px 0px;
    & > div {
      margin: 0px 0px 8px 0px;
    }
  }

  // .catalog-card__title

  &__title {
    font-weight: 600;
    font-size: 20px;
  }

  // .catalog-card__row

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  // .catalog-card__size

  &__size {
  }

  // .catalog-card__material

  &__material {
    font-size: 16px;
    font-weight: 600;
    color: #ababab;
  }

  // .catalog-card__rating

  &__rating {
  }

  // .catalog-card__reviews

  &__reviews {
    color: #ababab;
    font-size: 16px;
  }

  // .catalog-card__footer

  &__footer {
    padding: 0px 20px 0px 20px;
  }

  // .catalog-card__price

  &__price {
    font-weight: 600;
    font-size: 20px;
  }

  // .catalog-card__controll

  &__controll {
  }

  // .catalog-card__like

  &__like {
    margin-right: 5px;
  }

  // .catalog-card__compare

  &__compare {
  }
  &__button {
    margin: 15px 0px 0px 0px;
    width: 100%;
  }
}
.icon-font-like {
}
.icon-font-compare {
}
</style>