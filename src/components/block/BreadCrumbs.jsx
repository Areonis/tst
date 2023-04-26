import { useNavigate } from 'react-router-dom'
import styles from '../block/styles/BreadCrumbs.module.scss'

import arrow from '../../assets/page_main/down.png'

export default function BreadCrumbs({ crumbs }) {
  const noop = () => {}

  const navigate = useNavigate()
  return (
    <div className={styles.root}>
      {crumbs.map((cr, i) => (
        <div className={styles.breadcrumbs_line} key={cr.id}>
          <div
            onClick={
              crumbs.length === i + 1 ? noop() : () => navigate(`/${cr.path}`)
            }
          >
            {cr.name}
          </div>

          {crumbs.length === i + 1 ? null : (
            <div className={styles.img}>
              <img src={arrow} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
