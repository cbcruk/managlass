import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react'
import { refresh } from 'ionicons/icons'

function Header({ onRefresh }) {
  return (
    <IonHeader data-testid="Header">
      <IonToolbar>
        <IonButtons slot="start" />
        <IonTitle>마나글래스</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={onRefresh} data-testid="Header-button">
            <IonIcon slot="start" icon={refresh} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
