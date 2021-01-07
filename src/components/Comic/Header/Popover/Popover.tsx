import { useState } from 'react'
import { IonPopover, IonButton, IonItem, IonLabel, IonIcon } from '@ionic/react'
import { caretDown } from 'ionicons/icons'
import useChapters from '../../hooks/useChapters'
import styles from './style.module.css'

function Popover({ chapters }) {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  })
  const { current } = useChapters(chapters)

  return (
    <>
      <IonPopover
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() =>
          setShowPopover({ showPopover: false, event: undefined })
        }
        cssClass={styles.wrapper}
      >
        {chapters.map((chapter) => (
          <IonItem key={chapter.value} href={`/comic/${chapter.value}`}>
            <IonLabel>{chapter.label}</IonLabel>
          </IonItem>
        ))}
      </IonPopover>
      <IonButton
        onClick={(e: any) => {
          e.persist()
          setShowPopover({ showPopover: true, event: e })
        }}
      >
        {current.label}
        <IonIcon icon={caretDown} className={styles.icon} />
      </IonButton>
    </>
  )
}

export default Popover
