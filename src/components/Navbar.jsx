import "../styles/Navbar.css";
import gorillaSystem from '../assets/icons/gorilla.png';
import developmentIcon from '../assets/icons/development.png';
import walletsIcon from '../assets/icons/wallet-solid.svg';
import normalIcon from '../assets/icons/normal.png';
import newsIcon from '../assets/icons/newspaper-solid.svg';
import settingsIcon from '../assets/icons/gears-solid.svg';
import toolsIcon from '../assets/icons/screwdriver-wrench-solid.svg';
import helpIcon from '../assets/icons/question-solid.svg';
import logoutIcon from '../assets/icons/right-from-bracket-solid.svg';
import { v4 as uuidv4 } from 'uuid';

function Navbar() {
  const linkArray = [
    { name: "Gorilla System", 
      id: uuidv4(), 
      url: "#",
      img: gorillaSystem,
    },
    {
      name: "LS-Web Development",
      id: uuidv4() ,
      url: "http://www.lucianosardanha.com/",
      img: developmentIcon, 
    },
    { 
      name: "Wallets", 
      id: uuidv4() ,
      url: "http://www.lucianosardanha.com/",
      img: walletsIcon, 
    },
    { 
      name: "Normal", 
      id: uuidv4(), 
      url: "http://www.lucianosardanha.com/",
      img: normalIcon,
    },
    { 
      name: "News", 
      id: uuidv4(), 
      url: "http://www.lucianosardanha.com/",
      img: newsIcon, 
    },
    { 
      name: "Settings", 
      id: uuidv4(), 
      url: "http://www.lucianosardanha.com/",
      img: settingsIcon, 
    },
    { 
      name: "Tools", 
      id: uuidv4(), 
      url: "http://www.lucianosardanha.com/",
      img: toolsIcon,  
    },
    { 
      name: "Help", 
      id: uuidv4(), 
      url: "http://www.lucianosardanha.com/",
      img: helpIcon, 
    },
    { 
      name: "Log out", 
      id: uuidv4(), 
      url: "http://www.lucianosardanha.com/",
      img: logoutIcon,
    },
  ];
  const linkList = linkArray.map((link) => (
     <li className="links-li" key={link.id}>
      <a key={link.id} href={link.url} target="_blanc">
      <img className="link-img" src={link.img} key={link.id} alt={link.name} />&nbsp;{link.name}
      </a>
    </li>
    
  ));
  return (
    <nav className="navbar-container">
      <ul className="links-ul">{linkList}</ul>
    </nav>
  );
}

export default Navbar;
