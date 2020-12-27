import React from 'react'
import { IonPage, IonContent } from '@ionic/react'
import classNames from 'classnames'
import { Slides, Header } from '../../components/Comic'
import useComic from './useComic'
import useControl from './useControl'

function Comic() {
  const { data } = useComic()
  const { isActive, handleActive } = useControl()

  if (!data) {
    return null
  }

  return (
    <div
      className={classNames({
        'is-active': isActive,
      })}
    >
      <IonPage>
        <Header />
        <IonContent onClick={handleActive}>
          <Slides list={data.imageList} />
        </IonContent>
      </IonPage>
    </div>
  )
}

export default Comic
