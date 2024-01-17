import { observer } from 'mobx-react-lite'
import { AuthWrapper, DataWrapper } from './MainPage.styles'
import { useContext, useEffect } from 'react'
import OrthancStoreContext from '../../store/data/OrthancStore'
import StudyRow from '../../components/StudyRow'
import { Study } from '../../interface/client'
import SideBar from '../../components/SideBar'

const MainPage: React.FC = observer(() => {
  const orthancStore = useContext(OrthancStoreContext)
  const { studies, getAllStudies, getStudiesId, getStatistics, getSystem } = orthancStore

  useEffect(() => {
    getAllStudies()
    getStatistics()
    getSystem()
  }, [getAllStudies, getStatistics, getStudiesId, getSystem])

  useEffect(() => {
    console.log(studies)
  }, [studies])

  return (
    <AuthWrapper>
      <SideBar />
      <DataWrapper>
        {studies!.map((study: Study) => (
          <StudyRow study={study} key={study.id} />
        ))}
      </DataWrapper>
    </AuthWrapper>
  )
})

export default MainPage
