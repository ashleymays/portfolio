export type Job = {
  title: string;
  description: string;
  timeline: {
    start: number;
    end: number | 'present';
  };
};

export const jobs: Job[] = [
  {
    title: 'Software Developer @ Siemens',
    description:
      'Build and maintain high-traffic logistics software for companies around the world. Work closely with project managers and fellow developers to create performant real-time applications.',
    timeline: {
      start: 2023,
      end: 'present'
    }
  }
];
