<template>
  <section class="footer">
    <div class="footer__header footer-header">
      <div class="footer-header__bg img-object-fit">
        <img src="@/assets/img/footer/1.png" alt="Лес" />
      </div>
      <div class="content-width">
        <div class="footer-header__body">
          <spoiler
            :title="title"
            :titleClass="'footer-header__title text'"
            :iconClass="'icon-font-arrow icon-font'"
            :additional="minWidthTablet"
          >
            <p class="footer-header__text text">
              Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого
              качества из города оружейников - Златоуста. Златоустовские ножи
              известны и популярны среди потребителей как на российским рынке,
              так и за рубежом: ножи охотничьи, хозяйственные, туристические,
              рыбацкие, складные и метательные. Нож Златоуста - это идеальный
              друг и товарищ в повседневной жизни и в экстремальных ситуациях.
              На многую продукцию распространяется гарантия до 10 лет - это один
              из главных показателей качества. Для Вас на нашем сайте "zlatmax"
              предложен огромный ассортимент Златоустовских ножей. Наши
              менеджеры помогут определиться и подобрать самый лучший
              Златоустовский нож, ориентируясь на Ваши пожелания.
            </p>
          </spoiler>
        </div>
      </div>
    </div>
    <div class="footer__info footer-info footer-block">
      <div class="content-width">
        <div class="footer-info__table footer-block__table">
          <div
            class="footer-info__column footer-block__column"
            v-for="column in footerInfo"
            :key="column.title"
          >
            <spoiler
              :title="column.title"
              :titleClass="'footer-info__title footer-block__title'"
              :iconClass="'icon-font-arrow icon-font'"
              :additional="minWidthTablet"
            >
              <ul class="footer-info__links footer-block__text">
                <li
                  class="footer-info__link footer-block__link"
                  v-for="link in column.links"
                  :key="link"
                >
                  {{ link }}
                </li>
              </ul>
            </spoiler>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__contact footer-contact footer-block">
      <div class="content-width">
        <div class="footer-contact__table footer-block__table">
          <div class="footer-contact__column footer-block__column">
            <spoiler
              :title="'Контакты'"
              :titleClass="'footer-contact__title footer-block__title'"
              :iconClass="'icon-font-arrow icon-font'"
              :additional="minWidthTablet"
            >
              <ul class="footer-contact__links footer-block__text">
                <li
                  class="
                    footer-contact__link
                    footer-block__link
                    icon-font-phone icon-font
                  "
                >
                  8 (800) 777-49-67
                </li>
                <li
                  class="
                    footer-contact__link
                    footer-block__link
                    icon-font-clock icon-font
                  "
                >
                  Пн-Пт 7:00 - 16:00 (МСК)
                </li>
                <li
                  class="
                    footer-contact__link
                    footer-block__link
                    icon-font-location icon-font
                  "
                >
                  Златоуст, ул. Шоссейная, д. 1, офис «6Б»
                </li>
                <li
                  class="
                    footer-contact__link
                    footer-block__link
                    icon-font-messege icon-font
                  "
                >
                  info@zlatmax.ru
                </li>
              </ul>
            </spoiler>
          </div>
          <div class="footer-contact__column footer-block__column">
            <spoiler
              :title="'Полезные ссылки'"
              :titleClass="'footer-contact__title footer-block__title'"
              :iconClass="'icon-font-arrow icon-font'"
              :additional="minWidthTablet"
            >
              <ul class="footer-contact__links footer-block__text">
                <li class="footer-contact__link footer-block__link">
                  Способы оплаты и доставки
                </li>
              </ul>
            </spoiler>
          </div>
          <div class="footer-contact__column footer-block__column">
            <spoiler
              :title="'Наша гарантия'"
              :titleClass="'footer-contact__title footer-block__title'"
              :iconClass="'icon-font-arrow icon-font'"
              :additional="minWidthTablet"
            >
              <ul class="footer-contact__links footer-block__text">
                <li class="footer-contact__link footer-block__link">
                  Недовольны своей покупкой? Вы можете вернуть ее в течении 30
                  дней с даты получения, согласно <em>нашим правилам</em>
                </li>
              </ul>
            </spoiler>
          </div>
          <div class="footer-contact__column footer-block__column">
            <spoiler
              :title="'НОВОСТНАЯ РАССЫЛКА'"
              :titleClass="'footer-contact__title footer-block__title'"
              :iconClass="'icon-font-arrow icon-font'"
              :additional="minWidthTablet"
            >
              <div
                class="
                  footer-contact__links
                  footer-block__text
                  footer-subscribe
                "
              >
                <p>Подпишитесь прямо сейчас!</p>
                <knife-input
                  :parentClass="'input-form--footer'"
                  :inputClass="'input__footer '"
                  :buttonClass="'input-button icon-font-arrow icon-font decor'"
                  :placeH="'example@gmail.com'"
                  :type="'text'"
                ></knife-input>
                <knife-checkbox
                  :checkBoxClass="'checkbox--footer'"
                  :value="true"
                ></knife-checkbox>
                <span class="footer-contact__label"
                  >Я прочитал Условия соглашения и согласен с условиями
                </span>
              </div>
            </spoiler>
          </div>
        </div>
        <div class="footer__social footer-social">
          <ul class="footer-social__wrapper">
            <li class="footer-social__link">
              <a><img src="@/assets/img/social/facebook.png" alt="" /></a>
            </li>
            <li class="footer-social__link">
              <a><img src="@/assets/img/social/telegram.png" alt="" /></a>
            </li>
            <li class="footer-social__link">
              <a><img src="@/assets/img/social/whatsapp.png" alt="" /></a>
            </li>
            <li class="footer-social__link">
              <a><img src="@/assets/img/social/wiber.png" alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer__rules footer-rules">
      <div class="content-width">
        <div class="footer-rules__body">
          <p class="footer-rules__text">
            Все материалы, размещенные на сайте, носят справочный характер и не
            являются публичной офертой, определяемойположениями Статьи 437
            Гражданского кодекса Российской Федерации. При копировании
            материалов гиперссылка на www.zlatmax.ru обязательна!
          </p>
          <span class="footer-rules__rights"
            >Златоустовские ножи www.zlatmax.ru ©</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import Spoiler from "@/components/ui/Spoiler.vue";
