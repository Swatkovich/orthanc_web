import { styled } from '@mui/material/styles'

export const StudyOpenWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  border: '1px solid white',
  padding: '20px',
}))

export const StudyInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '45%',
  marginRight: '30px',
}))

export const PatientInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '45%',
}))

export const StudyInfoElement = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}))
