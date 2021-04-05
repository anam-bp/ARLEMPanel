import { muiTheme } from 'storybook-addon-material-ui';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {addDecorator} from '@storybook/react'

const theme = createMuiTheme({
  palette : {
    primary : {
      main : '#009d88'
    },
    textSecondary : {
      main : "#757575",
      
    } 
  }
})

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}