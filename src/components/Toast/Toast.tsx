import { FC } from 'react'
import { useTypedSelector } from '../../hooks'
import { getToastSelector } from '../../store'
import { Container } from './styled'

export const Toast: FC = () => {
  const { text, isVisible } = useTypedSelector(getToastSelector)

  return <>{isVisible && <Container>{text}</Container>}</>
}

export default Toast
