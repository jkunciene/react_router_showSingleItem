import React from 'react';
import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Nav';
import About from './About';
import First from './First';
import Home from './Home';
import ItemDetails from './ItemDetails';


function App() {
  return (
    <Router>
      <Container>
       <Nav/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/first' exact component={First}/>
            <Route path='/first/:id' component={ItemDetails}/>
        </Switch>
    </Container>

    </Router>
    
  );
}

export default App;
