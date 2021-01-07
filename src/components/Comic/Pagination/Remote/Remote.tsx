import { IonButton, IonIcon, IonRouterLink } from '@ionic/react'
import { chevronForward, chevronBack, playSkipForward } from 'ionicons/icons'
import useChapters from '../../hooks/useChapters'
import styles from './style.module.css'

function Remote({ chapters, slideRef }) {
  const { prev, next } = useChapters(chapters)

  return (
    <div className={styles.wrapper}>
      <div className={styles.chapter}>
        {next && (
          <IonRouterLink href={`/comic/${next.value}`} className={styles.link}>
            <IonIcon icon={chevronBack} /> 다음 화
          </IonRouterLink>
        )}
        {prev && (
          <IonRouterLink href={`/comic/${prev.value}`} className={styles.link}>
            이전 화 <IonIcon icon={chevronForward} />
          </IonRouterLink>
        )}
      </div>
      <IonButton
        fill="clear"
        size="small"
        className={styles.skip}
        onClick={async () => await slideRef.current.slideTo(0)}
      >
        첫 펫이지 <IonIcon icon={playSkipForward} />
      </IonButton>
    </div>
  )
}

export default Remote
