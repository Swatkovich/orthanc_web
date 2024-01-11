import { Button, Typography } from '@mui/material'
import { StudyElement, StudyRowWrapper } from './StudyRow.styles'
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
      <StudyRowWrapper onClick={studyOpen}>
        <StudyElement>
          <Typography>{study.patientBirthDate}</Typography>
        </StudyElement>
        <StudyElement>
          <Typography>{study.patientId}</Typography>
        </StudyElement>
        <StudyElement>
          <Typography>{study.studyDescription}</Typography>
        </StudyElement>
        <StudyElement>
          <Typography>{study.studyDate}</Typography>
        </StudyElement>
        <StudyElement>
          <Typography>{study.modalitiesInStudy}</Typography>
        </StudyElement>
        <StudyElement>
          <Typography>{study.patientName}</Typography>
        </StudyElement>
        <StudyElement>
          <Typography>{study.series.length}</Typography>
        </StudyElement>
        <Button sx={{ width: '10%', border: '1px solid red' }} onClick={() => onDelete(study.id)}>
          <Typography>DELETE</Typography>
        </Button>
      </StudyRowWrapper>
      {isOpen && <StudyOpen study={study as StudyFull} />}
    </>
  )
})

export default StudyRow
