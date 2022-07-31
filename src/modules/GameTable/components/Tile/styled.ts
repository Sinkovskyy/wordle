import _ from 'lodash'
import styled, { css } from 'styled-components'
import { Colors, font } from '../../../../styles'
import { Config } from './config'
import { ELetterAnimation, ELetterColor, TStyledTile } from './types'

export const StyledTile = styled.div<TStyledTile>`
  width: 62px;
  height: 62px;
  border: 2px solid ${Colors.grey_tone_1};
  display: flex;
  align-items: center;
  justify-content: center;

  ${font({ size: '2rem', weight: '700' })}

  background-color: transparent;

  ${({ theme: color }) => {
    if (color == ELetterColor.green) {
      return css`
        background-color: ${Colors.green} !important;
      `
    }

    if (color == ELetterColor.yellow) {
      return css`
        background-color: ${Colors.yellow};
      `
    }

    if (color == ELetterColor.grey) {
      return css`
        background-color: ${Colors.grey_tone_1};
      `
    }

    if (color == ELetterColor.highlight_border) {
      return css`
        border: 2px solid ${Colors.grey_tone_4} !important;
      `
    }
  }}

  ${({ theme: color }) => {
    if (color != ELetterColor.default) {
      return css`
        border: none;
      `
    }
  }}


${({ animation }) => {
    if (animation == ELetterAnimation.pop) {
      return css`
        animation: pop ${Config.POP_DURATION}ms;
      `
    }

    if (animation == ELetterAnimation.shake) {
      return css`
        animation: shake ${Config.SHAKE_DURATION}ms;
      `
    }

    if (animation == ELetterAnimation.flip) {
      return css`
        animation: flip ${Config.FLIP_DURATION}ms;
        animation-timing-function: ease-in;
      `
    }
  }}



${({ animationDuration }) =>
    _.isNumber(animationDuration) &&
    css`
      animation-duration: ${animationDuration}ms !important;
    `}

${({ animationDelay }) =>
    animationDelay &&
    css`
      animation-delay: ${animationDelay}ms !important;
    `}

  @media (max-width: 350px) {
    width: calc(100% * (1 / 5) - 10px - 1px);
  }

  @keyframes shake {
    10%,
    90% {
      transform: translateX(-1px);
    }
    20%,
    80% {
      transform: translateX(2px);
    }
    30%,
    50%,
    70% {
      transform: translateX(-4px);
    }
    40%,
    60% {
      transform: translateX(4px);
    }
  }
  @keyframes flip {
    0% {
      transform: rotateX(0);
    }

    50% {
      transform: rotateX(-90deg);
    }

    75% {
      transform: rotateX(-90deg);
    }

    100% {
      transform: rotateX(0);
    }
  }

  @keyframes pop {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    40% {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`
