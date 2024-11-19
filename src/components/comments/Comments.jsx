import './comment.css'

//Fake APIs.....
import CommetData from "../../FackApis/CommetData"
import CurrentUserData from "../../FackApis/CurrentUserData"
import { Link } from 'react-router-dom'

export default function Comments() {
  return (
    <div className='comments'>
        <div className="writebox">
            <form action="#">
                <div className="user">
                    <img src={CurrentUserData.map(user=>(user.ProfileImage))} alt="" />
                    <input type="text" placeholder='Write a comment' />
                    <button type='submit' className='btn btn-primary'>Send</button>
                </div>
            </form>
        </div>
        {
            CommetData.map(comment =>(
                <Link to ='profile/id'>
                    <div className="user" key={comment.id}>
                        <img src={comment.commentProfile} alt="" />
                        <div>
                        <h5>{comment.name}</h5>
                        <p>{comment.CommeText}</p>
                        </div>
                        <small>1h</small>
                    </div> 
                </Link>
            ))
        }
    </div>
  )
}
