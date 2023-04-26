import { useNavigate } from 'react-router-dom'
import styles from './Item.module.scss'

export default function ItemNews({ item }) {
  const navigate = useNavigate()
  return (
    <div className={styles.newsItem} onClick={() => navigate(`${item.id}`)}>
      <div className={styles.img_news}>
        <img src={item.pic} alt={item.title} />
      </div>
      <div className={styles.title_news}>{item.title}</div>
      <div className={styles.text_news}>{item.text}</div>
    </div>
  )
}
