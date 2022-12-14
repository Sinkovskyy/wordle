import styled from 'styled-components'
import { Assets } from '../../assets'
import { FlexWrapper } from '../../components'
import { Colors } from '../../styles'

export const Container = styled(FlexWrapper)`
  width: 100%;
  height: 66px;
  border-bottom: 1px solid ${Colors.grey_tone_2};
  justify-content: space-between;
  padding: 0px 20px;
`

export const SettingsButton = styled.button`
  border: none;
  background-image: url(${Assets.settingsIcon});
  background-color: transparent;
  filter: ${Colors.filter_white};
  width: 28px;
  height: 28px;
  cursor: pointer;
`

export const LogoContainer = styled(FlexWrapper)`
  flex: 1;
`
