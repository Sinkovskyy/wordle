import styled, { css } from 'styled-components'
import { FlexWrapper } from '../../components'
import { Colors, font } from '../../styles'
import { EKeyButtonColor, TKeyButton } from './types'

export const Container = styled(FlexWrapper)`
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
`

export const KeyButton = styled.button<TKeyButton>`
  height: 58px;
  flex: ${({ flex }) => flex};

  border: none;
  border-radius: 4px;

  background-color: ${Colors.grey};

  ${font({ size: '12px', weight: '700' })}
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ color }) => {
    if (color == EKeyButtonColor.green) {
      return css`
        background-color: ${Colors.green};
      `
    }

    if (color == EKeyButtonColor.yellow) {
      return css`
        background-color: ${Colors.yellow};
      `
    }

    if (color == EKeyButtonColor.grey) {
      return css`
        background-color: ${Colors.grey_tone_1};
      `
    }
  }}
`

export const Image = styled.img`
  filter: ${Colors.filter_white};
`
