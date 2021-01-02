import React from 'react'
import { IonPage, IonContent } from '@ionic/react'
import classNames from 'classnames'
import { Slides, Header } from '../../components/Comic'
import Spinner from '../../components/shared/Spinner'
import useComic from './useComic'
import useControl from './useControl'

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
            <Header title={data.title} chapters={data.chapters} />
            <IonContent>
              <Slides
                list={data?.imageList ?? []}
                chapters={data.chapters}
                handleActive={handleActive}
              />
            </IonContent>
          </>
        )}
      </IonPage>
    </div>
  )
}

export default Comic
