const paragraph1 =
    "Cool, you found my website. Glad you're here. Let me introduce myself, then (don't worry I'll keep it short I know you're busy).";
const paragraph2 =
    "I’m a programmer — web developer, to be specific. For work, I'm an application support engineer at Siemens where I work on SaaS solutions for lots of different companies. Outside of tech stuff, I lift weights at the gym and drive to random places around California.";

function About() {
    return (
        <>
            <p className="about-paragraph">{paragraph1}</p>
            <p className="about-paragraph">{paragraph2}</p>
        </>
    );
}

export default About;
