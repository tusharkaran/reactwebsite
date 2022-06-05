import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom';
import './App.css';
// import firebase from './Firebase';
// import { collection, getDocs } from "firebase/firestore"; 
import Home from './Components/pages/Home';
import Footer from './Components/Footer';
import Skillset from './Components/pages/Skillset';
import Education from './Components/pages/Education';
import Projects from './Components/pages/Projects';




function App(){


// getDocs(collection(firebase, "developers")).then(function(querySnapshot) {
//   // logic
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
//   console.log("abc",querySnapshot);
// });
    return(    
       <Router>
       <Navbar/>
       <Routes>
         <Route path='/' exact  element={ <Home/>}/>
         <Route path='/skillset'  element={ <Skillset/>}/>
         <Route path='/education'  element={ <Education/>}/>
         <Route path='/projects'  element={ <Projects/>}/>
         
       </Routes>
       <Footer/>
       </Router>
    );
  }
  
  export default App;