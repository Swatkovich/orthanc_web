import { styled } from '@mui/material/styles'

export const StudyRowWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '20px',
}))

export const StudyElement = styled('div')(({ theme }) => ({
  display: 'flex',
  border: '1px solid yellow',
  width: '10%',
  overflow: 'hidden ',
}))
