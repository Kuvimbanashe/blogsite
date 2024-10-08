
import React from 'react';
import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
function App() {


  return (  
          
      <BrowserRouter>
  <div className="form-group">
      <Navbar />
      <header className="container">
        <div>
           
            <Switch>
                <Route exact path='/'  component={Home} />
                    <Route exact path='/create'  component={Create} />
                        <Route path='/blogdetails/:id' component={BlogDetails} />
               
               
               
            </Switch>
        </div>   
        
        
        
        
      </header>
    </div>
    
    </BrowserRouter>
    
          
  );
}

export default App;
