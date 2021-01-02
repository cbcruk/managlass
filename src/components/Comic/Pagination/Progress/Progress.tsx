import { IonProgressBar } from '@ionic/react'
import styles from './style.module.css'

function Progress({ activeIndex, total }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>
        {activeIndex}/{total} 페이지
      </span>
      <IonProgressBar
        value={activeIndex / total}
        reversed
        className={styles.bar}
      />
    </div>
  )
}

export default Progress
