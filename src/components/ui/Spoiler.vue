<template>
  <!--   <div class="spoiler" :class="titleClass"> -->
  <div
    @click="toggleSpoiler"
    :class="[{ isOpen: isActive && !additional }, titleClass, iconClass]"
    class="spoiler__button"
  >
    {{ title }}
  </div>
  <transition name="spoiler">
    <slot v-if="isActive || additional" class="spoiler__content"></slot
  ></transition>
</template>

<script>
export default {
  props: {
    title: { default: "" },
    titleClass: { default: "" },
    iconClass: { default: "" },
    //  buttonClass: { default: "spoiler__button" },
    additional: { default: false },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleSpoiler() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.spoiler__button {
  // position: relative;
  cursor: pointer;
  /*   &:after,
  &:before {
    content: "";
    position: absolute;
    z-index: 6;
    top: 50%;
    transform: translate(0, -50%);
    width: calcSize(10, 10, $minWidth, $maxWidth);
    height: 1px;
    background: rgb(255, 255, 255);
    transition: all 0.3s ease 0s;
  }
  &:after {
    transform: rotate(-40deg);
    right: 0;
  }
  &:before {
    right: 0;
    transform: translate(-73.9%, 0) rotate(40deg);
  } */
  &.isOpen {
    /*     &:after {
      transform: rotate(-137deg);
    }
    &:before {
      transform: translate(-73.9%, 0) rotate(137deg);
    } */
  }
}
</style>
