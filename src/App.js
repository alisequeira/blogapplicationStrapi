import React from 'react';
import Navbar from './components/Navbar';
import Bloglist from './components/blogs/Bloglist';
import './App.css';


class App extends React.Component{
  render(){
    return (
        <div className="App">
          <Navbar/>
          <Bloglist/>
        </div>
    )
  }
}
export default App;
