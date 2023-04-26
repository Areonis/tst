import Slider from '../components/Slider'
import BreadCrumbs from '../components/block/BreadCrumbs'
import { pathExchange } from '../data/data'

import logoFlag1 from '../assets/cur/usd.png'
import logoFlag2 from '../assets/cur/eur.png'
import logoFlag3 from '../assets/cur/gbp.png'
import logoFlag4 from '../assets/cur/cny.png'
import logoFlag5 from '../assets/cur/chf.png'

import styles from './styles/Exchange.module.scss'

export default function Exchange() {
  return (
    <div className={styles.root}>
      <Slider />

      <BreadCrumbs crumbs={pathExchange} />

      <div className={styles.ex_content}>
        <div className={styles.ex_title}>Обмен валют</div>

        <div className={styles.main_content}>
          <div className={styles.main_content_item}>
            <div className={styles.deep_title}>
              Обмен валюты <br /> в приложении
            </div>
            <div className={styles.deep_table}>
              <div className={styles.deep_table_row}>
                <div>Валюта</div>
                <div>Продано</div>
                <div>Покупаю</div>
              </div>

              <div className={styles.deep_table_row}>
                <div>
                  <img src={logoFlag1} alt="cur" />
                  <p>USD</p>
                </div>
                <div>109,65</div>
                <div>129,66</div>
              </div>

              <div className={styles.deep_table_row}>
                <div>
                  <img src={logoFlag2} alt="cur" />
                  <p>EUR</p>
                </div>
                <div>116,62</div>
                <div>136,58</div>
              </div>

              <div className={styles.deep_table_row}>
                <div>
                  <img src={logoFlag3} alt="cur" />
                  <p>GPB</p>
                </div>
                <div>111,62</div>
                <div>126,58</div>
              </div>

              <div className={styles.deep_table_row}>
                <div>
                  <img src={logoFlag4} alt="cur" />
                  <p>CNY</p>
                </div>
                <div>112,62</div>
                <div>124,58</div>
              </div>

              <div className={styles.deep_table_row}>
                <div>
                  <img src={logoFlag5} alt="cur" />
                  <p>CHF</p>
                </div>
                <div>109,62</div>
                <div>131,58</div>
              </div>
            </div>
          </div>

          <div className={styles.main_content_item}>
            <div className={styles.deep_title}>
              Обмен валюты
              <br /> в регионах Узбекистана
            </div>
            <div className={styles.deep_table}>
              <div className={styles.deep_table_row}>
                <div>Валюта</div>
                <div>Продано</div>
                <div>Покупаю</div>
              </div>
              <div className={styles.deep_table_row}>
                <div>
                  <img src={logoFlag1} alt="cur" />
                  <p>USD</p>
                </div>
                <div>109,65</div>
                <div>129,66</div>
              </div>
              <div className={styles.deep_table_row}>
                <div>
                  <img src={logoFlag2} alt="cur" />
                  <p>EUR</p>
                </div>
                <div>116,62</div>
                <div>136,58</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
