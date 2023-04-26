import styles from './block/styles/Button.module.scss'
import clsx from 'clsx'

export default function Button({ className, handler, pic, children }) {
  return (
    <>
      <button
        className={clsx(styles[className], styles.root)}
        onClick={handler}
      >
        {children}{' '}
        {pic ? (
          <div>
            <img src={pic} />
          </div>
        ) : null}
      </button>
    </>
  )
}
