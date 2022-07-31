import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { FlexWrapper } from '../../components'
import { useTypedSelector } from '../../hooks'
import { gameActions, getGameSelector } from '../../store'
import { wordUtils } from '../../utils'
import { KEYS } from './keys'
import { KeyButton, Container } from './styled'
import { EKeyButtonColor } from './types'

const Keyboard: FC = () => {
  const dispatch = useDispatch()

  const { attemps } = useTypedSelector(getGameSelector)

  const [typedButton, setTypedButton] = useState<KeyboardEvent | null>(null)

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
      !e.repeat && setTypedButton(e)
    },
    keyboardButtonClickHandler: (key: string) => {
      const event = new KeyboardEvent('keydown', { key })
      document.dispatchEvent(event)
    },
  }

  const Utils = {
    getKeyState: (key: string): EKeyButtonColor => {
      if (attemps.length <= 1 || !wordUtils.charIsLetter(key)) {
        return EKeyButtonColor.default
      }

      const keyState = wordUtils.getLetterState(key)

      if (keyState.letterCorrectPosition.length) {
        return EKeyButtonColor.green
      }

      if (keyState.isInWord) {
        return EKeyButtonColor.yellow
      }

      const keyInAttemWordPosition = wordUtils.getLetterPositionInAttempWords(key)

      if (keyInAttemWordPosition.length) {
        return EKeyButtonColor.grey
      }

      return EKeyButtonColor.default
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
    document.addEventListener('keydown', Events.keydownHandler, false)

    return () => {
      document.removeEventListener('keydown', Events.keydownHandler)
    }
  }, [])

  return (
    <Container>
      {/* First row */}
      <FlexWrapper gap={6} width="484px">
        {KEYS[0].map((key) => (
          <KeyButton
            color={Utils.getKeyState(key.name)}
            key={key.name}
            flex={key?.flex || '1'}
            onClick={() => Events.keyboardButtonClickHandler(key.name)}
          >
            {key.symbol}
          </KeyButton>
        ))}
      </FlexWrapper>

      {/* Second row */}
      <FlexWrapper gap={6} width="442px">
        {KEYS[1].map((key) => (
          <KeyButton
            color={Utils.getKeyState(key.name)}
            key={key.name}
            flex={key?.flex || '1'}
            onClick={() => Events.keyboardButtonClickHandler(key.name)}
          >
            {key.symbol}
          </KeyButton>
        ))}
      </FlexWrapper>

      {/* Third row */}
      <FlexWrapper gap={6} width="484px">
        {KEYS[2].map((key) => (
          <KeyButton
            color={Utils.getKeyState(key.name)}
            key={key.name}
            flex={key?.flex || '1'}
            onClick={() => Events.keyboardButtonClickHandler(key.name)}
          >
            {key.symbol}
          </KeyButton>
        ))}
      </FlexWrapper>
    </Container>
  )
}
export default Keyboard
