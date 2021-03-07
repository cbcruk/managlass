import { getUser } from '@cbcruk/firebase-app'
import { atom } from 'jotai'
import firebaseApp from '../lib/firebaseApp'

export const userAtom = atom(firebaseApp.auth().currentUser)

export const fetchUserAtom = atom(
  async (get) => get(userAtom) || (await getUser())
)
