import { IonButton } from '@ionic/react'
import classNames from 'classnames'
import { useCallback } from 'react'
import styles from './style.module.css'

function Nav({ slideRef, handleActive }) {
  const handleSlide = useCallback(
    (direction) => slideRef.current[direction](),
    [slideRef]
  )

  return (
    <div className={styles.wrapper} onClick={handleActive}>
      <IonButton
        className={classNames([styles.button, 'is-next'])}
        onClick={() => handleSlide('slideNext')}
      >
        다음
      </IonButton>
      <IonButton
        className={classNames([styles.button, 'is-prev'])}
        onClick={() => handleSlide('slidePrev')}
      >
        이전
      </IonButton>
    </div>
  )
}

export default Nav
