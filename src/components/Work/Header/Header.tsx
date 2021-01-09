import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

function Header({ title }) {
  return (
    <IonHeader data-testid="Header">
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/update" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
