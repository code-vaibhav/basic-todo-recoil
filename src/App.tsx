import * as React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginPage from './screens/Login'
import DashboardPage from './screens/DashboardPage'
import Header from './components/Header'
import EditTodoPage from './screens/EditTodoPage'
import * as Atoms from './atoms/index'
import './App.css'
import { useRecoilValue } from 'recoil'

const App = () => {
  const isLoggedIn = useRecoilValue(Atoms.loginState)
  console.log(isLoggedIn);
  
  return (
    <Router>
      <div>
        {isLoggedIn && <Route component={Header} />}
        <Switch>
          <Route path='/dashboard' component={DashboardPage} />
          <Route path='/edit/:id' component={EditTodoPage} />
          <Route path='/' component={LoginPage} exact/>
          {/* <Route component={404page} /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App