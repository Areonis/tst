import clsx from 'clsx'
import styles from './styles/TextBlock.module.scss'

export default function TextBlock ({direction, className, children}) {
  let d = direction === 'row' ? 'row' : 'column'   
  return (<div className={clsx(styles.textBlock, styles[className], styles[d])} >
    {children}
    </div>)
}