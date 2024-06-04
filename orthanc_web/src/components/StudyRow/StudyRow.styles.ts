import { styled } from '@mui/material/styles'
import { ReactComponent as DeleteIcon } from '../../assets/img/delete.svg'

export const DeleteIconStyled = styled(DeleteIcon)(({ theme }) => ({
  borderRadius: '4px',
  padding: '4px',
  ':hover': {
    background: theme.palette.primary.light,
  },
}))
