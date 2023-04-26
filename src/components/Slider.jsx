import { useEffect, useState } from 'react'
import styles from './block/styles/Slider.module.scss'
import logo1 from '../assets/page_main/slide_1.png'
import logo2 from '../assets/page_main/slide_2.png'
import logo3 from '../assets/page_main/slide_3.png'

const Image1 = () => <img src={logo1} alt="slider" className={styles.imgLogo} />
const Image2 = () => <img src={logo2} alt="slider" className={styles.imgLogo} />
const Image3 = () => <img src={logo3} alt="slider" className={styles.imgLogo} />

export default function Slider() {
  const [temp, setTemp] = useState(Image1)
  const [num, setNum] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setTemp(Image2)
    }, 3000)

    setTimeout(() => {
      setTemp(Image3)
    }, 6000)
  }, [])

  const handleClick = () => {
    setNum((n) => {
      if (n === 3) {
        return 1
      }
      return n + 1
    })

    if (num === 1) {
      setTemp(Image1)
    }
    if (num === 2) {
      setTemp(Image2)
    }
    if (num === 3) {
      setTemp(Image3)
    }
  }

  return (
    <div className={styles.slider} onClick={handleClick}>
      {temp}
    </div>
  )
}
