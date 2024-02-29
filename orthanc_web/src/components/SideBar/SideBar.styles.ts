import { styled } from '@mui/material/styles'
import { ReactComponent as CloseIcon } from '../../assets/img/close.svg'
import logoBackground from '../../assets/img/logo.png'

export const SideBarWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  minWidth: '300px',
  padding: '40px 16px',
  background: theme.palette.primary.dark,
  boxSizing: 'border-box',
}))

export const Info = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  marginTop: 'auto',
}))

export const ProgressWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  border: `1px solid ${theme.palette.primary.light}`,
  padding: '28px 28px 24px 12px',
  marginTop: '24px',
  borderRadius: '8px',
  position: 'relative',
}))

export const ProgressBar = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '12px',
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: '6px',
}))

export const Progress = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  background: theme.palette.success.main,
  borderRadius: '6px',
}))

export const CloseIconStyled = styled(CloseIcon)(({ theme }) => ({
  position: 'absolute',
  top: 4,
  right: 4,
  cursor: 'pointer',
}))

export const ZipDownload = styled('div')(({ theme }) => ({
  width: '100%',
  border: `3px dashed ${theme.palette.primary.light}`,
  height: '100px',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
}))

export const Logo = styled('div')(({ theme }) => ({
  width: '100%',
  height: '207px',
  backgroundPosition: 'center',
  backgroundImage: `url(${logoBackground})`,
  backgroundSize: 'cover',
  marginBottom: '24px',
}))
