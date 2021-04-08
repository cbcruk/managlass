import { useAtom } from 'jotai'
import { fetchUserAtom } from '../../../atom/auth'

function useUser() {
  const [user] = useAtom(fetchUserAtom)
  return user
}

export default useUser
