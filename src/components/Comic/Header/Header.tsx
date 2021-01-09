import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { fileTray } from 'ionicons/icons'
import styles from './style.module.css'

function Header({ title, workId }) {
  return (
    <IonHeader className={styles.wrapper} data-testid="Header">
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/update" />
        </IonButtons>
        <IonButtons slot="end">
          <IonButton routerLink={`/work/${workId}`} routerDirection="none">
            <IonIcon icon={fileTray} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
