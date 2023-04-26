import ImageBlock from './block/ImageBlock'
import styles from './block/styles/NewsBlock.module.scss'
import logo1 from '../assets/page_main/news1.png'
import logo2 from '../assets/page_main/news2.png'
import picBtn from '../assets/page_main/Vector.png'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function NewsBlock() {
  const navigate = useNavigate()
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <div>Только полезные новости</div>
        <Button pic={picBtn} handler={() => navigate('/news')}>
          Все новости
        </Button>
      </div>

      <div className={styles.block}>
        <div className={styles.item}>
          <div className={styles.img}>
            <img src={logo1} alt="news" />
          </div>

          <div className={styles.text_block}>
            <div>Банк России снизил ключевую ставку до 17% годовых</div>
            <div>
              “Совет директоров Банка России принял решение снизить ключевую
              ставку с 11 апреля 2022 года на 300 базовых пунктов, до 17,00
              процентов годовых...
            </div>
            <Button handler={() => navigate('/news/50')}>Подробней</Button>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.text_block}>
            <div>
              Количество переводов через СБП в первом квартале 2022 года выросло
              более чем в 2 раза
            </div>
            <div>
              Число денежных переводов между физическими лицами по Системе
              быстрых платежей (СБП) в...
            </div>
            <Button handler={() => navigate('/news/51')}>Подробней</Button>
          </div>
          <ImageBlock src={logo2} />
        </div>
      </div>
    </div>
  )
}
