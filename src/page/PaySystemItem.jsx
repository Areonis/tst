import { useParams } from 'react-router-dom'
import { pathPay, paysLogo } from '../data/data'
import styles from './styles/PaySystem.module.scss'
import BreadCrumbs from '../components/block/BreadCrumbs'
import payItems from '../data/payItems'

const nav = {
  'pay-union': 'Платёжная система UnionPay',
  'pay-best': 'Платежная система «БЭСТ»',
  'pay-llc': 'Платежная система LLC«DEMETRA LICORISE»',
}

export default function PaySystemItem() {
  const { id } = useParams()

  const PayItem = payItems[id]

  const item = paysLogo[id]
  return (
    <div className={styles.root_item}>
      <BreadCrumbs
        crumbs={[...pathPay, { id: Math.random(), name: nav[id] }]}
      />
      <div className={styles.container_item}>
        {<PayItem />}
        <div className={styles.image_block}>
          <img src={item} alt={'pay'} />
        </div>
      </div>
    </div>
  )
}
