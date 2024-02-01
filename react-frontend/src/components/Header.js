import { useContext } from "react"
import Context from "./Context"
import { Link } from "react-router-dom"

const Header = ({user}) => {

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  
    return(
      <nav className='nav-bar'>
      <p><Link to="/">Logo</Link></p>
      {user ? (
        <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact-us">Contact</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>Hello, {user.name}</li>
        <li onClick={logout}>Logout</li>
      </ul>
      ) : (
        <Link to= "login">Login</Link>
      )}
      
    </nav> 
    )
  }
  export default Header;