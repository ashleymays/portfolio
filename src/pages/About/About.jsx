import Contact from "../../components/Contact/Contact";
import Layout from "../../layout/Layout";
import about from "../../constants/about";
import "./About.scss";

function About() {
  return (
    <Layout>
      <div className="about">
        <h2>{about.heading}</h2>
        <p className="about__text">{about.introduction}</p>
        <div className="about__text">
          <h3>My Background</h3>
          <p>{about.background}</p>
        </div>
        <a href={about.resumeLink} target="_blank" rel="noreferrer">
          <h4>My Resume (48 kB)</h4>
        </a>
      </div>
      <Contact />
    </Layout>
  );
}

export default About;
