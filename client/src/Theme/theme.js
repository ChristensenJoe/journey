import {createTheme} from '@material-ui/core'

const theme = createTheme({
    typography: {
        fontFamily: '"Inter", sans-serif',
        h2: {
            fontSize: '24px',
            fontWeight: '500'
        },
        h3: {
            fontSize: '18px',
            fontWeight: '500'
        },
        h4: {
            fontSize: '12px',
            color: 'black',
            textDecoration: 'none',
            textTransform: 'uppercase',
            fontWeight: '500',
            letterSpacing: '1.5px'
        },
        h5: {
            fontSize: '16px',
            fontWeight: '700',
            marginBottom: '12px'
        },
        body1: {
            fontSize: '14px'
        }
    },
    palette: {
        primary: {
            main: '#EEECE7',
            light: '#F5F5F5',
            contrastText: '#222'
        },
        secondary: {
            main: '#A2B5BA',
            light: '#EFEFEF',
            contrastText: '#000'
        }
    },
    spacing: 4
})

export default theme;