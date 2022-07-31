import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store, persistor } from './store'

export function renderWithContext(element: React.ReactElement) {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  )

  return { store }
}
