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

export interface Props extends DialogProps {
  open: boolean
  title: string
  onClose: () => void
  study: StudyFull
}

const StudyEdit: FC<Props> = observer((props) => {
  const orthancStore = useContext(OrthancStoreContext)
  const { studyEdit, getAllStudies, clearStudies } = orthancStore
  const { open, onClose, title, study, ...rest } = props
  const [isModify, setIsModify] = useState<boolean>(false)
  const [isDiffer, setIsDiffer] = useState<boolean>(false)
  const [modifiedFields, setModifiedFields] = useState<{} | { [key: string]: string }>({})

  const onModify = useCallback(() => {
    setIsModify(true)
  }, [])

  const onBack = useCallback(() => {
    setIsModify(false)
  }, [])

  const handleClose = useCallback(() => {
    onClose()
    onBack()
  }, [onBack, onClose])

  const onSubmit = useCallback(() => {
    const data = { Force: true, Keep: [] as [], KeepSource: false, Remove: [] as [], Replace: modifiedFields, Synchronous: false }
    studyEdit(data, study.id)
      .then(() => handleClose())
      .then(() => clearStudies())
      .then(() => getAllStudies())
  }, [clearStudies, getAllStudies, handleClose, modifiedFields, study.id, studyEdit])

  useEffect(() => {
    if (Object.keys(modifiedFields).length) {
      setIsDiffer(true)
    } else {
      setIsDiffer(false)
    }
  }, [modifiedFields])

  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose} {...rest}>
      <DialogTitle>
        {FormatMessage('study.edit')} {title}
        <CloseIcon style={{ cursor: 'pointer' }} onClick={handleClose} />
      </DialogTitle>

      <DialogContent>
        {!isModify && (
          <>
            <DialogElement>
              <Typography variant="subtitle1">{FormatMessage('study.edit.attach.info')}</Typography>
              <Button variant="contained">{FormatMessage('study.edit.attach')}</Button>
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
      </DialogContent>
      <DialogActions>
        {isModify && (
          <Button variant="contained" onClick={onBack}>
            {FormatMessage('common.back')}
          </Button>
        )}
        <Button variant="contained" onClick={handleClose}>
          {FormatMessage('common.cancel')}
        </Button>
        {isModify && (
          <Button disabled={!isDiffer} variant="contained" onClick={onSubmit}>
            {FormatMessage('study.edit')}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
})

export default StudyEdit
