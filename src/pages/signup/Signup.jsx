import { Link } from 'react-router-dom'
import './signup.css'

export default function signup() {
  return (
    <div className="signup">
      <div className='card'>
      <div className="left">
        <h2>-<br/>JourniiX Signup <br />-</h2>
        <p> Write desciption of the website

        </p>
        <span>Have any Account?</span>
        <Link to='/login' >
        <button className='btn btn-primary'>Login</button>
        </Link>
        
      </div>
      <form className="right">
           <input type="text" required placeholder='username'/>
           <input type="email" required placeholder='email'/>
           <input type="password" required placeholder='password' />
           <button type='submit' className='btn'>Register</button>
      </form>

    </div>
    </div>
  )
}
