import { Colors } from './colors'
import { TFONT } from './types'

export const FONT: (props: TFONT) => string = ({
  color = Colors.white,
  size = '16px',
  weight = '400',
  font = 'Times New Roman',
  align = 'left',
  style = 'inherit',
  lineHeight = '',
}) => {
  return `
            font-family:${font};
            color:${color};
            font-size:${size};
            font-weight:${weight};
            text-align:${align};
            font-style:${style};
            line-height:${lineHeight};
        `
}
