import './userProfile.css'

import { Link } from 'react-router-dom'

//Fake APIs......
import CurrentUserData from '../../FackApis/CurrentUserData'

//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeed, faLink, faMessage } from '@fortawesome/free-solid-svg-icons'

export default function UserProfile() {
  return (
    <div className='userProfile'>
        <div className="cover-photo">
            <img src={CurrentUserData.map(user =>(user.CoverPhoto))} alt="" />
        </div>
        <div className="profile-info">
            <img src={CurrentUserData.map(user =>(user.ProfileImage))} alt="" />
            <div className="user-name">
                <h3>{CurrentUserData.map(user =>(user.name))}</h3>
                <h5>{CurrentUserData.map(user =>(user.username))}</h5>
            </div>
            <div className="profile-button">
                <Link to="/chatbox/id">
                <button className='btn btn-primary'>
                    <FontAwesomeIcon icon={faMessage} />
                </button>
                </Link>
                <button className='btn btn-primary'>
                    <FontAwesomeIcon icon={faFeed} /> Follow me
                </button>
                <button className='btn'>
                    <FontAwesomeIcon icon={faLink} />
                </button>
            </div>
            <p className="bio">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, voluptas aperiam. Harum nemo vero voluptatem earum? 
            </p>
        </div>
    </div>
  )
}
