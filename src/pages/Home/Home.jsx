import useHeadingAnimation from "../../hooks/useHeadingAnimation";
import Layout from "../../layout/Layout";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import "./Home.scss";

function Home() {
  const homeTitle = ["I'm ", "Ashley, ", "a ", "software ", "developer ", "in ", "California."];
  const lines = [];

  homeTitle.forEach((line) => {
    lines.push(useHeadingAnimation(line));
  });

  return (
    <Layout>
      <h1 className="home-title">{lines}</h1>
      <ProjectCards />
    </Layout>
  );
}

export default Home;
