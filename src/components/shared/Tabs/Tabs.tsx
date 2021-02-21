import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { newspaper, book } from 'ionicons/icons'
import { useRouteMatch } from 'react-router'

function Tabs({ children }) {
  const match = useRouteMatch(['/scrap', '/update'])

  return (
    <IonTabs>
      {children}
      {match?.isExact ? (
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/update">
            <IonLabel>최신화</IonLabel>
            <IonIcon icon={newspaper} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/scrap">
            <IonLabel>단행본</IonLabel>
            <IonIcon icon={book} />
          </IonTabButton>
        </IonTabBar>
      ) : (
        <IonTabBar />
      )}
    </IonTabs>
  )
}

export default Tabs
