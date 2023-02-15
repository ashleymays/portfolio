import pianosimImages from "./images/pianosim/images";

const middot = "\u00B7";
const linebreak = (
  <>
    <br />
    <br />
  </>
);

const projects = [
  {
    endpoint: `sonata`,
    title: `Sonata`,
    techStack: `React ${middot} Node ${middot} Express ${middot} Web Audio API ${middot} MediaStream Recording API`,
    links: [
      {
        href: `https://github.com/ashleymays/piano-sim`,
        title: `Source Code`,
      },
    ],
    copy: {
      overview: (
        <>
          An online piano keyboard simulator. Users can play with four different instrument sound options and sustain
          and soften effects. They can also record their playing and use it as a backing track.
        </>
      ),
      backgroundAndGoals: (
        <>
          I didn't have a piano keyboard when I was younger, so I looked for one that I could play online. There were
          only a few options, and none of them had the features I wanted, so I built one myself.
          {linebreak}
          The goal of PianoSim is to offer people a chance to play a realistic, well-functioning online piano keyboard
          with all the functionality they can imagine.
        </>
      ),
      thoughtProcess: (
        <>
          As my first full-scale website using React, I naturally ran into many roadblocks. Structuring the codebase
          was, by far, the most difficult part.
          {linebreak}I was able to solve these problems by stepping away from the code and reading up on the best
          practices of working with React and on good coding practices in general, mostly from the book "Clean Code" by
          Robert C. Martin.
          {linebreak}
          From the reading, I learned how to write better functions and to write code that made sense even without
          comments which, in turn, fixed my structuring issue.
        </>
      ),
      future: (
        <>
          I plan to add new features to PianoSim: the ability to download recordings, more sound effects (e.g.
          distortion and panning), MIDI playback, and a chord identifier. I'd also like to add a landing page to add
          credibility.
        </>
      ),
    },
    images: pianosimImages,
  },
  {
    endpoint: `goodybee`,
    title: `GoodyBee`,
    techStack: `EJS ${middot} Node ${middot} Express ${middot} MongoDB ${middot} AWS ${middot} Heroku ${middot} REST API`,
    links: [
      {
        href: `https://github.com/ashleymays/goodybee`,
        title: `Source Code`,
      },
    ],
    copy: {
      overview: (
        <>
          A recipe finder with over 9,000 recipes found across the web all in one place. Users can also create an
          account and save their favorites with just one click.
        </>
      ),
      backgroundAndGoals: (
        <>
          I wanted to experiment with backend development, but I wasn't sure what to make. I did some research and
          learned that a recipe website would be a good idea. It stood out to me because of how useful it could be. I
          imagined making something my grandma would like, so I focused on accessibility and usability.
        </>
      ),
      thoughtProcess: (
        <>
          I initially had trouble getting information from the API. Some of the documentation was out of date, so I had
          to figure out the right format to send queries. Eventually I did it after studying the error codes returned.
          {linebreak}I also had trouble displaying data with EJS and working with Node.js and Express.js. My solution
          was to read any documentation there was and, if I couldn't find an answer, look it up on StackOverflow. I also
          watched a few Youtube videos to learn how to structure a full stack application with the MVC design pattern to
          ensure that the code would stay readable even after some time away from it.
        </>
      ),
      future: (
        <>
          GoodyBee was primarily for education rather than deployment; I learned how to integrate a REST API into a web
          application, how to structure a codebase with the MVC design pattern, how to use AWS to store data, and how to
          encrypt user information. With that, I'll consider this project complete for now.
        </>
      ),
    },
    images: [],
  },
];

export default projects;
