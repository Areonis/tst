import BreadCrumbs from '../components/block/BreadCrumbs'
import ItemNews from '../components/menu/item/ItemNews'
import { pathNews } from '../data/data'
import styles from './styles/News.module.scss'

import { newsData } from '../data/data'

export default function News() {
  return (
    <div className={styles.root}>
      <BreadCrumbs crumbs={pathNews} />

      <div className={styles.title}>
        <div>Только полезные новости</div>
      </div>

      <div className={styles.block}>
        {newsData.map((item) => (
          <ItemNews item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
