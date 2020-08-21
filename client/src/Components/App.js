import React from 'react';
import './App.css';
import NewList from './NewList';
import history from '../history'
import CreateList from '../Components/Create/CreateList';
import CustomList from './CustomList';
import {Router, Route, Switch} from 'react-router-dom'
import CreateNewTest from '../Components/Create/CreateNewTest';
import AllLists from './AllLists';
import ListSingle from './ListSingle'
import UserSingle from './UserSingle'
import EntrySingle from './EntrySingle'
import NYE2020 from '../HardCoded/NYE2020';
import GroupDecision from '../HardCoded/GroupDecision'
import CreateProfile from '../Components/Create/CreateProfile';
import CreateNewList from '../UserStory/CreateBasicLists/CreateNewList'
import EditListEntry from '../UserStory/CreateBasicLists/EditListEntry'
import BasicListHome from '../UserStory/CreateBasicLists/BasicListHome'
import CurrentUser from '../Components/Create/CurrentUser'


const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact strict path="/" component={NewList} />
          <Route exact path="/cities/create"  component={CreateList} />
          <Route path="/Hotels/create" exact component={CreateList} />
          <Route path="/Airlines/create" exact component={CreateList} />
          <Route path="/Dinning/create" exact component={CreateList}/>
          <Route path="/Custom/create" exact component={CustomList}/>
          <Route path="/createUser" exact component={CreateNewTest}/>
          <Route path="/lists" exact component={AllLists}/>
          <Route path="/lists" exact component={AllLists}/>
          <Route path="/lists" exact component={AllLists}/>
          <Route path="/lists/:id" exact component={ListSingle}/>
          <Route path="/users/:id" exact component={CurrentUser}/>
          <Route path="/listEntries/:id" exact component={EntrySingle}/>
          <Route path="/trip/" exact component={NYE2020}/>
          <Route path="/trip/GroupDecision/" exact component={GroupDecision}/>
          <Route path="/newProfile/" exact component={CreateProfile}/>
          <Route path="/list" component={CreateNewList} />
          <Route path="/edit" component={EditListEntry} />
          <Route path="/BasicListHome" component={BasicListHome} />
        </Switch>

    </Router>
    </div>
  );
}

export default App;
