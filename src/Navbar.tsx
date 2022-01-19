import { Link } from "react-router-dom";

const NavBar = () => {
    return  (
     <nav className="main-nav">
         <Link to="/">Home</Link>
         <Link to="/users">Users</Link>
     </nav>

    );
} 

export default NavBar;