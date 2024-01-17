import { TableCell, TableRow } from '@mui/material'
import OrthancStoreContext from '../../store/data/OrthancStore'
import { useCallback, useContext, useState } from 'react'
import { observer } from 'mobx-react'
import { Study, StudyFull } from '../../interface/client'
import StudyOpen from '../StudyOpen'

interface Props {
  study: Study
}

const StudyRow: React.FC<Props> = observer((props) => {
  const { study } = props
  const orthancStore = useContext(OrthancStoreContext)
  const { getAllStudies, deleteStudy } = orthancStore
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onDelete = useCallback(
    async (id: string) => {
      deleteStudy({ Resources: [id] }).then(() => getAllStudies())
    },
    [deleteStudy, getAllStudies]
  )

  const studyOpen = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <>
      <TableRow onClick={studyOpen}>
        <TableCell>{study.patientBirthDate}</TableCell>
        <TableCell>{study.patientName}</TableCell>
        <TableCell>{study.patientId}</TableCell>
        <TableCell>{study.studyDescription}</TableCell>
        <TableCell>{study.studyDate}</TableCell>
        <TableCell>{study.modalitiesInStudy}</TableCell>
        <TableCell>{study.series.length}</TableCell>
        <TableCell onClick={() => onDelete(study.id)}>DELETE</TableCell>
      </TableRow>
      <TableRow>
        {isOpen && (
          <TableCell style={{ padding: 0, margin: 0 }} colSpan={8}>
            <StudyOpen study={study as StudyFull} />
          </TableCell>
        )}
      </TableRow>
    </>
  )
})

export default StudyRow
