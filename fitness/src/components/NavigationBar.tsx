import { Link, Outlet } from "react-router-dom";
import gymLogo from "../assets/img/images.png"
export {};

export const NavigationBar = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="nav d-flex align-items-center ">
          <Link to="/" className="logo-container">
            <img src={gymLogo} width='90' height='60' alt="gym logo"></img>
          </Link>
          <div className="nav__list ">
            <Link to="/">Home</Link>
          </div>
        </div>


      
      </div>
      <Outlet/>
    </>
  );
};
