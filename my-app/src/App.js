import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './pages/login'
import Signup from './pages/signup'
import pageNotFound from './pages/pageNotFound'

class App extends Component {
  render() {
    return(
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/conta' component={Signup} />
        <Route component={pageNotFound} />
      </Switch>
    )

  }
}

export default withRouter(App)  // comando para funcionar



// App é o componente inicial, usamos para mapear as rotas