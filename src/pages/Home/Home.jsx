import useAnimation from "../../hooks/useAnimation";
import Layout from "../../layout/Layout";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
// import Contact from '../../components/Contact/Contact'
import "./Home.scss";

function Home() {
  const homeTitle = ["I'm Ashley, \n", "a web developer\n", "in California."];
  const lines = [];

  homeTitle.forEach((line) => {
    lines.push(<div className="hide-overflow">{useAnimation(line)}</div>);
  });

  return (
    <Layout>
      <h1 className="home-title">{lines}</h1>
      <ProjectCards />
      {/* <Contact /> */}
    </Layout>
  );
}

export default Home;
