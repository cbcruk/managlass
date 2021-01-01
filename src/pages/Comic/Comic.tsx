import React from 'react'
import { IonPage, IonContent, IonSpinner } from '@ionic/react'
import classNames from 'classnames'
import { Slides, Header } from '../../components/Comic'
import useComic from './useComic'
import useControl from './useControl'
import Spinner from '../../components/shared/Spinner'

function Comic() {
  const { data, isLoading } = useComic()
  const { isActive, handleActive } = useControl()

  return (
    <div
      className={classNames({
        'is-active': isActive,
      })}
    >
      <IonPage>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Header />
            <IonContent onClick={handleActive}>
              <Slides list={data?.imageList ?? []} />
            </IonContent>
          </>
        )}
      </IonPage>
    </div>
  )
}

export default Comic
