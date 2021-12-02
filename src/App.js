import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './site/Login';
import Register from './site/Register';
import "./App.css"


const App = (props) => {
  return (
     <Router history={props.history}>
        <Switch>
          <Route exact path='/'><Login /></Route>
          <Route path='/register'><Register/></Route>
        </Switch>
      </Router>
  );
}

export default App;