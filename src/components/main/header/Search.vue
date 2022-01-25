<template>
  <form @keydown.enter.prevent="false" class="search">
    <input
      type="search"
      class="search__input auxiliary"
      placeholder="Поиск"
      v-model="inputSearch"
    />
    <span class="search__icon icon-font-search icon-font" @click="goSearch">
    </span>
  </form>
</template>

<script>
//import { mapGetters, mapActions } from "vuex";
export default {
  data: function () {
    return {
      inputSearch: "",
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.search {
  position: relative;
  height: 40px;
  border: 1px solid #04040480;
  border-radius: 4px;
  overflow: hidden;
  input[type="text"]::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  input[type="text"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  &__input {
    background-color: #fff;
    // color: $c-Light;
    padding: 0 calcSize(28, 41, $minWidth, $maxWidth) 0
      calcSize(32, 62, $minWidth, $maxWidth);
    width: 100%;
    height: 100%;
    &::placeholder {
      //  color: white;
      opacity: 0.8;
    }
  }
  &__icon {
    opacity: 0.8;
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    padding: 0px 0px 0px 5px;
  }
}
</style>
