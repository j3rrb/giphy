import React from 'react'
import { Provider } from 'react-redux'
import MainPage from './pages'
import { store } from './redux/store'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}

export default App
