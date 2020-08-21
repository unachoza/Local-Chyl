import './App.css';
import React from 'react';
import BasicListHome from './BasicListHome';
import CreateNewList from './CreateNewList';
import EditListEntry from './EditListEntry'
import history from '../../history'
import {Router, Route, Switch} from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact strict path="/BasicListHome" component={BasicListHome} />
          <Route path="/list" component={CreateNewList} />
          <Route path="/edit" component={EditListEntry} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;