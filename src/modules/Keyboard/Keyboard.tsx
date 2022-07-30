import { FC, useMemo } from 'react'
import { Assets } from '../../assets'
import { FlexWrapper } from '../../components'
import { Button, Container, Image } from './styled'
import { TKeyboardKeys } from './types'

const Keyboard: FC = () => {
  const KEYBOARD_KEYS: TKeyboardKeys = useMemo(
    () => [
      [
        { symbol: 'q' },
        { symbol: 'w' },
        { symbol: 'e' },
        { symbol: 'r' },
        { symbol: 't' },
        { symbol: 'y' },
        { symbol: 'u' },
        { symbol: 'i' },
        { symbol: 'o' },
        { symbol: 'p' },
      ],
      [
        { symbol: 'a' },
        { symbol: 's' },
        { symbol: 'd' },
        { symbol: 'f' },
        { symbol: 'g' },
        { symbol: 'h' },
        { symbol: 'j' },
        { symbol: 'k' },
        { symbol: 'l' },
      ],
      [
        { symbol: 'enter', flex: '1.5' },
        { symbol: 'z' },
        { symbol: 'x' },
        { symbol: 'c' },
        { symbol: 'v' },
        { symbol: 'b' },
        { symbol: 'n' },
        { symbol: 'm' },
        { symbol: <Image src={Assets.deleteIcon} />, flex: '1.5' },
      ],
    ],
    []
  )

  return (
    <Container>
      {/* First row */}
      <FlexWrapper gap={6} width="484px">
        {KEYBOARD_KEYS[0].map((key, index) => (
          <Button key={index} flex={key?.flex || '1'}>
            {key.symbol}
          </Button>
        ))}
      </FlexWrapper>

      {/* Second row */}
      <FlexWrapper gap={6} width="442px">
        {KEYBOARD_KEYS[1].map((key, index) => (
          <Button key={index} flex={key?.flex || '1'}>
            {key.symbol}
          </Button>
        ))}
      </FlexWrapper>

      {/* Third row */}
      <FlexWrapper gap={6} width="484px">
        {KEYBOARD_KEYS[2].map((key, index) => (
          <Button key={index} flex={key?.flex || '1'}>
            {key.symbol}
          </Button>
        ))}
      </FlexWrapper>
    </Container>
  )
}
export default Keyboard
