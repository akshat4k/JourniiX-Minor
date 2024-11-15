import './chatbox.css'

//Components....
import Stories from '../../components/stories/Stories'

//Fake APIs......
import CurrentUserData from '../../FackApis/CurrentUserData'

//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'


export default function ChatBox() {
  return (
    <>
    <Stories /> 
    <div className="chat-box">
      <div className="chat-box-top">
      <img src={CurrentUserData.map(user =>(user.ProfileImage))} alt="" />
            <div className="user-name">
                <h3>{CurrentUserData.map(user =>(user.name))}</h3>
                <h5>{CurrentUserData.map(user =>(user.username))}</h5>
            </div>
      </div>
      <div className="chat-box-bottom">
        <form action="#">
          <input type="text" placeholder='Write something'  />
          <button type='submit' className='btn btn-primary'>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
          
          <label type='submit' className='btn btn-primary' htmlFor='CFile'>
            <FontAwesomeIcon icon={faFileAlt} />
            <input type="file" id='Cfile'/>
          </label>
        </form>
      </div>
    </div>
    </>
  )
}
