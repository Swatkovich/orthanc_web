import { styled } from '@mui/material/styles'
import { ReactComponent as EditIcon } from '../../assets/img/edit.svg'

export const StudyOpenWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  background: theme.palette.primary.light,
  padding: '20px 20px 20px 20px',
  borderRadius: '8px',
}))

export const StudyInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '48%',
  marginRight: '40px',
}))

export const PatientInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '48%',
}))

export const StudyInfoElement = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  height: '48px',
}))

export const Options = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '4%',
  alignItems: 'end',
  justifyContent: 'center',
  paddingBottom: '20px',
}))

export const EditIconStyled = styled(EditIcon)(({ theme }) => ({
  background: theme.palette.secondary.main,
  borderRadius: '4px',
  padding: '4px',
  cursor: 'pointer',
  ':hover': {
    background: theme.palette.secondary.light,
  },
}))
