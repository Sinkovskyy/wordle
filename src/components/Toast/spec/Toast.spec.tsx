import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Toast from '../Toast'
import { store, persistor, toastActions } from '../../../store'

describe('Toast component', () => {
  it('should show toast', () => {
    const input = 'work'
    store.dispatch(toastActions.setToast({ isVisible: true, text: input }))
    renderWithContext(<Toast />)
    const text = screen.getByText(input)
    expect(text).toHaveTextContent(input)
  })
})

function renderWithContext(element: React.ReactElement) {
  return render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  )
}
