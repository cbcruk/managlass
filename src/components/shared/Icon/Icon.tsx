import { IonIcon } from '@ionic/react'
import styles from './style.module.css'

function Icon({ name, label }) {
  return (
    <span className={styles.wrapper} data-testid="Icon">
      <IonIcon icon={name} className={styles.icon} /> {label}
    </span>
  )
}

export default Icon
