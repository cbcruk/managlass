import { IonPage, IonContent, IonToast } from '@ionic/react'
import classNames from 'classnames'
import { Slides, Header } from '../../components/Comic'
import Spinner from '../../components/shared/Spinner'
import useComic from './useComic'
import useControl from './useControl'

function Comic() {
  const { data, error, isLoading } = useComic()
  const { isActive, handleActive } = useControl()

  return (
    <div
      className={classNames({
        'is-active': isActive,
      })}
    >
      <IonPage>
        {error && (
          <IonToast
            isOpen
            color="danger"
            message="네트워크에 문제가 생겼습니다. 새로고침 버튼을 눌러주세요."
            duration={5000}
          />
        )}
        {isLoading ? (
          <IonContent
            style={{
              '--overflow': 'hidden',
            }}
          >
            <Spinner />
          </IonContent>
        ) : (
          <>
            <Header title={data.title} workId={data.workId} />
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
