import React from 'react';
import './App.css'
import Sidebar from './apps/sidebar/components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Overview from './apps/sidebar/pages/Overview';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './apps/sidebar/pages/Reports';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/overview" exact component={Overview} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports2" exact component={ReportsOne} />
        <Route path="/reports/reports3" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
      </Switch>
    </Router>
  )
}

export default App
