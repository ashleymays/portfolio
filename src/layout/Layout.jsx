import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './Layout.scss';
import Scrollbar from 'smooth-scrollbar';
import { useEffect } from "react";

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