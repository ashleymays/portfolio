const projects = [
  {
    endpoint: "banana-republic",
    title: <>Banana Republic</>,
    techStack: <>React &middot; GraphQL &middot; SCSS &middot; REST API</>,
    links: [
      {
        href: <>https://github.com/ashleymays/banana-republic-clone</>,
        title: <>Source Code</>,
      },
    ],
    copy: {
      overview: <>A UI clone of the popular clothing website.</>,
    },
    images: [],
  },
  {
    endpoint: "piano-sim",
    title: <>PianoSim</>,
    techStack: <>React &middot; Node &middot; Express &middot; Web Audio API &middot; MediaStream Recording API</>,
    links: [
      {
        href: <>https://github.com/ashleymays/piano-sim</>,
        title: <>Source Code</>,
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
          When I started learning web development, I knew this was the first website I wanted to make. I didn&apos;t
          have a piano keyboard some years ago, so I tried to find one that I could play online. There were only a few
          options, and none of them had everything I wanted: good key mapping, decent instrument sounds, and reactive
          playback. So I built one myself. The purpose of this website is to offer people a chance to play an online
          piano keyboard that was as close to the real thing as possible.
        </>
      ),
      thoughtProcess: (
        <>
          As my first &quot;official&quot; website using React, I naturally ran into many roadblocks. Structuring the
          codebase was, by far, the most difficult part. Separating the code into logical components is the whole
          bread-and-butter of React, but with this project, it was hard to decide exactly how to separate it so that it
          worked and made sense. I also spent way too long designing the UI, which was awful because most of the UI
          design came from a template.
          <br />
          <br />I was able to solve these problems by stepping away from the code and reading up on the best practices
          of working with React and on good coding practices in general, mostly from the book
          <i>Clean Code</i> by Robert C. Martin. From the reading, I learned how to write better functions and to write
          code that made sense even without comments.
          <br />
          <br />
          The logistics of actually playing notes was, oddly enough, the easiest part of working on PianoSim. I&apos;d
          built a version of it months before building this one, so most of the logic code was already there. So the
          bulk of the work was figuring out where to put it.
          <br />
          <br />
          All in all, planning (or better yet, lack of planning) seemed to be my biggest mistake with this one. But
          I&apos;m glad that I pushed through, because in the process I learned to plan everything before typing a
          single line of code. I also learned a ton of React.
        </>
      ),
      future: (
        <>
          I plan to add new features to PianoSim. The one at the top of my list is the ability to download recordings
          which will require a UI update. I also want to add more sound effects (think distortion and panning), MIDI
          playback, and a chord identifier that, when toggled, shows the chord that the user is playing. Lastly I&apos;d
          like to add an actual landing page to add some professionalism and credibility. Eventually I&apos;d like
          PianoSim to be a tool for people to learn how to play piano.
        </>
      ),
    },
    images: [],
  },
  {
    endpoint: "goodybee",
    title: <>GoodyBee</>,
    techStack: <>EJS &middot; Node &middot; Express &middot; MongoDB &middot; AWS &middot; Heroku &middot; REST API</>,
    links: [
      {
        href: <>https://github.com/ashleymays/goodybee</>,
        title: <>Source Code</>,
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
          I wanted to experiment with backend development, but I wasn&apos;t sure what to make. I did some research and
          learned that a recipe website would be a good idea. It stood out to me because of how useful it could be. I
          imagined making something my grandma would like, so I focused on accessibility and usability.
        </>
      ),
      thoughtProcess: (
        <>
          Being my first website that used a REST API, I initially had trouble getting the right information with it. I
          also had trouble displaying data with EJS and working with Node.js and Express.js. My solution was to read any
          documentation there was and, if I couldn&apos;t find an answer, look it up on StackOverflow. I also watched a
          few Youtube videos to learn how to structure a full stack application with the MVC design pattern to ensure
          that the code would stay readable even after some time away from it.
        </>
      ),
      future: (
        <>
          GoodyBee was primarily for education rather than deployment; I learned how to integrate a REST API into a web
          application, how to structure a codebase with the MVC design pattern, how to use AWS to store data, and how to
          encrypt user information. With that, I&apos;ll consider this project complete for now.
        </>
      ),
    },
    images: [],
  },
  {
    endpoint: "cpp-algorithms",
    title: <>Algorithms</>,
    techStack: <>C++ &middot; Visual Studio</>,
    links: [
      {
        href: <>https://github.com/ashleymays/algorithms</>,
        title: <>Source Code</>,
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
