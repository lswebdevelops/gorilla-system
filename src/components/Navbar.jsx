import "../styles/Navbar.css";
import gorillaSystem from '../assets/icons/gorilla.png';
import developmentIcon from '../assets/icons/development.png';

function Navbar() {
  const linkArray = [
    { name: "Gorilla System", 
      id: 1, 
      url: "#",
      img: gorillaSystem,
    },
    {
      name: "LS-Web Development",
      id: 2,
      url: "http://www.lucianosardanha.com/",
      img: developmentIcon, 
    },
    { 
      name: "Wallets", 
      id: 3, 
      url: "http://www.lucianosardanha.com/",
      img: '../assets/icons/wallets.png'  
    },
    { 
      name: "Normal", 
      id: 4, 
      url: "http://www.lucianosardanha.com/",
      img: '../assets/icons/normal.png'  
    },
    { 
      name: "News", 
      id: 5, 
      url: "http://www.lucianosardanha.com/",
      img: '../assets/icons/news.png'  
    },
    { 
      name: "Settings", 
      id: 6, 
      url: "http://www.lucianosardanha.com/",
      img: '../assets/icons/settings.png'  
    },
    { 
      name: "Tools", 
      id: 7, 
      url: "http://www.lucianosardanha.com/",
      img: '../assets/icons/tools.png'  
    },
    { 
      name: "Help", 
      id: 8, 
      url: "http://www.lucianosardanha.com/",
      img: '../assets/icons/help.png'  
    },
    { 
      name: "Log out", 
      id: 9, 
      url: "http://www.lucianosardanha.com/",
      img: '../assets/icons/logout.png'  
    },
  ];
  const linkList = linkArray.map((link) => (
     <li className="links-li" key={link.name}>
      <a key={link.id} href={link.url} target="_blanc">
      <img className="link-img" src={link.img} key={link.name} alt={link.name} />&nbsp;{link.name}
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
