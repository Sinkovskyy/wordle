import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Toast } from './components'

import { persistor, store } from './store'
import { GlobalStyles } from './styles'
import { MainView } from './views'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <MainView />
        <Toast />
      </PersistGate>
    </Provider>
  )
}

export default App
