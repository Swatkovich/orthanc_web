import { styled } from '@mui/material/styles'

export const SeriesOpenWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  background: theme.palette.primary.light,
  padding: '20px 20px 20px 20px',
  borderRadius: '8px',
}))

export const SeriesInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '48%',
  marginRight: '20px',
}))

export const SeriesInfoElement = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  height: '24px',
}))
