import { FC, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Assets } from '../../assets'
import { FlexWrapper } from '../../components'
import { useTypedSelector } from '../../hooks'
import { gameActions, getGameSelector } from '../../store'
import { wordUtils } from '../../utils'
import { Button, Container, Image } from './styled'
import { TKeyboardKeys } from './types'

const Keyboard: FC = () => {
  const dispatch = useDispatch()

  const { attemps } = useTypedSelector(getGameSelector)

  const [typedButton, setTypedButton] = useState<KeyboardEvent | null>(null)

  const KEYBOARD_KEYS: TKeyboardKeys = useMemo(
    () => [
      [
        { symbol: 'q', name: 'q' },
        { symbol: 'w', name: 'w' },
        { symbol: 'e', name: 'e' },
        { symbol: 'r', name: 'r' },
        { symbol: 't', name: 't' },
        { symbol: 'y', name: 'y' },
        { symbol: 'u', name: 'u' },
        { symbol: 'i', name: 'i' },
        { symbol: 'o', name: 'o' },
        { symbol: 'p', name: 'p' },
      ],
      [
        { symbol: 'a', name: 'a' },
        { symbol: 's', name: 's' },
        { symbol: 'd', name: 'd' },
        { symbol: 'f', name: 'f' },
        { symbol: 'g', name: 'g' },
        { symbol: 'h', name: 'h' },
        { symbol: 'j', name: 'j' },
        { symbol: 'k', name: 'k' },
        { symbol: 'l', name: 'l' },
      ],
      [
        { symbol: 'enter', name: 'Enter', flex: '1.5' },
        { symbol: 'z', name: 'z' },
        { symbol: 'x', name: 'x' },
        { symbol: 'c', name: 'c' },
        { symbol: 'v', name: 'v' },
        { symbol: 'b', name: 'b' },
        { symbol: 'n', name: 'n' },
        { symbol: 'm', name: 'm' },
        { symbol: <Image src={Assets.deleteIcon} />, name: 'Backspace', flex: '1.5' },
      ],
    ],
    []
  )

  const Requests = {
    editWord: (word: string) => {
      dispatch(gameActions.editWord({ attemp: { word: word.toUpperCase() } }))
    },
    verifyWord: () => {
      dispatch(gameActions.verifyWord())
    },
  }

  const Events = {
    keydownHandler: (e: KeyboardEvent) => {
      setTypedButton(e)
    },
    keyboardButtonClickHandler: (key: string) => {
      const event = new KeyboardEvent('keydown', { key })
      document.dispatchEvent(event)
    },
  }

  // Type click event handler
  useEffect(() => {
    if (typedButton) {
      const currentWord = attemps.at(-1)?.word || ''

      if (typedButton.key == 'Enter') {
        Requests.verifyWord()
      }

      if (typedButton.key == 'Backspace') {
        Requests.editWord(currentWord.slice(0, currentWord.length - 1))
      }

      if (wordUtils.charIsLetter(typedButton.key)) {
        Requests.editWord(currentWord + typedButton.key)
      }
    }
  }, [typedButton])

  useEffect(() => {
    document.addEventListener('keydown', Events.keydownHandler)

    return () => {
      document.removeEventListener('keydown', Events.keydownHandler)
    }
  }, [])

  return (
    <Container>
      {/* First row */}
      <FlexWrapper gap={6} width="484px">
        {KEYBOARD_KEYS[0].map((key) => (
          <Button
            key={key.name}
            flex={key?.flex || '1'}
            onClick={() => Events.keyboardButtonClickHandler(key.name)}
          >
            {key.symbol}
          </Button>
        ))}
      </FlexWrapper>

      {/* Second row */}
      <FlexWrapper gap={6} width="442px">
        {KEYBOARD_KEYS[1].map((key) => (
          <Button
            key={key.name}
            flex={key?.flex || '1'}
            onClick={() => Events.keyboardButtonClickHandler(key.name)}
          >
            {key.symbol}
          </Button>
        ))}
      </FlexWrapper>

      {/* Third row */}
      <FlexWrapper gap={6} width="484px">
        {KEYBOARD_KEYS[2].map((key) => (
          <Button
            key={key.name}
            flex={key?.flex || '1'}
            onClick={() => Events.keyboardButtonClickHandler(key.name)}
          >
            {key.symbol}
          </Button>
        ))}
      </FlexWrapper>
    </Container>
  )
}
export default Keyboard
