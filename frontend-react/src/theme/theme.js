import { createTheme, } from '@mui/material/styles'

export const darkTheme = createTheme({
  palette: {

    background: {
      default: "#191919"
    },
    text: {
      primary: "#c4c4c4"
    }
  },
  typography: {
    fontFamily: 'Oswald, sans-serif',
    letterSpacing: "0.04rem"

  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#191919',
          color: '#c4c4c4'
        },
      }

    },


    MuiInputLabel: {
      styleOverrides: {
        root: {
          padding: '0 5px',
          backgroundColor: '#191919',
          color: '#c4c4c4'
        },
      }

    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          backgroundColor: '#191919',
          color: '#c4c4c4'
        },
      }

    },

    MuiSelect: {
      styleOverrides: {
        root: {
          boxShadow: ' 0 0 0 2px #c4c4c4 inset;',

        },
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: '#c4c4c4'
        },
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#c4c4c4'
        },
      }

    }

  }
})
export const lightTheme = createTheme({
  palette: {

    background: {
      default: "#c4c4c4"
    },
    text: {
      primary: "#191919"
    }
  },
  typography: {
    fontFamily: 'Oswald, sans-serif',
    letterSpacing: "0.04rem"
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#c4c4c4',
          color: '#191919'
        },
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          padding: '0 5px',
          backgroundColor: '#c4c4c4',
          color: '#191919'
        },
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          backgroundColor: '#c4c4c4',
          color: '#191919'
        },
      }

    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#191919'
        },
      }

    },
    MuiSelect: {
      styleOverrides: {
        root: {
          outline: 'none',
          border: 'none',
          boxShadow: ' 0 0 0 2px #191919 inset;',
        },
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: '#0f4a8d'
        },
      }
    }

  }
})
