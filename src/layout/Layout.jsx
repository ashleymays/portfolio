import Header from "../components/Header/Header";
import './Layout.scss';

function Layout(props) {
    return (
        <main>
            <Header />
            {props.children}
        </main>
    )
}

export default Layout;