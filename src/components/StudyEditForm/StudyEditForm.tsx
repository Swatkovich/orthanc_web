import { observer } from 'mobx-react'
import { FormElement, FormWrapper } from './StudyEditForm.styles'
import { TextField } from '@mui/material'
import FormatMessage from '../../dictionary/FormatMessage'
import { IStudyEditForm, StudyFull } from '../../interface/client'
import { ChangeEvent, useCallback, useState } from 'react'

interface Props {
  study: StudyFull
  handleModifiedFields: React.Dispatch<React.SetStateAction<{} | IStudyEditForm>>
  modifiedFields: {} | { [key: string]: string }
}

const StudyEditForm: React.FC<Props> = observer((props) => {
  const { study, handleModifiedFields, modifiedFields } = props
  const [patientBirthDate, setPatientBirthDate] = useState<string>(study.patientBirthDate)
  const [patientId, setPatientId] = useState<string>(study.patientId)
  const [patientName, setPatientName] = useState<string>(study.patientName)
  const [patientSex, setPatientSex] = useState<string>(study.patientSex)
  const [institutionName, setInstitutionName] = useState<string>(study.institutionName)
  const [studyDate, setStudyDate] = useState<string>(study.studyDate)
  const [studyId, setStudyId] = useState<string>(study.studyId)
  const [studyTime, setStudyTime] = useState<string>(study.studyTime)
  const [studyDescription, setStudyDescription] = useState<string>(study.studyDescription)

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { id, value, name } = event.target
      if (id === 'patientBirthDate') {
        setPatientBirthDate(value)
      }
      if (id === 'patientId') {
        setPatientId(value)
      }
      if (id === 'patientName') {
        setPatientName(value)
      }
      if (id === 'patientSex') {
        setPatientSex(value)
      }
      if (id === 'institutionName') {
        setInstitutionName(value)
      }
      if (id === 'studyDate') {
        setStudyDate(value)
      }
      if (id === 'studyId') {
        setStudyId(value)
      }
      if (id === 'studyTime') {
        setStudyTime(value)
      }
      if (id === 'studyDescription') {
        setStudyDescription(value)
      }
      if (value !== study[id as keyof StudyFull]) {
        handleModifiedFields({ ...modifiedFields, [name]: value })
      } else {
        const { [name]: omit, ...rest } = modifiedFields as { [key: string]: string }
        handleModifiedFields(rest)
      }
    },
    [handleModifiedFields, modifiedFields, study]
  )

  return (
    <FormWrapper>
      <FormElement>
        <TextField
          size="small"
          fullWidth
          type="text"
          name="PatientBirthDate"
          variant="outlined"
          label={FormatMessage('study.patientBirthDate')}
          id="patientBirthDate"
          value={patientBirthDate}
          onChange={handleChange}
        ></TextField>
      </FormElement>

      <FormElement>
        <TextField
          size="small"
          fullWidth
          type="text"
          name="PatientID"
          variant="outlined"
          label={FormatMessage('study.patientId')}
          id="patientId"
          value={patientId}
          onChange={handleChange}
        ></TextField>
      </FormElement>

      <FormElement>
        <TextField
          size="small"
          fullWidth
          type="text"
          name="PatientName"
          variant="outlined"
          label={FormatMessage('study.patientName')}
          id="patientName"
          value={patientName}
          onChange={handleChange}
        ></TextField>
      </FormElement>

      <FormElement>
        <TextField
          size="small"
          fullWidth
          type="text"
          name="PatientSex"
          variant="outlined"
          label={FormatMessage('study.patientSex')}
          id="patientSex"
          value={patientSex}
          onChange={handleChange}
        ></TextField>
      </FormElement>

      <FormElement>
        <TextField
          size="small"
          fullWidth
          type="text"
          name="InstitutionName"
          variant="outlined"
          label={FormatMessage('study.institutionName')}
          id="institutionName"
          value={institutionName}
          onChange={handleChange}
        ></TextField>
      </FormElement>

      <FormElement>
        <TextField
          size="small"
          fullWidth
          type="text"
          name="StudyDate"
          variant="outlined"
          label={FormatMessage('study.date')}
          id="studyDate"
          value={studyDate}
          onChange={handleChange}
        ></TextField>
      </FormElement>

      <FormElement>
        <TextField
          size="small"
          fullWidth
          type="text"
          name="StudyID"
          variant="outlined"
          label={FormatMessage('study.id')}
          id="studyId"
          value={studyId}
          onChange={handleChange}
        ></TextField>
      </FormElement>

      <FormElement>
        <TextField
          size="small"
          fullWidth
          disabled
          type="text"
          name="studyInstanceUID"
          variant="outlined"
          label={FormatMessage('study.instanceUID')}
          id="studyInstanceUID"
          value={study.studyInstanceUID}
          onChange={handleChange}
        ></TextField>
      </FormElement>

      <FormElement>
        <TextField
          size="small"
          fullWidth
          type="text"
          name="StudyTime"
          variant="outlined"
          label={FormatMessage('study.time')}
          id="studyTime"
          value={studyTime}
          onChange={handleChange}
        ></TextField>
      </FormElement>

      <FormElement>
        <TextField
          size="small"
          fullWidth
          type="text"
          name="StudyDescription"
          variant="outlined"
          label={FormatMessage('study.description')}
          id="studyDescription"
          value={studyDescription}
          onChange={handleChange}
        ></TextField>
      </FormElement>
    </FormWrapper>
  )
})

export default StudyEditForm