import KnifeInput from "@/components/ui/KnifeInput.vue";
import KnifeCheckbox from "@/components/ui/KnifeCheckbox.vue";

export default {
  components: {
    Spoiler,
    KnifeInput,
    KnifeCheckbox,
  },
  data() {
    return {
      title: 'Златоустовские ножи интернет-магазин "ЗЛАТМАКС"',
      footerInfo: [
        {
          title: "ИНФОРМАЦИЯ",
          links: [
            "Златоустовские ножи в Москве и Московской области",
            "Ножевые стали",
            "О нас",
            "Условия оплаты и доставки",
            "Политика конфиденциальности",
          ],
        },
        {
          title: "СЛУЖБА ПОДДЕРЖКИ",
          links: ["Контактная информация", "Возврат товара", "Карта сайта"],
        },
        {
          title: "ИНФОРМАЦИЯ",
          links: ["Подарочные сертификаты", "Партнеры", "Товары со скидкой"],
        },
        {
          title: "ЛИЧНЫЙ КАБИНЕТ",
          links: [
            "Личный кабинет",
            "История заказов",
            "Мои закладки",
            "Рассылка новостей",
          ],
        },
        {
          title: "О НАС",
          links: [
            "Златоустовские ножи в Москве и Московской области",
            "Политика конфиденциальности",
          ],
        },
      ],
    };
  },

  computed: {
    ...mapGetters("anyParams", {
      minWidthTablet: "minWidthTablet",
    }),
  },
};
</script>
<style lang="scss">
.footer {
  // .footer__header
  background-color: $bg-color;
  color: $cf-second;

  &__header {
  }
  &__info {
  }
}
.footer-header {
  // .footer-header__bg
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 1);
    //z-index: 1;
  }
  position: relative;
  &__bg {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  &__body {
    padding: calcSize(60, 10, $minWidth, $maxWidth)
      calcSize(60, 10, $minWidth, $maxWidth);
    @media (min-width: $PCWidth + px) {
      padding-top: 60px 60px;
    }

    position: relative;
  }

  // .footer-header__text

  &__text {
    font-size: calcSize(16, 18, $minWidth, $maxWidth);
    margin-bottom: calcSize(10, 60, $minWidth, $maxWidth);
    line-height: calc(27 / 18);
    @media (min-width: $PCWidth + px) {
      margin-bottom: 60px;
    }
    @media (min-width: $PCWidth + px) {
      font-size: 18px;
    }
  }

  // .footer-header__title

  &__title {
    text-align: center;
    position: relative;
    color: $c-Light;
    font-size: calcSize(20, 30, $minWidth, $maxWidth);
    line-height: calc(32 / 20);
    margin-bottom: calcSize(5, 20, $minWidth, $maxWidth);
    text-transform: uppercase;
    padding-right: 3%;
    @media (min-width: $PCWidth + px) {
      margin-bottom: 20px;
      font-size: 30px;
      padding-right: 0;
    }
    &::before {
      transform: translate(0px, 0px) rotate(-90deg);
      position: absolute;
      top: 0;
      right: 0;
      /*   transition: transform 0.3s ease 0s;
      @media (min-width: $tabletWidth + px) {
        display: none;
      } */
    }
    /*
    &.isOpen {
      &::before {
        transform: translate(0px, -50%) rotate(-270deg);
      }
    } */
  }
}

