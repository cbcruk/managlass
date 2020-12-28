import { useCallback, useRef, useState } from 'react'
import { IonSlide, IonSlides } from '@ionic/react'
import Nav from '../Nav'
import Pagination from '../Pagination'
import styles from './style.module.css'

function Slides({ list }) {
  const slideRef = useRef(null)
  const [activeIndex, setIndex] = useState(0)
  const handleSlide = useCallback(
    (direction) => slideRef.current[direction](),
    []
  )

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
      <Nav handleSlide={handleSlide} />
      <Pagination>
        {activeIndex + 1}/{list.length}
      </Pagination>
    </>
  )
}

export default Slides
