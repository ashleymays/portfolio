import Layout from "../../layout/Layout";
import about from "../../constants/about";
import "./About.scss";

function About() {
  return (
    <Layout>
      <div className="flex-row">
        <div className="about-text">
          <h4>{about.introduction}</h4>
          <p>{about.description}</p>
          <p>Some tools I use:</p>
          <ul className="grid">
            {about.techStack.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default About;
