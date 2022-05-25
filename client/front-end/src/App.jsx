import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from "react";

import Agency from './authentication/agency/Agency'
import Admin from './authentication/admin/Admin'
import User from './authentication/user/User'
import Company from './authentication/company/Company'
import Container from './Container'

const App = () => {

return (
  <>
        <BrowserRouter> 
      <Routes>
      <Route path='/' element={<Container/>}/>

      <Route path='/Login/Company' element={<Company/>}/>
       <Route path='/admin' element={<Admin/>}/>
       <Route path='/User' element={<User/>}/>
       <Route path='/Agency' element={<Agency/>}/>

 {/* <Route path='/forgetpass' element={<Forgetpass/>}/>
       <Route path='/verifyemail' element={<Verifyemail/>}/>
       <Route path='/Resetpassword' element={<Resetpassword/>}/>
 */}

      </Routes>
    </BrowserRouter> 
    
  



  </>
)
}
export default App