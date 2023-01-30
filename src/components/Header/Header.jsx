import HeaderLink from './HeaderLink/HeaderLink';
import './Header.scss';

function Header() {
    return (
        <header className="flex-row flex-al-center flex-just-spc-btwn">
            <HeaderLink title="Ashley Mays" />
            <nav className="flex-row flex-al-center flex-just-spc-btwn">
                <HeaderLink title="About" />
                <HeaderLink title="Work" />
                <HeaderLink title="Contact" />
                <HeaderLink title="Résumé" />
            </nav>
        </header>
    )
}

export default Header;