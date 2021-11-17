import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound/NotFound';
import Explore from './Pages/Explore/Explore/Explore';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="/explore">
            <Explore></Explore>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
