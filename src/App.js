import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Behandelingen from './pages/Behandelingen.js';
import OverMij from "./pages/OverMij";
import Contact from "./pages/Contact";
import Cadeaubon from "./pages/Cadeaubon";

function App() {
  return (
      <>
   <div>
    <Switch>
        <Route path="/behandelingen">
            <Behandelingen/>
        </Route>
        <Route path="/over_mij">
            <OverMij/>
        </Route>
        <Route path="/contact">
            <Contact/>
        </Route>
        <Route path="/cadeaubon">
            <Cadeaubon/>
        </Route>
        <Route path='/'>
            <Home/>
        </Route>
     </Switch>
   </div>
      </>
  );
}

export default App;
