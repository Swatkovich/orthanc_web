import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { FC, useCallback, useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { Typography } from '@mui/material'
import FormatMessage from '../../dictionary/FormatMessage'
import { DialogElement } from './StudyEdit.styles'
import StudyEditForm from '../StudyEditForm'
import { StudyFull } from '../../interface/client'
import { ReactComponent as CloseIcon } from '../../assets/img/close.svg'
import OrthancStoreContext from '../../store/data/OrthancStore/OrthancStore'
import ChangePatientForm from '../ChangePatientForm'

export interface Props extends DialogProps {
  open: boolean
  title: string
  onClose: () => void
  study: StudyFull
}

const StudyEdit: FC<Props> = observer((props) => {
  const orthancStore = useContext(OrthancStoreContext)
  const { studyEdit, getAllStudies, clearStudies, lookUp, getPatientById } = orthancStore
  const { open, onClose, title, study, ...rest } = props
  const [isModify, setIsModify] = useState<boolean>(false)
  const [isChangePatient, setIsChangePatient] = useState<boolean>(false)
  const [isDiffer, setIsDiffer] = useState<boolean>(false)
  const [modifiedFields, setModifiedFields] = useState<{} | { [key: string]: string }>({})
  const [initPatientId, setInitPatientId] = useState<string>('')
  const [isKeeping, setIsKeeping] = useState<boolean>(false)

  useEffect(() => {
    setInitPatientId(study.patientId)
  }, [study.patientId])

  const onModify = useCallback(() => {
    setIsModify(true)
  }, [])

  const onChangePatient = useCallback(() => {
    setIsChangePatient(true)
  }, [])

  const onBack = useCallback(() => {
    isModify ? setIsModify(false) : setIsChangePatient(false)
    setIsDiffer(false)
    setInitPatientId(study.patientId)
  }, [isModify, study.patientId])

  const handleClose = useCallback(() => {
    onClose()
    onBack()
  }, [onBack, onClose])

  const onSubmit = useCallback(() => {
    if (isChangePatient) {
      lookUp(initPatientId).then((patientData) => {
        if (patientData.length) {
          const id = patientData[0].ID
          getPatientById(id).then((data) => {
            const submitData = {
              Force: true,
              Keep: [] as string[],
              KeepSource: false,
              Remove: [] as [],
              Replace: {
                PatientBirthDate: data.MainDicomTags.PatientBirthDate,
                PatientID: data.MainDicomTags.PatientID,
                PatientName: data.MainDicomTags.PatientName,
                PatientSex: data.MainDicomTags.PatientSex,
              },
              Synchronous: false,
            }
            if (isKeeping) {
              submitData.Keep = ['StudyInstanceUID', 'SeriesInstanceUID', 'SOPInstanceUID'] as string[]
            }
            studyEdit(submitData, study.id)
              .then(() => handleClose())
              .then(() => {
                setTimeout(() => {
                  clearStudies()
                  getAllStudies()
                }, 5000)
              })
          })
        }
      })
    } else {
      const data = { Force: true, Keep: [] as [], KeepSource: false, Remove: [] as [], Replace: modifiedFields, Synchronous: false }
      studyEdit(data, study.id)
        .then(() => handleClose())
        .then(() => {
          setTimeout(() => {
            clearStudies()
            getAllStudies()
          }, 5000)
        })
    }
  }, [
    clearStudies,
    getAllStudies,
    getPatientById,
    handleClose,
    initPatientId,
    isChangePatient,
    isKeeping,
    lookUp,
    modifiedFields,
    study.id,
    studyEdit,
  ])

  useEffect(() => {
    if (Object.keys(modifiedFields).length) {
      setIsDiffer(true)
    } else {
      setIsDiffer(false)
    }
  }, [modifiedFields])

  useEffect(() => {
    if (study.patientId !== initPatientId) {
      setIsDiffer(true)
    } else {
      setIsDiffer(false)
    }
  }, [initPatientId, study.patientId])

  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose} {...rest}>
      <DialogTitle>
        {FormatMessage('study.edit')} {title}
        <CloseIcon style={{ cursor: 'pointer' }} onClick={handleClose} />
      </DialogTitle>

      <DialogContent>
        {!isModify && !isChangePatient && (
          <>
            <DialogElement>
              <Typography variant="subtitle1">{FormatMessage('study.edit.attach.info')}</Typography>
              <Button variant="contained" onClick={onChangePatient}>
                {FormatMessage('study.edit.attach')}
              </Button>
            </DialogElement>
            <DialogElement>
              <Typography variant="subtitle1">{FormatMessage('study.edit.modify.info')}</Typography>
              <Button variant="contained" onClick={onModify}>
                {FormatMessage('study.edit.modify')}
              </Button>
            </DialogElement>
          </>
        )}
        {isModify && <StudyEditForm study={study} handleModifiedFields={setModifiedFields} modifiedFields={modifiedFields} />}
        {isChangePatient && <ChangePatientForm patientId={initPatientId as string} setPatientId={setInitPatientId} setIsKeeping={setIsKeeping} />}
      </DialogContent>
      <DialogActions>
        {(isModify || isChangePatient) && (
          <Button variant="contained" onClick={onBack}>
            {FormatMessage('common.back')}
          </Button>
        )}
        <Button variant="contained" onClick={handleClose}>
          {FormatMessage('common.cancel')}
        </Button>
        {(isModify || isChangePatient) && (
          <Button disabled={!isDiffer} variant="contained" onClick={onSubmit}>
            {FormatMessage('study.edit')}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
})

export default StudyEdit
