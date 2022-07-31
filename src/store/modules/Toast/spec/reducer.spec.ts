import { toastReducer, toastActions } from '..'
import { TSetToastPayload } from '../types'

describe('Toast reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    const initialState = undefined
    const action = { type: '' }
    const result = toastReducer(initialState, action)
    expect(result).toEqual({ isVisible: false, text: '', closeTime: null })
  })

  it('should return equel value to given props', () => {
    const initialState = { isVisible: false, text: '', closeTime: null }

    const action = (props: TSetToastPayload) => toastActions.setToast(props)

    const test = { isVisible: true, text: 'test', closeTime: 5000 }
    const result = toastReducer(initialState, action(test))
    expect(result).toEqual(test)

    const test2: TSetToastPayload = { isVisible: true }
    const result1 = toastReducer(initialState, action(test2))

    expect(result1).toEqual({ isVisible: true, text: '', closeTime: null })
  })
})
