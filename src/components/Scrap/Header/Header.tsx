import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'

function Header() {
  return (
    <IonHeader data-testid="Header">
      <IonToolbar>
        <IonTitle>단행본 스크랩</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
