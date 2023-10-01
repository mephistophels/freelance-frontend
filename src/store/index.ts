import { configureStore } from '@reduxjs/toolkit'
import authReduser from './slices/auth';
import type { IAuth } from './slices/auth';

export interface IStore {
  auth: IAuth,
}

export const store = configureStore({
  reducer: {
    auth: authReduser,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch