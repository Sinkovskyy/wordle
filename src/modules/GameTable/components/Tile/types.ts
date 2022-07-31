export type TTile = {
  row: number
  column: number
  letter?: string
}

export enum ELetterColor {
  green,
  yellow,
  grey,
  default,
}

export enum ELetterAnimation {
  pop,
  shake,
  flip,
  idle,
}

export type TStyledTile = {
  animation: ELetterAnimation
  animationDuration?: number
  animationDelay?: number
  theme: ELetterColor
}
