import ImageBlock from '../../block/ImageBlock'
import { companyName } from '../header/Header'
import logo from '../../../assets/page_main/logo.png'
import styles from './Footer.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  return (
    <div className={styles.footer}>
      <div className={styles.footer_item}>
        <div className={styles.logoBlock} onClick={() => navigate('/')}>
          <ImageBlock size="logo" src={logo} />
        </div>
        <div className={styles.companyBlock} onClick={() => navigate('/')}>
          {companyName}
        </div>
      </div>

      <div className={styles.footer_item}></div>

      <div className={styles.footer_item}>
        {' '}
        <div className={styles.text}>
          © 2022 ООО “Консалти-он”. Лицензия Национального Банка Республики
          Узбекистан №684 от 19.05.2022 г.
        </div>
        <div></div>
      </div>
    </div>
  )
}
