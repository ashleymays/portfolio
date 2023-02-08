import Layout from "../../layout/Layout";
import about from "../../constants/about";
import "./About.scss";

function About() {
  return (
    <Layout>
      <h1 className="optional-heading-margin">Some title here</h1>
      <div className="flex-row about-container">
        <div className="box" />
        <div className="about-text">
          <h4>{about.introduction}</h4>
        </div>
      </div>
    </Layout>
  );
}

export default About;
