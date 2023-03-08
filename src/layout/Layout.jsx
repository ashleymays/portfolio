import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Layout.scss";

function Layout(props) {
  const pageContents = props.children;

  return (
    <main className="flex-col flex-justify-space-btwn width-100">
      <Header />
      {pageContents}
      <Footer />
    </main>
  );
}

export default Layout;
