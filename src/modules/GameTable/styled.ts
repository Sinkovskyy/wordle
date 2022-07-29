import styled from 'styled-components'
import { Colors, font } from '../../styles'

export const LetterBlock = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid ${Colors.grey_tone_1};
  display: flex;
  align-items: center;
  justify-content: center;

  ${font({ size: '2rem', weight: '700' })}

  background-color: transparent;

  &.grey {
    background-color: ${Colors.grey};
  }

  &.yellow {
    background-color: ${Colors.yellow};
  }

  &.green {
    background-color: ${Colors.green};
  }

  &.grey,
  &.yellow,
  &.green {
    border: none;
  }
`
