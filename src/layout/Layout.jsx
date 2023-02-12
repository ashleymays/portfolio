import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Layout.scss";

function Layout(props) {
  const pageContents = props.children;

  useEffect(() => {
    const options = {
      damping: 0.075,
    };
    Scrollbar.init(document.getElementById("my-scrollbar"), options);
  }, []);

  return (
    <div id="my-scrollbar">
      <main className="width-100">
        <Header />
        {pageContents}
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
