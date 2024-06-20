export type Project = {
  timeline: {
    start: number;
    end: number | 'present';
  };
  title: string;
  url: string;
  description: string;
  techStack: string[];
};

export const projects: Project[] = [
  {
    timeline: {
      start: 2024,
      end: 'present'
    },
    url: 'https://github.com/ashleymays/nodejs-utils',
    title: 'Node.js Utils',
    description:
      'A collection of functions and other code snippets I use to make Node.js and Express.js projects served as an NPM package.',
    techStack: ['TypeScript', 'Node']
  },
  {
    timeline: {
      start: 2023,
      end: 'present'
    },
    url: 'https://github.com/ashleymays/task-management-api',
    title: 'Task Management API',
    description:
      'A REST API for managing projects and tasks. Basically Jira without all of the extra stuff.',
    techStack: ['Postgres', 'Prisma ORM', 'Node', 'Express', 'Mocha', 'Chai']
  },
  {
    timeline: {
      start: 2022,
      end: 'present'
    },
    url: 'https://github.com/ashleymays/piano-keyboard-simulator',
    title: 'Piano Keyboard Simulator',
    description:
      'A virtual keyboard (the music kind, not the computer kind) that lets users play their desktop, tablet, or phone like a mini keyboard.',
    techStack: [
      'React',
      'Redux Toolkit',
      'SCSS',
      'Node',
      'Express',
      'Mocha',
      'Chai',
      'Vite'
    ]
  }
];
