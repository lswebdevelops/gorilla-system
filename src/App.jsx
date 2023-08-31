import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <Link to="/profile/popeye">Popeye page</Link>
        <br />
        <Link to="/profile/spinach">Spinach page</Link>
      </nav>
    </div>
  );
};

export default App;
