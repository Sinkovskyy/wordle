import { FC, useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks'
import { getToastSelector } from '../../store'
import { Container } from './styled'

export const Toast: FC = () => {
  const { text, isVisible, closeTime } = useTypedSelector(getToastSelector)

  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    setVisible(isVisible)
  }, [isVisible])

  useEffect(() => {
    closeTime && visible && setTimeout(() => setVisible(false), closeTime)
  }, [visible])

  return <>{visible && <Container>{text}</Container>}</>
}

export default Toast
