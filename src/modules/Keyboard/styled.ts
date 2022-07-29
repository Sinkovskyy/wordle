import styled from 'styled-components'
import { FlexWrapper } from '../../components'
import { Colors, font } from '../../styles'
import { TButton } from './types'

export const Container = styled(FlexWrapper)`
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
`

export const Button = styled.button<TButton>`
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

  &.green {
    background-color: ${Colors.green};
  }

  &.yellow {
    background-color: ${Colors.yellow};
  }

  &.grey {
    background-color: ${Colors.grey_tone_1};
  }
`

export const Image = styled.img`
  filter: ${Colors.filter_white};
`
