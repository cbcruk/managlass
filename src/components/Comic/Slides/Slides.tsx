import { useRef, useState } from 'react'
import { IonSlide, IonSlides } from '@ionic/react'
import Nav from '../Nav'
import Pagination, { Progress, Remote } from '../Pagination'
import styles from './style.module.css'

function Slides({ list, chapters, handleActive }) {
  const slideRef = useRef(null)
  const [activeIndex, setIndex] = useState(0)

  return (
    <>
      <IonSlides
        ref={slideRef}
        dir="rtl"
        options={{
          keyboard: true,
          speed: 0,
        }}
        className={styles.wrapper}
        onIonSlideDidChange={async (e) => {
          const target = e.target as HTMLIonSlidesElement
          const activeIndex = await target.getActiveIndex()

          setIndex(activeIndex)
        }}
        data-testid="Slides"
      >
        {list.map((src, index) => (
          <IonSlide key={index}>
            <img src={src} alt="" />
          </IonSlide>
        ))}
      </IonSlides>
      <Nav slideRef={slideRef} handleActive={handleActive} />
      <Pagination>
        <Remote chapters={chapters} slideRef={slideRef} />
        <Progress activeIndex={activeIndex + 1} total={list.length} />
      </Pagination>
    </>
  )
}

export default Slides
