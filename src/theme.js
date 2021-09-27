import { createMuiTheme } from '@material-ui/core';

// const defaultTheme = createMuiTheme();

export default createMuiTheme({
  palette: {
    primary: {
      main: '#ff8c1a',
      mainDark: '#CF5300',
      gray: '#333333',
      dark: '#0e0f0f',
      white: '#ffffff',
    },
    danger: {
      main: '#EB5757',
    },
    interpreterStatusColor: {
      available: '#27AE60',
      busy: '#EB5757',
      away: '#C5C5C5',
    },
    background: {
      main: '#ff8c1a',
      white: '#fff',
      darkPrimary: '#0e0f0f',
      // darkSecondary: '#1c1815',
      darkSecondary: '#231e1a',
    },
    shadow: {
      main: '0px 4px 8px rgba(9, 28, 43, 0.08)',
    },
  },
  //   overrides: {
  //     MuiCssBaseline: {
  //       '@global': {
  //         'html, body, #root': {
  //           height: '100%',
  //         },
  //       },
  //     },
  //     MuiButton: {
  //       root: {
  //         borderRadius: '4px',
  //         textTransform: 'none',
  //         color: 'rgb(40, 42, 43)',
  //         fontSize: '0.9rem',
  //         transition: defaultTheme.transitions.create(['background-color', 'box-shadow', 'border', 'color'], {
  //           duration: defaultTheme.transitions.duration.short,
  //         }),
  //       },
  //       text: {
  //         padding: '6px 14px',
  //       },
  //       contained: {
  //         boxShadow: 'none',
  //         '&:hover': {
  //           boxShadow: 'none',
  //         },
  //       },
  //       outlinedPrimary: {
  //         border: '2px solid #027AC5',
  //         '&:hover': {
  //           border: '2px solid rgb(1, 85, 137)',
  //         },
  //       },
  //       startIcon: {
  //         marginRight: '6px',
  //       },
  //     },
  //     MuiTypography: {
  //       body1: {
  //         color: 'rgb(40, 42, 43)',
  //         fontSize: '0.9rem',
  //       },
  //     },
  //     MuiInputBase: {
  //       root: {
  //         fontSize: '0.9rem',
  //         height: '48px',
  //         // background: 'rgba(9, 28, 43, 0.02)',
  //         background: '#FAFAFB',
  //         '&:active': {
  //           borderColor: '#0088ED',
  //           borderWidth: '2px',
  //         },
  //       },
  //     },
  //     MuiSelect: {
  //       root: {
  //         padding: '0.85em',
  //       },
  //     },
  //     MuiDialogActions: {
  //       root: {
  //         padding: '16px',
  //       },
  //     },
  //     MuiTextField: {
  //       root: {
  //         color: 'rgb(40, 42, 43)',
  //       },
  //     },
  //     MuiInputLabel: {
  //       root: {
  //         color: 'rgb(40, 42, 43)',
  //         fontSize: '1.1rem',
  //         marginBottom: '0.2em',
  //         fontWeight: 500,
  //       },
  //     },
  //     MuiOutlinedInput: {
  //       root: { border: 'none' },
  //       notchedOutline: {
  //         borderColor: 'rgb(136, 140, 142)',
  //       },
  //     },
  //     MuiMenuItem: {
  //       root: {
  //         '&:hover': {
  //           background: '#fff',
  //         },
  //       },
  //     },

  //     typography: {
  //       fontFamily: 'Inter, sans-serif',
  //     },
  //   },
  brand: '#E22525',
  footerHeight: 72,
  mobileFooterHeight: 56,
  sidebarWidth: 300,
  sidebarMobileHeight: 90,
  sidebarMobilePadding: 8,
  participantBorderWidth: 2,
  mobileTopBarHeight: 52,
  chatWindowWidth: 320,
});
