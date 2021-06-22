import * as React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginPage from './screens/Login'
import DashboardPage from './screens/DashboardPage'
import Header from './components/Header'
import EditTodoPage from './screens/EditTodoPage'
import './App.css'


const App = () => {
  // const isLoggedIn = useRecoilValue(Atoms.loginState)
  
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/dashboard' component={DashboardPage} />
          <Route path='/edit/:id' component={EditTodoPage} />
          <Route path='/' component={LoginPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App