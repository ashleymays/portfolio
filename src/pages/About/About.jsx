import Layout from "../../layout/Layout";
import about from "../../constants/about";
import "./About.scss";

function About() {
  return (
    <Layout>
      <div className="about">
        <h1>{about.heading}</h1>
        <p className="about__text">{about.introduction}</p>
        <a href={about.resumeLink} target="_blank" rel="noreferrer">
          <p>
            <strong>My Resume (48 kB)</strong>
          </p>
        </a>
      </div>
    </Layout>
  );
}

export default About;
