import { useAtom } from 'jotai'
import { useCallback, useRef } from 'react'
import { userAtom } from '../../../atom/auth'
import firebaseApp from '../../../lib/firebaseApp'

function useForm() {
  const [, setUser] = useAtom(userAtom)

  const formRef = useRef({
    email: '',
    password: '',
  })
  const handleInput = useCallback((e) => {
    const target = e.target as HTMLInputElement

    formRef.current[target.name] = target.value
  }, [])
  const handleSubmit = useCallback(async () => {
    const { email, password } = formRef.current

    const { user } = await firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)

    setUser(user)
  }, [setUser])

  return {
    handleInput,
    handleSubmit,
  }
}

export default useForm
