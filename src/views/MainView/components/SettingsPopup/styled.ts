import styled from 'styled-components'
import { Assets } from '../../../../assets'
import { FlexWrapper } from '../../../../components'
import { Colors } from '../../../../styles'

export const Container = styled(FlexWrapper)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 200;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.opacity_50};
`

export const PopupContainer = styled.div`
  max-height: 100vh;
  background-color: ${Colors.black_tone_1};
  max-width: 90%;
  position: absolute;
  width: 300px;
  height: 150px;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  border-radius: 22px;
  border: 1px solid ${Colors.grey_tone_3};
  box-shadow: 0 4px 23px 0 rgb(0 0 0 / 20%);
  padding: 16px;
`

export const PopupContantWrapper = styled(FlexWrapper)`
  width: 100%;
  height: 100%;
  position: relative;

  flex-direction: column;
  justify-content: flex-start;
`

export const CrossButton = styled.button`
  background-image: url(${Assets.cross});
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 14px;
  height: 14px;

  position: absolute;
  top: 0;
  right: 0;
`

export const RefreshButtonWrapper = styled(FlexWrapper)`
  width: 100%;
  flex: 1;
`

export const RefreshButton = styled.button`
  background-image: url(${Assets.refresh});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: none;
  cursor: pointer;
  width: 70px;
  height: 70px;

  filter: ${Colors.filter_white};
`
