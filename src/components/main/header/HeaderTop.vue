<template>
  <div class="header__top">
    <div class="content-width">
      <div class="top-menu">
        <ul class="top-menu__links">
          <li class="top-menu__link" v-for="link of menu" :key="link">
            <a href="">{{ link }}</a>
          </li>
        </ul>
        <div class="top-menu__user">
          <a
            class="
              top-menu__link top-menu__link--user-icon
              icon-font icon-font-user
            "
          ></a>
          <a class="top-menu__link--personal" href="">Личный кабинет</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import Burger from '@/components/header/Burger.vue'
export default {
  name: "Header-Top",
  components: {},
  data() {
    return {
      menu: ["О нас", "Оплата и доставка", "Новости", "Контакты"],
    };
  },
};
</script>
<style lang="scss">
.header {
  // .header__top

  &__top {
    background-color: $bg-color;
    color: #fff;
    a {
      color: #fff;
    }
  }
}
.top-menu {
  display: flex;
  padding: 15px 0px;
  justify-content: space-between;
  align-items: center;
  // .top-menu__links

  &__links {
    display: flex;
    flex-wrap: wrap;
    margin-right: 10px;
  }

  // .top-menu__user

  &__user {
    display: flex;
    align-items: center;
  }

  // .top-menu__link

  &__link {
    &:not(:last-child) {
      // margin-right: 60px;
      @media (max-width: $PCWidth + px) {
        margin-right: calcSize(5, 60, $minWidth, $maxWidth);
      }
    }
    &.top-menu__link--user-icon {
      @media (max-width: $PCWidth + px) {
        margin-right: calcSize(15, 5, $minWidth, $maxWidth);
      }
    }

    &--personal {
      font-size: 18px;
    }
  }
}
.icon-font {
}
.icon-font-user {
}
</style>