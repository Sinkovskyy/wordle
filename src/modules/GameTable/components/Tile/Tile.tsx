import _ from 'lodash'
import { FC, useEffect, useState } from 'react'
import { useTypedSelector } from '../../../../hooks'
import { getGameSelector } from '../../../../store'
import { wordUtils } from '../../../../utils'
import { Config } from './config'
import { StyledTile } from './styled'
import { ELetterAnimation, ELetterColor, TStyledTile, TTile } from './types'

export const Tile: FC<TTile> = ({ column, row, letter }) => {
  const { attemps } = useTypedSelector(getGameSelector)

  const [animation, setAnimation] = useState<ELetterAnimation>(ELetterAnimation.idle)
  const [color, setColor] = useState<ELetterColor>(ELetterColor.default)
  const [animationDelay, setAnimationDelay] = useState<TStyledTile['animationDelay']>()
  const [animationDuration, setAnimationDuration] =
    useState<TStyledTile['animationDuration']>()

  const Utils = {
    getLetterColor: (): ELetterColor => {
      if (!letter) return ELetterColor.default

      // If letter in typed row
      if (attemps.length == row + 1) return ELetterColor.highlight_border

      if (attemps.length <= 1) {
        return ELetterColor.default
      }

      const letterState = wordUtils.getLetterState(letter)

      const isLetterInCorrectPosition = _.isNumber(
        letterState.letterCorrectPosition.find(
          (correctPosition) => correctPosition == column
        )
      )

      if (isLetterInCorrectPosition) {
        return ELetterColor.green
      }

      if (letterState.isInWord) {
        return ELetterColor.yellow
      }

      return ELetterColor.grey
    },

    getLetterAnimation: (): ELetterAnimation => {
      if (!letter) return ELetterAnimation.idle

      if (row + 1 == attemps.length) {
        if (attemps.at(-1)?.error) {
          return ELetterAnimation.shake
        }
        if (letter) return ELetterAnimation.pop
      }

      if (letter) return ELetterAnimation.flip

      return ELetterAnimation.idle
    },
  }

  useEffect(() => {
    animation == ELetterAnimation.flip && setAnimationDelay(Config.FLIP_DELAY * column)

    if (animation == ELetterAnimation.flip) {
      // When flip animation in the 50%
      setTimeout(() => {
        setColor(Utils.getLetterColor())
      }, Config.FLIP_DURATION / 2 + Config.FLIP_DELAY * column)
    }

    if (animation == ELetterAnimation.shake) {
      setTimeout(() => {
        setAnimationDuration(0)
        setAnimationDelay(0)
      }, Config.SHAKE_DURATION + Config.AFTER_ANIMATION_DELAY)
    }
  }, [animation])

  useEffect(() => {
    // After flip animation
    if (animationDuration == 0 && animation == ELetterAnimation.pop) {
      // Reset duration and delay for pop animation
      setTimeout(() => {
        setAnimationDuration(undefined)
        setAnimationDelay(undefined)
      }, Config.POP_DURATION + Config.AFTER_ANIMATION_DELAY)
    }
  }, [animationDuration, animation])

  useEffect(() => {
    setAnimation(Utils.getLetterAnimation())

    // Not set color if it second last row
    attemps.length - 1 != row + 1 && setColor(Utils.getLetterColor())
  }, [letter, attemps])

  return (
    <StyledTile
      animation={animation}
      theme={color}
      animationDelay={animationDelay}
      animationDuration={animationDuration}
    >
      {letter}
    </StyledTile>
  )
}

export default Tile
