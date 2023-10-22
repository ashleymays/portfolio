const paragraph1 =
    "Hey there, thanks for visiting my website. I’m a programmer — web developer, to be specific. For work, I'm an application support engineer at Siemens where I work on SaaS solutions for lots of different companies. Outside of tech stuff, I lift weights at the gym and drive around to random places.";
const paragraph2 =
    "I use this website to present my side projects. I listed them in reverse chronological order. Some of them are pretty old and don't really reflect my current skills, but I put them here for the nostalgia and to show how far I've come. Feel free to read more about them below.";

function About() {
    return (
        <>
            <p className="about-paragraph">{paragraph1}</p>
            <p className="about-paragraph">{paragraph2}</p>
        </>
    );
}

export default About;
