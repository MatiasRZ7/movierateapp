import {Menu, Button} from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './Themedark';
import darkModeImg from '../assets/dark_mode.png';
import lightModeImg from '../assets/light-mode.png';
export const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const isLoggedIn = localStorage.getItem("guest_session_id") !== null;
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("guest_session_id");
        navigate("/auth")
    }
  return (
    <Menu fixed='top' size='huge'>
        <Menu.Menu>
            <Menu.Item as={Link} to="/" style={{fontSize: "1.5rem"}} >
                Home
            </Menu.Item>
            <Menu.Item as={Link} to="/rated" style={{fontSize: "1.5rem"}} >
                Rated
            </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
            {isLoggedIn ? (
                <Menu.Item as={Button} style={{fontSize: "1.5rem"}} onClick={logout} >Logout</Menu.Item>
            ) : 
            (
                <Menu.Item as={Link} to="/auth" style={{fontSize: "1.5rem"}} >Auth</Menu.Item>   
                )}
            
        </Menu.Menu>
        <Button onClick={() => setDarkMode(!darkMode)}>
        <img src={darkMode ? lightModeImg : darkModeImg} alt="Modo" />
      </Button>
    </Menu>
  )
}
