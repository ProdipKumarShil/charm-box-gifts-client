import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AuthObserver from './redux/firebase/AuthObserver'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthObserver />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
