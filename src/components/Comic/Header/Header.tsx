import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import Popover from './Popover'
import styles from './style.module.css'

function Header({ title, chapters }) {
  return (
    <IonHeader className={styles.wrapper} data-testid="Header">
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/update" />
        </IonButtons>
        <IonButtons slot="end">
          <Popover chapters={chapters} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
