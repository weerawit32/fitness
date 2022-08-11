export {};
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div className="container-fluid">
      <div className="nav">
        <Link to="/" className="logo-container">
          <img src="" alt="gym logo"></img>
        </Link>
        <div className="nav__list">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};
