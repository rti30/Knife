<template>
  <header class="header">
    <header-mobile v-if="!minWidthTablet"></header-mobile>
    <header-top v-else></header-top>
    <header-middle></header-middle>
    <header-bottom></header-bottom>
  </header>
</template>
<script>
import HeaderTop from "@/components/main/header/HeaderTop.vue";
import HeaderMiddle from "@/components/main/header/HeaderMiddle.vue";
import HeaderBottom from "@/components/main/header/HeaderBottom.vue";
import HeaderMobile from "@/components/main/header/MobileHeader.vue";
import { mapGetters } from "vuex";
export default {
  name: "Header",
  components: {
    HeaderTop,
    HeaderMiddle,
    HeaderBottom,
    HeaderMobile,
  },
  computed: {
    ...mapGetters("anyParams", { minWidthTablet: "minWidthTablet" }),
  },
};
</script>
<style lang="">
</style>