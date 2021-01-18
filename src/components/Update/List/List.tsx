import { IonThumbnail, IonItem, IonLabel, IonList } from '@ionic/react'
import { chatbox, eye, heart, time } from 'ionicons/icons'
import { getTimeFromNow } from '../../../lib/dayjs'
import Icon from '../../shared/Icon'
import styles from './style.module.css'

function List({ list }) {
  return (
    <IonList data-testid="List">
      {list.map((item) => (
        <IonItem key={item.id} routerLink={`/comic/${item.id}`}>
          <IonThumbnail slot="start" className={styles.thumbnail}>
            <img src={item.thumbnail} alt="" loading="lazy" />
          </IonThumbnail>
          <IonLabel>
            <h2>{item.title}</h2>
            <p>
              {item.author} • {item.categories}
            </p>
            <p>
              <Icon name={eye} label={item.views} />
              <Icon name={chatbox} label={item.comments} />
              <Icon name={heart} label={item.likes} />
              <Icon name={time} label={getTimeFromNow(item.createdAt)} />
            </p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  )
}

export default List
