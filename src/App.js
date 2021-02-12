import './App.css';
import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
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
import Dashboard from "./pages/Dashboard";
import {useAuthState} from './context/AuthContext';
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    const {isAuthenticated} = useAuthState();

  return (
     <>
    <Navbar/>
    <Switch>
        <Route path="/login" comp={Login}>
            <Login/>
        </Route>
        <Route path="/signup" comp={Signup}>
            <Signup/>
        </Route>
        <Route path="/behandelingen" comp={Behandelingen}>
            <Behandelingen/>
        </Route>
        <Route path="/gezichtsbehandelingen" comp={Gezichtsbehandelingen}>
            <Gezichtsbehandelingen/>
        </Route>
        <Route path="/harsen" comp={Harsen}>
            <Harsen/>
        </Route>
        <Route path="/massage" comp={Massage}>
            <Massage/>
        </Route>
        <Route path="/manicure" comp={Manicure}>
            <Manicure/>
        </Route>
        <Route path="/over_mij" comp={OverMij}>
            <OverMij/>
        </Route>
        <Route path="/contact" comp={Contact}>
            <Contact/>
        </Route>
        <Route path="/cadeaubon" comp={Cadeaubon}>
            <Cadeaubon/>
        </Route>
        <Route path={"/dashboard"} comp={Dashboard}>
            {isAuthenticated ? <Dashboard/> : <Redirect to="/login/"/>}
        </Route>
        <Route path='/' comp={Home}>
            <Home/>
        </Route>
     </Switch>
     <Appointbar/>
     <Footer/>
    </>
  );
}

export default App;
