import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Layout.scss";

function Layout(props) {
  const pageContents = props.children;

  return (
    <div id="my-scrollbar">
      <main className="flex-col flex-justify-space-btwn width-100">
        <div>
          <Header />
        </div>
        <div>{pageContents}</div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Layout;
