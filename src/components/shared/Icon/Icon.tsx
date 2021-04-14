import { IonIcon } from '@ionic/react'
import styles from './style.module.css'

export interface IconProps {
  name: string
  label: string
}

function Icon({ name, label }: IconProps) {
  return (
    <span className={styles.wrapper} data-testid="Icon">
      <IonIcon icon={name} className={styles.icon} /> {label}
    </span>
  )
}

export default Icon
