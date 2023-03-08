const projects = [
  {
    endpoint: `web-crawler`,
    title: `Web Crawler`,
    year: 2023,
    techStack: null,
    links: null,
    copy: {
      overview: <>Collects and sorts clothing data from 200+ webpages.</>,
      problem: null,
      solution: null,
    },
    images: [{}],
  },
  {
    endpoint: `piano-keyboard-simulator`,
    title: `Piano Keyboard Simulator`,
    year: 2022,
    techStack: `React, Node, Express, Web Audio API, MediaStream Recording API`,
    links: [
      {
        href: `https://github.com/ashleymays/piano-sim`,
        title: `github.com/ashleymays/piano-sim`,
      },
    ],
    copy: {
      overview: <>Play with four instrument options, audio effects, and recording functionality.</>,
      problem: (
        <>
          Some years ago, I searched for online piano keyboards to learn how to play piano. There were only a few
          options which hadn't been maintained in a decade. It inspired me to build one with better functionality as a
          fun and educational online resource.
        </>
      ),
      solution: (
        <>
          I modified and implemented a Figma mockup by a designer to enhance the user's experience and add a layer of
          professionalism to the wensite. I also retrieved the instruments' audio files through the file system to
          optimize the website speed.
        </>
      ),
    },
    images: [{}],
  },
  {
    endpoint: `recipe-finder`,
    title: `Recipe Finder`,
    year: 2022,
    techStack: `EJS, Node, Express, MongoDB, AWS, Heroku, REST API`,
    links: [
      {
        href: `https://github.com/ashleymays/goodybee`,
        title: `github.com/ashleymays/goodybee`,
      },
    ],
    copy: {
      overview: <>Find and save recipes from across the web in one place.</>,
      problem: (
        <>
          There are many recipe and food websites; consequently, there are different recipes spread across different
          websites, which isn't ideal for the average consumer.
        </>
      ),
      solution: (
        <>
          I added a login and registration system so users could easily store their favorite recipes. Additionally, I
          structured the website and code blocks with the MVC and object-oriented design patterns respectively for
          easier maintenance. Lastly, I used an AWS S3 bucket to store profile pictures to avoid bloat in the database
          and preserve scalability.
        </>
      ),
    },
    images: [{}],
  },
  // {
  //   endpoint: `other-project`,
  //   title: `Other Project`,
  //   year: 2023,
  //   techStack: null,
  //   links: null,
  //   copy: {
  //     overview: null,
  //     problem: null,
  //     solution: null,
  //   },
  //   images: [{}],
  // },
];

export default projects;
