import React,{ useState} from "react";
 import '../../Container.css'
import Photo from '../../Login.png'
import Signup from '../../Signup.png'


const Admin = () => {
  const [isSignUp, setSignUp] = useState(true);

  class AdminInput {
    constructor(name = "", phoneNumber = "", email = "", password = "", rPassword = "",photo = "") {
        this.name = name
        this.phoneNumber = phoneNumber	 
        this.email = email
        this.password = password
        this.rPassword = rPassword
        this.photo =photo
    }
}
const [adminInput, setAdminInput] = useState(new AdminInput())
console.log(adminInput)
let handleChangeInput = (e) => {
  setAdminInput({
      ...adminInput,
      [e.target.name]:e.target.value
  })
}
  return (
    <>
  <div id="container"className={isSignUp ? "right-panel-active" : "right-panel-active2 "} >
  {/* ///////////////////signUp//////////////////	 */}
  <div className="form-container sign-up-container">
      <form action="#" >
        <h1>Create new Admin</h1><br/>        
        <input type="text" placeholder="Name" onChange={handleChangeInput}/>
        <input type="text" placeholder="Phone number" onChange={handleChangeInput}/>
        <input type="email" placeholder="Email"onChange={handleChangeInput} />
        <input type="password" placeholder="Password" onChange={handleChangeInput}/>
        <input type="file" placeholder="Upload File" class='inputFille'onChange={handleChangeInput}/><br/>
        <button>Sign Up</button>		
        <p className="text"> Don't have an account ?<a href='#' className="sign-btn"  onClick={() => setSignUp(false)}> Sign in </a></p>
      </form>
    </div>
    {/* ///////////////////signIn//////////////////	 */}
    <div className="form-container sign-in-container  " >
      <form action="#" >
        <h1>Sign in</h1>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
       <p className="text" >already have an account ?<a href='#' className="sign-btn" onClick={() =>setSignUp(true)}>Sign up</a></p>
      </form>  
    </div>
    {/* /////////////////partie 2////////////////////	 */}
    	<div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
           <img src={Photo} width='450px' height='auto'/>
          <button className="ghost" id="signIn" onClick={() => setSignUp(false)}>Sign In</button>
        </div>
    {/* /////////////////////////////////////	 */}
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <img src={Signup} width='450px' height='auto'/>
          <button className="ghost" id="signUp" onClick={() => setSignUp(true)}>Sign Up</button>
        </div>
    {/* /////////////////////////////////////	 */}
      </div>
    </div>
  </div>

</>

  
)
}
export default  Admin 
