import ProjectCards from "../../components/ProjectCards/ProjectCards";
import Divider from "../../components/Divider/Divider";
import Layout from "../../layout/Layout";
import Contact from "../../components/Contact/Contact";
import useHeadingAnimation from "../../hooks/useHeadingAnimation";
import "./Home.scss";

function Home() {
  return (
    <Layout>
      <h1 className="home__title">
        <span>{useHeadingAnimation("software")}</span>
        <span className="home__title__second-line flex-row flex-align-center">
          {useHeadingAnimation("developer")}
          <p className="home__subtitle">building interactive digital experiences and enjoying every minute of it.</p>
        </span>
      </h1>
      <h3>Selected Works</h3>
      <Divider />
      <ProjectCards />
      <Contact />
    </Layout>
  );
}

export default Home;
