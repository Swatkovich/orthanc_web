import { observer } from 'mobx-react'
import { StudyFull } from '../../interface/client'
import { PatientInfo, StudyInfo, StudyInfoElement, StudyOpenWrapper } from './StudyOpen.styles'
import { Box, Typography } from '@mui/material'

interface Props {
  study: StudyFull
}

const StudyOpen: React.FC<Props> = observer((props) => {
  const { study } = props

  return (
    <StudyOpenWrapper>
      <Box display="flex">
        <StudyInfo>
          <StudyInfoElement>
            <Typography variant="subtitle1">Study Date:</Typography>
            <Typography variant="subtitle1">{study.studyDate}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="subtitle1">Study Time:</Typography>
            <Typography variant="subtitle1">{study.studyTime}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="subtitle1">Study Desctiption:</Typography>
            <Typography variant="subtitle1">{study.studyDescription}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="subtitle1">Study ID:</Typography>
            <Typography variant="subtitle1">{study.studyId}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="subtitle1">Study Instances:</Typography>
            <Typography variant="subtitle1">{study.studyInstanceUID}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="subtitle1">Institution Name:</Typography>
            <Typography variant="subtitle1">{study.institutionName}</Typography>
          </StudyInfoElement>
        </StudyInfo>

        <PatientInfo>
          <StudyInfoElement>
            <Typography variant="subtitle1">Patient ID:</Typography>
            <Typography variant="subtitle1">{study.patientId}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="subtitle1">Patient Name:</Typography>
            <Typography variant="subtitle1">{study.patientName}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="subtitle1">Patient Birth Date:</Typography>
            <Typography variant="subtitle1">{study.patientBirthDate}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="subtitle1">Patient sex:</Typography>
            <Typography variant="subtitle1">{study.patientSex}</Typography>
          </StudyInfoElement>
        </PatientInfo>
      </Box>
    </StudyOpenWrapper>
  )
})

export default StudyOpen
