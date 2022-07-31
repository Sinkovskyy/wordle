import { Assets } from '../../assets'
import { Image } from './styled'
import { TKeyboardKeys } from './types'

export const KEYS: TKeyboardKeys = [
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
]
