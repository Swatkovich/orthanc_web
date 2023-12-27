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
  width: '240px',
  padding: '10px',
  border: '1px solid white',
}))

export const DataWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
}))

export const StudyRow = styled('div')(({ theme }) => ({
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
