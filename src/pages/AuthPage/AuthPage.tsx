import { observer } from 'mobx-react-lite'
import { Button, Typography } from '@mui/material'
// import FormatMessage from '../../dictionary'
import { AuthWrapper, ButtonsWrapper, DataWrapper, StudyElement, StudyRow } from './AuthPage.styles'
import { FC, useCallback, useContext, useEffect } from 'react'
import AuthStoreContext from '../../store/data/AuthStore/AuthStore'

const AuthPage: FC = observer(() => {
  const authStore = useContext(AuthStoreContext)
  const { studies, getAllStudies, getPatients, getStudiesId, loadData, clearStudies, deleteStudy } = authStore

  useEffect(() => {
    getPatients()
    getStudiesId().then(() => getAllStudies())
    return clearStudies
  }, [clearStudies, getAllStudies, getPatients, getStudiesId])

  const handleFileUpload = useCallback(
    async (event: any) => {
      const files = event.target?.files
      for (let i = 0; i < files.length; i++) {
        await loadData(files[i])
      }
      getStudiesId().then(() => getAllStudies())
    },
    [getAllStudies, getStudiesId, loadData]
  )

  const onDelete = useCallback(
    async (id: string) => {
      deleteStudy({ Resources: [id] })
        .then(() => clearStudies())
        .then(() => getStudiesId())
        .then(() => getAllStudies())
    },
    [clearStudies, deleteStudy, getAllStudies, getStudiesId]
  )

  return (
    <AuthWrapper>
      <ButtonsWrapper>
        <input type="file" multiple onChange={(event) => handleFileUpload(event)} />
      </ButtonsWrapper>
      <DataWrapper>
        {studies.map((study, i) => (
          <StudyRow>
            <StudyElement>
              <Typography>{study.PatientMainDicomTags.PatientBirthDate.toString()}</Typography>
            </StudyElement>
            <StudyElement>
              <Typography>{study.PatientMainDicomTags.PatientID.toString()}</Typography>
            </StudyElement>
            <StudyElement>
              <Typography>{study.MainDicomTags.StudyDescription?.toString()}</Typography>
            </StudyElement>
            <StudyElement>
              <Typography>{study.MainDicomTags.StudyDate.toString()}</Typography>
            </StudyElement>
            <StudyElement>
              <Typography>{study.RequestedTags.ModalitiesInStudy.toString()}</Typography>
            </StudyElement>
            <StudyElement>
              <Typography>{study.PatientMainDicomTags.PatientName.toString()}</Typography>
            </StudyElement>
            <StudyElement>
              <Typography>{study.Series.length}</Typography>
            </StudyElement>
            <Button sx={{ width: '10%', border: '1px solid red' }} onClick={() => onDelete(study.ID)}>
              <Typography>DELETE</Typography>
            </Button>
          </StudyRow>
        ))}
      </DataWrapper>
    </AuthWrapper>
  )
})

export default AuthPage
