import { useEffect, useRef, useState } from 'react'
import { IonProgressBar, IonSlide, IonSlides } from '@ionic/react'
import Nav from '../Nav'
import Pagination, { Progress, Remote } from '../Pagination'
import styles from './style.module.css'
import { Promise, mapSeries } from 'bluebird'
import { useLocation } from 'react-router-dom'

Promise.config({ cancellation: true })

function Slides({ list, chapters, handleActive }) {
  const location = useLocation()
  const slideRef = useRef(null)
  const promise = useRef(null)
  const image = useRef(null)
  const [activeIndex, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    image.current = new Image()
    promise.current = mapSeries(
      list,
      (src: string) =>
        new Promise((resolve, reject) => {
          const img = image.current

          img.src = src
          img.onload = () => {
            resolve()
            setCount((prev) => prev + 1)
          }
          img.onerror = reject
        })
    )

    promise.current.then(() => {
      setLoaded(true)
    })

    return () => {
      promise.current.cancel()
    }
  }, [list])

  useEffect(() => {
    if (location.pathname === '/update') {
      promise.current.cancel()
    }
  }, [location])

  return (
    <>
      {!isLoaded && <IonProgressBar value={count / list.length} />}
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
