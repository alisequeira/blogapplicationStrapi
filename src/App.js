import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Bloglist from './components/blogs/Bloglist';
import './App.css';
import Singleblog from './components/blogs/Singleblog';


class App extends React.Component{
  render(){
    return (
        <Router>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Bloglist}/>
              <Route exact path="/single/:postid" render={props =>(
                <Singleblog {...props}/>
              )}/>
            </Switch>
          </div>
        </Router>
    )
  }
}
export default App;
