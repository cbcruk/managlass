import classNames from 'classnames'
import styles from './style.module.css'

function Nav({ handleSlide }) {
  return (
    <>
      <button
        type="button"
        className={classNames([styles.button, 'is-next'])}
        onClick={() => handleSlide('slideNext')}
      >
        다음
      </button>
      <button
        type="button"
        className={classNames([styles.button, 'is-prev'])}
        onClick={() => handleSlide('slidePrev')}
      >
        이전
      </button>
    </>
  )
}

export default Nav
