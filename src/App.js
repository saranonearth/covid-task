import React, { Suspense } from 'react'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer} from "react-toastify";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
//components
import Loading from './app/components/Loading';
const Dashboard = React.lazy(()=> import('./dashboard'))
const Home = React.lazy(()=> import('./home'))
const Signin = React.lazy(()=> import('./auth/Login'))
const Signup = React.lazy(()=> import('./auth/Signup'))

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
