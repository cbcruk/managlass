import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { newspaper, book } from 'ionicons/icons'
import * as React from 'react'
import { useRouteMatch } from 'react-router'

export interface TabsProps {
  isExact: boolean
  children?: React.ReactNode
}

export function View({ isExact, children }: TabsProps) {
  return (
    <IonTabs>
      {children}
      {isExact ? (
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

function Tabs(props) {
  const match = useRouteMatch(['/scrap', '/update'])

  return <View isExact={match?.isExact} {...props} />
}

export default Tabs
