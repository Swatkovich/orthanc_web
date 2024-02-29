import { observer } from 'mobx-react-lite'
import { MainPageWrapper } from './MainPage.styles'
import SideBar from '../../components/SideBar'
import Studies from '../../components/Studies'

const MainPage: React.FC = observer(() => {
  return (
    <MainPageWrapper>
      <SideBar />
      <Studies />
    </MainPageWrapper>
  )
})

export default MainPage
