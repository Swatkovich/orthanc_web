import { styled } from '@mui/material/styles'

export const AuthWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
}))

export const ButtonsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  width: '400px',
  padding: '10px',
  border: '1px solid white',
}))

export const DataWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
}))

export const InfoWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  marginTop: 'auto',
}))
