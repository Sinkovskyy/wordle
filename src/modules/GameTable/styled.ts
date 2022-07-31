import styled, { css } from 'styled-components'
import { FlexWrapper } from '../../components'
import { Colors, font } from '../../styles'
import { TLetterBlock } from './types'

export const Container = styled(FlexWrapper)`
  max-width: 100%;
  width: 350px;
  height: 420px;
  padding: 10px;
  flex-wrap: wrap;
  gap: 5px;
`

export const LetterBlock = styled.div<TLetterBlock>`
  width: 62px;
  height: 62px;
  border: 2px solid ${Colors.grey_tone_1};
  display: flex;
  align-items: center;
  justify-content: center;

  ${font({ size: '2rem', weight: '700' })}

  background-color: transparent;

  ${({ color }) => {
    if (color == 'green') {
      return css`
        background-color: ${Colors.green};
      `
    }

    if (color == 'yellow') {
      return css`
        background-color: ${Colors.yellow};
      `
    }

    if (color == 'grey') {
      return css`
        background-color: ${Colors.grey_tone_1};
      `
    }
  }}

  ${({ color }) => {
    if (!!color) {
      return css`
        border: none;
      `
    }
  }}



  @media (max-width: 350px) {
    width: calc(100% * (1 / 5) - 10px - 1px);
  }
`
