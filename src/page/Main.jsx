import NewsBlock from '../components/NewsBlock'
import Slider from '../components/Slider'
import ContentBlock from '../components/block/ContentBlock'
import Menu from '../components/menu/Menu'
import { block1, block2 } from '../data/data'
import styles from './styles/Pages.module.scss'

// repeat(6, 1fr)

export default function Main() {
  return (
    <div className={styles.main}>
      <Slider />

      <ContentBlock bg="" direction="row" gap={0} gridColumn="1/7">
        <Menu items={block1} />
      </ContentBlock>

      <ContentBlock bg="" direction="row" gap={0} gridColumn="1/7">
        <Menu items={block2} />
      </ContentBlock>

      <ContentBlock bg="" direction="row" gap={0} gridColumn="1/7">
        <NewsBlock />
      </ContentBlock>

      {/* <Empty h={space}/> */}
    </div>
  )
}
