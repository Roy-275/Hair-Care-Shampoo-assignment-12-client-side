import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound/NotFound';
import Explore from './Pages/Explore/Explore/Explore';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Purchase from './Pages/Explore/Purchase/Purchase';

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

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route exact path="/explore">
            <Explore></Explore>
          </Route>

          <PrivateRoute exact path="/products/:productId">
            <Purchase></Purchase>
          </PrivateRoute>

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
