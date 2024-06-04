import { styled } from '@mui/material/styles'

export const FormWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
}))

export const FormElement = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  marginBottom: '12px',
  '&:last-child': {
    marginBottom: '0',
  },
}))
