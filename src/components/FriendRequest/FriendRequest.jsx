import './friendrequest.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import FirendReqData from '../../FackApis/FirendReqData'
import { useFriendsData } from '../../FackApis/FriendsData'

export default function FriendRequest() {
  const [requests, setRequests] = useState(FirendReqData);
  const { addFriend } = useFriendsData();

  const handleAccept = (friend) => {
    setRequests(requests.filter(req => req.id !== friend.id));
    addFriend(friend);
  };

  const handleDelete = (id) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  return (
    <div className='Friend-Requests'>
      <h4>Friend Requests</h4>
      {requests.length === 0 ? (
        <p>No friend requests</p>
      ) : (
        requests.map(friend => (
          <div className="request" key={friend.id}>
            <Link to={`/home/profile/${friend.id}`}>
              <div className="info">
                <div className="user">
                  <img src={friend.img} alt="" />
                  <h5>{friend.name}</h5>
                </div> 
                <div className="info-name">
                  <p>{friend.info}</p>
                </div>
              </div>
            </Link>
            <div className="action">
              <button className='btn btn-primary' onClick={() => handleAccept(friend)}>Accept</button>
              <button className='btn' onClick={() => handleDelete(friend.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}