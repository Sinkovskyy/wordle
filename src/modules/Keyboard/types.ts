export type TButton = Required<Pick<TKey, 'flex'>>

export type TKeyboardKeys = TKey[][]

export type TKey = {
  symbol: JSX.Element | string
  flex?: string
}
