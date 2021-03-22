import { useAtom } from 'jotai'
import { fetchUserAtom } from '../../../atom/auth'
import SignIn from '../SignIn'

function Protected({ children }) {
  const [user] = useAtom(fetchUserAtom)

  if (!user) {
    return <SignIn />
  }

  return children
}

export default Protected
