const projects = [
    {
        endpoint: 'banana-republic',
        title: 'Banana Republic',
        techStack: 'React · GraphQL · SCSS',
        copy: {
            overview: <></>,
            backgroundAndGoals: <></>,
            thoughtProcess: <></>,
            results: <></>,
            future: <></>,
            githubLink: ''
        },
        images: null
    }, 
    {
        endpoint: 'piano-sim',
        title: 'PianoSim',
        techStack: 'React · Node · Express · Web Audio API · MediaStream Recording API',
        githubLink: 'https://github.com/ashleymays/piano-sim',
        copy: {
            overview: <>An online piano keyboard simulator. Users can play with four different instrument sound options and sustain and soften effects. They can also record their playing and use it as a backing track.</>,
            backgroundAndGoals: <>When I started learning web development, I knew this was the first website I wanted to make. I didn't have a piano keyboard some years ago, so I tried to find one that I could play online. There were only a few options, and none of them had everything I wanted: good key mapping, decent instrument sounds, and reactive playback. So I built one myself. The purpose of this website is to offer people a chance to play an online piano keyboard that was as close to the real thing as possible.</>,
            thoughtProcess: <>As my first "official" website using React, I naturally ran into many roadblocks. Structuring the codebase was, by far, the most difficult part. Separating the code into logical components is the whole bread-and-butter of React, but with this project, it was hard to decide exactly how to separate it so that it worked and made sense. I also spent way too long designing the UI, which was awful because most of the UI design came from a template.<br /><br />I was able to solve these problems by stepping away from the code and reading up on the best practices of working with React and on good coding practices in general, mostly from the book <i>Clean Code</i> by Robert C. Martin. From the reading, I learned how to write better functions and to write code that made sense even without comments.<br /><br />The logistics of actually playing notes was, oddly enough, the easiest part of working on PianoSim. I'd built a version of it months before building this one, so most of the logic code was already there. So the bulk of the work was figuring out where to put it.<br /><br />All in all, planning (or better yet, lack of planning) seemed to be my biggest mistake with this one. But I'm glad that I pushed through, because in the process I learned to plan everything before typing a single line of code. I also learned a ton of React.</>,
            results: <>PianoSim is my most-liked project on Github. Since I'm not currently hosting it online, I don't have analytics to draw from; however, I got a lot of comments on social media on how fun it is to play around with it, so I'll take that as a win for now.</>,
            future: <>I plan to add new features to PianoSim. The one at the top of my list is the ability to download recordings which will require a UI update. I also want to add more sound effects (think distortion and panning), MIDI playback, and a chord identifier that, when toggled, shows the chord that the user is playing. Lastly I'd like to add an actual landing page to add some professionalism and credibility. Eventually I'd like PianoSim to be a tool for people to learn how to play piano.</>,
        },
        images: null,
    }, 
    {
        endpoint: 'goodybee',
        title: 'GoodyBee',
        techStack: 'EJS · Node · Express · MongoDB · AWS · Heroku · REST API',
        githubLink: 'https://github.com/ashleymays/goodybee',
        copy: {
            overview: <></>,
            backgroundAndGoals: <></>,
            thoughtProcess: <></>,
            results: <></>,
            future: <></>,
        },
        images: null,
    }
];

export default projects;