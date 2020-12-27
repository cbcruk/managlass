import {
  IonPage,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonProgressBar,
} from '@ionic/react'
import { Header, List } from '../../components/Update'
import useContentScroll from './useContentScroll'
import useList from './useList'

function Update() {
  const { list, isValidating, size, setSize, mutate } = useList()
  const { contentRef, handleScroll } = useContentScroll()

  return (
    <IonPage>
      <Header
        onRefresh={async () => {
          handleScroll()
          await setSize(1)
          await mutate()
        }}
      />
      {isValidating && <IonProgressBar type="indeterminate" />}
      <IonContent ref={contentRef}>
        <List list={list} />
        <IonInfiniteScroll
          threshold="100px"
          disabled={isValidating}
          onIonInfinite={async (e) => {
            await setSize(size + 1)
            ;(e.target as HTMLIonInfiniteScrollElement).complete()
          }}
        >
          <IonInfiniteScrollContent />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  )
}

export default Update
