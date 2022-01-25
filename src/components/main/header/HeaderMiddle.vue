<template>
  <div class="header__after"></div>
  <div class="header__middle">
    <div class="content-width">
      <div class="header-middle">
        <div class="header-middle__row header-middle__row--space">
          <div class="header-middle__logo icon-font-logo"></div>
          <div class="header-middle__search">
            <search></search>
          </div>
        </div>
        <div class="header-middle__row header-middle__row--center">
          <div class="header-middle__location header-middle__row--center-item">
            <span
              class="header-middle__location-icon icon-font icon-font-location"
            ></span>
            <span class="header-middle__location-from">Москва</span>
          </div>
          <div class="header-middle__contacts header-middle__row--center-item">
            <div></div>
            <span class="header-middle__callback">Закать звонок</span>
          </div>
          <div
            class="
              header-middle__favourites
              icon-font icon-font-like
              header-middle__row--center-item
            "
          ></div>
          <div
            class="
              header-middle__cart
              header-cart
              header-middle__row--center-item
            "
          >
            <div class="header-cart__icon icon-font icon-font-cart">
              <div class="header-cart__count"><span>0</span></div>
            </div>
            <div class="header-cart__total">0 &#8381;</div>
            <div class="header-cart__label">Оформить заказ</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "@/components/main/header/Search.vue";
export default {
  name: "Header-Middle",
  components: {
    Search,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.header {
  // .header__middle
  &__after {
    &::before {
      content: "";
      display: block;
      height: 15px;
      background-color: #fbfbfb;
    }
  }
  &__middle {
    padding: 10px 0px 25px 0px;
    background-color: #ecf1f2;
  }
}
.content-width {
}
.header-middle {
  // .header-middle__logo

  /*   display: grid;
  grid-template-areas: "logo search location contacts favourites cart";
  grid-template-columns: 25% 25% auto auto auto auto; */
  display: flex;
  align-items: center;
  &__row {
    flex: 1 1 50%;
    display: flex;
    //flex-wrap: wrap;
    align-items: center;
    &--center {
      flex-wrap: wrap;
      @media (max-width: $tabletWidth + px) {
        display: none;
      }
      @media (min-width: $tabletWidth + px) {
        justify-content: center;
        gap: 0 30px;
      }
      @media (max-width: 1340+px) {
        //  justify-content: start;
        gap: 0 0px;
      }
      /*   @media (min-width: $PCWidth + px) {
        justify-content: center;
        gap: 0 30px;
      } */
    }
    &--center-item {
      @media (max-width: 1340+px) {
        justify-content: start;
        gap: 10px;
        flex: 0 0 50%;
      }

      @media (min-width: $tabletWidth + px) {
        // flex: 0 0 auto;
      }
    }
    &--space {
      justify-content: space-between;
      gap: 0px 30px;
      margin-right: 10px;
    }
  }
  &__logo {
    font-size: calcSize(30, 42, $minWidth, $maxWidth);
  }
  // .header-middle__search

  &__search {
  }

  // .header-middle__location

  &__location {
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  // .header-middle__location-icon

  &__location-icon {
  }

  // .header-middle__location-from

  &__location-from {
    font-size: 18px;
  }

  // .header-middle__contacts

  &__contacts {
  }

  // .header-middle__callback

  &__callback {
    white-space: nowrap;
    color: $c-Light;
    font-weight: 700;
    font-size: 18px;
  }

  // .header-middle__favourites

  &__favourites {
  }

  // .header-middle__cart

  &__cart {
    display: grid;
    gap: 10px;
    grid-template-areas:
      "cart-icon cart-total"
      "cart-icon cart-label";
  }
}
.icon-font-logo {
}
.icon-font-location {
}
.icon-font-like {
}
.header-cart {
  // .header-cart__icon

  &__icon {
    grid-area: cart-icon;
    position: relative;
    justify-self: center;
    align-self: center;
    justify-self: stretch;
  }
  &__count {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    font-size: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14px;
    width: 14px;
    background-color: $c-Light;
    border-radius: 50%;
    overflow: hidden;
  }

  // .header-cart__total

  &__total {
  }

  // .header-cart__label

  &__label {
    grid-area: cart-label;
    font-size: 18px;
    color: $c-Light;
  }
}
.icon-font-cart {
}
</style>