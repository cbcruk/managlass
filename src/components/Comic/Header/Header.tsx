import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import useChapters from '../hooks/useChapters'
import styles from './style.module.css'

function Header({ title, chapters }) {
  const { current, handleChange } = useChapters(chapters)

  return (
    <IonHeader className={styles.wrapper} data-testid="Header">
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/update" />
        </IonButtons>
        <IonButtons slot="end">
          <IonItem>
            <IonSelect
              defaultValue={current.value}
              placeholder={current.label}
              interface="popover"
              onIonChange={handleChange}
            >
              {chapters.map((chapter) => (
                <IonSelectOption key={chapter.value} value={chapter.value}>
                  {chapter.label}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
