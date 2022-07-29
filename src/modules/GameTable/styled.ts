import styled from 'styled-components'
import { FlexWrapper } from '../../components'
import { Colors, font } from '../../styles'

export const Container = styled(FlexWrapper)`
  max-width: 100%;
  width: 350px;
  height: 420px;
  padding: 10px;
  flex-wrap: wrap;
  gap: 5px;
`

export const LetterBlock = styled.div`
  width: 62px;
  height: 62px;
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

  @media (max-width: 350px) {
    width: calc(100% * (1 / 5) - 10px - 1px);
  }
`
