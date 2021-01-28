import React from 'react'
import { IonPage, IonContent, IonToast } from '@ionic/react'
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
      ) : data ? (
        <>
          <Header title={data.meta.title} />
          <IonContent>
            <List meta={data.meta} list={data.list} />
          </IonContent>
        </>
      ) : (
        <IonToast
          isOpen
          color="danger"
          message="네트워크에 문제가 생겼습니다. 새로고침 버튼을 눌러주세요."
          duration={5000}
        />
      )}
    </IonPage>
  )
}

export default Work
