import './darkmode.css';

// FontAwesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";


export default function DarkMode() {
  

  const DarkModeHandle = () => {
    document.querySelector('body').classList.toggle('darkmode');
  };

  return (
    <div className='Dark-Mode-Icon'>
      <FontAwesomeIcon icon={faLightbulb} onClick={DarkModeHandle} />
    </div>
  );
}
