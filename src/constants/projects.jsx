import pianosimImages from "./images/pianosim/images";

const projects = [
  {
    endpoint: `banana-republic`,
    title: `Banana Republic`,
    techStack: `Linux \u00B7 PHP \u00B7 GraphQL \u00B7 SCSS \u00B7 REST API`,
    links: null,
    copy: {
      overview: `A UI clone of the popular clothing website.`,
    },
    images: [],
  },
  {
    endpoint: `piano-sim`,
    title: `PianoSim`,
    techStack: `React \u00B7 Node \u00B7 Express \u00B7 Web Audio API \u00B7 MediaStream Recording API`,
    links: [
      {
        href: `https://github.com/ashleymays/piano-sim`,
        title: `Source Code`,
      },
    ],
    copy: {
      overview: `
          An online piano keyboard simulator. Users can play with four different instrument sound options and sustain
          and soften effects. They can also record their playing and use it as a backing track.
        `,
      backgroundAndGoals: `
          I didn\u0027t have a piano keyboard when I was younger, so I looked for one that I could play online. There
          were only a few options, and none of them had the features I wanted, so I built one myself.
          \u000A\u000A
          The goal of PianoSim is to offer people a chance to play a realistic, well-functioning online piano keyboard
          with all the functionality they can imagine.
        `,
      thoughtProcess: `
          As my first full-scale website using React, I naturally ran into many roadblocks. Structuring the
          codebase was, by far, the most difficult part.
          \u000A\u000AI was able to solve these problems by stepping away from the code and reading up on the best
          practices of working with React and on good coding practices in general, mostly from the book
          \u0022Clean Code\u0022 by Robert C. Martin.
          \u000A\u000A
          From the reading, I learned how to write better functions and to write code that made sense even without
          comments which, in turn, fixed my structuring issue.
        `,
      future: `
          I plan to add new features to PianoSim: the ability to download recordings, more sound effects (e.g.
          distortion and panning), MIDI playback, and a chord identifier. I\u0027d also like to add a landing page to
          add credibility.
        `,
    },
    images: pianosimImages,
  },
  {
    endpoint: `goodybee`,
    title: `GoodyBee`,
    techStack: `EJS \u00B7 Node \u00B7 Express \u00B7 MongoDB \u00B7 AWS \u00B7 Heroku \u00B7 REST API`,
    links: [
      {
        href: `https://github.com/ashleymays/goodybee`,
        title: `Source Code`,
      },
    ],
    copy: {
      overview: `
          A recipe finder with over 9,000 recipes found across the web all in one place. Users can also create an
          account and save their favorites with just one click.
        `,
      backgroundAndGoals: `
          I wanted to experiment with backend development, but I wasn\u0027t sure what to make. I did some research and
          learned that a recipe website would be a good idea. It stood out to me because of how useful it could be. I
          imagined making something my grandma would like, so I focused on accessibility and usability.
        `,
      thoughtProcess: `
          Being my first website that used a REST API, I initially had trouble getting the right information with it. I
          also had trouble displaying data with EJS and working with Node.js and Express.js.
          \u000A\u000A
          My solution was to read any documentation there was and, if I couldn\u0027t find an answer, look it up on
          StackOverflow. I also watched a few Youtube videos to learn how to structure a full stack application with the
          MVC design pattern to ensure that the code would stay readable even after some time away from it.
        `,
      future: `
          GoodyBee was primarily for education rather than deployment; I learned how to integrate a REST API into a web
          application, how to structure a codebase with the MVC design pattern, how to use AWS to store data, and how to
          encrypt user information. With that, I\u0027ll consider this project complete for now.
        `,
    },
    images: [],
  },
  {
    endpoint: `cpp-algorithms`,
    title: `Algorithms`,
    techStack: `C++ \u00B7 Visual Studio`,
    links: [
      {
        href: `https://github.com/ashleymays/algorithms`,
        title: `Source Code`,
      },
    ],
    copy: {
      overview: null,
      backgroundAndGoals: null,
      thoughtProcess: null,
      future: null,
    },
    images: [],
  },
];

export default projects;
