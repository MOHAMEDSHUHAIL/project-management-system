/*import React, { useState } from 'react';
import LoginPage from './project/LoginPage';
import SignupPage from './project/SignupPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleSignup = () => {
  };

  return (
  <div>
      {loggedIn ? (
        <h1>Logged in successfully!</h1>
      ) : (
        <div>
          <LoginPage onLogin={handleLogin} />
          <SignupPage onSignup={handleSignup} />
        </div>
      )}
    </div>
  );
};

export default App;*/

import LoginPage from './project/LoginPage';
import SignupPage from './project/SignupPage';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
 const App = ()=> {
  return (
    <div>
    <nav>
        
        <h1 className='up'> <center>PROJECT MANAGEMENT SYSTEM</center></h1>
        
        </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element ={<LoginPage/>}></Route>
          <Route path='/signup' element ={<SignupPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;