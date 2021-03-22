import { IonContent, IonPage } from '@ionic/react'
import { useAtom } from 'jotai'
import { fetchUserAtom } from '../../atom/auth'
import { Header, List } from '../../components/Scrap'
import useScrap from './useScrap'

function Scrap() {
  const [user] = useAtom(fetchUserAtom)
  const { data } = useScrap(user)

  return (
    <IonPage>
      <Header />
      <IonContent>{data && <List list={data} />}</IonContent>
    </IonPage>
  )
}

export default Scrap
