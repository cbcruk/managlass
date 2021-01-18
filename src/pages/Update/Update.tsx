import {
  IonPage,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonProgressBar,
} from '@ionic/react'
import Spinner from '../../components/shared/Spinner'
import { Header, List } from '../../components/Update'
import useContentScroll from './useContentScroll'
import useList from './useList'

function Update() {
  const { list, isLoading, isValidating, size, setSize, mutate } = useList()
  const { contentRef, handleScroll } = useContentScroll()
  const isPageSize1 = list.length > 0 && size === 1

  return (
    <IonPage>
      <Header
        onRefresh={async () => {
          handleScroll()
          await setSize(1)
          await mutate()
        }}
      />
      {isPageSize1 && isValidating && <IonProgressBar type="indeterminate" />}
      <IonContent ref={contentRef}>
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <List list={list} />
            <IonInfiniteScroll
              threshold="100px"
              disabled={isLoading}
              onIonInfinite={async (e) => {
                await setSize(size + 1)
                ;(e.target as HTMLIonInfiniteScrollElement).complete()
              }}
            >
              <IonInfiniteScrollContent />
            </IonInfiniteScroll>
          </>
        )}
      </IonContent>
    </IonPage>
  )
}

export default Update
