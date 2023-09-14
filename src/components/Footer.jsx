import '../styles/Footer.css';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return(
    <footer>
      LS-WEB Development #GORRILASYSTEM {" "}
      <a href="https://github.com/lswebdevelops" target="_blank" rel="noopener noreferrer">
      <FaGithub className="icon" />
      </a>
    </footer>
)
  }
export default Footer;
