import { Link, useNavigate } from 'react-router-dom'
import './login.css'

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    // For now, we'll just navigate to the home page
    navigate('/home');
  };

  return (
    <div className="login">
      <div className='card'>
        <div className="left">
          <h2>-<br/>JourniiX <br />-</h2>
          <p>Your Journey Begins Here</p>
          <span>Don't have any Account?</span>
          <Link to='/signup'>
            <button className='btn btn-primary'>Register</button>
          </Link>
        </div>
        <form className="right" onSubmit={handleSubmit}>
          <input type="text" required placeholder='username'/>
          <input type="password" required placeholder='password' />
          <button type='submit' className='btn'>Login</button>
        </form>
      </div>
    </div>
  )
}
