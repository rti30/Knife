<template>
  <input type="checkbox" :checked="value" :class="checkBoxClass" />
</template>
<script>
export default {
  props: {
    value: {
      default: false,
      type: Boolean,
    },
    checkBoxClass: {
      default: "",
      type: String,
    },
  },
};
</script>
<style lang="scss">
.checkbox--footer {
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: rgba(40, 40, 40, 0.2);
  color: $cf-second;
  // -webkit-appearance: none;
  // -moz-appearance: none;
  //appearance: none;
  border: none;
  position: relative;

  &:checked {
    background: rgba(40, 40, 40, 0.7);
  }
}
</style>