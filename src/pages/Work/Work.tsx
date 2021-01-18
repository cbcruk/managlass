import React from 'react'
import { IonPage, IonContent } from '@ionic/react'
import Spinner from '../../components/shared/Spinner'
import { Header, List } from '../../components/Work'
import useWork from './useWork'

function Work() {
  const { data, isLoading } = useWork()

  return (
    <IonPage>
      {isLoading ? (
        <IonContent>
          <Spinner />
        </IonContent>
      ) : (
        <>
          <Header title={data.meta.title} />
          <IonContent>
            <List meta={data.meta} list={data.list} />
          </IonContent>
        </>
      )}
    </IonPage>
  )
}

export default Work
