import useHeadingAnimation from "../../hooks/useHeadingAnimation";
import Layout from "../../layout/Layout";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import "./Home.scss";

function Home() {
  const homeTitle = "software developer";

  const animatedHeading = useHeadingAnimation(homeTitle);

  return (
    <Layout>
      <h1 className="home-title">{animatedHeading}</h1>
      <ProjectCards />
    </Layout>
  );
}

export default Home;
