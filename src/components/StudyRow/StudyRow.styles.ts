import { styled } from '@mui/material/styles'
import { ReactComponent as DeleteIcon } from '../../assets/img/delete.svg'

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

export const DeleteIconStyled = styled(DeleteIcon)(({ theme }) => ({
  borderRadius: '4px',
  padding: '4px',
  ':hover': {
    background: theme.palette.primary.light,
  },
}))
