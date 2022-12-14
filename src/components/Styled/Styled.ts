import styled from 'styled-components'
import { font } from '../../styles'
import { TFlexWrapper } from './types'

export const FlexWrapper = styled.div<TFlexWrapper>`
  display: flex;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};
  flex-wrap: ${({ wrap }) => wrap};
  max-width: 100%;
`

export const H1 = styled.h1`
  ${font({ size: '36px', weight: '700' })}
`

export const H2 = styled.h2`
  ${font({ size: '16px', weight: '700' })}
`
