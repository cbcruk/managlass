import {
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonChip,
} from '@ionic/react'
import { chatbox, eye, heart, time } from 'ionicons/icons'
import Icon from '../../shared/Icon'

function List({ meta, list }) {
  return (
    <IonList>
      <IonListHeader>
        <IonChip>
          <IonLabel color="primary">{meta.author}</IonLabel>
        </IonChip>
        {meta.categories.map((category, index) => (
          <IonChip key={index}>
            <IonLabel color="secondary">{category}</IonLabel>
          </IonChip>
        ))}
        <IonChip>
          <IonLabel color="tertiary">{meta.issue}</IonLabel>
        </IonChip>
      </IonListHeader>
      {list.map((item) => (
        <IonItem key={item.id} routerLink={`/comic/${item.id}`}>
          <IonLabel>
            <h2>{item.title}</h2>
            <p>
              <Icon name={eye} label={item.views} />
              <Icon name={chatbox} label={item.comments} />
              <Icon name={heart} label={item.likes} />
              <Icon name={time} label={item.createdAt} />
            </p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  )
}

export default List
