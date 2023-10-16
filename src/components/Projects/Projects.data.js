import WorkFlowImage from '../../assets/images/workflow.svg';
import PortfolioImage from '../../assets/images/portfolio.svg';

const projects = [
    {
        title: 'Workflow',
        techStack: 'React, Firebase, SCSS/SASS, Node, Express, Jest, Figma',
        description:
            "A task management system that lets users create custom milestones for each task. I got the idea when I was at work. I needed a way to be able to keep track of my todos, but I couldn't find an app that had everything I was looking for. Jira's too complex, and a regular todo list is too simple. So I came up with this. Work in progress.",
        image: {
            alt: 'Workflow',
            src: WorkFlowImage
        },
        links: {
            github: 'https://github.com/ashleymays'
        }
    },
    {
        title: 'Portfolio',
        techStack: 'React, SCSS/SASS, Jest, Figma',
        description:
            "Had to include this website. I made this with blood, sweat, and tears. Also with a bit of React and SCSS. It's also the first project I wrote UI tests for. Designed it with Figma.",
        image: {
            alt: 'Portfolio',
            src: PortfolioImage
        },
        links: {
            github: 'https://github.com/ashleymays/ashleymays.github.io'
        }
    },
    {
        title: 'Goodybee',
        techStack: 'EJS, CSS, JavaScript, Node, Express, AWS, Heroku, REST API',
        description:
            'Find and save recipes from all over the web. This was my first full stack app, so needless to say I learned a lot while making it. I use the Edamam Recipe API to grab recipes on the server-side, then I send them client-side to show them to the user. I also added a login system so users can save their favorite recipes!',
        image: {
            alt: '',
            src: ''
        },
        links: {
            github: 'https://github.com/ashleymays/goodybee'
        }
    }
];

export default projects;
