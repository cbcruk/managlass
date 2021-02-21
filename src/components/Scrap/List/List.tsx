import {
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react'
import styles from './style.module.css'

function List({ list }) {
  return (
    <IonList>
      {list.map(({ id, fields }) => {
        return (
          <IonCard key={id} routerLink={`/work/${fields.id}`}>
            <img src={fields.cover} alt="" className={styles.cover} />
            <IonCardHeader>
              <IonCardSubtitle>
                {fields.author}
                {fields.author2 && ` (${fields.author2})`}
              </IonCardSubtitle>
              <IonCardTitle>{fields.title}</IonCardTitle>
            </IonCardHeader>

            {fields.content && (
              <IonCardContent>{fields.content}</IonCardContent>
            )}
          </IonCard>
        )
      })}
    </IonList>
  )
}

export default List
