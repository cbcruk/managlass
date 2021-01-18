import { IonSpinner } from '@ionic/react'
import classNames from 'classnames'
import styles from './style.module.css'

function Spinner({ className = '' }) {
  return (
    <div className={classNames([styles.wrapper, 'ion-padding-top', className])}>
      <IonSpinner name="crescent" />
    </div>
  )
}

export default Spinner
