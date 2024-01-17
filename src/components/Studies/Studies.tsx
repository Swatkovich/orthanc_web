import { observer } from 'mobx-react'
import { useContext, useEffect } from 'react'
import OrthancStoreContext from '../../store/data/OrthancStore'
import { StudiesWrapper } from './Studies.styles'
import { Study } from '../../interface/client'
import StudyRow from '../StudyRow'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import FormatMessage from '../../dictionary/FormatMessage'

const Studies: React.FC = observer(() => {
  const orthancStore = useContext(OrthancStoreContext)
  const { studies, getAllStudies, getStudiesId, getStatistics, getSystem } = orthancStore

  useEffect(() => {
    getAllStudies()
    getStatistics()
    getSystem()
  }, [getAllStudies, getStatistics, getStudiesId, getSystem])

  return (
    <StudiesWrapper>
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
          {studies!.map((study: Study) => (
            <StudyRow study={study} />
          ))}
        </TableBody>
      </Table>
    </StudiesWrapper>
  )
})

export default Studies
