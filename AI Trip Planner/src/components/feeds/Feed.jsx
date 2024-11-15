import './feeds.css'

import { Link } from 'react-router-dom'


import Comments from '../comments/Comments'

//Font Awesome Icon.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faListDots, faShare, faComment } from '@fortawesome/free-solid-svg-icons'

//States...........
import { useState } from 'react'

export default function Feed({fed}) {

//States Discussed.........
let[openCommet,setOpenCommet]=useState(false);
const CommentHandler =()=>{
    setOpenCommet(!openCommet)
}    
  return (
    <div className='feed' key={fed.userid}>
        <div className="top-content">
            <Link to='/profile/id'>
               <div className="user">
                   <img src={fed.feedProfile} alt="" />
                   <div>
                   <h5>{fed.name}</h5>
                   <small>1 minutes ago</small>
                   </div>
               </div>
            </Link>

            <span><FontAwesomeIcon icon={faListDots} /></span>
        </div>
        <div className="mid-content">
            <p>{fed.desc}</p>
            <img src={fed.feedImage} alt="" />
        </div>
        <div className="bottom-content">
            <div className="action-item">
                <span><FontAwesomeIcon icon={faHeart} />14 Likes</span>
            </div>

            <div className="action-item" onClick={CommentHandler}>
                <span><FontAwesomeIcon icon={faComment} />2 Comments</span>
            </div>

            <div className="action-item">
                <span><FontAwesomeIcon icon={faShare} />11 Shares</span>
            </div>
        </div>
        {openCommet && <Comments />}
    </div>
  )
}
