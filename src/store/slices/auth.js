import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IAuth {
  role: string,
  name: string,
  access: string,
}

const initialState: IAuth = {
  role: '',
  name : '',
  access: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const { } = authSlice.actions

export default authSlice.reducer