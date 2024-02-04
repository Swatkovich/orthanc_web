import { observer } from 'mobx-react'
import { StudyFull } from '../../interface/client'
import { EditIconStyled, Options, PatientInfo, StudyInfo, StudyInfoElement, StudyOpenWrapper } from './StudyOpen.styles'
import { Box, Typography } from '@mui/material'
import Series from '../Series'
import FormatMessage from '../../dictionary'

interface Props {
  study: StudyFull
  studyListNumber: number
}

const StudyOpen: React.FC<Props> = observer((props) => {
  const { study, studyListNumber } = props

  return (
    <StudyOpenWrapper>
      <Box display="flex">
        <StudyInfo>
          <StudyInfoElement>
            <Typography variant="h4">{FormatMessage('study.date')}:</Typography>
            <Typography variant="h4">{study.studyDate}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">{FormatMessage('study.time')}:</Typography>
            <Typography variant="h4">{study.studyTime}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">{FormatMessage('study.description')}:</Typography>
            <Typography variant="h4">{study.studyDescription}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">{FormatMessage('study.id')}:</Typography>
            <Typography variant="h4">{study.studyId}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">{FormatMessage('study.instances')}:</Typography>
            <Typography variant="h4">
              {study.studyInstanceUID.length > 45 ? `${study.studyInstanceUID.slice(0, 45)}...` : study.studyInstanceUID}
            </Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">{FormatMessage('study.institutionName')}:</Typography>
            <Typography variant="h4">{study.institutionName}</Typography>
          </StudyInfoElement>
        </StudyInfo>

        <PatientInfo>
          <StudyInfoElement>
            <Typography variant="h4">{FormatMessage('study.patientId')}:</Typography>
            <Typography variant="h4">{study.patientId}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">{FormatMessage('study.patientName')}</Typography>
            <Typography variant="h4">{study.patientName}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">{FormatMessage('study.patientBirthDate')}:</Typography>
            <Typography variant="h4">{study.patientBirthDate}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">{FormatMessage('study.patientSex')}:</Typography>
            <Typography variant="h4">{study.patientSex}</Typography>
          </StudyInfoElement>
        </PatientInfo>
        <Options>
          <EditIconStyled />
        </Options>
      </Box>
      <Series studyId={study.id} studyListNumber={studyListNumber} />
    </StudyOpenWrapper>
  )
})

export default StudyOpen
