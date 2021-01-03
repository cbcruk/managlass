import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'

dayjs.locale('ko')
dayjs.extend(relativeTime)

export function getTimeFromNow(time) {
  const now = dayjs()
  const year = now.year()
  const date = dayjs(`${year}-${time}`)
  const isBefore = now.isBefore(date)

  if (isBefore) {
    return dayjs(`${year - 1}-${time}`).fromNow()
  } else {
    return date.fromNow()
  }
}

export default dayjs
