import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <header className="flex-row flex-al-center flex-just-spc-btwn width-100">
            <NavLink className='header__element' to="/">Ashley Mays</NavLink>
            <nav className="flex-row flex-al-center flex-just-spc-btwn">
                <NavLink className='header__element' to="/">Work</NavLink>
                <NavLink className='header__element' to="/about">About</NavLink>
                <NavLink className='header__element' to="/">Contact</NavLink>
                <NavLink className='header__element' to="/">Resume</NavLink>
            </nav>
        </header>
    )
}

export default Header;