// import { mainTheme } from './mainTheme';
import { createTheme } from '@mui/material/styles'
import { Theme } from '@mui/material/styles/createTheme'

function mainThemeBase(isDarkTheme?: boolean): Theme {
  return createTheme({
    palette: {
      primary: {
        main: '#08070D',
        light: '#211E2C',
        dark: '#14121C',
      },
      secondary: {
        main: '#413A8B',
        light: '#5750A6',
        dark: '#191724',
      },
      error: {
        main: '#E85353',
        light: '',
        dark: '',
      },
      success: {
        main: '#90EE94',
      },
      text: {
        primary: isDarkTheme ? '#F8F8F8' : '#252323',
        secondary: '#F8F8FF80',
        disabled: '#797979',
      },
      grey: {
        '50': '#FBFBFB',
        '100': '#f6f6f6',
        '200': '#ececec',
        '300': isDarkTheme ? '#747474' : '#e2e2e2',
        '400': '#d7d7d7',
        '500': '#c6c6c6',
        '600': '#757575',
        '700': '#606060',
        '800': '#424242',
      },
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
    },
    components: {},
  })
}

export function mainTheme(isDarkTheme?: boolean): Theme {
  return createTheme({
    ...mainThemeBase(isDarkTheme),
    components: {
      MuiTypography: {
        styleOverrides: {
          body1: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '18px',
          },
          body2: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '16px',
          },
          h1: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '18px',
          },
          h2: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '32px',
          },
          h3: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            //24px
            fontSize: '2.84vh',
            fontStyle: 'normal',
            fontWeight: 700,
            //32px
            lineHeight: '3.8vh',
          },
          h4: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '18px',
          },
          subtitle1: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '16px',
          },
          subtitle2: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '20px',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            padding: 0,
            borderRadius: '8px',
            height: '48px',
            fontSize: '18px',
            lineHeight: '24px',
            boxShadow: 'none',
            boxSizing: 'border-box',
            touchAction: 'none',
            border: `none`,
            background: '#191724',
            '& input': {
              // padding: 0,
              paddingTop: '2.34vh',
              // paddingLeft: '1.9vh',
            },
            '& fieldset': {
              border: 'none',
            },
            '& label': {
              color: mainThemeBase(isDarkTheme).palette.text.primary,
              opacity: '1',
              top: '4px',
              // left: '0',
              // transform: 'translate(1.9vh, 0) scale(1)',
              '&.Mui-focused': {
                color: isDarkTheme ? '#757575' : '#757575',
                transform: 'translate(14px, 0px) scale(0.75)',
              },
              '&.MuiFormLabel-filled': {
                color: isDarkTheme ? '#757575' : '#757575',
                transform: 'translate(14px, 0px) scale(0.75)',
              },
              '&.Mui-error': {
                color: mainThemeBase(isDarkTheme).palette.text.primary,
              },
            },
            '&:hover': {
              // border: `1px solid ${mainThemeBase(isDarkTheme).palette.primary.dark}`,
            },
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            '&.MuiRadio-root': {
              '&.Mui-checked': {
                color: mainThemeBase(isDarkTheme).palette.secondary.light,
              },
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableTouchRipple: true,
          disableElevation: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            height: '48px',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '24px',
            boxShadow: 'none',
            color: mainThemeBase(isDarkTheme).palette.text.primary,
          },
          contained: {
            background: mainThemeBase(isDarkTheme).palette.secondary.main,
            '&:hover': {
              background: mainThemeBase(isDarkTheme).palette.secondary.light,
            },
          },
          outlined: {
            border: `1px solid ${mainThemeBase(isDarkTheme).palette.grey[300]}`,
            '&:hover': {
              borderColor: mainThemeBase(isDarkTheme).palette.grey[300],
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          // paperWidthSm: {
          //   boxSizing: 'border-box',
          //   padding: '2.84vh 4.1vw',
          //   width: '91.8vw',
          //   margin: 0,
          //   maxWidth: 'unset',
          //   borderRadius: '1.42vh',
          //   backgroundColor: mainThemeBase(isDarkTheme).palette.primary.light,
          // },
          paperWidthMd: {
            width: '720px',
            boxSizing: 'border-box',
            // margin: 0,
            borderRadius: '16px',
            backgroundColor: mainThemeBase(isDarkTheme).palette.primary.light,
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            padding: '24px',
            borderBottom: `1px solid ${mainThemeBase(isDarkTheme).palette.grey[800]}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // margin: 0,
            // padding: 0,
            // textAlign: 'center',
            // color: mainThemeBase(isDarkTheme).palette.text.primary,
            // //18px
            // fontSize: '2.13vh',
            // fontStyle: 'normal',
            // fontWeight: 700,
            // //24px
            // lineHeight: '2.84vh',
            // marginBottom: '1.66vh',
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: '24px',
            paddingTop: '24px !important',
            // margin: 0,
            // textAlign: 'center',
            // color: mainThemeBase(isDarkTheme).palette.text.primary,
            // //14px
            // fontSize: '1.66vh',
            // fontStyle: 'normal',
            // fontWeight: 400,
            // //24px
            // lineHeight: '2.84vh',
            // padding: '0',
            // marginBottom: '1.66vh',
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: '24px',
            borderTop: `1px solid ${mainThemeBase(isDarkTheme).palette.grey[800]}`,
            // padding: '0',
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#262536',
              borderRadius: '4px',
              marginTop: '68px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#F8F8FF26',
              borderRadius: '4px',
            },
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            background: mainThemeBase(isDarkTheme).palette.primary.dark,
            borderRadius: '16px',
            padding: '32px',
          },
        },
      },
      MuiTableBody: {
        styleOverrides: {
          root: {},
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            '&:hover': {
              '& > td': {
                background: mainThemeBase(isDarkTheme).palette.secondary.dark,
              },
            },
            '&.MuiTableRow-head': {
              '&:hover': {
                background: 'unset',
              },
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            background: mainThemeBase(isDarkTheme).palette.primary.dark,
            border: 'none',
            borderBottom: `1px solid ${mainThemeBase(isDarkTheme).palette.secondary.main}`,
            boxSizing: 'border-box',
            height: '64px',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 400,
            padding: '20px 16px',
            alignItems: 'center',
            cursor: 'pointer',
            '&.MuiTableCell-head': {
              cursor: 'unset',
              fontWeight: 500,
              height: '36px',
              padding: '8px 16px',
              color: mainThemeBase(isDarkTheme).palette.text.secondary,
              borderBottom: 'none',
            },
          },
        },
      },
    },
  })
}
