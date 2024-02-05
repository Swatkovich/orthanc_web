import { styled } from '@mui/material/styles'

export const DialogElement = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: '12px',
  width: '100%',
  justifyContent: 'space-between',
  background: '#262536',
  borderRadius: '8px',
  alignItems: 'center',
  marginBottom: '24px',
  '&:last-child': {
    marginBottom: '0',
  },
}))
