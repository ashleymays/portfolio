// import useHeadingAnimation from "../../hooks/useHeadingAnimation";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import Layout from "../../layout/Layout";
import "./Home.scss";

function Home() {
  // const homeTitle = "Some Heading Here";

  // const animatedHeading = useHeadingAnimation(homeTitle);

  return (
    <Layout>
      {/* <h1 className="home-title">{animatedHeading}</h1> */}
      <ProjectCards />
    </Layout>
  );
}

export default Home;