// .footer__info
.footer-info {
  // .footer-info__table
  /*   padding: calcSize(10, 80, $minWidth, $maxWidth)
    calcSize(5, 30, $minWidth, $maxWidth);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5); */
  &__table {
    /*     text-align: center;
    @media (min-width: $tabletWidth + px) {
      text-align: left;
      display: flex;
      flex-wrap: wrap;
      // column-gap: calcSize(, , $minWidth, $maxWidth);
      column-gap: 30px;
    }
    @media (min-width: $PCWidth + px) {
      //  column-gap: calcSize(, , $minWidth, $maxWidth);
    } */
  }

  // .footer-info__column
  &__column {
    /*     margin-bottom: calcSize(8, 60, $minWidth, $maxWidth);
    flex: 0 0 calc(25% - 60px); */
  }

  // .footer-info__title
  /*   &__title {
    margin-bottom: calcSize(5, 20, $minWidth, $maxWidth);
    position: relative;
    &::before {
      right: 11%;
    }
  } */

  // .footer-info__links
  &__links {
    /*     font-size: calcSize(16, 18, $minWidth, $maxWidth);
    line-height: calc(27 / 18);
    opacity: 0.8;
    @media (min-width: $PCWidth + px) {
      font-style: 18px;
    } */
  }

  // .footer-info__link
  &__link {
  }
}

.footer-block {
  padding: calcSize(10, 80, $minWidth, $maxWidth)
    calcSize(5, 30, $minWidth, $maxWidth);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  // .footer-block__table
  &__table {
    text-align: center;
    @media (min-width: $tabletWidth + px) {
      text-align: left;
      display: flex;
      flex-wrap: wrap;
      // column-gap: calcSize(, , $minWidth, $maxWidth);
      column-gap: 30px;
    }
    @media (min-width: $PCWidth + px) {
      //  column-gap: calcSize(, , $minWidth, $maxWidth);
    }
  }
  &__title {
    margin-bottom: calcSize(5, 20, $minWidth, $maxWidth);
    position: relative;
    text-transform: uppercase;
    &::before {
      right: 11%;
    }
  }
  // .footer-block__column

  &__column {
    margin-bottom: calcSize(8, 60, $minWidth, $maxWidth);
    flex: 1 0 calc(25% - 60px);
  }

  // .footer-block__text

  &__text {
    font-size: calcSize(16, 18, $minWidth, $maxWidth);
    line-height: calc(27 / 18);
    opacity: 0.8;
    @media (min-width: $PCWidth + px) {
      font-style: 18px;
    }
  }
}

.footer-social {
  // .footer-social__wrapper

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    @media (min-width: $tabletWidth + px) {
      justify-content: start;
    }
  }

  // .footer-social__link

  &__link {
  }
}

.footer-rules {
  // .footer-rules__body

  &__body {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    line-height: calc(22 / 14);
    @media (min-width: $tabletWidth + px) {
      flex-direction: row;
      gap: 0 20px;
      justify-content: space-between;
    }
  }

  // .footer-rules__text

  &__text {
    max-width: 817px;
  }

  // .footer-rules__rights

  &__rights {
    text-align: center;
    @media (min-width: $tabletWidth + px) {
      text-align: left;
    }
  }
}
.footer-subscribe {
  & > p,
  form {
    margin-bottom: 10px;
  }
  & > input {
    margin-right: 5px;
  }
}
</style>
