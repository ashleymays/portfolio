// import Footer from '../components/Footer/Footer'
import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import "./Layout.scss";

function Layout(props) {
  const pageContents = props.children;

  useEffect(() => {
    Scrollbar.init(document.getElementById("my-scrollbar"));
  }, []);

  return (
    <div id="my-scrollbar">
      <main>
        <Header />
        {pageContents}
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default Layout;
