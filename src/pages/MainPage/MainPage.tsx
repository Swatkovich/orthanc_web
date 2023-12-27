import { observer } from 'mobx-react-lite'
import { AuthWrapper, ButtonsWrapper, DataWrapper, InfoWrapper } from './MainPage.styles'
import { FC, useCallback, useContext, useEffect } from 'react'
import OrthancStoreContext from '../../store/data/OrthancStore'
import StudyRow from '../../components/StudyRow'
import { Study } from '../../interface/client'
import { Box, Typography } from '@mui/material'

const MainPage: FC = observer(() => {
  const orthancStore = useContext(OrthancStoreContext)
  const { studies, statistics, systemInfo, getAllStudies, getStudiesId, loadData, getStatistics, getSystem } = orthancStore

  useEffect(() => {
    getAllStudies()
    getStatistics()
    getSystem()
  }, [getAllStudies, getStatistics, getStudiesId, getSystem])

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

  useEffect(() => {
    console.log(studies)
  }, [studies])

  return (
    <AuthWrapper>
      <ButtonsWrapper>
        <input type="file" multiple onChange={(event) => handleFileUpload(event)} />
        <InfoWrapper>
          <Typography variant="h1">STATISTICS</Typography>
          <Typography variant="subtitle1">{`Studies: ${statistics?.studies}`}</Typography>
          <Typography variant="subtitle1">{`Series: ${statistics?.series}`}</Typography>
          <Typography variant="subtitle1">{`Instances: ${statistics?.instances}`}</Typography>
          <Typography variant="subtitle1">{`StorageSize: ${statistics?.storageSize} MB`}</Typography>
          <Box mt="24px">
            <Typography variant="h2">ORTHANC SYSTEM INFO</Typography>
          </Box>
          {<Typography variant="subtitle1">{`Orthanc Version: ${systemInfo?.orthancVersion}`}</Typography>}
          <Typography variant="subtitle1">{`DICOM AET: ${systemInfo?.dicomAet}`}</Typography>
          <Typography variant="subtitle1">{`Orthanc Name: ${systemInfo?.orthancName}`}</Typography>
          <Typography variant="subtitle1">{`DICOM Port: ${systemInfo?.dicomPort}`}</Typography>
          <Typography variant="subtitle1">{`Ingest Transcoding: ${systemInfo?.ingestTranscoding}`}</Typography>
          <Typography variant="subtitle1">{`Overwrite instances: ${systemInfo?.overwriteInstances}`}</Typography>
          <Typography variant="subtitle1">{`Storage Compression: ${systemInfo?.storageCompression}`}</Typography>
        </InfoWrapper>
      </ButtonsWrapper>
      <DataWrapper>
        {studies!.map((study: Study) => (
          <StudyRow study={study} key={study.id} />
        ))}
      </DataWrapper>
    </AuthWrapper>
  )
})

export default MainPage
