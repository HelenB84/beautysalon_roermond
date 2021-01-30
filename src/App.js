import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Behandelingen from './pages/Behandelingen.js';
import OverMij from "./pages/OverMij";
import Contact from "./pages/Contact";
import Cadeaubon from "./pages/Cadeaubon";
import Navbar from "./components/Navbar";
import Gezichtsbehandelingen from "./pages/Gezichtsbehandelingen";
import Harsen from "./pages/Harsen";
import Massage from "./pages/Massage";
import Manicure from "./pages/Manicure";

function App() {
  return (
      <>
    <Navbar/>
    <Switch>
        <Route path="/behandelingen">
            <Behandelingen/>
        </Route>
        <Route path="/gezichtsbehandelingen">
            <Gezichtsbehandelingen/>
        </Route>
        <Route path="/harsen">
            <Harsen/>
        </Route>
        <Route path="/massage">
            <Massage/>
        </Route>
        <Route path="/manicure">
            <Manicure/>
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
      </>
  );
}

export default App;
