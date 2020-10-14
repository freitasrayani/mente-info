import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/pages/inicio/LandingPage';
import Ansiedade from './components/pages/ansiedade/Ansiedade';
import Depressao from './components/pages/depressão/Depressao'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
     <Header />

     <Switch>
       <Route exact path="/">
         <LandingPage />
       </Route>
       <Route exact path="/ansiedade">
         <Ansiedade />
       </Route>
       <Route exact path="/depressao">
         <Depressao />
       </Route>
     </Switch>

   </div>
    
    </BrowserRouter>
  ) 
}

export default App;
