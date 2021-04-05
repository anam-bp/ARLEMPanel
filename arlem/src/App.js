import logo from './logo.svg';
import './App.css';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import 'fontsource-roboto';
import "@fontsource/roboto-slab";
import 'font-awesome/css/font-awesome.css';

import WorkplaceCreate from '../src/entities/workplace/WorkplaceCreate';
import Workplace from '../src/entities/workplace/Workplace'
import WorkplaceCreateBasic from './entities/workplace/WorkplaceCreateBasic';
import Dashboard from '../src/entities/member/Dashboard';
import Configurables from '../src/entities/configurable/Configurable';
import Tangibles from '../src/entities/tangible/Tangible';
import Triggers from '../src/entities/trigger/Triggers';
import Sensors from '../src/entities/sensors/Sensors'
import Activity from '../src/entities/activity/Activity'
import ActivityCreate from './entities/activity/ActivityCreate'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navigation from './theme/components/Navigation';
import SignUp from './entities/auth/SignUpForm';
import SignIn from './entities/auth/SignInForm'


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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation/>
        <Switch>
        
            
            <div className="App">
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/workplaces" component={Workplace}/>
            <Route path="/tangibles" component={Tangibles}/>
            <Route path="/configurables" component={Configurables}/>
            <Route path="/triggers" component={Triggers}/>
            <Route path="/sensors" component={Sensors}/>
            <Route path="/activities" component={Activity} />
            <Route path="/createworkplace" component={WorkplaceCreate} />
            <Route path="/createactivity" component={ActivityCreate} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />

              
              
            </div>
            
          
        </Switch>
      </Router>
   </ThemeProvider>
      
  );
}

export default App;
