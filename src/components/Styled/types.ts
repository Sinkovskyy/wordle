export type TFlexWrapper = {
  width?: string
  height?: string
  direction?: 'row' | 'column'
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
  align?: 'flex-start' | 'center' | 'flex-end'
  gap?: number
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'initial' | 'unset'
}
