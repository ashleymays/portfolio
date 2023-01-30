import './HeaderLink.scss';

function HeaderLink(props) {
    const title = props.title;
    return <a className="header__element" href="/">{title}</a>;
}

export default HeaderLink;