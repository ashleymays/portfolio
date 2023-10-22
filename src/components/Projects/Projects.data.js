import WorkFlowImage from '../../assets/images/workflow.webp';
import GoodybeeImage from '../../assets/images/goodybee.webp';

const projects = [
    {
        title: 'Workflow',
        techStack: 'React, Firebase, SCSS/SASS, Node, Express, Jest, Figma',
        description:
            "A task management system that lets users create custom milestones for each task. I got the idea when I was at work. I needed a really simple way to be able to keep track of my todos, but I couldn't find an app that had everything I was looking for. Jira's too much, and a regular todo list is too simple. So I'm making this now. Work in progress.",
        image: {
            alt: 'Workflow',
            src: WorkFlowImage
        },
        links: {
            github: 'https://github.com/ashleymays'
        }
    },
    {
        title: 'Goodybee',
        techStack: 'EJS, CSS, JavaScript, Node, Express, AWS, Heroku, REST API',
        description:
            "Find and save recipes from all over the web. This was my first full stack app, so needless to say I learned a lot while making it. I use the Edamam Recipe API to grab recipes. I also added a login system so users can save their favorite recipes (unless it's Hawaiian pizza, then they're put on a list).",
        image: {
            alt: 'Goodybee',
            src: GoodybeeImage
        },
        links: {
            github: 'https://github.com/ashleymays/goodybee'
        }
    }
];

export default projects;
