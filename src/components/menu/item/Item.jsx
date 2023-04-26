import styles from './Item.module.scss'
import { Link } from 'react-router-dom'

export default function Item({ item }) {
  return (
    <div className={styles.root}>
      {item.link ? (
        <Link to={item.link}>
          <div className={styles.img}>
            <img src={item.logo} alt={item.title} />
          </div>
        </Link>
      ) : (
        <div className={styles.img}>
          <img src={item.logo} alt={item.title} />
        </div>
      )}
      <div className={styles.short}>{item.title}</div>
      <div className={styles.title}> {item.text}</div>
    </div>
  )
}
