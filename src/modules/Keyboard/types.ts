export enum EKeyButtonColor {
  green = 'grenn',
  yellow = 'yellow',
  grey = 'grey',
  default = 'default',
}

export type TKeyButton = {
  flex: string
  color?: EKeyButtonColor
}

export type TKeyboardKeys = TKey[][]

export type TKey = {
  symbol: JSX.Element | string
  name: string
} & Partial<Pick<TKeyButton, 'flex'>>
