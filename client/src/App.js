import './App.css';
import Main from './views/Main';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path ='/'>
        <Main />
        </Route>

      </Switch>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
