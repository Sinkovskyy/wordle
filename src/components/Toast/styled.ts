import styled from 'styled-components'
import { Colors, font } from '../../styles'

export const Container = styled.div`
  background-color: ${Colors.white};
  padding: 10px 15px;
  border-radius: 8px;
  ${font({ color: Colors.black, weight: '700' })}

  position: fixed;
  top: 60px;
  left: 50%;
  transform: translate(-50%, 0%);
`
