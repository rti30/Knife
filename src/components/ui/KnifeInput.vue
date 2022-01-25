<template>
  <form @keydown.enter.prevent="false" class="input-form" :class="parentClass">
    <input
      class="input"
      :class="inputClass"
      :type="type"
      :placeholder="placeH"
    />
    <!--     <input type="button" :class="buttonClass" /> -->
    <span :class="buttonClass"></span>
  </form>
</template>
<script>
export default {
  props: {
    parentClass: {
      default: "",
      type: String,
    },
    inputClass: {
      default: "",
      type: String,
    },
    buttonClass: {
      default: "",
      type: String,
    },
    type: {
      default: "text",
      type: String,
    },
    placeH: {
      default: "",
      type: String,
    },
  },
};
</script>
<style lang="scss">
.input-form {
  &--footer {
    display: flex;
    justify-content: center;
    height: 50px;
    border-radius: 3px;
    overflow: hidden;
    @media (min-width: $tabletWidth + px) {
      justify-content: start;
    }
  }
}
.input {
  &__footer {
    background-color: #363636;
    border: 1px solid $cf-second;
    &::before {
      position: absolute;
    }
  }
}
.input-button {
  height: 100%;
  width: 50px;
  background-color: $c-Light;
  position: relative;
}
</style>