import { ReactElement, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthStore from '../../store/data/AuthStore'

const PrivateRoute: React.FC<{ children: ReactElement | null }> = ({ children }) => {
  const navigate = useNavigate()
  const authStore = useContext(AuthStore)
  const { isLogedIn } = authStore

  useEffect(() => {
    if (isLogedIn === 'undefined' || isLogedIn === 'false' || isLogedIn === null) {
      navigate('/')
    } else {
      // navigate('/main')
    }
  }, [isLogedIn, navigate])

  return isLogedIn ? children : null
}

export default PrivateRoute
