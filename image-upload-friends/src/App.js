import React from "react";
import { Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        {/* <Switch>
          <Route exact path='/' component={}/>
          <Route exact path='/about' component={}/>
          <Route exact path='/friends' component={}/>
          <Route exact path='/comments' component={}/>

        </Switch> */}
      </div>
    </div>
  );
}

export default App;
