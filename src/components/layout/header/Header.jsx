import { useNavigate } from 'react-router-dom'
import CustomLink from '../../links/CustomLink'
import styles from './Header.module.scss'
import ImageBlock from '../../block/ImageBlock'
import logo from '../../../assets/page_main/logo.png'

export const companyName = 'KONSALTI-ON'

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className={styles.header}>
      <div className={styles.logo_header}>
        <div className={styles.logoBlock} onClick={() => navigate('/')}>
          <ImageBlock size="logo" src={logo} />
        </div>
        <div className={styles.companyBlock} onClick={() => navigate('/')}>
          {companyName}
        </div>
      </div>
      <div></div>
      <nav className={styles.navMenu}>
        <div>
          {' '}
          <CustomLink to="/pay-system">Платежная система</CustomLink>
        </div>
        <div></div>
        <div>
          {' '}
          <CustomLink to="/exchange">Обмен валют</CustomLink>
        </div>

        <div>
          {' '}
          <CustomLink to="/requisites">Реквизиты</CustomLink>
        </div>

        <div>
          {' '}
          <CustomLink to="/policy-page">Политика конфиденциальности</CustomLink>
        </div>
        <div>
          {' '}
          <button className={styles.btn}>Ru</button>
        </div>
      </nav>
    </div>
  )
}
