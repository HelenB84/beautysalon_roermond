import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Behandelingen from './pages/Behandelingen.js';
import OverMij from "./pages/OverMij";
import Contact from "./pages/Contact";
import Cadeaubon from "./pages/Cadeaubon";
import Gezichtsbehandelingen from "./pages/Gezichtsbehandelingen";
import Harsen from "./pages/Harsen";
import Massage from "./pages/Massage";
import Manicure from "./pages/Manicure";
import Footer from "./components/Footer";
import Appointbar from "./components/AppointBar";
import Navbar from "./components/Navbar";

function App() {
  return (
     <>
    <Navbar/>
    <Switch>
        <Route path="/behandelingen" component={Behandelingen}>
            <Behandelingen/>
        </Route>
        <Route path="/gezichtsbehandelingen" component={Gezichtsbehandelingen}>
            <Gezichtsbehandelingen/>
        </Route>
        <Route path="/harsen" component={Harsen}>
            <Harsen/>
        </Route>
        <Route path="/massage" component={Massage}>
            <Massage/>
        </Route>
        <Route path="/manicure" component={Manicure}>
            <Manicure/>
        </Route>
        <Route path="/over_mij" component={OverMij}>
            <OverMij/>
        </Route>
        <Route path="/contact" component={Contact}>
            <Contact/>
        </Route>
        <Route path="/cadeaubon" component={Cadeaubon}>
            <Cadeaubon/>
        </Route>
        <Route path='/' component={Home}>
            <Home/>
        </Route>
     </Switch>
     <Appointbar/>
     <Footer/>
    </>
  );
}

export default App;
