import { IonAlert } from '@ionic/react'
import { useHistory } from 'react-router'
import useForm from './useForm'

function SignIn() {
  const history = useHistory()
  const { handleInput, handleSubmit } = useForm()

  return (
    <IonAlert
      isOpen
      backdropDismiss={false}
      header="로그인"
      inputs={[
        {
          type: 'email',
          placeholder: '이메일',
          attributes: {
            name: 'email',
            onInput: handleInput,
          },
        },
        {
          type: 'password',
          placeholder: '비밀번호',
          attributes: {
            name: 'password',
            onInput: handleInput,
          },
        },
      ]}
      buttons={[
        {
          text: 'Cancel',
          role: 'cancel',
          handler() {
            history.goBack()
          },
        },
        {
          text: 'Ok',
          handler: handleSubmit,
        },
      ]}
    />
  )
}

export default SignIn
