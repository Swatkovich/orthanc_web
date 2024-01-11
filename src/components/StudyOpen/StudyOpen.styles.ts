import { styled } from '@mui/material/styles'

export const StudyOpenWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  border: '1px solid white',
  padding: '20px',
  marginBottom: '20px',
}))

export const Labels = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  border: '1px solid grey',
  padding: '4px',
  height: '36px',
}))

export const Label = styled('div')(({ theme }) => ({
  height: '100%',
  padding: '2px',
  backgroundColor: 'blue',
  color: 'white',
  borderRadius: '2px',
  marginRight: '4px',
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
