import './stories.css'
import { useState } from 'react';
import CreateTripForm from '../createTrip/CreateTripForm';

// Fake API Data
import CurrentUserData from '../../FackApis/CurrentUserData'

// FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

export default function UserStory() {
  const [showForm, setShowForm] = useState(false);
  const currentUser = CurrentUserData[0];

  return (
    <>
      <div className='story userStory'>
        <div className="user">
          <img src={currentUser.ProfileImage} alt="User Profile" />
        </div>
        <img src={currentUser.CoverPhoto} alt="Cover Story" />
        <label htmlFor="storyFiles" onClick={() => setShowForm(true)}>
          <FontAwesomeIcon icon={faAdd} />
        </label>
        <h5>Create Trip</h5>
      </div>
      {showForm && <CreateTripForm onClose={() => setShowForm(false)} />}
    </>
  )
}
