import { IonBackButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react'
import styles from './style.module.css'

function Header() {
  return (
    <IonHeader className={styles.wrapper} data-testid="Header">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/update" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
