
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <div className='Nav-bar'>
        <h1>MoUie</h1>
      </div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
