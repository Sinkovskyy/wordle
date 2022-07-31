export type TTile = {
  row: number
  column: number
  letter?: string
}

export enum ELetterColor {
  green = 'green',
  yellow = 'yellow',
  grey = 'grey',
  highlight_border = 'highlight_border',
  default = 'default',
}

export enum ELetterAnimation {
  pop = 'pop',
  shake = 'shake',
  flip = 'flip',
  idle = 'idle',
}

export type TStyledTile = {
  animation: ELetterAnimation
  animationDuration?: number
  animationDelay?: number
  theme: ELetterColor
}
