<template>
  <div
    class="burger"
    @mouseover="mouseover"
    @mouseout="mouseout"
    @click="toggleBurger(!burgerIsActive)"
    :class="{ active: burgerIsActive, hover: hover }"
  >
    <!-- :class="{ active: isActive, hover: hover }"  //!Не для vuex-->
    <span class="burger__item"></span>
    <span class="burger__item"></span>
    <span class="burger__item"></span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    // isActive: { default: false },
    // classSelect: { default: "" },
  },

  data: function () {
    return {
      //! isActive: false, // не для vuex
      hover: false,
    };
  },
  computed: {
    ...mapGetters("anyParams", { burgerIsActive: "burgerIsActive" }),
  },
  methods: {
    ...mapActions("anyParams", ["toggleBurger"]),
    //  clickBurger() { //! не для vuex
    //   this.isActive = !this.isActive; //! не для vuex
    //   this.$emit("changeBurger", !this.isActive); //! не для vuex
    // },
    mouseover() {
      this.hover = true;
    },
    mouseout() {
      this.hover = false;
    },
  },
};
</script>

<style lang="scss">
$width: calcSize(35, 77, $minWidth, $maxWidth);

$itemHeight: calcSize(4, 6, $minWidth, $maxWidth);
$itemSpaceBeetween: calcSize(9, 16, $minWidth, $maxWidth);
$height: calc(#{$itemHeight} * 3 + #{$itemSpaceBeetween}* 2);
$itemColor: $cf-second;
$itemColorActive: $c-Light;
.burger {
  cursor: pointer;
  position: relative;
  width: $width;
  height: $height;
  &__item {
    display: block;
    border-radius: 20px;
    width: 100%;
    height: $itemHeight;
    background-color: $itemColor;
    margin: 0 0 $itemSpaceBeetween 0;
    transition: top 300ms 300ms, transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    &:last-child {
      margin: 0;
    }
  }
  &.active &__item {
    background-color: $itemColorActive;
    transition: transform 300ms,
      transform 300ms 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: absolute;
    top: 50%;
    left: 0;
    &:nth-child(1) {
      transform: translate(0, -50%) rotate(45deg);
    }
    &:nth-child(2) {
      visibility: hidden;
    }
    &:nth-child(3) {
      transform: translate(0, -50%) rotate(-45deg);
    }
  }

  &.hover &__item {
    background-color: $c-Light;
  }
}
</style>
