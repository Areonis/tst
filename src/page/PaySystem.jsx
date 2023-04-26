import { pathPay } from '../data/data'
import styles from './styles/PaySystem.module.scss'

import logo1 from '../assets/page_main/pay_best.png'
import logo2 from '../assets/page_main/pay_llc.png'
import logo3 from '../assets/page_main/pay_union.png'
import BreadCrumbs from '../components/block/BreadCrumbs'
import { useNavigate } from 'react-router-dom'

export default function PaySystem() {
  const navigate = useNavigate()
  return (
    <div className={styles.root}>
      <BreadCrumbs crumbs={pathPay} />

      <div className={styles.title}>
        <div>Платёжные системы</div>
      </div>

      <div className={styles.text}>
        Мы работаем с лидерами мировой финансовой индустрии, только самые лучшие
        системы переводов в вашем распоряжении
      </div>

      <div className={styles.block}>
        <div onClick={() => navigate('pay-best')}>
          <img src={logo1} alt="paysystem" />
        </div>
        <div onClick={() => navigate('pay-llc')}>
          <img src={logo2} alt="paysystem" />
        </div>
        <div onClick={() => navigate('pay-union')}>
          <img src={logo3} alt="paysystem" />
        </div>
      </div>
    </div>
  )
}
