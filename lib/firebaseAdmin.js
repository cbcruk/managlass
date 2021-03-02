import { getFirebaseAdmin } from '@cbcruk/firebase'

const admin = getFirebaseAdmin({
  projectId: process.env.FIREBASE_MANAGLASS_PROJECT_ID,
  clientEmail: process.env.FIREBASE_MANAGLASS_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_MANAGLASS_PRIVATE_KEY,
})

export default admin
