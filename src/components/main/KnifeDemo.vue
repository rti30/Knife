<template >
  <section class="demo">
    <div class="content-width">
      <div class="demo__body">
        <demo-card
          class="demo__card"
          v-for="card in demoData"
          :key="card.id"
          :card="card"
        ></demo-card>
      </div>
    </div>
  </section>
</template>
<script>
import DemoCard from "@/components/parts/DemoCard.vue";
export default {
  components: {
    DemoCard,
  },
  data() {
    return {
      demoData: [
        {
          id: 1,
          title: "Тактические фонари",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: require("@/assets/img/demo/1.png"),
        },
        {
          id: 2,
          title: "Палубные мультифонари",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: require("@/assets/img/demo/2.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.demo {
  overflow: hidden;
  margin: 0px 0px calcSize(20, 60, $minWidth, $maxWidth) 0px;
  @media (min-width: $PCWidth + px) {
    margin: 0px 0px 60px 0px;
  }
  &__body {
    @media (min-width: $tabletWidth + px) {
    }
    @media (min-width: $PCWidth + px) {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }

  // .demo__card
  &__card {
    margin: 0px 0px 20px 0px;
    @media (min-width: $PCWidth + px) {
      margin: 0px 0px 0px 0px;
      flex: 0 0 calc(50% - 20px);
    }
  }
}
.content-width {
}
</style>