const middot = "\u00B7";
// const linebreak = (
//   <>
//     <br />
//     <br />
//   </>
// );

const projects = [
  {
    endpoint: `recipe-finder`,
    title: `Other Project`,
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
          A recipe finder that aggregates recipes from across the web in one place. Users can create an account and save
          their favorite recipes.
        </>
      ),
      problem: (
        <>
          There are many recipe and food websites; consequently, there are different recipes spread across different
          websites, which isn't ideal for the average consumer.
        </>
      ),
      solution: (
        <>
          I added a login and registration system so users could easily store their favorite recipes. Additionaly, I
          structured the website and code blocks with the MVC and object-oriented design patterns respectively for
          easier maintenance. Lastly, I used an AWS S3 bucket to store profile pictures to avoid bloat in the database
          and preserve scalability.
        </>
      ),
      future: (
        <>
          I'm considering migrating the frontend from EJS to React for easier maintenance, but as a whole, this project
          is primarily for my own education rather than deployment, so I don't plan on adding any major features soon.
        </>
      ),
    },
    images: [],
  },
  {
    endpoint: `piano-keyboard-simulator`,
    title: `Piano Keyboard Simulator`,
    techStack: `React ${middot} Node ${middot} Express ${middot} Web Audio API ${middot} MediaStream Recording API`,
    links: [
      {
        href: `https://github.com/ashleymays/piano-sim`,
        title: `Source Code`,
      },
    ],
    copy: {
      overview: <>Users can play with four different instrument options, audio effects, and recording functionality.</>,
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
      future: (
        <>
          I plan to add the following new features soon: the ability to download recordings, more sound effects (e.g.
          distortion and panning), MIDI playback, and a chord identifier. I'd also like to add a landing page to add
          credibility.{" "}
        </>
      ),
    },
    images: null,
  },
  {
    endpoint: `recipe-finder`,
    title: `Recipe Finder`,
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
          A recipe finder that aggregates recipes from across the web in one place. Users can create an account and save
          their favorite recipes.
        </>
      ),
      problem: (
        <>
          There are many recipe and food websites; consequently, there are different recipes spread across different
          websites, which isn't ideal for the average consumer.
        </>
      ),
      solution: (
        <>
          I added a login and registration system so users could easily store their favorite recipes. Additionaly, I
          structured the website and code blocks with the MVC and object-oriented design patterns respectively for
          easier maintenance. Lastly, I used an AWS S3 bucket to store profile pictures to avoid bloat in the database
          and preserve scalability.
        </>
      ),
      future: (
        <>
          I'm considering migrating the frontend from EJS to React for easier maintenance, but as a whole, this project
          is primarily for my own education rather than deployment, so I don't plan on adding any major features soon.
        </>
      ),
    },
    images: [],
  },
  {
    endpoint: `recipe-finder`,
    title: `Other Project`,
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
          A recipe finder that aggregates recipes from across the web in one place. Users can create an account and save
          their favorite recipes.
        </>
      ),
      problem: (
        <>
          There are many recipe and food websites; consequently, there are different recipes spread across different
          websites, which isn't ideal for the average consumer.
        </>
      ),
      solution: (
        <>
          I added a login and registration system so users could easily store their favorite recipes. Additionaly, I
          structured the website and code blocks with the MVC and object-oriented design patterns respectively for
          easier maintenance. Lastly, I used an AWS S3 bucket to store profile pictures to avoid bloat in the database
          and preserve scalability.
        </>
      ),
      future: (
        <>
          I'm considering migrating the frontend from EJS to React for easier maintenance, but as a whole, this project
          is primarily for my own education rather than deployment, so I don't plan on adding any major features soon.
        </>
      ),
    },
    images: [],
  },
];

export default projects;
