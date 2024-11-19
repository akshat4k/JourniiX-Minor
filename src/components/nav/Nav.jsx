import './nav.css'
import { Link } from 'react-router-dom'

//Fake API Data......

import CurrentUser from '../../FackApis/CurrentUserData'

//Components...

import DarkMode from '../DarkMode/DarkMode';


//FontAwesome icon.........

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faSearch, faEnvelope, faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { faBaby } from '@fortawesome/free-solid-svg-icons/faBaby';


export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">

          <Link to='/home'>
            <h3 className='logo'>JourniiX</h3>
          </Link>
          <Link to='/home'>
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to='/home/profile/1'>
            <FontAwesomeIcon icon={faUser} />
          </Link>

          <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" placeholder='Search...' />
          </div>

        </div>

        <div className="nav-right">
          <Link to='/chatbox/id'>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>

          <Link to='/'>
            <FontAwesomeIcon icon={faBell} />
          </Link>

          <DarkMode />

          <Link to='/'>
            <FontAwesomeIcon icon={faBars} />
          </Link>

          <div className="user">
            <img src={CurrentUser[0].ProfileImage} alt="Profile" />
            <h4>{CurrentUser[0].name}</h4>
          </div>

        </div>
      </div>
    </nav>
  )
}
