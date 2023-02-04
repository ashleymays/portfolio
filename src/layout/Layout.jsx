import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Scrollbar from 'smooth-scrollbar';
import { useEffect } from "react";
import './Layout.scss';

function Layout(props) {
    useEffect(() => {
        Scrollbar.init(document.querySelector('#my-scrollbar'), {});
    }, [])
    
    return (
        <div id="my-scrollbar">
            <main>
                <Header />
                {props.children}
                <Footer />
            </main>
        </div>
    )
}

export default Layout;