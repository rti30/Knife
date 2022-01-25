<template>
  <div
    class="header__bottom"
    v-show="minWidthTablet || (!minWidthTablet && burgerIsActive)"
  >
    <div class="content-width">
      <div class="bottom-menu">
        <div
          class="bottom-menu__back icon-font icon-font-back"
          v-show="active !== null && currentLinks.length && !minWidthTablet"
          @click="moveMenu()"
        >
          Назад
        </div>
        <ul
          v-show="
            minWidthTablet ||
            active === null ||
            (!currentLinks.length && active)
          "
          class="bottom-menu__chapters"
        >
          <li
            class="bottom-menu__chapter bottom-menu__mobile-link"
            v-for="link of menu"
            :key="link"
            @click="addActive(link.id)"
            :class="[
              { 'bottom-menu__chapter--active': active === link.id },
              {
                'icon-font-arrow icon-font':
                  !minWidthTablet &&
                  category.some((item) => item.id === link.id),
              },
            ]"
          >
            {{ link.name }}
          </li>
        </ul>

        <div v-show="currentLinks.length" class="bottom-menu__content sub-menu">
          <div
            class="sub-menu__column"
            v-for="subTitle in currentLinks"
            :key="subTitle.name"
          >
            <div
              v-show="showSubtitleMenu"
              class="sub-menu__title bottom-menu__mobile-link"
              @click="addActiveSubtitle(subTitle.name)"
              :class="{
                'icon-font-arrow icon-font':
                  !minWidthTablet && subTitle.links.length,
              }"
            >
              {{ subTitle.name }}
            </div>
            <div
              v-show="subTitle.name === activeSubtitle || minWidthTablet"
              class="sub-menu__link bottom-menu__mobile-link"
              v-for="link in subTitle.links"
              :key="link"
            >
              {{ link }}
            </div>
            <div
              class="sub-menu__more"
              v-show="subTitle.name === activeSubtitle || minWidthTablet"
            >
              <a class="sub-menu__link sub-menu__link--more" href=""
                >Смотреть все</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    @click="removeActive()"
    v-show="currentLinks.length && minWidthTablet"
    class="header__close-area"
  ></div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Header-Bottom",
  data() {
    return {
      menu: [
        { id: 1, name: "Каталог ножей" },
        { id: 2, name: "Клинковое оружие" },
        { id: 3, name: "Сувенирные изделия" },
        { id: 4, name: "Фонари ARMYTEK" },
        { id: 5, name: "Сопуствующие товары" },
      ],
      category: [
        {
          id: 1,
          name: "Категория ножей",
          links: [
            "Разделочные ножи",
            "Туристические ножи",
            "Ножи охотничьи",
            "Булатные ножи",
            "Ножи из дамаска",
            "Тактического назначения",
            "Метательные ножи",
            "Мачете и кукри",
            "Ножи кухонные",
          ],
        },
        {
          id: 1,
          name: "Производство ножей",
          links: [
            "Ножи АИР",
            "Ножи ЗИК",
            "Ножи РОСоружие",
            "Ножи Оружейник",
            "Булат Сергея Баранова",
            "Булат Андрея Умерова",
            "Ножи Златко",
            "Ножи Стиль-М",
            "Оружейная компания",
          ],
        },
        {
          id: 1,
          name: "Ножи по маркам стали",
          links: [
            "Ножи из стали 40х102С2М",
            "Ножи из стали 100х13м",
            "Ножи из стали 110х18м-ШД",
            "Ножи из стали ЭИ-107 ТЦ",
            "Ножи из стали 50х14МФ",
            "Ножи из стали AUS-8",
            "Ножи из стали К340",
            "Ножи из стали M390",
            "Ножи из стали ЭП-766",
          ],
        },
        {
          id: 1,
          name: "Заточка и полировка ножей",
          links: [
            "Паста ГОИ",
            "Алмазная паста",
            "Бруски и камни для заточки",
            "Заточные системы",
          ],
        },
        {
          id: 1,
          name: "Ножевая мастерская",
          links: [
            "Ножевые клинки",
            "Заготовки для ножей",
            "Литье для ножей",
            "Материалы для рукоятей",
            "Уход за рукоятиями ножей",
          ],
        },
      ],
      active: null,
      activeSubtitle: null,
    };
  },
  methods: {
    addActive(id) {
      console.log("addActive");
      if (id === this.active) {
        this.removeActiveSubtitle();
        this.removeActive();
      } else {
        this.removeActiveSubtitle();
        this.active = id;
      }
    },
    removeActive() {
      console.log("removeActive");
      this.active = null;
      this.activeSubtitle = null;
    },
    addActiveSubtitle(id) {
      console.log("addActiveSubtitle");
      if (this.minWidthTablet) {
        return;
      } else {
        this.activeSubtitle = id === this.activeSubtitle ? null : id;
      }
    },
    removeActiveSubtitle() {
      console.log("removeActiveSubtitle");
      this.activeSubtitle = null;
    },
    moveMenu() {
      console.log("moveMenu");
      if (this.active !== null && this.activeSubtitle !== null) {
        this.removeActiveSubtitle();
      } else if (this.active !== null) {
        this.removeActive();
      }
    },
  },
  computed: {
    ...mapGetters("anyParams", {
      widthParam: "defaultWidthParams",
      minWidthTablet: "minWidthTablet",
      burgerIsActive: "burgerIsActive",
    }),
    currentLinks() {
      return this.category.filter((item) => item.id === this.active);
    },
    showParentMenu() {
      return (
        this.minWidthTablet ||
        this.active === null ||
        (!this.currentLinks.length && this.active)
      );
    },
    showSubtitleMenu() {
      return (
        this.minWidthTablet ||
        this.activeSubtitle === null ||
        (!this.currentLinks.length && this.activeSubtitle)
      );
    },
  },
};
</script>
<style lang="scss">
.header {
  // .header__bottom

  &__bottom {
    position: absolute;
    width: 100%;
    height: 100%;
    @media (min-width: $tabletWidth + px) {
      position: relative;
    }
    z-index: 6;
    color: $cf-second;
    background-color: $bg-color;
    //padding: 20px 0px 35px 0px;
    //  overflow: hidden;
  }
  &__close-area {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.5;
    z-index: 1;
  }
}
.content-width {
}
.bottom-menu {
  // .bottom-menu__chapters
  &__chapters {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 30px;

    @media (min-width: $tabletWidth + px) {
      flex-direction: row;
      border: none;
      margin: 0;
    }
  }

  // .bottom-menu__chapter
  &__chapter {
    position: relative;
    @media (any-hover: hover) {
      &:hover {
        cursor: pointer;
      }
    }

    @media (min-width: $tabletWidth + px) {
      flex: 0 0 calc((100% / 5) - 10px);
      padding: 0px 0px 20px 0px;
      font-weight: 700;
    }
  }
  &__mobile-link {
    padding: 20px 0px 20px 0px;
    font-size: 16px;
    position: relative;
    &::before {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
    }
    @media (max-width: $tabletWidth + px) {
      &:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      }
    }
  }

  // .bottom-menu__chapter--active
  &__chapter--active {
    @media (min-width: $tabletWidth + px) {
      border-bottom: 2px solid $c-Light;
    }
  }

  // .bottom-menu__content
  &__content {
  }
  &__back {
    padding-top: 10px;
    font-size: 16px;
  }
}
.sub-menu {
  // .sub-menu__column
  position: absolute;
  background-color: $bg-color;
  height: auto;
  width: 100%;
  left: 0;
  padding: 0 10px;
  @media (min-width: $tabletWidth + px) {
    padding: 20px;
    width: auto;
  }
  // z-index: 9999;
  // bottom: 0;
  z-index: 6;
  //left: 0;
  //top: 0;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media (min-width: $tabletWidth + px) {
    flex-direction: row;
    flex: 0 0 20%;
    gap: 40px 30px;
    gap: 5px 15px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 10px 0px;
    &:last-child {
      .sub-menu__link {
        &:last-child {
          &::after {
            content: "";
            padding: 0px 0px 30px 0;
            display: block;
            position: absolute;
            //  bottom: 0;
            left: 0;
            width: 100%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          }
        }
      }
    }
    @media (min-width: $tabletWidth + px) {
      &:not(:last-child) {
        padding-bottom: 10px;
      }
    }
  }

  // .sub-menu__title
  &__title {
    @media (any-hover: hover) {
      &:hover {
        cursor: pointer;
      }
    }
    @media (min-width: $tabletWidth + px) {
      &:not(:last-child) {
        padding: 0px 0px 10px 0px;
      }
    }
  }

  // .sub-menu__link

  &__link {
    @media (any-hover: hover) {
      &:hover {
        cursor: pointer;
      }
    }
    @media (min-width: $tabletWidth + px) {
      &:not(:last-child) {
        padding: 0px 0px 10px 0px;
      }
    }

    &:nth-last-child(-n + 2) {
      flex: 1 1 auto;
    }
    /*    &:last-child {
      &::after {
        content: "";
        padding: 0px 0px 30px 0;
        display: block;
        position: absolute;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      }
    } */
    &--more {
      color: $c-Light;
    }
  }

  &__more {
  }
}
</style>