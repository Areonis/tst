import Item from './item/Item'
import styles from './Menu.module.scss'

export default function Menu({ items }) {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{items.title}</h3>
      <h6 className={styles.text}>{items.text}</h6>
      <div className={styles.content}>
        {items.data.map((item, i) => {
          return <Item item={item} key={i} />
        })}
      </div>
    </div>
  )
}
