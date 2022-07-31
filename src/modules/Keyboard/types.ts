export type TKeyButtonColor = 'green' | 'yellow' | 'grey' | ''

export type TKeyButton = {
  flex: string
  color?: TKeyButtonColor
}

export type TKeyboardKeys = TKey[][]

export type TKey = {
  symbol: JSX.Element | string
  name: string
} & Partial<Pick<TKeyButton, 'flex'>>
