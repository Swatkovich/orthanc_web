import { observer } from 'mobx-react-lite'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import { FC, useEffect } from 'react'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { mainTheme } from './theme/mainTheme'
import { AppWrapper } from './App.styles'
import AuthPage from './pages/AuthPage'
// import AuthStoreContext from './store/data/AuthStore/AuthStore'
// import { configureApp } from './utils/configureApp'

const App: FC = observer(() => {
  // const authStore = useContext(AuthStoreContext)
  // const { initTheme, initProfileData, theme } = authStore
  const navigate = useNavigate()

  // useEffect(() => {
  //   configureApp(initTheme, initProfileData)
  // }, [initProfileData, initTheme])

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      // navigate('/')
    } else {
      // navigate('/main')
    }
  }, [navigate])

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={mainTheme(true)}>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<AuthPage />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AppWrapper>
      </ThemeProvider>
    </StyledEngineProvider>
  )
})

export default App
