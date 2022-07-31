import { screen } from '@testing-library/react'

import Toast from '../Toast'
import { store, toastActions } from '../../../store'
import { renderWithContext } from '../../../test-utils'

describe('Toast component', () => {
  it('should show toast', () => {
    const input = 'work'
    store.dispatch(toastActions.setToast({ isVisible: true, text: input }))
    renderWithContext(<Toast />)
    const text = screen.getByText(input)
    expect(text).toHaveTextContent(input)
  })
})
