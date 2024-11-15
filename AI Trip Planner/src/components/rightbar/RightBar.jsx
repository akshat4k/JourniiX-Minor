import './rightBar.css'

//Components....
import Message from '../Message/Message'
import FriendRequest from '../FriendRequest/FriendRequest'

export default function RightBar() {
  return (
    <div className='rightBar'>
      <div className="rightbar-container">
        <Message />
        <FriendRequest /> 
      </div>
    </div>
  )
}
