import SignIn from '../SignIn'
import useUser from './useUser'

function Protected({ children }) {
  const user = useUser()

  if (!user) {
    return <SignIn />
  }

  return children
}

export default Protected
