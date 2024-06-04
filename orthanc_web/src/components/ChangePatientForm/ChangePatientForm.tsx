import { observer } from 'mobx-react'
import { FormElement, FormWrapper } from './ChangePatientForm.styles'
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import FormatMessage from '../../dictionary/FormatMessage'
import { ChangeEvent, useCallback } from 'react'

interface Props {
  patientId: string
  setPatientId: React.Dispatch<React.SetStateAction<string>>
  setIsKeeping: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangePatientForm: React.FC<Props> = observer((props) => {
  const { patientId, setPatientId, setIsKeeping } = props

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event.target
      if (id === 'patientId') {
        setPatientId(value)
      }
    },
    [setPatientId]
  )

  const handleRadioChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      if (value === 'keep') {
        setIsKeeping(true)
      } else {
        setIsKeeping(false)
      }
    },
    [setIsKeeping]
  )

  return (
    <FormWrapper>
      <FormElement>
        <TextField
          size="small"
          fullWidth
          type="text"
          name="PatientId"
          variant="outlined"
          label={FormatMessage('study.patientId')}
          id="patientId"
          value={patientId}
          onChange={handleChange}
        ></TextField>
      </FormElement>
      <RadioGroup defaultValue="generate" name="modify" onChange={handleRadioChange}>
        <FormControlLabel value="generate" control={<Radio />} label={FormatMessage('study.edit.modify.option1')} />
        <FormControlLabel value="keep" control={<Radio />} label={FormatMessage('study.edit.modify.option2')} />
      </RadioGroup>
    </FormWrapper>
  )
})

export default ChangePatientForm
