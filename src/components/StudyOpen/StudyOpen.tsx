import { observer } from 'mobx-react'
import { StudyFull } from '../../interface/client'
import { EditIconStyled, Options, PatientInfo, StudyInfo, StudyInfoElement, StudyOpenWrapper } from './StudyOpen.styles'
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
            <Typography variant="h4">Study Date:</Typography>
            <Typography variant="h4">{study.studyDate}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">Study Time:</Typography>
            <Typography variant="h4">{study.studyTime}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">Study Desctiption:</Typography>
            <Typography variant="h4">{study.studyDescription}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">Study ID:</Typography>
            <Typography variant="h4">{study.studyId}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">Study Instances:</Typography>
            <Typography variant="h4">{study.studyInstanceUID}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">Institution Name:</Typography>
            <Typography variant="h4">{study.institutionName}</Typography>
          </StudyInfoElement>
        </StudyInfo>

        <PatientInfo>
          <StudyInfoElement>
            <Typography variant="h4">Patient ID:</Typography>
            <Typography variant="h4">{study.patientId}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">Patient Name:</Typography>
            <Typography variant="h4">{study.patientName}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">Patient Birth Date:</Typography>
            <Typography variant="h4">{study.patientBirthDate}</Typography>
          </StudyInfoElement>
          <StudyInfoElement>
            <Typography variant="h4">Patient sex:</Typography>
            <Typography variant="h4">{study.patientSex}</Typography>
          </StudyInfoElement>
        </PatientInfo>
        <Options>
          <EditIconStyled />
        </Options>
      </Box>
    </StudyOpenWrapper>
  )
})

export default StudyOpen
