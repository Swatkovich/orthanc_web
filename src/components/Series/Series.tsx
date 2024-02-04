import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { SeriesInfo, SeriesInfoElement, SeriesOpenWrapper } from './Series.styles'
import { useCallback, useContext, useEffect, useState } from 'react'
import FormatMessage from '../../dictionary/FormatMessage'
import OrthancStoreContext from '../../store/data/OrthancStore'
import { observer } from 'mobx-react'
import { SeriesFull } from '../../interface/client'

interface Props {
  studyId: string
  studyListNumber: number
}

const Series: React.FC<Props> = observer((props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [series, setSeries] = useState<SeriesFull | null>(null)
  const { studyId, studyListNumber } = props

  const seriesOpen = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const orthancStore = useContext(OrthancStoreContext)
  const { studies, getSeriesById } = orthancStore

  useEffect(() => {
    getSeriesById(studyId, studyListNumber).then(() => setSeries(studies[studyListNumber].seriesData))
  }, [getSeriesById, studies, studyId, studyListNumber])

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>{FormatMessage('series.number')}</TableCell>
            <TableCell>{FormatMessage('series.description')}</TableCell>
            <TableCell>{FormatMessage('series.modality')}</TableCell>
            <TableCell>{FormatMessage('series.instances')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow onClick={seriesOpen}>
            <TableCell>{studies[studyListNumber].seriesData?.number}</TableCell>
            <TableCell>{studies[studyListNumber].seriesData?.description}</TableCell>
            <TableCell>{studies[studyListNumber].seriesData?.modality}</TableCell>
            <TableCell>{studies[studyListNumber].seriesData?.instances}</TableCell>
          </TableRow>
          {isOpen && (
            <TableRow>
              <TableCell style={{ padding: 0, margin: 0 }} colSpan={4}>
                <SeriesOpenWrapper>
                  <SeriesInfo>
                    <SeriesInfoElement>
                      <Typography variant="subtitle1">{FormatMessage('series.date')}:</Typography>
                      <Typography variant="subtitle1">{series?.date}</Typography>
                    </SeriesInfoElement>
                    <SeriesInfoElement>
                      <Typography variant="subtitle1">{FormatMessage('series.time')}:</Typography>
                      <Typography variant="subtitle1">{series?.time}</Typography>
                    </SeriesInfoElement>
                    <SeriesInfoElement>
                      <Typography variant="subtitle1">{FormatMessage('series.description')}:</Typography>
                      <Typography variant="subtitle1">{series?.description}</Typography>
                    </SeriesInfoElement>
                    <SeriesInfoElement>
                      <Typography variant="subtitle1">{FormatMessage('series.number')}:</Typography>
                      <Typography variant="subtitle1">{series?.number}</Typography>
                    </SeriesInfoElement>
                    <SeriesInfoElement>
                      <Typography variant="subtitle1">{FormatMessage('series.bodyPartExamined')}:</Typography>
                      <Typography variant="subtitle1">{series?.bodyPartExamined}</Typography>
                    </SeriesInfoElement>
                    <SeriesInfoElement>
                      <Typography variant="subtitle1">{FormatMessage('series.protocolName')}:</Typography>
                      <Typography variant="subtitle1">{series?.protocolName}</Typography>
                    </SeriesInfoElement>
                    <SeriesInfoElement>
                      <Typography variant="subtitle1">{FormatMessage('series.instancesUID')}:</Typography>
                      <Typography variant="subtitle1">
                        {series!.seriesInstanceUID?.length > 25 ? `${series?.seriesInstanceUID.slice(0, 25)}...` : series?.seriesInstanceUID}
                      </Typography>
                    </SeriesInfoElement>
                  </SeriesInfo>
                </SeriesOpenWrapper>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
})

export default Series
