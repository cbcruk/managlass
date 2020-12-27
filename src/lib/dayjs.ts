import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'

dayjs.locale('ko')
dayjs.extend(relativeTime)

const year = dayjs().year()

export function getTimeFromNow(time) {
  return dayjs(`${year}-${time}`).fromNow()
}

export default dayjs
