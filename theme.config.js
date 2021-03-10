import { createMuiTheme } from '@material-ui/core/styles'
import { primaryBrandColor } from './colors.config'

function getThemeConfig (direction) {
  return createMuiTheme({
    direction,
    palette: {
      primary: {
        main: primaryBrandColor,
      },
    },
    typography: {
      fontFamily: [
        'Cairo',
      ].join(','),
    },
  })
}

export default getThemeConfig
