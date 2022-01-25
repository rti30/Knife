<template>
  <div class="demo-card">
    <div class="demo-card__title subtitle">{{ card.title }}</div>
    <div class="demo-card__description">{{ card.description }}</div>
    <div class="demo-card__image">
      <img :src="card.img" :alt="card.title" />
    </div>
    <knife-button class="demo-card__button" :text="'Подробнее'"></knife-button>
  </div>
</template>
<script>
import KnifeButton from "@/components/ui/buttons/KnifeButton";
export default {
  components: {
    KnifeButton,
  },
  props: {
    card: {
      default: {},
    },
  },
};
</script>
<style lang="scss">
.demo-card {
  // .demo-card__title
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  @media (min-width: $tabletWidth + px) {
    text-align: left;
  }

  display: grid;
  grid-template-areas:
    "title"
    "description"
    "image"
    "button";
  @media (min-width: $tabletWidth + px) {
    grid-template-areas:
      "title image"
      "description image"
      "button image";
  }

  &__title {
    grid-area: title;
    position: relative;
    line-height: calc(32 / 20);
    margin: 30px 0px 30px 0px;
    padding: 0px 20px 0px 20px;
    @media (min-width: $tabletWidth + px) {
      justify-self: start;
      align-self: start;
      max-width: 345px;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      display: block;
      height: 2px;
      width: 68px;
      background-color: $c-Light;
      transition: width 0.3s ease 0s;
    }
    &:hover::after {
      width: 100%;
    }
  }

  // .demo-card__description

  &__description {
    grid-area: description;
    line-height: calc(24 / 16);
    padding: 0px 20px 0px 20px;
    @media (min-width: $tabletWidth + px) {
      justify-self: start;
      align-self: start;
      max-width: 345px;
    }
  }

  // .demo-card__image

  &__image {
    grid-area: image;
    overflow: hidden;
    img {
      transform: rotate(-38deg);
      width: calcSize(249.12, 388.18, $minWidth, $maxWidth);
      height: calcSize(249.12, 388.18, $minWidth, $maxWidth);
      @media (min-width: $PCWidth + px) {
        width: 388.18px;
        height: 388.18px;
      }
      @media (min-width: $tabletWidth + px) {
        transform: rotate(0deg);
      }
    }
  }
  &__button {
    grid-area: button;
    @media (min-width: $tabletWidth + px) {
      max-width: 345px;
      align-self: start;
    }
  }
}
</style>