import { rootReducer } from './reducer'

export type RootState = ReturnType<typeof rootReducer>

export type TResponse = {
  [index: string]: any
}

export type TDataWrapper<T> = {
  payload: T
}

export type TSetStatePayload = {
  loading: boolean
  response?: ResponseType
}

export type ResponseType = 'DONE' | 'DEFAULT'
