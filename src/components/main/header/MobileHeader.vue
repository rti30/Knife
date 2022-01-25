<template>
  <div class="header__mobile">
    <div class="content-width">
      <ul class="mobile-header">
        <li class="mobile-header__link icon-font icon-font-phone">
          <a href=""></a>
        </li>
        <li class="mobile-header__link icon-font icon-font-user">
          <a href=""></a>
        </li>
        <li class="mobile-header__link icon-font icon-font-like">
          <a href=""></a>
        </li>
        <li class="mobile-header__link icon-font icon-font-cart">
          <a href=""></a>
        </li>
        <li class="mobile-header__link"><burger></burger></li>
      </ul>
    </div>
  </div>
</template>
<script>
import Burger from "@/components/main/header/Burger.vue";

export default {
  name: "mobile-menu",
  components: {
    Burger,
  },
};
</script>
<style lang="scss">
.header {
  // .header__mobile

  &__mobile {
    background-color: $bg-color;
    color: $cf-second;
  }
}
.content-width {
}
.mobile-header {
  // .mobile-header__link
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
  .icon-font {
    font-size: 34px;
  }

  &__link {
  }
}
.icon-font {
}
.icon-font-phone {
}
.icon-font-user {
}
.icon-font-like {
}
.icon-font-cart {
}
</style>