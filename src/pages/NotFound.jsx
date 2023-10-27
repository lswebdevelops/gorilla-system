import '../styles/NotFound.css'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='div-return-home'>
        <h1>Oops! The page not found.</h1>
            <img src="/src/assets/images/404.png" alt="Page not found!" />
            <br />
            <Link 
                className="link-return-home"
                to={"/"}
                >Return home</Link>
          </div>

    )
}

export default NotFound;