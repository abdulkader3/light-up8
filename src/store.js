import { configureStore } from '@reduxjs/toolkit'
import love from './Slices/prodeveloper'

export default configureStore({
  reducer: {
    prity: love,
  },
})
