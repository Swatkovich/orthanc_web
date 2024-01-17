import { styled } from '@mui/material/styles'

export const AuthWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
}))

export const DataWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
}))
