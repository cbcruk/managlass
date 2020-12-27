import classNames from 'classnames'
import styles from './style.module.css'

function Pagination({ children }) {
  return (
    <div
      className={classNames([
        'swiper-pagination',
        'swiper-pagination-fraction',
        styles.wrapper,
      ])}
    >
      {children}
    </div>
  )
}

export default Pagination
