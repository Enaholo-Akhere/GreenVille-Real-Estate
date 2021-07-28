import {Fragment, useState} from 'react';
import Home from "./Home/home";
import Navbar from './Utils/navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './Notfound/notfound';
import HouseDetails from './HouseDetails/housedetails';
import Footer from './Footer/footer';
import Success from './Success/success'
import Owners from './Home/owners';
import Deleteuser from './Home/deleteuser';
import Register from './Register/register';


function App() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  //Function to set Successful message on form submission
  const submitForm = (use) =>{
    setFormIsSubmitted(use);
  }

  //function to cancel delete warning message on owners.js
  const switchinterface = (use) =>{
    setIsDelete(use)
}
   return (
     <Router>
       
     <Fragment>
       <Navbar/>
       <Switch>
         <Route exact path = "/">
         { <Home />}
         </Route>
         <Route  path = "/owners">
         {!isDelete ? <Owners deleteuser = {switchinterface}/> : <Deleteuser deleteuser = {switchinterface}/>}
         </Route>
         <Route path = "/signup">
           {!formIsSubmitted ? <Register submitForm = {submitForm}/> : <Success/>}
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
