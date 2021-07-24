import {Fragment, useState} from 'react';
import Home from "./Home/home";
import Login from './Login/login';
import Signup from './Signup/signup'
import Navbar from './Utils/navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './Notfound/notfound';
import HouseDetails from './HouseDetails/housedetails';
import Footer from './Footer/footer';
import Success from './Success/success'
import Owners from './Home/owners';


function App() {
  const [isHome, setIsHome] = useState(false)
  const home = (sethome) => {
    setIsHome(sethome)
  }
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = (use) =>{
    setFormIsSubmitted(use);
    console.log(use)
  }
   return (
     <Router>
       
     <Fragment>
       <Navbar/>
       <Switch>
         <Route exact path = "/">
         {!isHome ? <Home submithome = {home}/> : <Owners/>}
         </Route>
         <Route path = "/login">
           <Login />
         </Route>
         <Route path = "/signup">
           {!formIsSubmitted ? <Signup submitForm = {submitForm}/> : <Success/>}
         </Route>
         <Route path = "/housedetails/:id">
           <HouseDetails />
         </Route>
         <Route path = "/*">
           <Notfound />
         </Route>
       </Switch>
       <Footer />
      </Fragment>
      </Router>
   );
  
}
export default App;
