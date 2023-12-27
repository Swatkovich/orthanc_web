import { observer } from 'mobx-react-lite'
import { Navigate, Route, Routes } from 'react-router-dom'

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { mainTheme } from './theme/mainTheme'
import { AppWrapper } from './App.styles'
import MainPage from './pages/MainPage'

const App: React.FC = observer(() => {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={mainTheme(true)}>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AppWrapper>
      </ThemeProvider>
    </StyledEngineProvider>
  )
})

export default App
