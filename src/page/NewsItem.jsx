import { useParams } from 'react-router-dom'
import BreadCrumbs from '../components/block/BreadCrumbs'
import { newsData, pathNews } from '../data/data'

import styles from './styles/NewsItem.module.scss'
import newsPage from '../data/dataNews'

export default function NewsItem() {
  const { id } = useParams()
  const NewsItem = newsPage[id]
  const item = newsData.find((d) => d.id === Number(id))
  return (
    <div className={styles.root}>
      <BreadCrumbs
        crumbs={[
          ...pathNews,
          { id: Math.random(), name: `${item.title.slice(0, 30)}...` },
        ]}
      />
      <div className={styles.container}>
        {<NewsItem />}
        <div className={styles.image_block}>
          <img src={item.pic} alt={item.title} />
        </div>
      </div>
    </div>
  )
}
