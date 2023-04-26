import styles from './Item.module.scss'

export default function Req_item() {
  return (
    <div className={styles.req_root}>
      <div className={styles.req_header}>
        <div className={styles.req_header_item}>PDF</div>
        <div className={styles.req_header_item}>Скачать</div>
      </div>

      <div className={styles.req_footer}>
        <div className={styles.req_footer_item}>
          АУДИТОРСКОЕ ЗАКЛЮЧЕНИЕ ЗА 2020 Г.
        </div>
        <div className={styles.req_footer_item}>31.03.2021</div>
      </div>
    </div>
  )
}
