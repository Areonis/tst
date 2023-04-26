import logo1 from '../assets/page_main/slide_1.png'
import logo2 from '../assets/page_main/slide_2.png'
import logo3 from '../assets/page_main/slide_3.png'

import b1logo1 from '../assets/page_main/pic1.png'
import b1logo2 from '../assets/page_main/pic2.png'
import b1logo3 from '../assets/page_main/pic3.png'
import b1logo4 from '../assets/page_main/pic4.png'

import b2logo1 from '../assets/page_main/pay_best.png'
import b2logo2 from '../assets/page_main/pay_llc.png'
import b2logo3 from '../assets/page_main/pay_union.png'

import newsLogo1 from '../assets/page_main/i_news1.png'
import newsLogo2 from '../assets/page_main/i_news2.png'
import newsLogo3 from '../assets/page_main/i_news3.png'

import logo_pay_1 from '../assets/pay_lg/best-lg.png'
import logo_pay_2 from '../assets/pay_lg/llc-lg.png'
import logo_pay_3 from '../assets/pay_lg/union-lg.png'

export const data_footer = {
  ind: 9,

  title: '',
  img: '',
}

export const singleCenterBlock = {
  title: 'Кошелёк',
  text: 'Это удобное приложение для платежей, покупок и переводов.',
  action: () => (
    <div>
      Скачайте, <br />
      зарегистрируйтесь за 1 минуту по номеру телефона и управляйте деньгами
      онлайн
    </div>
  ),
}

export const img_slider = {
  1: logo1,
  2: logo2,
  3: logo3,
}

export const block1 = {
  title: 'Всё стало намного проще',
  text: 'С нашим сервисом вы сможете контролировать расходы, следить за курсом мировой валюты, следить за переводами средств, через самые актуальные платёжные системы мира',
  data: [
    {
      title: 'Авторасчёт',
      text: 'Инновационная система денежных переводов и электронных платежей',
      logo: b1logo1,
    },
    {
      title: 'Сервисы',
      text: 'Самые популярные платёжные системы для перевода ваших денежных средств',
      logo: b1logo2,
    },
    {
      title: 'Обмен валют',
      text: 'Обменивайте валюту в самых популярных приложениях и сервисах',
      logo: b1logo3,
    },
    {
      title: 'Поддержка ',
      text: 'UnionPay – национальная платёжная система Китая. Учреждена в 2002 году как ассоциация банков КНР.',
      logo: b1logo4,
    },
  ],
}

export const block2 = {
  title: 'Платежные системы',
  text: 'Лидеры финансовой индустрии,  только самые лучшие системы переводов в вашем распоряжении',
  data: [
    { link: 'pay-system/pay-best', title: '', text: '', logo: b2logo1 },
    { link: 'pay-system/pay-llc', title: '', text: '', logo: b2logo2 },
    { link: 'pay-system/pay-union', title: '', text: '', logo: b2logo3 },
  ],
}

export const pathNews = [
  {
    id: 100,
    path: '',
    name: 'Главная',
  },
  {
    id: 102,
    path: 'news',
    name: 'Все новости',
  },
]
export const pathReq = [
  {
    id: 200,
    path: '',
    name: 'Главная',
  },
  {
    id: 201,
    path: 'requisites',
    name: 'Реквизиты',
  },
]
export const pathExchange = [
  {
    id: 600,
    path: '',
    name: 'Главная',
  },
  {
    id: 601,
    path: 'exchange',
    name: 'Обмен валют',
  },
]
export const pathPol = [
  {
    id: 300,
    path: '',
    name: 'Главная',
  },
  {
    id: 301,
    path: 'policy-page',
    name: 'Политика конфиденциальности',
  },
]
export const pathPay = [
  {
    id: 400,
    path: '',
    name: 'Главная',
  },
  {
    id: 401,
    path: 'pay-system',
    name: 'Платёжные системы',
  },
]

export const newsData = [
  {
    id: 50,
    pic: newsLogo1,
    title: 'Страхование имущества: на что обратить внимание в зимний период',
    text: 'Зимой существенно вырастает вероятность пожаров, аварий на коммуникациях и повреждения имущества из-за сильных снегопадов. Какую страховку можно купить, чтобы защитить...',
  },
  {
    id: 51,
    pic: newsLogo2,
    title: 'Средняя ставка по автокредитам по итогам IV квартала 2022 год...',
    text: 'Средняя ставка по кредитам на покупку транспортных средств в топ-15 автокредитных банков по состоянию на 25 декабря составила 13,84% годовых. По сравнению с данными за...',
  },
  {
    id: 52,
    pic: newsLogo3,
    title: 'Число принимающих оплату через СБП магазинов выросло втрое — ЦБ',
    text: 'Число магазинов, которые предлагают своим клиентам возможность оплаты товаров и услуг через Систему быстрых платежей (СБП), в 2022 году выросло втрое и превысило...',
  },
  {
    id: 53,
    pic: newsLogo1,
    title: 'Страхование имущества: на что обратить внимание в зимний период',
    text: 'Зимой существенно вырастает вероятность пожаров, аварий на коммуникациях и повреждения имущества из-за сильных снегопадов. Какую страховку можно купить, чтобы защитить...',
  },
  {
    id: 54,
    pic: newsLogo2,
    title: 'Средняя ставка по автокредитам по итогам IV квартала 2022 год...',
    text: 'Средняя ставка по кредитам на покупку транспортных средств в топ-15 автокредитных банков по состоянию на 25 декабря составила 13,84% годовых. По сравнению с данными за...',
  },
  {
    id: 55,
    pic: newsLogo3,
    title: 'Число принимающих оплату через СБП магазинов выросло втрое — ЦБ',
    text: 'Число магазинов, которые предлагают своим клиентам возможность оплаты товаров и услуг через Систему быстрых платежей (СБП), в 2022 году выросло втрое и превысило...',
  },
]

export const paysLogo = {
  'pay-best': logo_pay_1,
  'pay-llc': logo_pay_2,
  'pay-union': logo_pay_3,
}
