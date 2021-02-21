import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { bookmark, bookmarkOutline } from 'ionicons/icons'
import classNames from 'classnames'
import { useParams } from 'react-router'
import { useAtom } from 'jotai'
import { fetchUserAtom } from '../../../atom/auth'
import useBookmark from './useBookmark'
import styles from './style.module.css'

function Header({ meta }) {
  const { id } = useParams<{ id: string }>()
  const [user] = useAtom(fetchUserAtom)
  const { isBookmarked, handleBookmark } = useBookmark({ id, meta })

  return (
    <IonHeader data-testid="Header">
      <IonToolbar>
        <IonTitle>{meta.title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/update" />
        </IonButtons>
        <IonButtons slot="end">
          {user && (
            <IonButton
              className={classNames([
                styles.bookmark,
                {
                  'is-checked': isBookmarked,
                },
              ])}
              onClick={handleBookmark}
            >
              <IonIcon icon={isBookmarked ? bookmark : bookmarkOutline} />
            </IonButton>
          )}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
