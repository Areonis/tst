import Slider from '../components/Slider'
import BreadCrumbs from '../components/block/BreadCrumbs'
import Req_item from '../components/menu/item/Req_item'
import { pathReq } from '../data/data'
import arrow from '../assets/page_main/arrow_black.png'

import styles from './styles/Pages.module.scss'

export default function Requisites() {
  return (
    <div className={styles.requisites}>
      <Slider />

      <BreadCrumbs crumbs={pathReq} />

      <div className={styles.req_content}>
        <div className={styles.req_title}>Реквизиты</div>
        <div className={styles.req_text}>
          <table className={styles.table}>
            <tr>
              <td className={styles.table_col_1}>
                Полное наименование (согласно учредительным документам)
              </td>
              <td className={styles.table_col_2}>
                "KONSALTI-ON" mas‘uliyati cheklangan jamiyati
              </td>
            </tr>
            <tr>
              <td className={styles.table_col_1}>
                Сокращенное наименование (согласно учредительным документам)
              </td>
              <td className={styles.table_col_2}>"KONSALTI-ON"</td>
            </tr>
            <tr>
              <td className={styles.table_col_1}>Адрес местонахождения</td>
              <td className={styles.table_col_2}>
                {' '}
                Uzbekistan, Toshkent shahri, Mirobad district, Sariq'ol
                Ko'chasi, 50/4-UY, 85-xona
              </td>
            </tr>
            <tr>
              <td className={styles.table_col_1}> ИНН</td>
              <td className={styles.table_col_2}>308330826</td>
            </tr>
            <tr>
              <td className={styles.table_col_1}> Расчетный счет</td>
              <td className={styles.table_col_2}>20208000805365804001</td>
            </tr>
            <tr>
              <td className={styles.table_col_1}>
                {' '}
                Наименование учреждения банка
              </td>
              <td className={styles.table_col_2}>
                Joint Stock Innovation Commercial Bank «Ipak Yuli” Mirabad
                branch
              </td>
            </tr>
            <tr>
              <td className={styles.table_col_1}> Адрес</td>
              <td className={styles.table_col_2}>
                100015, Tashkent city, Maxtumquli street, 25
              </td>
            </tr>
            <tr>
              <td className={styles.table_col_1}> Телефоны</td>
              <td className={styles.table_col_2}>+79810424931</td>
            </tr>
            <tr>
              <td className={styles.table_col_1}> Почта</td>
              <td className={styles.table_col_2}>info@konsaltionmchj.uz</td>
            </tr>
            <tr>
              <td className={styles.table_col_1}> Генеральный директор</td>
              <td className={styles.table_col_2}>
                NIYOZOVA DILFUZA RUSTAM QIZI
              </td>
            </tr>
          </table>
          {/* <div className={styles.req_nav}>
            <div>Лицензия Банка России</div>
            <div>Тарифы</div>
            <div>
              {' '}
              <p>Отчетность</p>{' '}
              <div className={styles.req_img}>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div>Операционные правила</div>
            <div>Логотип</div>
          </div>
          <div className={styles.req_item}>
            {new Array(7).fill('_').map((item, i) => (
              <Req_item key={item} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}
