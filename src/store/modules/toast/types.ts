export type TInitialState = TToastProps

export type TToastProps = {
  isVisible: boolean
  text: string
}

export type TSetToastPayload = Partial<TToastProps>
