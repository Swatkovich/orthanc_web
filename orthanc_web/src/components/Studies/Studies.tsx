import { observer } from 'mobx-react'
import { useContext, useEffect } from 'react'
import OrthancStoreContext from '../../store/data/OrthancStore'
import { StudiesWrapper } from './Studies.styles'
import { Study } from '../../interface/client'
import StudyRow from '../StudyRow'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import FormatMessage from '../../dictionary/FormatMessage'

const Studies: React.FC = observer(() => {
  const orthancStore = useContext(OrthancStoreContext)
  const { studies, getAllStudies, getStudiesId } = orthancStore

  useEffect(() => {
    getAllStudies()
  }, [getAllStudies, getStudiesId])

  return (
    <StudiesWrapper>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>{FormatMessage('table.header.patientBirthDate')}</TableCell>
              <TableCell>{FormatMessage('table.header.patientName')}</TableCell>
              <TableCell>{FormatMessage('table.header.patientId')}</TableCell>
              <TableCell>{FormatMessage('table.header.studyDescription')}</TableCell>
              <TableCell>{FormatMessage('table.header.studyDate')}</TableCell>
              <TableCell>{FormatMessage('table.header.modalitiesInStudy')}</TableCell>
              <TableCell>{FormatMessage('table.header.series')}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studies!.map((study: Study, i) => (
              <StudyRow key={study.id} study={study} studyListNumber={i} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StudiesWrapper>
  )
})

export default Studies
