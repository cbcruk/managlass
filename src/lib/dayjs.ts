import { dayjs, getTimeFromNow as fromNow } from '@cbcruk/utils'

export function getTimeFromNow(time) {
  const now = dayjs()
  const year = now.year()
  const date = dayjs(`${year}-${time}`)
  const isBefore = now.isBefore(date)

  if (isBefore) {
    return fromNow(`${year - 1}-${time}`)
  } else {
    return fromNow(date)
  }
}

export default dayjs
