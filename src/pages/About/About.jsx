import useHeadingAnimation from "../../hooks/useHeadingAnimation";
import Layout from "../../layout/Layout";
import ProjectImage from "../../components/ProjectImage/ProjectImage";
import about from "../../constants/about";
import portrait from "../../constants/images/portrait.webp";
import "./About.scss";

function About() {
  const aboutTitle = "About Me";
  const elements = useHeadingAnimation(aboutTitle);

  return (
    <Layout>
      <h1 className="optional-heading-margin">{elements}</h1>
      <div className="flex-row">
        <ProjectImage alt="Me" src={portrait} className="about-portrait" />
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
