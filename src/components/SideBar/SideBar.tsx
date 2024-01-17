import { observer } from 'mobx-react'
import { CloseIconStyled, Info, Progress, ProgressBar, ProgressWrapper, SideBarWrapper } from './SideBar.styles'
import { Box, Button, Typography } from '@mui/material'
import { useCallback, useContext, useState } from 'react'
import OrthancStoreContext from '../../store/data/OrthancStore'
import FormatMessage from '../../dictionary/FormatMessage'

const SideBar: React.FC = observer(() => {
  const orthancStore = useContext(OrthancStoreContext)
  const { statistics, systemInfo, loadData, getStudiesId, getAllStudies } = orthancStore
  const [selectedFiles, setSelectedFiles] = useState<number>(0)
  const [completedCount, setCompletedCount] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleFileUpload = useCallback(
    async (event: any) => {
      setCompletedCount(0)
      setIsVisible(true)
      const files = event.target?.files
      setSelectedFiles(files.length)
      for (let i = 0; i < files.length; i++) {
        await loadData(files[i])
        setCompletedCount((prevCount) => prevCount + 1)
      }
      getStudiesId().then(() => getAllStudies())
    },
    [getAllStudies, getStudiesId, loadData]
  )

  return (
    <SideBarWrapper>
      <label htmlFor="folderUpload">
        <Button variant="contained" component="span">
          {FormatMessage('sidebar.downloadFolder')}
        </Button>
        <input
          id="folderUpload"
          type="file"
          multiple
          // @ts-ignore
          webkitdirectory="true"
          allowdirs
          style={{ display: 'none' }}
          onChange={(event) => handleFileUpload(event)}
        ></input>
      </label>

      <Box mt="24px">
        <label htmlFor="fileUpload">
          <Button variant="contained" component="span">
            {FormatMessage('sidebar.downloadFile')}
          </Button>
          <input id="fileUpload" type="file" multiple style={{ display: 'none' }} onChange={(event) => handleFileUpload(event)}></input>
        </label>
      </Box>
      {isVisible && (
        <ProgressWrapper>
          <CloseIconStyled onClick={() => setIsVisible(false)} />
          <ProgressBar>
            <Progress style={{ width: `${(completedCount / selectedFiles) * 100}%` }} />
          </ProgressBar>
          <Box mt="12px">
            <Typography variant="body2">{`${FormatMessage('sidebar.downloaded')}: ${completedCount}/${selectedFiles}`}</Typography>
          </Box>
        </ProgressWrapper>
      )}

      <Info>
        <Typography variant="body1">{FormatMessage('sidebar.statistics')}</Typography>
        <Typography variant="subtitle1">{`Studies: ${statistics?.studies}`}</Typography>
        <Typography variant="subtitle1">{`Series: ${statistics?.series}`}</Typography>
        <Typography variant="subtitle1">{`Instances: ${statistics?.instances}`}</Typography>
        <Typography variant="subtitle1">{`StorageSize: ${statistics?.storageSize} MB`}</Typography>
        <Box mt="24px">
          <Typography variant="body1">{FormatMessage('sidebar.systemInfo')}</Typography>
        </Box>
        <Typography variant="subtitle1">{`DICOM AET: ${systemInfo?.dicomAet}`}</Typography>
        <Typography variant="subtitle1">{`DICOM Port: ${systemInfo?.dicomPort}`}</Typography>
        <Typography variant="subtitle1">{`Overwrite instances: ${systemInfo?.overwriteInstances}`}</Typography>
        <Typography variant="subtitle1">{`Storage Compression: ${systemInfo?.storageCompression}`}</Typography>
      </Info>
    </SideBarWrapper>
  )
})

export default SideBar
