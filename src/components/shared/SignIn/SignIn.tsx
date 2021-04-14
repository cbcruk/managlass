import { IonAlert } from '@ionic/react'
import { useCallback } from 'react'
import { useHistory } from 'react-router'
import useForm from './useForm'

export interface SignInProps {
  onInput: ReturnType<typeof useForm>['handleInput']
  onSubmit: ReturnType<typeof useForm>['handleSubmit']
  onCancel(): void
}

export function View({ onInput, onCancel, onSubmit }: SignInProps) {
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
            onInput,
          },
        },
        {
          type: 'password',
          placeholder: '비밀번호',
          attributes: {
            name: 'password',
            onInput,
          },
        },
      ]}
      buttons={[
        {
          text: 'Cancel',
          role: 'cancel',
          handler() {
            onCancel()
          },
        },
        {
          text: 'Ok',
          handler: onSubmit,
        },
      ]}
    />
  )
}

function SignIn() {
  const history = useHistory()
  const handleCancel = useCallback(() => history.goBack(), [history])
  const { handleInput, handleSubmit } = useForm()

  return (
    <View
      onInput={handleInput}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  )
}

export default SignIn
