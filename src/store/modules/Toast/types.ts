export type TInitialState = TToastProps

export type TToastProps = {
  isVisible: boolean
  text: string
  closeTime: number | null
}

export type TSetToastPayload = Partial<TToastProps>
