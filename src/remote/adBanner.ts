import { collection, getDocs } from 'firebase/firestore'
import { store } from './firebase'

import { COLLECTIONS } from '@/constants'
import { AdBanner } from '@/models/card'

export async function getadBanners() {
  const adBannerSnapshot = await getDocs(
    collection(store, COLLECTIONS.ADBANNER),
  )
  return adBannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as AdBanner),
  }))
}
