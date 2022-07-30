export type TButton = Required<Pick<TKey, 'flex'>>

export type TKeyboardKeys = TKey[][]

export type TKey = {
  symbol: JSX.Element | string
  name: string
  flex?: string
}
