<template>
  <button class="button" type="button">
    <span class="button__text">{{ text }}</span>
    <span class="button__icon" v-show="classIcon" :class="classIcon"></span>
  </button>
</template>
<script>
export default {
  props: {
    classIcon: {
      default: "",
      type: String,
    },
    text: {
      default: "",
      type: String,
    },
  },
};
</script>
<style lang="scss">
.button {
  background-color: $c-Light;
  color: $cf-second;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 3px;
  height: 50px;
  &__text {
  }
  &__text--prewiev {
    font-size: 20px;
  }
  &__icon {
    margin-right: 16px;
  }
}
.button--preview {
  box-shadow: 0px 4px 15px rgba(232, 170, 49, 0.43);
  width: 228px;
  height: 50px;
  transition: box-shadow 0.3s ease 0s;
  @media (any-hover: hover) {
    &:hover {
      box-shadow: 0px 4px 15px rgba(232, 170, 49, 0.63);
    }
  }
}

.button--card {
  &::before {
  }
}
</style>